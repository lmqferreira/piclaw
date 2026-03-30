import { expect, test } from 'bun:test';

import {
  extractShellCwdFromCommand,
  extractToolContextPath,
} from '../../web/src/ui/tool-git-context.js';

test('extractShellCwdFromCommand parses leading cd prefixes', () => {
  expect(extractShellCwdFromCommand('cd /workspace/piclaw && bun test')).toBe('/workspace/piclaw');
  expect(extractShellCwdFromCommand("cd 'projects/demo app' && make test")).toBe('projects/demo app');
  expect(extractShellCwdFromCommand('echo hi')).toBeNull();
});

test('extractToolContextPath prefers cwd and path-like fields', () => {
  expect(extractToolContextPath('bash', { cwd: 'piclaw', command: 'echo hi' })).toBe('piclaw');
  expect(extractToolContextPath('read', { path: 'notes/index.md' })).toBe('notes/index.md');
  expect(extractToolContextPath('write', { project_dir: 'projects/demo' })).toBe('projects/demo');
});

test('extractToolContextPath falls back to command prefixes and path arrays', () => {
  expect(extractToolContextPath('bash', { command: 'cd /workspace/piclaw && bun run typecheck' })).toBe('/workspace/piclaw');
  expect(extractToolContextPath('exec_batch', { commands: ['cd repo && git status', 'pwd'] })).toBe('repo');
  expect(extractToolContextPath('search', { paths: ['a/b.md', 'c/d.md'] })).toBe('a/b.md');
  expect(extractToolContextPath('bash', null)).toBeNull();
});
