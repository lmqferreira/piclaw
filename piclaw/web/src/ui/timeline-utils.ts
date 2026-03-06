import type { TimelinePost } from './types.js';

export const dedupePosts = (items: TimelinePost[] | null) => {
  const seen = new Set();
  return (items || []).filter((post) => {
    if (!post || seen.has(post.id)) return false;
    seen.add(post.id);
    return true;
  });
};
