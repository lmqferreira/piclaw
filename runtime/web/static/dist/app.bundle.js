var gj=Object.defineProperty;var hj=(_)=>_;function pj(_,$){this[_]=hj.bind(null,$)}var cj=(_,$)=>{for(var j in $)gj(_,j,{get:$[j],enumerable:!0,configurable:!0,set:pj.bind($,j)})};var Z5,B1,M3,lj,y4,B3,k3,P3,I3,Y8,$8,j8,ij,$5={},j5=[],nj=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y5=Array.isArray;function B4(_,$){for(var j in $)_[j]=$[j];return _}function K8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function C3(_,$,j){var N,Z,Y,K={};for(Y in $)Y=="key"?N=$[Y]:Y=="ref"?Z=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?Z5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return t$(_,K,N,Z,null)}function t$(_,$,j,N,Z){var Y={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++M3:Z,__i:-1,__u:0};return Z==null&&B1.vnode!=null&&B1.vnode(Y),Y}function K5(_){return _.children}function e$(_,$){this.props=_,this.context=$}function j$(_,$){if($==null)return _.__?j$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?j$(_):null}function dj(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],Y=B4({},$);Y.__v=$.__v+1,B1.vnode&&B1.vnode(Y),Q8(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?j$($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,x3(N,Y,Z),$.__e=$.__=null,Y.__e!=j&&y3(Y)}}function y3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),y3(_)}function V3(_){(!_.__d&&(_.__d=!0)&&y4.push(_)&&!N5.__r++||B3!=B1.debounceRendering)&&((B3=B1.debounceRendering)||k3)(N5)}function N5(){try{for(var _,$=1;y4.length;)y4.length>$&&y4.sort(P3),_=y4.shift(),$=y4.length,dj(_)}finally{y4.length=N5.__r=0}}function T3(_,$,j,N,Z,Y,K,Q,X,q,W){var V,U,E,J,A,T,H,M=N&&N.__k||j5,C=$.length;for(X=oj(j,$,M,X,C),V=0;V<C;V++)(E=j.__k[V])!=null&&(U=E.__i!=-1&&M[E.__i]||$5,E.__i=V,T=Q8(_,E,U,Z,Y,K,Q,X,q,W),J=E.__e,E.ref&&U.ref!=E.ref&&(U.ref&&q8(U.ref,null,E),W.push(E.ref,E.__c||J,E)),A==null&&J!=null&&(A=J),(H=!!(4&E.__u))||U.__k===E.__k?X=S3(E,X,_,H):typeof E.type=="function"&&T!==void 0?X=T:J&&(X=J.nextSibling),E.__u&=-7);return j.__e=A,X}function oj(_,$,j,N,Z){var Y,K,Q,X,q,W=j.length,V=W,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(K=$[Y])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[Y]=t$(null,K,null,null,null):Y5(K)?K=_.__k[Y]=t$(K5,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[Y]=t$(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[Y]=K,X=Y+U,K.__=_,K.__b=_.__b+1,Q=null,(q=K.__i=rj(K,j,X,V))!=-1&&(V--,(Q=j[q])&&(Q.__u|=2)),Q==null||Q.__v==null?(q==-1&&(Z>W?U--:Z<W&&U++),typeof K.type!="function"&&(K.__u|=4)):q!=X&&(q==X-1?U--:q==X+1?U++:(q>X?U--:U++,K.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<W;Y++)(Q=j[Y])!=null&&(2&Q.__u)==0&&(Q.__e==N&&(N=j$(Q)),R3(Q,Q));return N}function S3(_,$,j,N){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=S3(Z[Y],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=j$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function rj(_,$,j,N){var Z,Y,K,Q=_.key,X=_.type,q=$[j],W=q!=null&&(2&q.__u)==0;if(q===null&&Q==null||W&&Q==q.key&&X==q.type)return j;if(N>(W?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((q=$[K=Z>=0?Z--:Y++])!=null&&(2&q.__u)==0&&Q==q.key&&X==q.type)return K}return-1}function W3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||nj.test($)?j:j+"px"}function a$(_,$,j,N,Z){var Y,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||W3(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||W3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(I3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?N?j.u=N.u:(j.u=Y8,_.addEventListener($,Y?j8:$8,Y)):_.removeEventListener($,Y?j8:$8,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function L3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Y8++;else if($.t<j.u)return;return j(B1.event?B1.event($):$)}}}function Q8(_,$,j,N,Z,Y,K,Q,X,q){var W,V,U,E,J,A,T,H,M,C,R,D,u,a,i,g=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),Y=[Q=$.__e=j.__e]),(W=B1.__b)&&W($);_:if(typeof g=="function")try{if(H=$.props,M=g.prototype&&g.prototype.render,C=(W=g.contextType)&&N[W.__c],R=W?C?C.props.value:W.__:N,j.__c?T=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new g(H,R):($.__c=V=new e$(H,R),V.constructor=g,V.render=aj),C&&C.sub(V),V.state||(V.state={}),V.__n=N,U=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&g.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=B4({},V.__s)),B4(V.__s,g.getDerivedStateFromProps(H,V.__s))),E=V.props,J=V.state,V.__v=$,U)M&&g.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&g.getDerivedStateFromProps==null&&H!==E&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,R),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,R)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(w){w&&(w.__=$)}),j5.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&K.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,R),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(E,J,A)})}if(V.context=R,V.props=H,V.__P=_,V.__e=!1,D=B1.__r,u=0,M)V.state=V.__s,V.__d=!1,D&&D($),W=V.render(V.props,V.state,V.context),j5.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,D&&D($),W=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++u<25);V.state=V.__s,V.getChildContext!=null&&(N=B4(B4({},N),V.getChildContext())),M&&!U&&V.getSnapshotBeforeUpdate!=null&&(A=V.getSnapshotBeforeUpdate(E,J)),a=W!=null&&W.type===K5&&W.key==null?w3(W.props.children):W,Q=T3(_,Y5(a)?a:[a],$,j,N,Z,Y,K,Q,X,q),V.base=$.__e,$.__u&=-161,V.__h.length&&K.push(V),T&&(V.__E=V.__=null)}catch(w){if($.__v=null,X||Y!=null)if(w.then){for($.__u|=X?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;Y[Y.indexOf(Q)]=null,$.__e=Q}else{for(i=Y.length;i--;)K8(Y[i]);N8($)}else $.__e=j.__e,$.__k=j.__k,w.then||N8($);B1.__e(w,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=sj(j.__e,$,j,N,Z,Y,K,X,q);return(W=B1.diffed)&&W($),128&$.__u?void 0:Q}function N8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(N8))}function x3(_,$,j){for(var N=0;N<j.length;N++)q8(j[N],j[++N],j[++N]);B1.__c&&B1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){B1.__e(Y,Z.__v)}})}function w3(_){return typeof _!="object"||_==null||_.__b>0?_:Y5(_)?_.map(w3):B4({},_)}function sj(_,$,j,N,Z,Y,K,Q,X){var q,W,V,U,E,J,A,T=j.props||$5,H=$.props,M=$.type;if(M=="svg"?Z="http://www.w3.org/2000/svg":M=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((E=Y[q])&&"setAttribute"in E==!!M&&(M?E.localName==M:E.nodeType==3)){_=E,Y[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(H);_=document.createElementNS(Z,M,H.is&&H),Q&&(B1.__m&&B1.__m($,Y),Q=!1),Y=null}if(M==null)T===H||Q&&_.data==H||(_.data=H);else{if(Y=Y&&Z5.call(_.childNodes),!Q&&Y!=null)for(T={},q=0;q<_.attributes.length;q++)T[(E=_.attributes[q]).name]=E.value;for(q in T)E=T[q],q=="dangerouslySetInnerHTML"?V=E:q=="children"||(q in H)||q=="value"&&("defaultValue"in H)||q=="checked"&&("defaultChecked"in H)||a$(_,q,null,E,Z);for(q in H)E=H[q],q=="children"?U=E:q=="dangerouslySetInnerHTML"?W=E:q=="value"?J=E:q=="checked"?A=E:Q&&typeof E!="function"||T[q]===E||a$(_,q,E,T[q],Z);if(W)Q||V&&(W.__html==V.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(V&&(_.innerHTML=""),T3($.type=="template"?_.content:_,Y5(U)?U:[U],$,j,N,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,K,Y?Y[0]:j.__k&&j$(j,0),Q,X),Y!=null)for(q=Y.length;q--;)K8(Y[q]);Q||(q="value",M=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[q]||M=="progress"&&!J||M=="option"&&J!=T[q])&&a$(_,q,J,T[q],Z),q="checked",A!=null&&A!=_[q]&&a$(_,q,A,T[q],Z))}return _}function q8(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){B1.__e(Z,j)}}function R3(_,$,j){var N,Z;if(B1.unmount&&B1.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||q8(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(Y){B1.__e(Y,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&R3(N[Z],$,j||typeof _.type!="function");j||K8(_.__e),_.__c=_.__=_.__e=void 0}function aj(_,$,j){return this.constructor(_,j)}function v3(_,$,j){var N,Z,Y,K;$==document&&($=document.documentElement),B1.__&&B1.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],K=[],Q8($,_=(!N&&j||$).__k=C3(K5,null,[_]),Z||$5,$5,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?Z5.call($.childNodes):null,Y,!N&&j?j:Z?Z.__e:$.firstChild,N,K),x3(Y,_,K)}Z5=j5.slice,B1={__e:function(_,$,j,N){for(var Z,Y,K;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),K=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),K=Z.__d),K)return Z.__E=Z}catch(Q){_=Q}throw _}},M3=0,lj=function(_){return _!=null&&_.constructor===void 0},e$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B4({},this.state),typeof _=="function"&&(_=_(B4({},j),this.props)),_&&B4(j,_),_!=null&&this.__v&&($&&this._sb.push($),V3(this))},e$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),V3(this))},e$.prototype.render=K5,y4=[],k3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,P3=function(_,$){return _.__v.__b-$.__v.__b},N5.__r=0,I3=/(PointerCapture)$|Capture$/i,Y8=0,$8=L3(!1),j8=L3(!0),ij=0;var E$,M1,_8,U3,A$=0,f3=[],A1=B1,z3=A1.__b,F3=A1.__r,O3=A1.diffed,H3=A1.__c,J3=A1.unmount,D3=A1.__;function G8(_,$){A1.__h&&A1.__h(M1,_,A$||$),A$=0;var j=M1.__H||(M1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function c(_){return A$=1,tj(u3,_)}function tj(_,$,j){var N=G8(E$++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):u3(void 0,$),function(Q){var X=N.__N?N.__N[0]:N.__[0],q=N.t(X,Q);X!==q&&(N.__N=[q,N.__[1]],N.__c.setState({}))}],N.__c=M1,!M1.__f)){var Z=function(Q,X,q){if(!N.__c.__H)return!0;var W=N.__c.__H.__.filter(function(U){return U.__c});if(W.every(function(U){return!U.__N}))return!Y||Y.call(this,Q,X,q);var V=N.__c.props!==Q;return W.some(function(U){if(U.__N){var E=U.__[0];U.__=U.__N,U.__N=void 0,E!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,Q,X,q)||V};M1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:K}=M1;M1.componentWillUpdate=function(Q,X,q){if(this.__e){var W=Y;Y=void 0,Z(Q,X,q),Y=W}K&&K.call(this,Q,X,q)},M1.shouldComponentUpdate=Z}return N.__N||N.__}function p(_,$){var j=G8(E$++,3);!A1.__s&&b3(j.__H,$)&&(j.__=_,j.u=$,M1.__H.__h.push(j))}function y(_){return A$=5,C0(function(){return{current:_}},[])}function C0(_,$){var j=G8(E$++,7);return b3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return A$=8,C0(function(){return _},$)}function ej(){for(var _;_=f3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(_5),$.__h.some(Z8),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){M1=null,z3&&z3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),D3&&D3(_,$)},A1.__r=function(_){F3&&F3(_),E$=0;var $=(M1=_.__c).__H;$&&(_8===M1?($.__h=[],M1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(_5),$.__h.some(Z8),$.__h=[],E$=0)),_8=M1},A1.diffed=function(_){O3&&O3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(f3.push($)!==1&&U3===A1.requestAnimationFrame||((U3=A1.requestAnimationFrame)||_N)(ej)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),_8=M1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(_5),j.__h=j.__h.filter(function(N){return!N.__||Z8(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],A1.__e(N,j.__v)}}),H3&&H3(_,$)},A1.unmount=function(_){J3&&J3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{_5(N)}catch(Z){$=Z}}),j.__H=void 0,$&&A1.__e($,j.__v))};var E3=typeof requestAnimationFrame=="function";function _N(_){var $,j=function(){clearTimeout(N),E3&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);E3&&($=requestAnimationFrame(j))}function _5(_){var $=M1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),M1=$}function Z8(_){var $=M1;_.__c=_.__(),M1=$}function b3(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function u3(_,$){return typeof $=="function"?$(_):$}var m3=function(_,$,j,N){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],Q=$[Y]?($[0]|=K?1:2,j[$[Y++]]):$[++Y];K===3?N[0]=Q:K===4?N[1]=Object.assign(N[1]||{},Q):K===5?(N[1]=N[1]||{})[$[++Y]]=Q:K===6?N[1][$[++Y]]+=Q+"":K?(Z=_.apply(Q,m3(_,Q,j,["",null])),N.push(Z),Q[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):N.push(Q)}return N},A3=new Map;function $N(_){var $=A3.get(this);return $||($=new Map,A3.set(this,$)),($=m3(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,Y=1,K="",Q="",X=[0],q=function(U){Y===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,U,K):Y===3&&(U||K)?(X.push(3,U,K),Y=2):Y===2&&K==="..."&&U?X.push(4,U,0):Y===2&&K&&!U?X.push(5,0,!0,K):Y>=5&&((K||!U&&Y===5)&&(X.push(Y,0,K,Z),Y=6),U&&(X.push(Y,U,0,Z),Y=6)),K=""},W=0;W<j.length;W++){W&&(Y===1&&q(),q(W));for(var V=0;V<j[W].length;V++)N=j[W][V],Y===1?N==="<"?(q(),X=[X],Y=3):K+=N:Y===4?K==="--"&&N===">"?(Y=1,K=""):K=N+K[0]:Q?N===Q?Q="":K+=N:N==='"'||N==="'"?Q=N:N===">"?(q(),Y=1):Y&&(N==="="?(Y=5,Z=K,K=""):N==="/"&&(Y<5||j[W][V+1]===">")?(q(),Y===3&&(X=X[0]),Y=X,(X=X[0]).push(2,0,Y),Y=0):N===" "||N==="\t"||N===`
`||N==="\r"?(q(),Y=2):K+=N),Y===3&&K==="!--"&&(Y=4,X=X[0])}return q(),X}(_)),$),arguments,[])).length>1?$:$[0]}var z=$N.bind(C3);var W_={};cj(W_,{uploadWorkspaceFile:()=>q5,uploadMedia:()=>F8,updateWorkspaceFile:()=>FN,submitAdaptiveCardAction:()=>O8,streamSidePrompt:()=>LN,steerAgentQueueItem:()=>WN,setWorkspaceVisibility:()=>I$,setAgentThoughtVisibility:()=>D8,sendPeerAgentMessage:()=>GN,sendAgentMessage:()=>d4,searchPosts:()=>B8,restoreChatBranch:()=>qN,respondToAgentRequest:()=>Q5,renameWorkspaceFile:()=>I8,renameChatBranch:()=>KN,removeAgentQueueItem:()=>VN,pruneChatBranch:()=>QN,moveWorkspaceEntry:()=>C8,getWorkspaceTree:()=>P$,getWorkspaceRawUrl:()=>G5,getWorkspaceFile:()=>M8,getWorkspaceDownloadUrl:()=>X5,getWorkspaceBranch:()=>zN,getTimeline:()=>n4,getThumbnailUrl:()=>E8,getThread:()=>V8,getPostsByHashtag:()=>X8,getMediaUrl:()=>C_,getMediaText:()=>A8,getMediaInfo:()=>N$,getMediaBlob:()=>UN,getChatBranches:()=>YN,getAgents:()=>U8,getAgentThought:()=>J8,getAgentStatus:()=>z8,getAgentQueueState:()=>BN,getAgentModels:()=>k$,getAgentContext:()=>XN,getActiveChatAgents:()=>L8,forkChatBranch:()=>M$,deleteWorkspaceFile:()=>y8,deletePost:()=>W8,createWorkspaceFile:()=>P8,createReply:()=>ZN,createPost:()=>NN,attachWorkspaceFile:()=>k8,addToWhitelist:()=>H8,SSEClient:()=>B5});async function _1(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function g3(_){let $=String(_||"").split(`
`),j="message",N=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))N.push(Y.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function jN(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:K,done:Q}=await j.read();if(Q)break;Z+=N.decode(K,{stream:!0});let X=Z.split(`

`);Z=X.pop()||"";for(let q of X){let W=g3(q);if(W)$(W.event,W.data)}}Z+=N.decode();let Y=g3(Z);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let N=`/timeline?limit=${_}`;if($)N+=`&before=${$}`;if(j)N+=`&chat_jid=${encodeURIComponent(j)}`;return _1(N)}async function X8(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return _1(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function B8(_,$=50,j=0,N=null,Z="current",Y=null){let K=N?`&chat_jid=${encodeURIComponent(N)}`:"",Q=Z?`&scope=${encodeURIComponent(Z)}`:"",X=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return _1(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${Q}${X}`)}async function V8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return _1(`/thread/${_}${j}`)}async function NN(_,$=[],j=null){let N=j?`?chat_jid=${encodeURIComponent(j)}`:"";return _1(`/post${N}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function ZN(_,$,j=[],N=null){let Z=N?`?chat_jid=${encodeURIComponent(N)}`:"";return _1(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function W8(_,$=!1,j=null){let N=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${N}`;return _1(Z,{method:"DELETE"})}async function d4(_,$,j=null,N=[],Z=null,Y=null){let K=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return _1(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function L8(){return _1("/agent/active-chats")}async function YN(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let N=j.toString()?`?${j.toString()}`:"";return _1(`/agent/branches${N}`)}async function M$(_,$={}){return _1("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function KN(_,$={}){return _1("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function QN(_){return _1("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function qN(_,$={}){return _1("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function GN(_,$,j,N="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:N,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return _1("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function U8(){return _1("/agent/roster")}async function z8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return _1(`/agent/status${$}`)}async function XN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return _1(`/agent/context${$}`)}async function BN(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return _1(`/agent/queue-state${$}`)}async function VN(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function WN(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function k$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return _1(`/agent/models${$}`)}async function F8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function Q5(_,$,j=null){let N=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${N.status}`)}return N.json()}async function O8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function LN(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await jN(j,(Y,K)=>{if($.onEvent?.(Y,K),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(Y==="side_prompt_done")N=K;else if(Y==="side_prompt_error")Z=K}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return N}async function H8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function J8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return _1(j)}async function D8(_,$,j){return _1("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function C_(_){return`/media/${_}`}function E8(_){return`/media/${_}/thumbnail`}async function N$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function A8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function UN(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function P$(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return _1(N)}async function zN(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return _1($)}async function M8(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return _1(Z)}async function FN(_,$){return _1("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function k8(_){return _1("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function q5(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",Q=await fetch(""+K,{method:"POST",body:N});if(!Q.ok){let X=await Q.json().catch(()=>({error:"Upload failed"})),q=Error(X.error||`HTTP ${Q.status}`);throw q.status=Q.status,q.code=X.code,q}return Q.json()}async function P8(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=Z.code,Y}return N.json()}async function I8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function C8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function y8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return _1($,{method:"DELETE"})}async function I$(_,$=!1){return _1("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function G5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function X5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class B5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(N)=>{this.markActivity(),this.onEvent(j,JSON.parse(N.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function V5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function ON(_,$){let j=V5(_),N=V5($);if(!N)return!1;return j.startsWith(N)||j.includes(N)}function T8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function S8(_,$,j=Date.now(),N=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>N?Y:`${Z.value}${Y}`,updatedAt:j}}function HN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let K=0;K<j;K+=1)Y.push((Z+K)%j);return Y}function JN(_,$,j=0,N=(Z)=>Z){let Z=V5($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],K=HN(Y.length,j),Q=Y.map((X)=>V5(N(X)));for(let X of K)if(Q[X].startsWith(Z))return X;for(let X of K)if(Q[X].includes(Z))return X;return-1}function x8(_,$,j=-1,N=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=N(Z[j]);if(ON(Y,$))return j}return JN(Z,$,0,N)}function L_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function Z$(_,$=!1){let j=L_(_);if(j===null)return $;return j==="true"}function Y$(_,$=null){let j=L_(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function W5(_){return String(_||"").trim().toLowerCase()}function w8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return W5($[1]||"")}function h3(_){let $=new Set,j=[];for(let N of Array.isArray(_)?_:[]){let Z=W5(N?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(N)}return j}function p3(_,$,j={}){let N=w8($);if(N==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return h3(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return W5(Y?.agent_name).startsWith(N)})}function R8(_){let $=W5(_);return $?`@${$} `:""}function c3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,N=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return h3(_).filter((Z)=>!(j&&Z?.chat_jid===j)).slice(0,N)}function l3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let N=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(N)||N<=0)return!1;if(Z<=0)return!1;let Y=460+Z*68+(j?40:0);return N>=Y}function i3(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function L5(_){let $=v8(_);return $?`@${$}`:""}function v8(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function f8(_,$=""){let j=String(_||""),N=v8(j),Z=v8($);if(!j.trim())return{normalized:N,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!N)return{normalized:N,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${N}`;if(N===Z)return{normalized:N,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(N!==j.trim())return{normalized:N,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:N,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function n3(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?L5(_.agent_name):String($||"").trim(),N=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${N} • current branch`}function DN(_,$={}){let j=[],N=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(N&&Z===N)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function U5(_,$={}){let j=L5(_?.agent_name)||String(_?.chat_jid||"").trim(),N=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=DN(_,$);return Z.length>0?`${j} — ${N} • ${Z.join(" • ")}`:`${j} — ${N}`}function d3(_,$,j){let N=L5(_),Z=L5($),Y=String(j||"").trim();if(N&&Z&&N!==Z)return`Restored archived ${N} as ${Z} because ${N} is already in use.`;if(Z)return`Restored ${Z}.`;if(N)return`Restored ${N}.`;return`Restored ${Y||"branch"}.`}function p_({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:Y="Remove",icon:K="file"}){let Q=`${_}-file-pill`,X=`${_}-file-name`,q=`${_}-file-remove`,W=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${Q} title=${j||$} onClick=${Z}>
      ${W}
      <span class=${X}>${$}</span>
      ${N&&z`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),N()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var EN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function AN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,Z=_.contextWindow,Y="Compact context",Q=`${N!=null?`Context: ${o3(N)} / ${o3(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,X=9,q=2*Math.PI*9,W=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${Q}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function o3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function r3({onPost:_,onFocus:$,searchMode:j,searchScope:N="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:K,onExitSearch:Q,fileRefs:X=[],onRemoveFileRef:q,onClearFileRefs:W,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:E,activeModel:J=null,modelUsage:A=null,thinkingLevel:T=null,supportsThinking:H=!1,contextUsage:M=null,onContextCompact:C,notificationsEnabled:R=!1,notificationPermission:D="default",onToggleNotifications:u,onModelChange:a,onModelStateChange:i,activeEditorPath:g=null,onAttachEditorFile:w,onOpenFilePill:l,followupQueueItems:t=[],onInjectQueuedFollowup:V0,onRemoveQueuedFollowup:d,onSubmitIntercept:N0,onMessageResponse:Z0,onPopOutChat:Y0,isAgentActive:Q0=!1,activeChatAgents:X0=[],currentChatJid:U0="web:default",connectionStatus:z0="connected",onSetFileRefs:O0,onSetMessageRefs:p0,onSubmitError:k0,onSwitchChat:J0,onRenameSession:c0,isRenameSessionInProgress:l0=!1,onCreateSession:S0,onDeleteSession:B0,onRestoreSession:P0}){let[D0,q0]=c(""),[y0,d0]=c(""),[m0,V1]=c([]),[E1,f0]=c(!1),[i0,j1]=c([]),[Q1,o0]=c(0),[y1,N1]=c(!1),[b1,q1]=c([]),[c1,b0]=c(0),[t1,X1]=c(!1),[W1,F1]=c(!1),[T0,O1]=c(!1),[x0,R0]=c(!1),[a0,n1]=c([]),[m,G0]=c(0),[E0,F0]=c(0),[r0,e1]=c(!1),[l1,i_]=c(0),[S_,__]=c(null),t0=y(null),T1=y(null),d1=y(null),S1=y(null),x_=y(null),w_=y(null),F4=y(null),O4=y(null),$_=y({value:"",updatedAt:0}),n_=y(0),Z1=y(!1),j4=200,F_=(L)=>{let S=new Set,b=[];for(let r of L||[]){if(typeof r!=="string")continue;let L0=r.trim();if(!L0||S.has(L0))continue;S.add(L0),b.push(L0)}return b},g0=()=>{let L=L_("piclaw_compose_history");if(!L)return[];try{let S=JSON.parse(L);if(!Array.isArray(S))return[];return F_(S)}catch{return[]}},L1=(L)=>{K1("piclaw_compose_history",JSON.stringify(L))},u0=y(g0()),x1=y(-1),H1=y(""),N4=D0.trim()||m0.length>0||X.length>0||V.length>0,H4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),O_=typeof window<"u"&&typeof Notification<"u",R4=typeof window<"u"?Boolean(window.isSecureContext):!1,e4=O_&&R4&&D!=="denied",H_=D==="granted"&&R,L$=H_?"Disable notifications":"Enable notifications",j_=m0.length>0||X.length>0||V.length>0,N_=z0==="disconnected"?"Reconnecting":String(z0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),d_=z0==="disconnected"?"Reconnecting":`Connection: ${N_}`,J_=(Array.isArray(X0)?X0:[]).filter((L)=>!L?.archived_at),u1=c3(J_,{currentChatJid:U0,limit:4}),q_=!j&&l3({footerWidth:l1,visibleAgentCount:u1.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),n0=(()=>{for(let L of Array.isArray(X0)?X0:[]){let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&S===U0)return L}return null})(),Z_=Boolean(n0&&n0.chat_jid===(n0.root_chat_jid||n0.chat_jid)),J4=C0(()=>{let L=new Set,S=[];for(let b of Array.isArray(X0)?X0:[]){let r=typeof b?.chat_jid==="string"?b.chat_jid.trim():"";if(!r||r===U0||L.has(r))continue;if(!(typeof b?.agent_name==="string"?b.agent_name.trim():""))continue;L.add(r),S.push(b)}return S},[X0,U0]),D4=J4.length>0,R_=D4&&typeof J0==="function",D_=D4&&typeof P0==="function",G_=Boolean(l0||Z1.current),J1=!j&&typeof c0==="function"&&!G_,G1=!j&&typeof S0==="function",o1=!j&&typeof B0==="function"&&!Z_,k1=!j&&(R_||D_||J1||G1||o1),Z4=J||"",Y4=H&&T?` (${T})`:"",E4=Y4.trim()?`${T}`:"",r1=typeof A?.hint_short==="string"?A.hint_short.trim():"",K4=[E4||null,r1||null].filter(Boolean).join(" • "),v4=[Z4?`Current model: ${Z4}${Y4}`:null,A?.plan?`Plan: ${A.plan}`:null,r1||null,A?.primary?.reset_description||null,A?.secondary?.reset_description||null].filter(Boolean),v_=W1?"Switching model…":v4.join(" • ")||`Current model: ${Z4}${Y4} (tap to open model picker)`,E_=(L)=>{if(!L||typeof L!=="object")return;let S=L.model??L.current;if(typeof i==="function")i({model:S??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(S&&typeof a==="function")a(S)},X_=(L)=>{let S=L||t0.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},f_=(L)=>{if(!L)return{content:L,fileRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let h0=0;h0<b.length;h0+=1)if(b[h0].trim()==="Files:"&&b[h0+1]&&/^\s*-\s+/.test(b[h0+1])){r=h0;break}if(r===-1)return{content:L,fileRefs:[]};let L0=[],I0=r+1;for(;I0<b.length;I0+=1){let h0=b[I0];if(/^\s*-\s+/.test(h0))L0.push(h0.replace(/^\s*-\s+/,"").trim());else if(!h0.trim())break;else break}if(L0.length===0)return{content:L,fileRefs:[]};let Y1=b.slice(0,r),z1=b.slice(I0);return{content:[...Y1,...z1].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:L0}},m1=(L)=>{if(!L)return{content:L,messageRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),r=-1;for(let h0=0;h0<b.length;h0+=1)if(b[h0].trim()==="Referenced messages:"&&b[h0+1]&&/^\s*-\s+/.test(b[h0+1])){r=h0;break}if(r===-1)return{content:L,messageRefs:[]};let L0=[],I0=r+1;for(;I0<b.length;I0+=1){let h0=b[I0];if(/^\s*-\s+/.test(h0)){let s_=h0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(s_)L0.push(s_[1])}else if(!h0.trim())break;else break}if(L0.length===0)return{content:L,messageRefs:[]};let Y1=b.slice(0,r),z1=b.slice(I0);return{content:[...Y1,...z1].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:L0}},f4=(L)=>{let S=f_(L||""),b=m1(S.content||"");return{text:b.content||"",fileRefs:S.fileRefs,messageRefs:b.messageRefs}},b4=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){N1(!1),j1([]);return}let S=L.toLowerCase().split(" ")[0];if(S.length<1){N1(!1),j1([]);return}let b=EN.filter((r)=>r.name.startsWith(S)||r.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(b.length>0&&!(b.length===1&&b[0].name===S))X1(!1),q1([]),j1(b),o0(0),N1(!0);else N1(!1),j1([])},A4=(L)=>{let S=D0,b=S.indexOf(" "),r=b>=0?S.slice(b):"",L0=L.name+r;q0(L0),N1(!1),j1([]),requestAnimationFrame(()=>{let I0=t0.current;if(!I0)return;let Y1=L0.length;I0.selectionStart=Y1,I0.selectionEnd=Y1,I0.focus()})},o_=(L)=>{if(w8(L)==null){X1(!1),q1([]);return}let S=p3(J_,L,{currentChatJid:U0});if(S.length>0&&!(S.length===1&&R8(S[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))N1(!1),j1([]),q1(S),b0(0),X1(!0);else X1(!1),q1([])},b_=(L)=>{let S=R8(L?.agent_name);if(!S)return;q0(S),X1(!1),q1([]),requestAnimationFrame(()=>{let b=t0.current;if(!b)return;let r=S.length;b.selectionStart=r,b.selectionEnd=r,b.focus()})},Q4=()=>{if(j||!R_&&!D_&&!J1&&!G1&&!o1)return!1;return $_.current={value:"",updatedAt:0},O1(!1),N1(!1),j1([]),X1(!1),q1([]),R0(!0),!0},w1=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!R_&&!D_&&!J1&&!G1&&!o1)return;if(x0){$_.current={value:"",updatedAt:0},R0(!1);return}Q4()},u_=(L)=>{let S=typeof L==="string"?L.trim():"";if(R0(!1),!S||S===U0){requestAnimationFrame(()=>t0.current?.focus());return}J0?.(S)},m_=async(L)=>{let S=typeof L==="string"?L.trim():"";if(R0(!1),!S||typeof P0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await P0(S)}catch(b){console.warn("Failed to restore session:",b),requestAnimationFrame(()=>t0.current?.focus())}},r_=(L)=>{let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&typeof J0==="function"){J0(S);return}b_(L)},M4=(L)=>{let b=(Array.isArray(L)?L:[]).findIndex((r)=>!r?.disabled);return b>=0?b:0},U1=C0(()=>{let L=[];for(let S of J4){let b=Boolean(S?.archived_at),r=typeof S?.agent_name==="string"?S.agent_name.trim():"",L0=typeof S?.chat_jid==="string"?S.chat_jid.trim():"";if(!r||!L0)continue;L.push({type:"session",key:`session:${L0}`,label:`@${r} — ${L0}${S?.is_active?" active":""}${b?" archived":""}`,chat:S,disabled:b?!D_:!R_})}if(G1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(J1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:G_});if(o1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[J4,D_,R_,G1,J1,o1,G_]),k4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof c0!=="function"||l0||Z1.current)return;Z1.current=!0,R0(!1);try{await c0()}catch(S){console.warn("Failed to rename session:",S)}finally{Z1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},s1=async()=>{if(typeof S0!=="function")return;R0(!1);try{await S0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>t0.current?.focus())},Y_=async()=>{if(typeof B0!=="function")return;R0(!1);try{await B0(U0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>t0.current?.focus())},A_=(L)=>{if(j)d0(L);else q0(L),b4(L),o_(L);requestAnimationFrame(()=>X_())},u4=(L)=>{let S=j?y0:D0,b=S&&!S.endsWith(`
`)?`
`:"",r=`${S}${b}${L}`.trimStart();A_(r)},P4=(L)=>{let S=L?.command?.model_label;if(S)return S;let b=L?.command?.message;if(typeof b==="string"){let r=b.match(/•\s+([^\n]+?)\s+\(current\)/);if(r?.[1])return r[1].trim()}return null},q4=async(L)=>{if(j||W1)return;F1(!0);try{let S=await d4("default",L,null,[],null,U0),b=P4(S);E_({model:b??J??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let r=await k$(U0);if(r)E_(r)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{F1(!1)}},I4=async()=>{await q4("/cycle-model")},B_=async(L)=>{if(!L||W1)return;if(await q4(`/model ${L}`))O1(!1)},m4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let S=L.chat;if(S?.archived_at)m_(S.chat_jid);else u_(S.chat_jid);return}if(L.type==="action"){if(L.action==="new"){s1();return}if(L.action==="rename"){k4();return}if(L.action==="delete")Y_()}},g4=(L)=>{L.preventDefault(),L.stopPropagation(),$_.current={value:"",updatedAt:0},R0(!1),O1((S)=>!S)},C4=async()=>{if(j)return;C?.(),await M_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},_$=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return Q0?"queue":null},M_=async(L,S,b={})=>{let{includeMedia:r=!0,includeFileRefs:L0=!0,includeMessageRefs:I0=!0,clearAfterSubmit:Y1=!0,recordHistory:z1=!0}=b||{},P1=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:D0,h0=typeof P1==="string"?P1:"";if(!h0.trim()&&(r?m0.length===0:!0)&&(L0?X.length===0:!0)&&(I0?V.length===0:!0))return;N1(!1),j1([]),X1(!1),q1([]),R0(!1),__(null);let s_=r?[...m0]:[],G4=L0?[...X]:[],p4=I0?[...V]:[],I1=h0.trim();if(z1&&I1){let c4=u0.current,R1=F_(c4.filter((X4)=>X4!==I1));if(R1.push(I1),R1.length>200)R1.splice(0,R1.length-200);u0.current=R1,L1(R1),x1.current=-1,H1.current=""}let n$=()=>{if(r)V1([...s_]);if(L0)O0?.(G4);if(I0)p0?.(p4);q0(I1),requestAnimationFrame(()=>X_())};if(Y1)q0(""),V1([]),W?.(),E?.();(async()=>{try{if(await N0?.({content:I1,submitMode:S,fileRefs:G4,messageRefs:p4,mediaFiles:s_})){_?.();return}let R1=[];for(let V_ of s_){let a_=await F8(V_);R1.push(a_.id)}let X4=G4.length?`Files:
${G4.map((V_)=>`- ${V_}`).join(`
`)}`:"",p5=p4.length?`Referenced messages:
${p4.map((V_)=>`- message:${V_}`).join(`
`)}`:"",l4=R1.length?`Attachments:
${R1.map((V_,a_)=>{let l5=s_[a_]?.name||`attachment-${a_+1}`;return`- attachment:${V_} (${l5})`}).join(`
`)}`:"",c5=[I1,X4,p5,l4].filter(Boolean).join(`

`),i4=await d4("default",c5,null,R1,_$(S),U0);if(Z0?.(i4),i4?.command){E_({model:i4.command.model_label??J??null,thinking_level:i4.command.thinking_level,supports_thinking:i4.command.supports_thinking});try{let V_=await k$(U0);if(V_)E_(V_)}catch{}}_?.()}catch(c4){if(Y1)n$();let R1=c4?.message||"Failed to send message.";__(R1),k0?.(R1),console.error("Failed to post:",c4)}})()},h4=(L)=>{V0?.(L)},g_=x((L)=>{if(j||!T0&&!x0||L?.isComposing)return!1;let S=()=>{L.preventDefault?.(),L.stopPropagation?.()},b=()=>{$_.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(S(),b(),T0)O1(!1);if(x0)R0(!1);return!0}if(T0){if(L.key==="ArrowDown"){if(S(),b(),a0.length>0)G0((r)=>(r+1)%a0.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),a0.length>0)G0((r)=>(r-1+a0.length)%a0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&a0.length>0)return S(),b(),B_(a0[Math.max(0,Math.min(m,a0.length-1))]),!0;if(T8(L)&&a0.length>0){S();let r=S8($_.current,L.key);$_.current=r;let L0=x8(a0,r.value,m,(I0)=>I0);if(L0>=0)G0(L0);return!0}}if(x0){if(L.key==="ArrowDown"){if(S(),b(),U1.length>0)F0((r)=>(r+1)%U1.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),U1.length>0)F0((r)=>(r-1+U1.length)%U1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&U1.length>0)return S(),b(),m4(U1[Math.max(0,Math.min(E0,U1.length-1))]),!0;if(T8(L)&&U1.length>0){S();let r=S8($_.current,L.key);$_.current=r;let L0=x8(U1,r.value,E0,(I0)=>I0.label);if(L0>=0)F0(L0);return!0}}return!1},[j,T0,x0,a0,m,U1,E0,B_]),F=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),d0(""),Q?.();return}if(g_(L))return;let S=t0.current?.value??(j?y0:D0);if(i3(L,S,{searchMode:j,showSessionSwitcherButton:k1})){L.preventDefault(),Q4();return}if(t1&&b1.length>0){let b=t0.current?.value??(j?y0:D0);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))X1(!1),q1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),b0((r)=>(r+1)%b1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),b0((r)=>(r-1+b1.length)%b1.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),b_(b1[c1]);return}if(L.key==="Escape"){L.preventDefault(),X1(!1),q1([]);return}}}if(y1&&i0.length>0){let b=t0.current?.value??(j?y0:D0);if(!String(b||"").startsWith("/"))N1(!1),j1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),o0((r)=>(r+1)%i0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),o0((r)=>(r-1+i0.length)%i0.length);return}if(L.key==="Tab"){L.preventDefault(),A4(i0[Q1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!S.includes(" ")){L.preventDefault();let L0=i0[Q1];N1(!1),j1([]),M_(L0.name);return}}if(L.key==="Escape"){L.preventDefault(),N1(!1),j1([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let b=t0.current;if(!b)return;let r=b.value||"",L0=b.selectionStart===0&&b.selectionEnd===0,I0=b.selectionStart===r.length&&b.selectionEnd===r.length;if(L.key==="ArrowUp"&&L0||L.key==="ArrowDown"&&I0){let Y1=u0.current;if(!Y1.length)return;L.preventDefault();let z1=x1.current;if(L.key==="ArrowUp"){if(z1===-1)H1.current=r,z1=Y1.length-1;else if(z1>0)z1-=1;x1.current=z1,A_(Y1[z1]||"")}else{if(z1===-1)return;if(z1<Y1.length-1)z1+=1,x1.current=z1,A_(Y1[z1]||"");else x1.current=-1,A_(H1.current||""),H1.current=""}requestAnimationFrame(()=>{let P1=t0.current;if(!P1)return;let h0=P1.value.length;P1.selectionStart=h0,P1.selectionEnd=h0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else M_(S,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else M_(S)},P=(L)=>{let S=Array.from(L||[]).filter((b)=>b instanceof File&&!String(b.name||"").startsWith(".DS_Store"));if(!S.length)return;V1((b)=>[...b,...S]),__(null)},f=(L)=>{P(L.target.files),L.target.value=""},v=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),n_.current+=1,f0(!0)},o=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),n_.current=Math.max(0,n_.current-1),n_.current===0)f0(!1)},K0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";f0(!0)},W0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),n_.current=0,f0(!1),P(L.dataTransfer?.files||[])},n=(L)=>{if(j)return;let S=L.clipboardData?.items;if(!S||!S.length)return;let b=[];for(let r of S){if(r.kind!=="file")continue;let L0=r.getAsFile?.();if(L0)b.push(L0)}if(b.length>0)L.preventDefault(),P(b)},j0=(L)=>{V1((S)=>S.filter((b,r)=>r!==L))},A0=()=>{__(null),V1([]),W?.(),E?.()},g1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:S,longitude:b,accuracy:r}=L.coords,L0=`${S.toFixed(5)}, ${b.toFixed(5)}`,I0=Number.isFinite(r)?` ±${Math.round(r)}m`:"",Y1=`https://maps.google.com/?q=${S},${b}`,z1=`Location: ${L0}${I0} ${Y1}`;u4(z1)},(L)=>{let S=L?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!T0)return;$_.current={value:"",updatedAt:0},e1(!0),k$(U0).then((L)=>{let S=Array.isArray(L?.models)?L.models.filter((b)=>typeof b==="string"&&b.trim().length>0):[];S.sort((b,r)=>b.localeCompare(r,void 0,{sensitivity:"base"})),n1(S),E_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),n1([])}).finally(()=>{e1(!1)})},[T0,J]),p(()=>{if(j)O1(!1),R0(!1),N1(!1),j1([]),X1(!1),q1([])},[j]),p(()=>{if(x0&&!k1)R0(!1)},[x0,k1]),p(()=>{if(!T0)return;let L=a0.findIndex((S)=>S===J);G0(L>=0?L:0)},[T0,a0,J]),p(()=>{if(!x0)return;F0(M4(U1)),$_.current={value:"",updatedAt:0}},[x0,U0]),p(()=>{if(!T0)return;let L=(S)=>{let b=S1.current,r=x_.current,L0=S.target;if(b&&b.contains(L0))return;if(r&&r.contains(L0))return;O1(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[T0]),p(()=>{if(!x0)return;let L=(S)=>{let b=w_.current,r=F4.current,L0=S.target;if(b&&b.contains(L0))return;if(r&&r.contains(L0))return;R0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[x0]),p(()=>{if(j||!T0&&!x0)return;let L=(S)=>{g_(S)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,T0,x0,g_]),p(()=>{if(!T0)return;let L=S1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[T0,m,a0]),p(()=>{if(!x0)return;let L=w_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[x0,E0,U1.length]),p(()=>{let L=()=>{let I0=O4.current?.clientWidth||0;i_((Y1)=>Y1===I0?Y1:I0)};L();let S=O4.current,b=0,r=()=>{if(b)cancelAnimationFrame(b);b=requestAnimationFrame(()=>{b=0,L()})},L0=null;if(S&&typeof ResizeObserver<"u")L0=new ResizeObserver(()=>r()),L0.observe(S);if(typeof window<"u")window.addEventListener("resize",r);return()=>{if(b)cancelAnimationFrame(b);if(L0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",r)}},[j,J,u1.length,M?.percent]);let K_=(L)=>{let S=L.target.value;if(__(null),x0)R0(!1);X_(L.target),A_(S)};return p(()=>{requestAnimationFrame(()=>X_())},[D0,y0,j]),p(()=>{if(j)return;o_(D0)},[J_,U0,D0,j]),z`
        <div class="compose-box">
            ${!j&&t.length>0&&z`
                <div class="compose-queue-stack">
                    ${t.map((L)=>{let S=typeof L?.content==="string"?L.content:"",b=f4(S);if(!b.text.trim()&&b.fileRefs.length===0&&b.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${S}>
                                    ${b.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${b.text}</div>
                                    `}
                                    ${(b.messageRefs.length>0||b.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${b.messageRefs.map((r)=>z`
                                                <${p_}
                                                    key=${"queue-msg-"+r}
                                                    prefix="compose"
                                                    label=${"msg:"+r}
                                                    title=${"Message reference: "+r}
                                                    icon="message"
                                                />
                                            `)}
                                            ${b.fileRefs.map((r)=>{let L0=r.split("/").pop()||r;return z`
                                                    <${p_}
                                                        key=${"queue-file-"+r}
                                                        prefix="compose"
                                                        label=${L0}
                                                        title=${r}
                                                        onClick=${()=>l?.(r)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>h4(L)}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                            <polyline points="14 12 18 8 22 12" />
                                        </svg>
                                        <span>Steer</span>
                                    </button>
                                    <button
                                        class="compose-queue-stack-close-btn"
                                        type="button"
                                        title="Cancel queued message"
                                        aria-label="Cancel queued message"
                                        onClick=${()=>d?.(L)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${E1?" drag-active":""}`}
                onDragEnter=${v}
                onDragOver=${K0}
                onDragLeave=${o}
                onDrop=${W0}
            >
                <div class="compose-input-main">
                    ${S_&&!j_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${S_}</div>
                    `}
                    ${j_&&z`
                        <div class="compose-file-refs">
                            ${S_&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${S_}</div>
                            `}
                            ${V.map((L)=>{return z`
                                    <${p_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${X.map((L)=>{let S=L.split("/").pop()||L;return z`
                                    <${p_}
                                        prefix="compose"
                                        label=${S}
                                        title=${L}
                                        onClick=${()=>l?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(L)}
                                    />
                                `})}
                            ${m0.map((L,S)=>{let b=L?.name||`attachment-${S+1}`;return z`
                                    <${p_}
                                        key=${b+S}
                                        prefix="compose"
                                        label=${b}
                                        title=${b}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>j0(S)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${A0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Y0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y0?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${t0}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?y0:D0}
                        onInput=${K_}
                        onKeyDown=${F}
                        onPaste=${n}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t1&&b1.length>0&&z`
                        <div class="slash-autocomplete" ref=${d1}>
                            ${b1.map((L,S)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${S===c1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),b_(L)}}
                                    onMouseEnter=${()=>b0(S)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y1&&i0.length>0&&z`
                        <div class="slash-autocomplete" ref=${T1}>
                            ${i0.map((L,S)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${S===Q1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),A4(L)}}
                                    onMouseEnter=${()=>o0(S)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${T0&&!j&&z`
                        <div class="compose-model-popup" ref=${S1} tabIndex="-1" onKeyDown=${g_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${r0&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!r0&&a0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!r0&&a0.map((L,S)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===S?" active":""}${J===L?" current-model":""}`}
                                        onClick=${()=>{B_(L)}}
                                        disabled=${W1}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{I4()}}
                                    disabled=${W1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${x0&&!j&&z`
                        <div class="compose-model-popup" ref=${w_} tabIndex="-1" onKeyDown=${g_}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return n3(n0,U0)})()}
                                    </div>
                                `}
                                ${!D4&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${D4&&J4.map((L,S)=>{let b=Boolean(L.archived_at),L0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!b&&typeof B0==="function",I0=U5(L,{currentChatJid:U0});return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${b?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${b?" archived":""}${E0===S?" active":""}`}
                                                onClick=${()=>{if(b){m_(L.chat_jid);return}u_(L.chat_jid)}}
                                                disabled=${b?!D_:!R_}
                                                title=${b?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${I0}
                                            </button>
                                            ${L0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(Y1)=>{Y1.stopPropagation(),R0(!1),B0(L.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(G1||J1||o1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${G1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${U1.findIndex((L)=>L.key==="action:new")===E0?" active":""}`}
                                            onClick=${()=>{s1()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${J1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${U1.findIndex((L)=>L.key==="action:rename")===E0?" active":""}`}
                                            onClick=${(L)=>{k4(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${G_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${o1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${U1.findIndex((L)=>L.key==="action:delete")===E0?" active":""}`}
                                            onClick=${()=>{Y_()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${O4}>
                    ${!j&&J&&z`
                    <div class="compose-meta-row">
                        ${!j&&J&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${x_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${v_}
                                    aria-label="Open model picker"
                                    onClick=${g4}
                                    disabled=${W1}
                                >
                                    ${W1?"Switching…":Z4}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!W1&&K4&&z`
                                        <span class="compose-model-usage-hint" title=${v_}>
                                            ${K4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&z`
                            <${AN} usage=${M} onCompact=${C4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q_&&z`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${u1.map((L)=>{let S=Boolean(L?.chat_jid&&L.chat_jid===U0);return z`
                                <button
                                    key=${L.chat_jid||L.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${S?" active":""}`}
                                    onClick=${()=>r_(L)}
                                    title=${`${L.chat_jid||"Active agent"} — switch to @${L.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${L.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${k1&&z`
                        ${n0?.agent_name&&z`
                            <span
                                class="compose-current-agent-label active"
                                title=${n0.chat_jid||U0}
                                onClick=${w1}
                            >@${n0.agent_name}</span>
                        `}
                        <button
                            ref=${F4}
                            type="button"
                            class=${`icon-btn compose-mention-btn${x0?" active":""}`}
                            onClick=${w1}
                            title=${x0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${x0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${N}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${H4&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${g1}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${e4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${H_?" active":""}`}
                            onClick=${u}
                            title=${L$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${g&&w&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${w}
                                title=${`Attach open file: ${g}`}
                                type="button"
                                disabled=${X.includes(g)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${f} />
                        </label>
                    `}
                    ${(z0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${z0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${z0}" title=${d_}>
                                    ${N_}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{M_()}}
                                    disabled=${!N4}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var m8="piclaw_theme",F5="piclaw_tint",t3="piclaw_chat_themes",y$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},s3={default:{label:"Default",mode:"auto",light:y$,dark:e3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},MN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},_2="light",b8=!1;function O5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function Q$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function kN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),K=parseInt(Z[2],10),Q=parseInt(Z[3],10);if(![Y,K,Q].every((q)=>Number.isFinite(q)))return null;let X=`#${[Y,K,Q].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:Q,hex:X}}function $2(_){return Q$(_)||kN(_)}function C$(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${Y})`}function u8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function PN(_){let $=_.r/255,j=_.g/255,N=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=N<=0.03928?N/12.92:Math.pow((N+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*K}function IN(_){return PN(_)>0.4?"#000000":"#ffffff"}function j2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g8(_){return s3[_]||s3.default}function CN(_){return _.mode==="auto"?j2():_.mode}function N2(_,$){let j=g8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||y$}function Z2(_,$,j){let N=$2($);if(!N)return _;let Z=Q$(_.bgPrimary),Y=Q$(_.bgSecondary),K=Q$(_.bgHover),Q=Q$(_.borderColor);if(!Z||!Y||!K||!Q)return _;let q=Q$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:C$(Z,N,0.08),bgSecondary:C$(Y,N,0.12),bgHover:C$(K,N,0.16),borderColor:C$(Q,N,0.08),accent:N.hex,accentHover:q?C$(N,q,0.18):N.hex}}function yN(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=$2(N),Y=Z?u8(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=Z?u8(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=Z?u8(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=Z?IN(Z):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":K,"--accent-soft-strong":Q,"--accent-contrast-text":X,"--danger-color":_.danger||y$.danger,"--success-color":_.success||y$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([W,V])=>{if(V)j.style.setProperty(W,V)})}function TN(){if(typeof document>"u")return;let _=document.documentElement;MN.forEach(($)=>_.style.removeProperty($))}function K$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,N=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!N)N=document.createElement("meta"),document.head.appendChild(N);if(N.setAttribute("name",_),j)N.setAttribute("id",j);return N}function a3(_){let $=O5(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,N=N2($,_);if($==="default"&&j)N=Z2(N,j,_);if(N?.bgPrimary)return N.bgPrimary;return _==="dark"?e3.bgPrimary:y$.bgPrimary}function SN(_,$){if(typeof document>"u")return;let j=K$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let N=K$("theme-color",{id:"theme-color-light"});if(N)N.setAttribute("media","(prefers-color-scheme: light)"),N.setAttribute("content",a3("light"));let Z=K$("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",a3("dark"));let Y=K$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let K=K$("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let Q=K$("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function xN(){if(typeof window>"u")return;let _={...o4,mode:_2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Y2(){try{let _=L_(t3);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function wN(_,$,j){let N=Y2();if(!$&&!j)delete N[_];else N[_]={theme:$||"default",tint:j||null};K1(t3,JSON.stringify(N))}function RN(_){if(!_)return null;return Y2()[_]||null}function K2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function h8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=O5(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=g8(j),Y=CN(Z),K=N2(j,Y);o4={theme:j,tint:N},_2=Y;let Q=document.documentElement;Q.dataset.theme=Y,Q.dataset.colorTheme=j,Q.dataset.tint=N?String(N):"",Q.style.colorScheme=Y;let X=K;if(j==="default"&&N)X=Z2(K,N,Y);if(j==="default"&&!N)TN();else yN(X,Y);if(SN(X.bgPrimary,Y),xN(),$.persist!==!1)if(K1(m8,j),N)K1(F5,N);else K1(F5,"")}function z5(){if(g8(o4.theme).mode!=="auto")return;h8(o4,{persist:!1})}function Q2(){if(typeof window>"u")return()=>{};let _=K2(),$=RN(_),j=$?O5($.theme||"default"):O5(L_(m8)||"default"),N=$?$.tint?String($.tint).trim():null:(()=>{let Z=L_(F5);return Z?Z.trim():null})();if(h8({theme:j,tint:N},{persist:!1}),window.matchMedia&&!b8){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",z5);else if(Z.addListener)Z.addListener(z5);return b8=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",z5);else if(Z.removeListener)Z.removeListener(z5);b8=!1}}return()=>{}}function q2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||K2(),j=_.theme??_.name??_.colorTheme,N=_.tint??null;if(wN($,j||"default",N),h8({theme:j||"default",tint:N},{persist:!1}),!$||$==="web:default")K1(m8,j||"default"),K1(F5,N||"")}function G2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return j2()}var H5=/#(\w+)/g,vN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),fN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),bN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),uN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},mN=new Set(["http:","https:","mailto:",""]);function p8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!mN.has(N.protocol))return null;return N.href}catch{return null}}function X2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())N.push(Y);for(let K of N){let Q=K.tagName.toLowerCase();if(!fN.has(Q)){let q=K.parentNode;if(!q)continue;while(K.firstChild)q.insertBefore(K.firstChild,K);q.removeChild(K);continue}let X=uN[Q]||new Set;for(let q of Array.from(K.attributes)){let W=q.name.toLowerCase(),V=q.value;if(W.startsWith("on")){K.removeAttribute(q.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(X.has(W)||bN.has(W)){if(W==="href"){let U=r4(V);if(!U)K.removeAttribute(q.name);else if(K.setAttribute(q.name,U),Q==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let U=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,E=r4(U,{allowDataImage:Q==="img"});if(!E)K.removeAttribute(q.name);else K.setAttribute(q.name,E)}continue}K.removeAttribute(q.name)}}return j.body.innerHTML}function B2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function J5(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=B2(j);if(Z===j)break;j=Z}return j}function gN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],Y=!1,K=[];for(let Q of j){if(!Y&&Q.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&Q.trim().match(/^```\s*$/)){let X=N.length;N.push(K.join(`
`)),Z.push(`@@MERMAID_BLOCK_${X}@@`),Y=!1,K=[];continue}if(Y)K.push(Q);else Z.push(Q)}if(Y)Z.push("```mermaid"),Z.push(...K);return{text:Z.join(`
`),blocks:N}}function hN(_){if(!_)return _;return J5(_,5)}function pN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function cN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function lN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),Y=$[Z]??"",K=hN(Y);return`<div class="mermaid-container" data-mermaid="${pN(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function V2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var iN={span:new Set(["title","class","lang","dir"])};function nN(_,$){let j=iN[_];if(!j||!$)return"";let N=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let K=(Y[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let Q=Y[2]??Y[3]??Y[4]??"";N.push(` ${K}="${p8(Q)}"`)}return N.join("")}function W2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),Y=Z?N.slice(1).trim():N,Q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[X=""]=Q.split(/\s+/,1),q=X.toLowerCase();if(!q||!vN.has(q))return $;if(q==="br")return Z?"":"<br>";if(Z)return`</${q}>`;let W=Q.slice(X.length).trim(),V=nN(q,W);return`<${q}${V}>`})}function L2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function U2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=N(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function dN(_){if(!window.katex)return _;let $=(K)=>B2(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let Q=[],X=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_BLOCK_${W}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let W=Q.length;return Q.push(q),`@@CODE_INLINE_${W}@@`}),{html:X,blocks:Q}},N=(K,Q)=>{if(!Q.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,q)=>{let W=Number(q);return Q[W]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,Q,X)=>{try{let q=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${q}`}catch(q){return`<span class="math-error" title="${p8(q.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,Q,X)=>{if(/\s$/.test(X))return K;try{let q=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${Q}${q}`}catch(q){return`${Q}<span class="math-error" title="${p8(q.message)}">$${X}$</span>`}}),N(Y,Z.blocks)}function oN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let Y of N){let K=Y.nodeValue;if(!K)continue;if(H5.lastIndex=0,!H5.test(K))continue;H5.lastIndex=0;let Q=Y.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let X=K.split(H5);if(X.length<=1)continue;let q=$.createDocumentFragment();X.forEach((W,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",W),U.textContent=`#${W}`,q.appendChild(U)}else q.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function rN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(Y)}return N.join(`
`)}function sN(_){let $=rN(_||""),{text:j,blocks:N}=gN($),Z=J5(j,2),K=V2(Z).replace(/</g,"&lt;");return{safeHtml:W2(K),mermaidBlocks:N}}function U_(_,$,j={}){if(!_)return"";let{safeHtml:N,mermaidBlocks:Z}=sN(_),Y=window.marked?marked.parse(N,{headerIds:!1,mangle:!1}):N.replace(/\n/g,"<br>");return Y=L2(Y),Y=U2(Y),Y=dN(Y),Y=oN(Y),Y=lN(Y,Z),Y=X2(Y,j),Y}function D5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=J5($,2),Z=V2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=W2(Z),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=L2(K),K=U2(K),K=X2(K),K}function aN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,N,Z,Y)=>{let K=Z.trim().split(/\s+/).map((X)=>{let[q,W]=X.split(",").map(Number);return{x:q,y:W}});if(K.length<3)return`<polyline${N}points="${Z}"${Y}/>`;let Q=[`M ${K[0].x},${K[0].y}`];for(let X=1;X<K.length-1;X++){let q=K[X-1],W=K[X],V=K[X+1],U=W.x-q.x,E=W.y-q.y,J=V.x-W.x,A=V.y-W.y,T=Math.sqrt(U*U+E*E),H=Math.sqrt(J*J+A*A),M=Math.min($,T/2,H/2);if(M<0.5){Q.push(`L ${W.x},${W.y}`);continue}let C=W.x-U/T*M,R=W.y-E/T*M,D=W.x+J/H*M,u=W.y+A/H*M,i=U*A-E*J>0?1:0;Q.push(`L ${C},${R}`),Q.push(`A ${M},${M} 0 0 ${i} ${D},${u}`)}return Q.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${N}d="${Q.join(" ")}"${Y}/>`})}async function V4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=G2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let Q=K.dataset.mermaid,X=cN(Q||""),q=J5(X,2),W=await $(q,{...Z,transparent:!0});W=aN(W),K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${Q.message}`,K.innerHTML="",K.appendChild(X),K.removeAttribute("data-mermaid")}}function z2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function F2(_){return String(_||"").trim()||"web:default"}function O2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function H2(_){if(!_)return!1;return _.status!=="running"}function J2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function D2({session:_,onClose:$,onInject:j,onRetry:N}){let Z=y(null),Y=y(null),K=_?.thinking?D5(_.thinking):"",Q=_?.answer?U_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(Z.current&&K)V4(Z.current).catch(()=>{})},[K]),p(()=>{if(Y.current&&Q)V4(Y.current).catch(()=>{})},[Q]),!_)return null;let X=_.status==="running",q=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),V=O2(_),U=H2(_),E=!X&&q,J=X?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${J}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&z`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!E}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function tN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return N?{kind:j,svg:N}:null}function eN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return N?{kind:Y,html:N}:{kind:Y}}function T4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function M0(_){return typeof _==="string"&&_.trim()?_.trim():null}function A2(_,$=!1){let N=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(N))}var M2="__PICLAW_WIDGET_HOST__:";function E2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function c8(_,$){if(!_||_.type!=="generated_widget")return null;let j=tN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:A2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function k2(_){if(!_||typeof _!=="object")return null;let $=eN(_),j=M0(_?.widget_id)||M0(_?.widgetId)||M0(_?.tool_call_id)||M0(_?.toolCallId),N=M0(_?.tool_call_id)||M0(_?.toolCallId),Z=M0(_?.turn_id)||M0(_?.turnId),Y=M0(_?.title)||M0(_?.name)||"Generated widget",K=M0(_?.subtitle)||"",Q=M0(_?.description)||K,X=M0(_?.status),q=X==="loading"||X==="streaming"||X==="final"||X==="error"?X:"streaming";return{title:Y,subtitle:K,description:Q,originPostId:T4(_?.origin_post_id)??T4(_?.originPostId),originChatJid:M0(_?.origin_chat_jid)||M0(_?.originChatJid)||M0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:A2(_?.capabilities,!0),source:"live",status:q,turnId:Z,toolCallId:N,width:T4(_?.width),height:T4(_?.height),error:M0(_?.error)}}function P2(_){return c8(_,null)!==null}function p1(_){let $=M0(_?.toolCallId)||M0(_?.tool_call_id);if($)return $;let j=M0(_?.widgetId)||M0(_?.widget_id);if(j)return j;let N=T4(_?.originPostId)??T4(_?.origin_post_id);if(N!==null)return`post:${N}`;return null}function I2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function C2(_){return I2(_)?"allow-downloads allow-scripts":"allow-downloads"}function E5(_){return{title:M0(_?.title)||"Generated widget",widgetId:M0(_?.widgetId)||M0(_?.widget_id),toolCallId:M0(_?.toolCallId)||M0(_?.tool_call_id),turnId:M0(_?.turnId)||M0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:M0(_?.status)||"final"}}function A5(_){return{...E5(_),subtitle:M0(_?.subtitle)||"",description:M0(_?.description)||"",error:M0(_?.error)||null,width:T4(_?.width),height:T4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function M5(_){return`${M2}${JSON.stringify(A5(_))}`}function y2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=M0(_.text)||M0(_.content)||M0(_.message)||M0(_.prompt)||M0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let N=M0(j.text)||M0(j.content)||M0(j.message)||M0(j.prompt)||M0(j.value);if(N)return N}return null}function T2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function S2(_){let $=M0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return M0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function _Z(_){let $=E5(_);return`<script>
(function () {
  const meta = ${E2($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {}
  }

  const windowNamePrefix = ${E2(M2)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {}
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function x2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=j==="svg"?Z:N;if(!K)return"";let Q=I2(_),X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${K}</div>`:K,W=Q?_Z(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${X}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${W}
</head>
<body>${q}</body>
</html>`}function w2({widget:_,onClose:$,onWidgetEvent:j}){let N=y(null),Z=y(!1),Y=C0(()=>x2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let H=(M)=>{if(M.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),p(()=>{Z.current=!1},[Y]),p(()=>{if(!_)return;let H=N.current;if(!H)return;let M=(a)=>{let i=M5(_),g=a==="widget.init"?E5(_):A5(_);try{H.name=i}catch{}try{H.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:a,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:g},"*")}catch{}},C=()=>{M("widget.init"),M("widget.update")},R=()=>{Z.current=!0,C()};H.addEventListener("load",R);let u=[0,40,120,300,800].map((a)=>setTimeout(C,a));return()=>{H.removeEventListener("load",R),u.forEach((a)=>clearTimeout(a))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let H=N.current;if(!H?.contentWindow)return;let M=M5(_),C=A5(_);try{H.name=M}catch{}try{H.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let H=(M)=>{let C=M?.data;if(!C||C.__piclawGeneratedWidget!==!0)return;let R=N.current,D=p1(_),u=p1({widgetId:C.widgetId,toolCallId:C.toolCallId});if(u&&D&&u!==D)return;if(!u&&R?.contentWindow&&M.source!==R.contentWindow)return;j?.(C,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let Q=(_?.artifact||{}).kind||_?.kind||"html",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=W==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",E=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,A=S2(_),T=C2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${X}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${Q.toUpperCase()}</div>
                        <div class="floating-widget-title">${X}</div>
                        ${(q||E)&&z`
                            <div class="floating-widget-subtitle">${q||E}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${J?z`<div class="floating-widget-empty">${A}</div>`:z`
                            <iframe
                                ref=${N}
                                class="floating-widget-frame"
                                title=${X}
                                name=${M5(_)}
                                sandbox=${T}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var R2="PiClaw";function l8(_,$,j=!1){let N=_||"PiClaw",Z=N.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%Y.length,Q=Y[K],X=N.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",W=q?q:null,V=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:Z,color:Q,image:W||(V?"/static/icon-192.png":null)}}function v2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function f2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function b2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",Q=Y?.dataset?.tint||"",X=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(X&&(Q||K&&K!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let Y=0;Y<j.length;Y+=1)N=(N*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function $Z(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function T$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function u2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return T$(_)?"Compacting context":"Working..."}function jZ(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function m2(_,$=Date.now()){let j=$Z(_);if(j===null)return null;return jZ(Math.max(0,$-j))}function g2({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:Y,turnId:K,steerQueued:Q,onPanelToggle:X}){let V=(B0)=>{if(!B0)return{text:"",totalLines:0,fullText:""};if(typeof B0==="string"){let y0=B0,d0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:d0,fullText:y0}}let P0=B0.text||"",D0=B0.fullText||B0.full_text||P0,q0=Number.isFinite(B0.totalLines)?B0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P0,totalLines:q0,fullText:D0}},U=160,E=(B0)=>String(B0||"").replace(/<\/?internal>/gi,""),J=(B0)=>{if(!B0)return 1;return Math.max(1,Math.ceil(B0.length/160))},A=(B0,P0,D0)=>{let q0=(B0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let y0=q0.split(`
`),d0=y0.length>P0?y0.slice(0,P0).join(`
`):q0,m0=Number.isFinite(D0)?D0:y0.reduce((f0,i0)=>f0+J(i0),0),V1=d0?d0.split(`
`).reduce((f0,i0)=>f0+J(i0),0):0,E1=Math.max(m0-V1,0);return{text:d0,omitted:E1,totalLines:m0,visibleLines:V1}},T=V(j),H=V(N),M=V($),C=Boolean(T.text)||T.totalLines>0,R=Boolean(H.text)||H.totalLines>0,D=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!D&&!C&&!R&&!Z&&!Y)return null;let[u,a]=c(new Set),[i,g]=c(()=>Date.now()),w=(B0)=>a((P0)=>{let D0=new Set(P0),q0=!D0.has(B0);if(q0)D0.add(B0);else D0.delete(B0);if(typeof X==="function")X(B0,q0);return D0});p(()=>{a(new Set)},[K]);let l=T$(_);p(()=>{if(!l)return;g(Date.now());let B0=setInterval(()=>g(Date.now()),1000);return()=>clearInterval(B0)},[l,_?.started_at,_?.startedAt]);let t=_?.turn_id||K,V0=b2(t),d=Q?"turn-dot turn-dot-queued":"turn-dot",N0=(B0)=>B0,Z0=Boolean(_?.last_activity||_?.lastActivity),Y0=(B0)=>B0==="warning"?"#f59e0b":B0==="error"?"var(--danger-color)":B0==="success"?"var(--success-color)":V0,Q0=Y?.kind||"info",X0=Y0(Q0),U0=Y0(_?.kind||(l?"warning":"info")),z0="",O0=_?.title,p0=_?.status;if(_?.type==="plan")z0=O0?`Planning: ${O0}`:"Planning...";else if(_?.type==="tool_call")z0=O0?`Running: ${O0}`:"Running tool...";else if(_?.type==="tool_status")z0=O0?`${O0}: ${p0||"Working..."}`:p0||"Working...";else if(_?.type==="error")z0=O0||"Agent error";else z0=O0||p0||"Working...";if(Z0)z0="Last activity just now";let k0=({panelTitle:B0,text:P0,fullText:D0,totalLines:q0,maxLines:y0,titleClass:d0,panelKey:m0})=>{let V1=u.has(m0),E1=D0||P0||"",f0=m0==="thought"||m0==="draft"?E(E1):E1,i0=typeof y0==="number",j1=V1&&i0,Q1=i0?A(f0,y0,q0):{text:f0||"",omitted:0,totalLines:Number.isFinite(q0)?q0:0};if(!f0&&!(Number.isFinite(Q1.totalLines)&&Q1.totalLines>0))return null;let o0=`agent-thinking-body${i0?" agent-thinking-body-collapsible":""}`,y1=i0?`--agent-thinking-collapsed-lines: ${y0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${V1?"true":"false"}
                data-collapsible=${i0?"true":"false"}
                style=${V0?`--turn-color: ${V0};`:""}
            >
                <div class="agent-thinking-title ${d0||""}">
                    ${V0&&z`<span class=${d} aria-hidden="true"></span>`}
                    ${B0}
                    ${j1&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${B0} panel`}
                            onClick=${()=>w(m0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${o0}
                    style=${y1}
                    dangerouslySetInnerHTML=${{__html:D5(f0)}}
                />
                ${!V1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▸ ${Q1.omitted} more lines
                    </button>
                `}
                ${V1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J0=Z?.tool_call?.title,c0=J0?`Awaiting approval: ${J0}`:"Awaiting approval",l0=l?m2(_,i):null,S0=(B0,P0,D0=null)=>{let q0=u2(B0);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P0?`--turn-color: ${P0};`:""}
                title=${B0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P0&&z`<span class=${d} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q0}</span>
                    ${D0&&z`<span class="agent-status-elapsed">${D0}</span>`}
                </div>
                ${B0.detail&&z`<div class="agent-thinking-body">${B0.detail}</div>`}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${Y&&S0(Y,X0)}
            ${_?.type==="intent"&&S0(_,U0,l0)}
            ${Z&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${V0?`--turn-color: ${V0};`:""}>
                    <span class=${d} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${c0}</span>
                </div>
            `}
            ${C&&k0({panelTitle:N0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${R&&k0({panelTitle:N0("Thoughts"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${D&&k0({panelTitle:N0("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${Z0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${V0?`--turn-color: ${V0};`:""}>
                    ${V0&&z`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z0}</span>
                </div>
            `}
        </div>
    `}function h2({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z,chat_jid:Y}=_,K=N?.title||"Agent Request",Q=N?.kind||"other",X=N?.rawInput||{},q=X.command||X.commands&&X.commands[0]||null,W=X.diff||null,V=X.fileName||X.path||null,U=N?.description||X.description||X.explanation||null,J=(Array.isArray(N?.locations)?N.locations:[]).map((C)=>C?.path).filter((C)=>Boolean(C)),A=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let T=async(C)=>{try{await Q5(j,C,Y||null),$()}catch(R){console.error("Failed to respond to agent request:",R)}},H=async()=>{try{await H8(K,`Auto-approved: ${K}`),await Q5(j,"approved",Y||null),$()}catch(C){console.error("Failed to add to whitelist:",C)}},M=Z&&Z.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(U||q||W||A.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${A.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((C,R)=>z`<li key=${R}>${C}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&z`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${W&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?Z.map((C)=>z`
                            <button 
                                key=${C.optionId||C.id||String(C)}
                                class="agent-request-btn ${C.kind==="allow_once"||C.kind==="allow_always"?"primary":""}"
                                onClick=${()=>T(C.optionId||C.id||C)}
                            >
                                ${C.name||C.label||C.optionId||C.id||String(C)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>T("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>T("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function p2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,Y=86400000;if(N<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*Y){let X=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${q}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${Q}`}function S$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function s4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var NZ=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),ZZ=new Set(["text/markdown"]),YZ=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),KZ=new Set(["application/vnd.jgraph.mxfile"]);function x$(_){return typeof _==="string"?_.trim().toLowerCase():""}function QZ(_){let $=x$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function qZ(_){let $=x$(_);return!!$&&$.endsWith(".pdf")}function GZ(_){let $=x$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function w$(_,$){let j=x$(_);if(QZ($)||KZ.has(j))return"drawio";if(qZ($)||j==="application/pdf")return"pdf";if(GZ($)||YZ.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(NZ.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function c2(_){let $=x$(_);return ZZ.has($)}function l2(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function XZ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let N=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(N.slice(0,2),16),g:parseInt(N.slice(2,4),16),b:parseInt(N.slice(4,6),16)}}function BZ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let N=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![N,Z,Y].every((K)=>Number.isFinite(K)))return null;return{r:N,g:Z,b:Y}}function i2(_){return XZ(_)||BZ(_)}function k5(_){let $=(Y)=>{let K=Y/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),N=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*N+0.0722*Z}function VZ(_,$){let j=Math.max(k5(_),k5($)),N=Math.min(k5(_),k5($));return(j+0.05)/(N+0.05)}function WZ(_,$,j="#ffffff"){let N=i2(_);if(!N)return j;let Z=j,Y=-1;for(let K of $){let Q=i2(K);if(!Q)continue;let X=VZ(N,Q);if(X>Y)Z=K,Y=X}return Z}function i8(){let _=getComputedStyle(document.documentElement),$=(J,A)=>{for(let T of J){let H=_.getPropertyValue(T).trim();if(H)return H}return A},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),E=WZ(Q,[j,Z],j);return{fg:j,fgMuted:N,bgPrimary:Z,bg:Y,bgEmphasis:K,accent:Q,good:X,warning:q,attention:W,border:V,fontFamily:U,buttonTextColor:E}}function n2(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:N,accent:Z,good:Y,warning:K,attention:Q,border:X,fontFamily:q}=i8();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var LZ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),d2=!1,P5=null,o2=!1;function n8(_){_.querySelector(".adaptive-card-notice")?.remove()}function UZ(_,$,j="error"){n8(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}function zZ(_,$=(j)=>U_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function FZ(_=($)=>U_($,null)){return($,j)=>{try{let N=zZ($,_);j.outputHtml=N.outputHtml,j.didProcess=N.didProcess}catch(N){console.error("[adaptive-card] Failed to process markdown:",N),j.outputHtml=String($??""),j.didProcess=!1}}}function OZ(_){if(o2||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=FZ(),o2=!0}async function HZ(){if(d2)return;if(P5)return P5;return P5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{d2=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),P5}function JZ(){return globalThis.AdaptiveCards}function DZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function EZ(_){return LZ.has(_)}function o8(_){if(!Array.isArray(_))return[];return _.filter(DZ)}function AZ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:N,raw:_}}function d8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${d8(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function MZ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return d8($);return typeof $==="string"?$:String($)}function kZ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((Q)=>N(Q));if(!Z||typeof Z!=="object")return Z;let K={...Z};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=MZ(K.type,j[K.id],K);for(let[Q,X]of Object.entries(K))if(Array.isArray(X)||X&&typeof X==="object")K[Q]=N(X);return K};return N(_)}function PZ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function IZ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function CZ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=IZ(_.completed_at||j?.submitted_at),Y=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function r2(_,$,j){if(!EZ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await HZ()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=JZ();OZ(N);let Z=new N.AdaptiveCard,Y=i8();Z.hostConfig=new N.HostConfig(n2());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:kZ($.payload,K);Z.parse(Q),Z.onExecuteAction=(W)=>{let V=AZ(W);if(j?.onAction)n8(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let E=U instanceof Error?U.message:String(U||"Action failed.");UZ(_,E||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let X=Z.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=CZ($);if(q){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,W.appendChild(V),q.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=q.detail,W.appendChild(U)}_.appendChild(W)}if(n8(_),_.appendChild(X),q)PZ(X);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function R$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>R$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${R$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function s2(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:R$(j)})).filter(($)=>$.value)}function yZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function r8(_){if(!Array.isArray(_))return[];return _.filter(yZ)}function a2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=R$(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=s2(j).map(({key:Y,value:K})=>`${Y}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function t2(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=s2(_.data),N=j.length>0?j.slice(0,2).map(({key:Y,value:K})=>`${Y}: ${K}`).join(", "):R$(_.data)||null,Z=j.length;return{title:$,summary:N,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function TZ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y_($):null},{label:"Added",value:_?.created_at?s4(_.created_at):null}].filter((N)=>N.value)}function SZ(_,$,j){let N=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${N}#media=${Z}&name=${N}`;if(j==="office"){let Y=C_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${N}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${N}&readonly=1#media=${Z}&name=${N}&readonly=1`;return null}function e2({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=C0(()=>w$($?.content_type,N),[$?.content_type,N]),Y=l2(Z),K=C0(()=>c2($?.content_type),[$?.content_type]),[Q,X]=c(Z==="text"),[q,W]=c(""),[V,U]=c(null),E=y(null),J=C0(()=>TZ($),[$]),A=C0(()=>SZ(_,N,Z),[_,N,Z]),T=C0(()=>{if(!K||!q)return"";return U_(q)},[K,q]);return p(()=>{let H=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[j]),p(()=>{if(!E.current||!T)return;V4(E.current);return},[T]),p(()=>{let H=!1;async function M(){if(Z!=="text"){X(!1),U(null);return}X(!0),U(null);try{let C=await A8(_);if(!H)W(C)}catch{if(!H)U("Failed to load text preview.")}finally{if(!H)X(!1)}}return M(),()=>{H=!0}},[_,Z]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${A&&z`
                            <a
                                href=${A}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(H)=>H.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${C_(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(H)=>H.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Q&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Q&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                    ${!Q&&!V&&Z==="image"&&z`
                        <img class="attachment-preview-image" src=${C_(_)} alt=${N} />
                    `}
                    ${!Q&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&A&&z`
                        <iframe class="attachment-preview-frame" src=${A} title=${N}></iframe>
                    `}
                    ${!Q&&!V&&Z==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!Q&&!V&&Z==="text"&&K&&z`
                        <div
                            ref=${E}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:T}}
                        />
                    `}
                    ${!Q&&!V&&Z==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!Q&&!V&&Z==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${J.map((H)=>z`
                        <div class="attachment-preview-meta-item" key=${H.label}>
                            <span class="attachment-preview-meta-label">${H.label}</span>
                            <span class="attachment-preview-meta-value">${H.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function _7({src:_,onClose:$}){return p(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function xZ({mediaId:_,onPreview:$}){let[j,N]=c(null);if(p(()=>{N$(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,K=Y?y_(Y):"",X=w$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${C_(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function wZ({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=c(null);p(()=>{if(!Number.isFinite(j))return;N$(j).then(Z).catch(()=>{});return},[j]);let Y=N?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?C_(j):null,X=w$(N?.content_type,N?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${p_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&N&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function I5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?s4(N):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&z`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function RZ({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?y_(_.size):"",Z=_.mime_type||"",Y=bZ(Z),K=r4(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&z`<span>${Z}</span>`}
                    ${N&&z`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function vZ({block:_}){let[$,j]=c(!1),N=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&z`
                ${Z&&z`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:K||"application/octet-stream"}),q=URL.createObjectURL(X),W=document.createElement("a");W.href=q,W.download=N.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function fZ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let N=c8(_,$),Z=P2(_),Y=N?.artifact?.kind||_?.artifact?.kind||_?.kind||null,K=N?.title||_.title||_.name||"Generated widget",Q=N?.description||_.description||_.subtitle||"",X=_.open_label||"Open widget",q=(W)=>{if(W.preventDefault(),W.stopPropagation(),!N)return;j?.(N)};return z`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${K}</div>
            </div>
            ${Q&&z`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${X}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function bZ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function uZ({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function mZ(_,$){return typeof _==="string"?_:""}var gZ=1800,hZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,pZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,cZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function lZ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function iZ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(Y,K)=>{let Q=K||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=pZ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=cZ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=hZ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",Z(Q,"idle"),K.appendChild(Q);let X=async(q)=>{q.preventDefault(),q.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await lZ(V);Z(Q,U?"success":"error");let E=j.get(Q);if(E)clearTimeout(E);let J=setTimeout(()=>{Z(Q,"idle"),j.delete(Q)},gZ);j.set(Q,J)};Q.addEventListener("click",X),N.push(()=>{Q.removeEventListener("click",X);let q=j.get(Q);if(q)clearTimeout(q);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{N.forEach((Y)=>Y())}}function nZ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))Z.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:Z}}function dZ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:Z}}function oZ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let q=0;q<j.length;q+=1){let W=j[q].trim();if((W==="Images:"||W==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){N=q;break}}if(N===-1)return{content:_,attachments:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let W=q.replace(/^\s*-\s+/,"").trim(),V=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],E=(V[2]||"").trim()||U;Z.push({id:U,label:E,raw:W})}else Z.push({id:null,label:W,raw:W})}else if(!q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let K=j.slice(0,N),Q=j.slice(Y),X=[...K,...Q].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:Z}}function rZ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sZ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(rZ).sort((W,V)=>V.length-W.length),Z=new RegExp(`(${N.join("|")})`,"gi"),Y=new RegExp(`^(${N.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),Q=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),X=[],q;while(q=Q.nextNode())X.push(q);for(let W of X){let V=W.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=W.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let E=V.split(Z).filter((A)=>A!=="");if(E.length===0)continue;let J=K.createDocumentFragment();for(let A of E)if(Y.test(A)){let T=K.createElement("mark");T.className="search-highlight-term",T.textContent=A,J.appendChild(T)}else J.appendChild(K.createTextNode(A));W.parentNode.replaceChild(J,W)}return K.body.innerHTML}function $7({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:K,userName:Q,userAvatarUrl:X,userAvatarBackground:q,onDelete:W,isThreadReply:V,isThreadPrev:U,isThreadNext:E,isRemoving:J,highlightQuery:A,onFileRef:T,onOpenWidget:H}){let[M,C]=c(null),R=y(null),D=_.data,u=D.type==="agent_response",a=Q||"You",i=u?Y||R2:a,g=u?l8(Y,K,!0):l8(a,X),w=typeof q==="string"?q.trim().toLowerCase():"",l=!u&&g.image&&(w==="clear"||w==="transparent"),t=u&&Boolean(g.image),V0=`background-color: ${l||t?"transparent":g.color}`,d=D.content_meta,N0=Boolean(d?.truncated),Z0=Boolean(d?.preview),Y0=N0&&!Z0,Q0=N0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:D.content?D.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,X0=D.content_blocks||[],U0=D.media_ids||[],z0=mZ(D.content,D.link_previews),{content:O0,fileRefs:p0}=nZ(z0),{content:k0,messageRefs:J0}=dZ(O0),{content:c0,attachments:l0}=oZ(k0);z0=c0;let S0=o8(X0),B0=r8(X0),P0=S0.length===1&&typeof S0[0]?.fallback_text==="string"?S0[0].fallback_text.trim():"",D0=B0.length===1?a2(B0[0]).trim():"",q0=Boolean(P0)&&z0?.trim()===P0||Boolean(D0)&&z0?.trim()===D0,y0=Boolean(z0)&&!Y0&&!q0,d0=typeof A==="string"?A.trim():"",m0=C0(()=>{if(!z0||q0)return"";let m=U_(z0,j);return d0?sZ(m,d0):m},[z0,q0,d0]),V1=(m,G0)=>{m.stopPropagation(),C(C_(G0))},[E1,f0]=c(null),i0=(m)=>{f0(m)},j1=(m)=>{m.stopPropagation(),W?.(_)},Q1=(m,G0)=>{let E0=new Set;if(!m||G0.length===0)return{content:m,usedIds:E0};return{content:m.replace(/attachment:([^\s)"']+)/g,(r0,e1,l1,i_)=>{let S_=e1.replace(/^\/+/,""),t0=G0.find((d1)=>d1.name&&d1.name.toLowerCase()===S_.toLowerCase()&&!E0.has(d1.id))||G0.find((d1)=>!E0.has(d1.id));if(!t0)return r0;if(E0.add(t0.id),i_.slice(Math.max(0,l1-2),l1)==="](")return`/media/${t0.id}`;return t0.name||"attachment"}),usedIds:E0}},o0=[],y1=[],N1=[],b1=[],q1=[],c1=[],b0=[],t1=0;if(X0.length>0)X0.forEach((m)=>{if(m?.type==="text"&&m.annotations)b0.push(m.annotations);if(m?.type==="generated_widget")c1.push(m);else if(m?.type==="resource_link")b1.push(m);else if(m?.type==="resource")q1.push(m);else if(m?.type==="file"){let G0=U0[t1++];if(G0)y1.push(G0),N1.push({id:G0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let G0=U0[t1++];if(G0){let E0=typeof m?.mime_type==="string"?m.mime_type:void 0;o0.push({id:G0,annotations:m?.annotations,mimeType:E0}),N1.push({id:G0,name:m?.name||m?.filename||m?.title})}}});else if(U0.length>0){let m=l0.length>0;U0.forEach((G0,E0)=>{let F0=l0[E0]||null;if(N1.push({id:G0,name:F0?.label||null}),m)y1.push(G0);else o0.push({id:G0,annotations:null})})}if(l0.length>0)l0.forEach((m)=>{if(!m?.id)return;let G0=N1.find((E0)=>String(E0.id)===String(m.id));if(G0&&!G0.name)G0.name=m.label});let{content:X1,usedIds:W1}=Q1(z0,N1);z0=X1;let F1=o0.filter(({id:m})=>!W1.has(m)),T0=y1.filter((m)=>!W1.has(m)),O1=l0.length>0?l0.map((m,G0)=>({id:m.id||`attachment-${G0+1}`,label:m.label||`attachment-${G0+1}`})):N1.map((m,G0)=>({id:m.id,label:m.name||`attachment-${G0+1}`})),x0=C0(()=>o8(X0),[X0]),R0=C0(()=>r8(X0),[X0]),a0=C0(()=>{return x0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[x0]);p(()=>{if(!R.current)return;return V4(R.current),iZ(R.current)},[m0]);let n1=y(null);return p(()=>{if(!n1.current||x0.length===0)return;let m=n1.current;m.innerHTML="";for(let G0 of x0){let E0=document.createElement("div");m.appendChild(E0),r2(E0,G0,{onAction:async(F0)=>{if(F0.type==="Action.OpenUrl"){let r0=r4(F0.url||"");if(!r0)throw Error("Invalid URL");window.open(r0,"_blank","noopener,noreferrer");return}if(F0.type==="Action.Submit"){await O8({post_id:_.id,thread_id:D.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:G0.card_id,action:{type:F0.type,title:F0.title||"",data:F0.data}});return}console.warn("[post] unsupported adaptive card action:",F0.type,F0)}}).catch((F0)=>{console.error("[post] adaptive card render error:",F0),E0.textContent=G0.fallback_text||"Card failed to render."})}},[a0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${u?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${E?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${u?"agent-avatar":""} ${g.image?"has-image":""}" style=${V0}>
                ${g.image?z`<img src=${g.image} alt=${i} />`:g.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${j1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${i}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),N)N(_.id)}}>${p2(_.timestamp)}</a>
                </div>
                ${Y0&&Q0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${S$(Q0.originalLength)} chars
                            ${Q0.maxLength?z` • Display limit: ${S$(Q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Z0&&Q0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${S$(Q0.maxLength)} of ${S$(Q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(p0.length>0||J0.length>0||O1.length>0)&&z`
                    <div class="post-file-refs">
                        ${J0.map((m)=>{let G0=(E0)=>{if(E0.preventDefault(),E0.stopPropagation(),Z)Z(m,_.chat_jid||null);else{let F0=document.getElementById("post-"+m);if(F0)F0.scrollIntoView({behavior:"smooth",block:"center"}),F0.classList.add("post-highlight"),setTimeout(()=>F0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${G0}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${G0}
                                    />
                                </a>
                            `})}
                        ${p0.map((m)=>{let G0=m.split("/").pop()||m;return z`
                                <${p_}
                                    prefix="post"
                                    label=${G0}
                                    title=${m}
                                    onClick=${()=>T?.(m)}
                                />
                            `})}
                        ${O1.map((m)=>z`
                            <${wZ}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${i0}
                            />
                        `)}
                    </div>
                `}
                ${y0&&z`
                    <div 
                        ref=${R}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let G0=m.target.dataset.hashtag;if(G0)j?.(G0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),C(m.target.src)}}
                    />
                `}
                ${x0.length>0&&z`
                    <div ref=${n1} class="post-adaptive-cards" />
                `}
                ${R0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${R0.map((m,G0)=>{let E0=t2(m),F0=`${m.card_id}-${G0}`;return z`
                                <div key=${F0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${E0.title}</span>
                                        </div>
                                    </div>
                                    ${E0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${E0.fields.map((r0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${r0.key}: ${r0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${r0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${r0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${s4(E0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${c1.length>0&&z`
                    <div class="generated-widget-launches">
                        ${c1.map((m,G0)=>z`
                            <${fZ}
                                key=${m.widget_id||m.id||`${_.id}-widget-${G0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${b0.length>0&&z`
                    ${b0.map((m,G0)=>z`
                        <${I5} key=${G0} annotations=${m} />
                    `)}
                `}
                ${F1.length>0&&z`
                    <div class="media-preview">
                        ${F1.map(({id:m,mimeType:G0})=>{let F0=typeof G0==="string"&&G0.toLowerCase().startsWith("image/svg")?C_(m):E8(m);return z`
                                <img 
                                    key=${m} 
                                    src=${F0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(r0)=>V1(r0,m)}
                                />
                            `})}
                    </div>
                `}
                ${F1.length>0&&z`
                    ${F1.map(({annotations:m},G0)=>z`
                        ${m&&z`<${I5} key=${G0} annotations=${m} />`}
                    `)}
                `}
                ${T0.length>0&&z`
                    <div class="file-attachments">
                        ${T0.map((m)=>z`
                            <${xZ} key=${m} mediaId=${m} onPreview=${i0} />
                        `)}
                    </div>
                `}
                ${b1.length>0&&z`
                    <div class="resource-links">
                        ${b1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${RZ} block=${m} />
                                <${I5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${q1.length>0&&z`
                    <div class="resource-embeds">
                        ${q1.map((m,G0)=>z`
                            <div key=${G0}>
                                <${vZ} block=${m} />
                                <${I5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${D.link_previews.map((m,G0)=>z`
                            <${uZ} key=${G0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&z`<${_7} src=${M} onClose=${()=>C(null)} />`}
        ${E1&&z`
            <${e2}
                mediaId=${E1.mediaId}
                info=${E1.info}
                onClose=${()=>f0(null)}
            />
        `}
    `}function j7({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:K,onFileRef:Q,onOpenWidget:X,emptyMessage:q,timelineRef:W,agents:V,user:U,onDeletePost:E,reverse:J=!0,removingPostIds:A,searchQuery:T}){let[H,M]=c(!1),C=y(null),R=typeof IntersectionObserver<"u",D=x(async()=>{if(!j||!$||H)return;M(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,H,j]),u=x((d)=>{let{scrollTop:N0,scrollHeight:Z0,clientHeight:Y0}=d.target,Q0=J?Z0-Y0-N0:N0,X0=Math.max(300,Y0);if(Q0<X0)D()},[J,D]);p(()=>{if(!R)return;let d=C.current,N0=W?.current;if(!d||!N0)return;let Z0=300,Y0=new IntersectionObserver((Q0)=>{for(let X0 of Q0){if(!X0.isIntersecting)continue;D()}},{root:N0,rootMargin:`${Z0}px 0px ${Z0}px 0px`,threshold:0});return Y0.observe(d),()=>Y0.disconnect()},[R,$,j,W,D]);let a=y(D);if(a.current=D,p(()=>{if(R)return;if(!W?.current)return;let{scrollTop:d,scrollHeight:N0,clientHeight:Z0}=W.current,Y0=J?N0-Z0-d:d,Q0=Math.max(300,Z0);if(Y0<Q0)a.current?.()},[R,_,$,J,W]),p(()=>{if(!W?.current)return;if(!$||H)return;let{scrollTop:d,scrollHeight:N0,clientHeight:Z0}=W.current,Y0=J?N0-Z0-d:d,Q0=Math.max(300,Z0);if(N0<=Z0+1||Y0<Q0)a.current?.()},[_,$,H,J,W]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let i=_.slice().sort((d,N0)=>d.id-N0.id),g=(d)=>{let N0=d?.data?.thread_id;if(N0===null||N0===void 0||N0==="")return null;let Z0=Number(N0);return Number.isFinite(Z0)?Z0:null},w=new Map;for(let d=0;d<i.length;d+=1){let N0=i[d],Z0=Number(N0?.id),Y0=g(N0);if(Y0!==null){let Q0=w.get(Y0)||{anchorIndex:-1,replyIndexes:[]};Q0.replyIndexes.push(d),w.set(Y0,Q0)}else if(Number.isFinite(Z0)){let Q0=w.get(Z0)||{anchorIndex:-1,replyIndexes:[]};Q0.anchorIndex=d,w.set(Z0,Q0)}}let l=new Map;for(let[d,N0]of w.entries()){let Z0=new Set;if(N0.anchorIndex>=0)Z0.add(N0.anchorIndex);for(let Y0 of N0.replyIndexes)Z0.add(Y0);l.set(d,Array.from(Z0).sort((Y0,Q0)=>Y0-Q0))}let t=i.map((d,N0)=>{let Z0=g(d);if(Z0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=l.get(Z0);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q0=Y0.indexOf(N0);if(Q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q0>0,hasThreadNext:Q0<Y0.length-1}}),V0=z`<div class="timeline-sentinel" ref=${C}></div>`;return z`
        <div class="timeline ${J?"reverse":"normal"}" ref=${W} onScroll=${u}>
            <div class="timeline-content">
                ${J?V0:null}
                ${i.map((d,N0)=>{let Z0=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),Y0=A?.has?.(d.id),Q0=t[N0]||{};return z`
                    <${$7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${Z0}
                        isThreadPrev=${Q0.hasThreadPrev}
                        isThreadNext=${Q0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${T}
                        agentName=${v2(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${f2(d.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>N?.(d)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${Q}
                        onOpenWidget=${X}
                        onDelete=${E}
                    />
                `})}
                ${J?null:V0}
            </div>
        </div>
    `}class N7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var $1=new N7;var C5=null,s8=null;function aZ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function Z7(){if(s8)return Promise.resolve(s8);if(!C5)C5=import(aZ()).then((_)=>{return s8=_,_}).catch((_)=>{throw C5=null,_});return C5}class Y7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Z7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var a8={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new Y7(_,$)}};function t8(){Z7().catch(()=>{})}var v$="piclaw://terminal";var tZ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},eZ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},y5=null,e8=null;function _Y(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function $Y(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,Y)=>{let K=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!_Y(K))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function jY(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!y5)y5=$Y(()=>Promise.resolve($.init?.())).catch((j)=>{throw y5=null,j});return await y5,$}async function NY(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!e8)e8=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await e8}async function ZY(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function YY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function KY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function QY(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function K7(){let _=KY(),$=_?eZ:tZ,j=W4("--bg-primary",_?"#000000":"#ffffff"),N=W4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=W4("--text-secondary",_?"#71767b":"#536471"),Y=W4("--accent-color","#1d9bf0"),K=W4("--danger-color",_?"#ff7b72":"#cf222e"),Q=W4("--success-color",_?"#7ee787":"#1a7f37"),X=W4("--bg-hover",_?"#1d1f23":"#e8ebed"),q=W4("--border-color",_?"#2f3336":"#eff3f4"),W=W4("--accent-soft-strong",QY(Y,_?"47":"33"));return{background:j,foreground:N,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:N,black:X,red:K,green:Q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class _6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,N=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(N)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await jY();if(await NY(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:K7()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=K7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await ZY();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(YY($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var $6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new _6(_,$)}},j6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new _6(_,$)}};function L4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function T5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let N=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(N),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||K)}function Q7(_,$={}){if(L4($))return null;if(T5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:qY(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function N6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Z6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),N=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${N}</p>
            </div>
        `}catch{}}function Y6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function q7(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function a4(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("chat_jid",Z),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function G7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("branch_loader","1"),N.searchParams.set("branch_source_chat_jid",Z),N.searchParams.delete("chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function X7(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return N.toString();if(N.searchParams.set("pane_popout","1"),N.searchParams.set("pane_path",Z),j?.label)N.searchParams.set("pane_label",String(j.label));else N.searchParams.delete("pane_label");if(j?.chatJid)N.searchParams.set("chat_jid",String(j.chatJid));return N.searchParams.delete("chat_only"),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.toString()}function qY(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function GY(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function B7(_,$={}){if(L4($))return null;if(T5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:GY(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function S5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let N=j.toLowerCase();if(N.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(N.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(N.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(N.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(N.includes("failed to fork branch")||N.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function XY(_){try{return JSON.parse(_)}catch{return null}}function BY(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function VY(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class K6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=VY($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let N=this.options.parseControlMessage||XY;this.options.onMessage?.({kind:"control",raw:$.data,payload:N($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=BY(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var f$=()=>{throw Error("Operation requires compiling with --exportRuntime")},WY=typeof BigUint64Array<"u",b$=Symbol();var LY=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function V7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,N=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...N);try{return LY.decode(N)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...N.subarray(Y,Y+=1024));return Z+String.fromCharCode(...N.subarray(Y))}}function W7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return V7(Z.buffer,Y)}let N=_.env=_.env||{};return N.abort=N.abort||function(Y,K,Q,X){let q=$.memory||N.memory;throw Error(`abort: ${j(q,Y)} at ${j(q,K)}:${Q}:${X}`)},N.trace=N.trace||function(Y,K,...Q){let X=$.memory||N.memory;console.log(`trace: ${j(X,Y)}${K?" ":""}${Q.slice(0,K).join(", ")}`)},N.seed=N.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function L7(_,$){let j=$.exports,N=j.memory,Z=j.table,Y=j.__new||f$,K=j.__pin||f$,Q=j.__unpin||f$,X=j.__collect||f$,q=j.__rtti_base,W=q?(w)=>w[q>>>2]:f$;_.__new=Y,_.__pin=K,_.__unpin=Q,_.__collect=X;function V(w){let l=new Uint32Array(N.buffer);if((w>>>=0)>=W(l))throw Error(`invalid id: ${w}`);return l[(q+4>>>2)+w]}function U(w){let l=V(w);if(!(l&7))throw Error(`not an array: ${w}, flags=${l}`);return l}function E(w){return 31-Math.clz32(w>>>6&31)}function J(w){if(w==null)return 0;let l=w.length,t=Y(l<<1,2),V0=new Uint16Array(N.buffer);for(let d=0,N0=t>>>1;d<l;++d)V0[N0+d]=w.charCodeAt(d);return t}_.__newString=J;function A(w){if(w==null)return 0;let l=new Uint8Array(w),t=Y(l.length,1);return new Uint8Array(N.buffer).set(l,t),t}_.__newArrayBuffer=A;function T(w){if(!w)return null;let l=N.buffer;if(new Uint32Array(l)[w+-8>>>2]!==2)throw Error(`not a string: ${w}`);return V7(l,w)}_.__getString=T;function H(w,l,t){let V0=N.buffer;if(t)switch(w){case 2:return new Float32Array(V0);case 3:return new Float64Array(V0)}else switch(w){case 0:return new(l?Int8Array:Uint8Array)(V0);case 1:return new(l?Int16Array:Uint16Array)(V0);case 2:return new(l?Int32Array:Uint32Array)(V0);case 3:return new(l?BigInt64Array:BigUint64Array)(V0)}throw Error(`unsupported align: ${w}`)}function M(w,l=0){let t=l,V0=U(w),d=E(V0),N0=typeof t!=="number",Z0=N0?t.length:t,Y0=Y(Z0<<d,V0&4?w:1),Q0;if(V0&4)Q0=Y0;else{K(Y0);let X0=Y(V0&2?16:12,w);Q(Y0);let U0=new Uint32Array(N.buffer);if(U0[X0+0>>>2]=Y0,U0[X0+4>>>2]=Y0,U0[X0+8>>>2]=Z0<<d,V0&2)U0[X0+12>>>2]=Z0;Q0=X0}if(N0){let X0=H(d,V0&2048,V0&4096),U0=Y0>>>d;if(V0&16384)for(let z0=0;z0<Z0;++z0)X0[U0+z0]=t[z0];else X0.set(t,U0)}return Q0}_.__newArray=M;function C(w){let l=new Uint32Array(N.buffer),t=l[w+-8>>>2],V0=U(t),d=E(V0),N0=V0&4?w:l[w+4>>>2],Z0=V0&2?l[w+12>>>2]:l[N0+-4>>>2]>>>d;return H(d,V0&2048,V0&4096).subarray(N0>>>=d,N0+Z0)}_.__getArrayView=C;function R(w){let l=C(w),t=l.length,V0=Array(t);for(let d=0;d<t;d++)V0[d]=l[d];return V0}_.__getArray=R;function D(w){let l=N.buffer,t=new Uint32Array(l)[w+-4>>>2];return l.slice(w,w+t)}_.__getArrayBuffer=D;function u(w){if(!Z)throw Error("Operation requires compiling with --exportTable");let l=new Uint32Array(N.buffer)[w>>>2];return Z.get(l)}_.__getFunction=u;function a(w,l,t){return new w(i(w,l,t))}function i(w,l,t){let V0=N.buffer,d=new Uint32Array(V0);return new w(V0,d[t+4>>>2],d[t+8>>>2]>>>l)}function g(w,l,t){_[`__get${l}`]=a.bind(null,w,t),_[`__get${l}View`]=i.bind(null,w,t)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((w)=>{g(w,w.name,31-Math.clz32(w.BYTES_PER_ELEMENT))}),WY)[BigUint64Array,BigInt64Array].forEach((w)=>{g(w,w.name.slice(3),3)});return _.memory=_.memory||N,_.table=_.table||Z,zY(j,_)}function U7(_){return typeof Response<"u"&&_ instanceof Response}function UY(_){return _ instanceof WebAssembly.Module}async function Q6(_,$={}){if(U7(_=await _))return x5(_,$);let j=UY(_)?_:await WebAssembly.compile(_),N=W7($),Z=await WebAssembly.instantiate(j,$),Y=L7(N,Z);return{module:j,instance:Z,exports:Y}}async function x5(_,$={}){if(!WebAssembly.instantiateStreaming)return Q6(U7(_=await _)?_.arrayBuffer():_,$);let j=W7($),N=await WebAssembly.instantiateStreaming(_,$),Z=L7(j,N.instance);return{...N,exports:Z}}function zY(_,$={}){let j=_.__argumentsLength?(N)=>{_.__argumentsLength.value=N}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let N of Object.keys(_)){let Z=_[N],Y=N.split("."),K=$;while(Y.length>1){let q=Y.shift();if(!Object.hasOwn(K,q))K[q]={};K=K[q]}let Q=Y[0],X=Q.indexOf("#");if(X>=0){let q=Q.substring(0,X),W=K[q];if(typeof W>"u"||!W.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[b$]}},V.wrap=function(U){return Object.create(V.prototype,{[b$]:{value:U,writable:!1}})},W)Object.getOwnPropertyNames(W).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(W,U)));K[q]=V}if(Q=Q.substring(X+1),K=K[q].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4))){let V=_[N.replace("set:","get:")],U=_[N.replace("get:","set:")];Object.defineProperty(K,Q,{get(){return V(this[b$])},set(E){U(this[b$],E)},enumerable:!0})}}else if(Q==="constructor")(K[Q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(K[Q]=function(...V){return j(V.length),Z(this[b$],...V)}).original=Z}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4)))Object.defineProperty(K,Q,{get:_[N.replace("set:","get:")],set:_[N.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(K[Q]=(...q)=>{return j(q.length),Z(...q)}).original=Z;else K[Q]=Z}return $}var OY="/static/js/vendor/remote-display-decoder.wasm",w5=null;function z7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function F7(){if(w5)return w5;return w5=(async()=>{try{let N=function(Z,Y,K,Q,X,q,W){let V=z7(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,K,Q,X,q,W.bitsPerPixel,W.bigEndian?1:0,W.trueColor?1:0,W.redMax,W.greenMax,W.blueMax,W.redShift,W.greenShift,W.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(OY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof x5==="function"?await x5(_,{}):await Q6(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,K,Q,X,q){return N("processRawRect",Z,Y,K,Q,X,q)},processCopyRect(Z,Y,K,Q,X,q){return j.processCopyRect(Z,Y,K,Q,X,q)},processRreRect(Z,Y,K,Q,X,q){return N("processRreRect",Z,Y,K,Q,X,q)},processHextileRect(Z,Y,K,Q,X,q){return N("processHextileRect",Z,Y,K,Q,X,q)},processZrleTileData(Z,Y,K,Q,X,q){return N("processZrleTileData",Z,Y,K,Q,X,q)},decodeRawRectToRgba(Z,Y,K,Q){let X=z7(Z),q=j.__pin(j.__newArrayBuffer(X));try{let W=j.__pin(j.decodeRawRectToRgba(q,Y,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(W))}finally{j.__unpin(W)}}finally{j.__unpin(q);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),w5}function q$(_,$,j){return Math.max($,Math.min(j,_))}function R5(_,$,j){let N=new Uint8Array(6),Z=q$(Math.floor(Number($||0)),0,65535),Y=q$(Math.floor(Number(j||0)),0,65535);return N[0]=5,N[1]=q$(Math.floor(Number(_||0)),0,255),N[2]=Z>>8&255,N[3]=Z&255,N[4]=Y>>8&255,N[5]=Y&255,N}function G6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function O7(_,$,j,N,Z){let Y=Math.max(1,Math.floor(Number(N||0))),K=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Number(j?.width||0)),X=Math.max(1,Number(j?.height||0)),q=(Number(_||0)-Number(j?.left||0))/Q,W=(Number($||0)-Number(j?.top||0))/X;return{x:q$(Math.floor(q*Y),0,Math.max(0,Y-1)),y:q$(Math.floor(W*K),0,Math.max(0,K-1))}}function H7(_,$,j,N=0){let Z=Number(_)<0?8:16,Y=q$(Number(N||0)|Z,0,255);return[R5(Y,$,j),R5(Number(N||0),$,j)]}function J7(_,$){let j=new Uint8Array(8),N=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=N>>>24&255,j[5]=N>>>16&255,j[6]=N>>>8&255,j[7]=N&255,j}function u$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function D7(_,$,j,N){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),K=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(N||0))),X=Math.min(Z/K,Y/Q);if(!Number.isFinite(X)||X<=0)return 1;return Math.max(0.01,X)}var q6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)q6[`F${_}`]=65470+(_-1);function X6(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(q6,Y))return q6[Y];let j=String(_?.key||""),N=j?j.codePointAt(0):null,Z=N==null?0:N>65535?2:1;if(N!=null&&j.length===Z){if(N<=255)return N;return(16777216|N)>>>0}return null}var C1=Uint8Array,z_=Uint16Array,H6=Int32Array,v5=new C1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),f5=new C1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),U6=new C1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),k7=function(_,$){var j=new z_(31);for(var N=0;N<31;++N)j[N]=$+=1<<_[N-1];var Z=new H6(j[30]);for(var N=1;N<30;++N)for(var Y=j[N];Y<j[N+1];++Y)Z[Y]=Y-j[N]<<5|N;return{b:j,r:Z}},P7=k7(v5,2),I7=P7.b,z6=P7.r;I7[28]=258,z6[258]=28;var C7=k7(f5,0),HY=C7.b,E7=C7.r,F6=new z_(32768);for(v0=0;v0<32768;++v0)e_=(v0&43690)>>1|(v0&21845)<<1,e_=(e_&52428)>>2|(e_&13107)<<2,e_=(e_&61680)>>4|(e_&3855)<<4,F6[v0]=((e_&65280)>>8|(e_&255)<<8)>>1;var e_,v0,_4=function(_,$,j){var N=_.length,Z=0,Y=new z_($);for(;Z<N;++Z)if(_[Z])++Y[_[Z]-1];var K=new z_($);for(Z=1;Z<$;++Z)K[Z]=K[Z-1]+Y[Z-1]<<1;var Q;if(j){Q=new z_(1<<$);var X=15-$;for(Z=0;Z<N;++Z)if(_[Z]){var q=Z<<4|_[Z],W=$-_[Z],V=K[_[Z]-1]++<<W;for(var U=V|(1<<W)-1;V<=U;++V)Q[F6[V]>>X]=q}}else{Q=new z_(N);for(Z=0;Z<N;++Z)if(_[Z])Q[Z]=F6[K[_[Z]-1]++]>>15-_[Z]}return Q},S4=new C1(288);for(v0=0;v0<144;++v0)S4[v0]=8;var v0;for(v0=144;v0<256;++v0)S4[v0]=9;var v0;for(v0=256;v0<280;++v0)S4[v0]=7;var v0;for(v0=280;v0<288;++v0)S4[v0]=8;var v0,p$=new C1(32);for(v0=0;v0<32;++v0)p$[v0]=5;var v0,JY=_4(S4,9,0),DY=_4(S4,9,1),EY=_4(p$,5,0),AY=_4(p$,5,1),B6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},c_=function(_,$,j){var N=$/8|0;return(_[N]|_[N+1]<<8)>>($&7)&j},V6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},J6=function(_){return(_+7)/8|0},h$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new C1(_.subarray($,j))};var MY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q_=function(_,$,j){var N=Error($||MY[_]);if(N.code=_,Error.captureStackTrace)Error.captureStackTrace(N,Q_);if(!j)throw N;return N},kY=function(_,$,j,N){var Z=_.length,Y=N?N.length:0;if(!Z||$.f&&!$.l)return j||new C1(0);var K=!j,Q=K||$.i!=2,X=$.i;if(K)j=new C1(Z*3);var q=function(D0){var q0=j.length;if(D0>q0){var y0=new C1(Math.max(q0*2,D0));y0.set(j),j=y0}},W=$.f||0,V=$.p||0,U=$.b||0,E=$.l,J=$.d,A=$.m,T=$.n,H=Z*8;do{if(!E){W=c_(_,V,1);var M=c_(_,V+1,3);if(V+=3,!M){var C=J6(V)+4,R=_[C-4]|_[C-3]<<8,D=C+R;if(D>Z){if(X)Q_(0);break}if(Q)q(U+R);j.set(_.subarray(C,D),U),$.b=U+=R,$.p=V=D*8,$.f=W;continue}else if(M==1)E=DY,J=AY,A=9,T=5;else if(M==2){var u=c_(_,V,31)+257,a=c_(_,V+10,15)+4,i=u+c_(_,V+5,31)+1;V+=14;var g=new C1(i),w=new C1(19);for(var l=0;l<a;++l)w[U6[l]]=c_(_,V+l*3,7);V+=a*3;var t=B6(w),V0=(1<<t)-1,d=_4(w,t,1);for(var l=0;l<i;){var N0=d[c_(_,V,V0)];V+=N0&15;var C=N0>>4;if(C<16)g[l++]=C;else{var Z0=0,Y0=0;if(C==16)Y0=3+c_(_,V,3),V+=2,Z0=g[l-1];else if(C==17)Y0=3+c_(_,V,7),V+=3;else if(C==18)Y0=11+c_(_,V,127),V+=7;while(Y0--)g[l++]=Z0}}var Q0=g.subarray(0,u),X0=g.subarray(u);A=B6(Q0),T=B6(X0),E=_4(Q0,A,1),J=_4(X0,T,1)}else Q_(1);if(V>H){if(X)Q_(0);break}}if(Q)q(U+131072);var U0=(1<<A)-1,z0=(1<<T)-1,O0=V;for(;;O0=V){var Z0=E[V6(_,V)&U0],p0=Z0>>4;if(V+=Z0&15,V>H){if(X)Q_(0);break}if(!Z0)Q_(2);if(p0<256)j[U++]=p0;else if(p0==256){O0=V,E=null;break}else{var k0=p0-254;if(p0>264){var l=p0-257,J0=v5[l];k0=c_(_,V,(1<<J0)-1)+I7[l],V+=J0}var c0=J[V6(_,V)&z0],l0=c0>>4;if(!c0)Q_(3);V+=c0&15;var X0=HY[l0];if(l0>3){var J0=f5[l0];X0+=V6(_,V)&(1<<J0)-1,V+=J0}if(V>H){if(X)Q_(0);break}if(Q)q(U+131072);var S0=U+k0;if(U<X0){var B0=Y-X0,P0=Math.min(X0,S0);if(B0+U<0)Q_(3);for(;U<P0;++U)j[U]=N[B0+U]}for(;U<S0;++U)j[U]=j[U-X0]}}if($.l=E,$.p=O0,$.b=U,$.f=W,E)W=1,$.m=A,$.d=J,$.n=T}while(!W);return U!=j.length&&K?h$(j,0,U):j.subarray(0,U)},U4=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8},m$=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8,_[N+2]|=j>>16},W6=function(_,$){var j=[];for(var N=0;N<_.length;++N)if(_[N])j.push({s:N,f:_[N]});var Z=j.length,Y=j.slice();if(!Z)return{t:T7,l:0};if(Z==1){var K=new C1(j[0].s+1);return K[j[0].s]=1,{t:K,l:1}}j.sort(function(D,u){return D.f-u.f}),j.push({s:-1,f:25001});var Q=j[0],X=j[1],q=0,W=1,V=2;j[0]={s:-1,f:Q.f+X.f,l:Q,r:X};while(W!=Z-1)Q=j[j[q].f<j[V].f?q++:V++],X=j[q!=W&&j[q].f<j[V].f?q++:V++],j[W++]={s:-1,f:Q.f+X.f,l:Q,r:X};var U=Y[0].s;for(var N=1;N<Z;++N)if(Y[N].s>U)U=Y[N].s;var E=new z_(U+1),J=O6(j[W-1],E,0);if(J>$){var N=0,A=0,T=J-$,H=1<<T;Y.sort(function(u,a){return E[a.s]-E[u.s]||u.f-a.f});for(;N<Z;++N){var M=Y[N].s;if(E[M]>$)A+=H-(1<<J-E[M]),E[M]=$;else break}A>>=T;while(A>0){var C=Y[N].s;if(E[C]<$)A-=1<<$-E[C]++-1;else++N}for(;N>=0&&A;--N){var R=Y[N].s;if(E[R]==$)--E[R],++A}J=$}return{t:new C1(E),l:J}},O6=function(_,$,j){return _.s==-1?Math.max(O6(_.l,$,j+1),O6(_.r,$,j+1)):$[_.s]=j},A7=function(_){var $=_.length;while($&&!_[--$]);var j=new z_(++$),N=0,Z=_[0],Y=1,K=function(X){j[N++]=X};for(var Q=1;Q<=$;++Q)if(_[Q]==Z&&Q!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)K(32754);if(Y>2)K(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){K(Z),--Y;for(;Y>6;Y-=6)K(8304);if(Y>2)K(Y-3<<5|8208),Y=0}while(Y--)K(Z);Y=1,Z=_[Q]}return{c:j.subarray(0,N),n:$}},g$=function(_,$){var j=0;for(var N=0;N<$.length;++N)j+=_[N]*$[N];return j},y7=function(_,$,j){var N=j.length,Z=J6($+2);_[Z]=N&255,_[Z+1]=N>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<N;++Y)_[Z+Y+4]=j[Y];return(Z+4+N)*8},M7=function(_,$,j,N,Z,Y,K,Q,X,q,W){U4($,W++,j),++Z[256];var V=W6(Z,15),U=V.t,E=V.l,J=W6(Y,15),A=J.t,T=J.l,H=A7(U),M=H.c,C=H.n,R=A7(A),D=R.c,u=R.n,a=new z_(19);for(var i=0;i<M.length;++i)++a[M[i]&31];for(var i=0;i<D.length;++i)++a[D[i]&31];var g=W6(a,7),w=g.t,l=g.l,t=19;for(;t>4&&!w[U6[t-1]];--t);var V0=q+5<<3,d=g$(Z,S4)+g$(Y,p$)+K,N0=g$(Z,U)+g$(Y,A)+K+14+3*t+g$(a,w)+2*a[16]+3*a[17]+7*a[18];if(X>=0&&V0<=d&&V0<=N0)return y7($,W,_.subarray(X,X+q));var Z0,Y0,Q0,X0;if(U4($,W,1+(N0<d)),W+=2,N0<d){Z0=_4(U,E,0),Y0=U,Q0=_4(A,T,0),X0=A;var U0=_4(w,l,0);U4($,W,C-257),U4($,W+5,u-1),U4($,W+10,t-4),W+=14;for(var i=0;i<t;++i)U4($,W+3*i,w[U6[i]]);W+=3*t;var z0=[M,D];for(var O0=0;O0<2;++O0){var p0=z0[O0];for(var i=0;i<p0.length;++i){var k0=p0[i]&31;if(U4($,W,U0[k0]),W+=w[k0],k0>15)U4($,W,p0[i]>>5&127),W+=p0[i]>>12}}}else Z0=JY,Y0=S4,Q0=EY,X0=p$;for(var i=0;i<Q;++i){var J0=N[i];if(J0>255){var k0=J0>>18&31;if(m$($,W,Z0[k0+257]),W+=Y0[k0+257],k0>7)U4($,W,J0>>23&31),W+=v5[k0];var c0=J0&31;if(m$($,W,Q0[c0]),W+=X0[c0],c0>3)m$($,W,J0>>5&8191),W+=f5[c0]}else m$($,W,Z0[J0]),W+=Y0[J0]}return m$($,W,Z0[256]),W+Y0[256]},PY=new H6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),T7=new C1(0),IY=function(_,$,j,N,Z,Y){var K=Y.z||_.length,Q=new C1(N+K+5*(1+Math.ceil(K/7000))+Z),X=Q.subarray(N,Q.length-Z),q=Y.l,W=(Y.r||0)&7;if($){if(W)X[0]=Y.r>>3;var V=PY[$-1],U=V>>13,E=V&8191,J=(1<<j)-1,A=Y.p||new z_(32768),T=Y.h||new z_(J+1),H=Math.ceil(j/3),M=2*H,C=function(d0){return(_[d0]^_[d0+1]<<H^_[d0+2]<<M)&J},R=new H6(25000),D=new z_(288),u=new z_(32),a=0,i=0,g=Y.i||0,w=0,l=Y.w||0,t=0;for(;g+2<K;++g){var V0=C(g),d=g&32767,N0=T[V0];if(A[d]=N0,T[V0]=d,l<=g){var Z0=K-g;if((a>7000||w>24576)&&(Z0>423||!q)){W=M7(_,X,0,R,D,u,i,w,t,g-t,W),w=a=i=0,t=g;for(var Y0=0;Y0<286;++Y0)D[Y0]=0;for(var Y0=0;Y0<30;++Y0)u[Y0]=0}var Q0=2,X0=0,U0=E,z0=d-N0&32767;if(Z0>2&&V0==C(g-z0)){var O0=Math.min(U,Z0)-1,p0=Math.min(32767,g),k0=Math.min(258,Z0);while(z0<=p0&&--U0&&d!=N0){if(_[g+Q0]==_[g+Q0-z0]){var J0=0;for(;J0<k0&&_[g+J0]==_[g+J0-z0];++J0);if(J0>Q0){if(Q0=J0,X0=z0,J0>O0)break;var c0=Math.min(z0,J0-2),l0=0;for(var Y0=0;Y0<c0;++Y0){var S0=g-z0+Y0&32767,B0=A[S0],P0=S0-B0&32767;if(P0>l0)l0=P0,N0=S0}}}d=N0,N0=A[d],z0+=d-N0&32767}}if(X0){R[w++]=268435456|z6[Q0]<<18|E7[X0];var D0=z6[Q0]&31,q0=E7[X0]&31;i+=v5[D0]+f5[q0],++D[257+D0],++u[q0],l=g+Q0,++a}else R[w++]=_[g],++D[_[g]]}}for(g=Math.max(g,l);g<K;++g)R[w++]=_[g],++D[_[g]];if(W=M7(_,X,q,R,D,u,i,w,t,g-t,W),!q)Y.r=W&7|X[W/8|0]<<3,W-=7,Y.h=T,Y.p=A,Y.i=g,Y.w=l}else{for(var g=Y.w||0;g<K+q;g+=65535){var y0=g+65535;if(y0>=K)X[W/8|0]=q,y0=K;W=y7(X,W+1,_.subarray(g,y0))}Y.i=K}return h$(Q,0,N+J6(W)+Z)};var S7=function(){var _=1,$=0;return{p:function(j){var N=_,Z=$,Y=j.length|0;for(var K=0;K!=Y;){var Q=Math.min(K+2655,Y);for(;K<Q;++K)Z+=N+=j[K];N=(N&65535)+15*(N>>16),Z=(Z&65535)+15*(Z>>16)}_=N,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},CY=function(_,$,j,N,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),K=new C1(Y.length+_.length);K.set(Y),K.set(_,Y.length),_=K,Z.w=Y.length}}return IY(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,N,Z)};var x7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var yY=function(_,$){var j=$.level,N=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=N<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=S7();Z.p($.dictionary),x7(_,2,Z.d())}},TY=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var L6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var N=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:N?N.length:0},this.o=new C1(32768),this.p=new C1(0),N)this.o.set(N)}return _.prototype.e=function($){if(!this.ondata)Q_(5);if(this.d)Q_(4);if(!this.p.length)this.p=$;else if($.length){var j=new C1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,N=kY(this.p,this.s,this.o);this.ondata(h$(N,j,this.s.b),this.d),this.o=h$(N,this.s.b-32768),this.s.b=this.o.length,this.p=h$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function w7(_,$){if(!$)$={};var j=S7();j.p(_);var N=CY(_,$,$.dictionary?6:2,4);return yY(N,$),x7(N,N.length-4,j.d()),N}var R7=function(){function _($,j){L6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(L6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(TY(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}L6.prototype.c.call(this,j)},_}();var SY=typeof TextDecoder<"u"&&new TextDecoder,xY=0;try{SY.decode(T7,{stream:!0}),xY=1}catch(_){}var wY=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],RY=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],vY=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],fY=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],bY=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],uY=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],mY=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],gY=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],b7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;b7[_]=$}function u7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function m7(_){let $=0n,j=u7(_);for(let N of j)$=$<<8n|BigInt(N);return $}function hY(_,$){let j=new Uint8Array($),N=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(N&0xffn),N>>=8n;return j}function G$(_,$,j){let N=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;N=N<<1n|Y}return N}function v7(_,$){let j=28n,N=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&N}function pY(_){let $=G$(m7(_),bY,64),j=$>>28n&0x0fffffffn,N=$&0x0fffffffn,Z=[];for(let Y of mY){j=v7(j,Y),N=v7(N,Y);let K=j<<28n|N;Z.push(G$(K,uY,56))}return Z}function cY(_){let $=0n;for(let j=0;j<8;j+=1){let N=BigInt((7-j)*6),Z=Number(_>>N&0x3fn),Y=(Z&32)>>4|Z&1,K=Z>>1&15;$=$<<4n|BigInt(gY[j][Y][K])}return $}function lY(_,$){let j=G$(_,vY,32)^BigInt($),N=cY(j);return G$(N,fY,32)}function f7(_,$){let j=pY($),N=G$(m7(_),wY,64),Z=N>>32n&0xffffffffn,Y=N&0xffffffffn;for(let Q of j){let X=Y,q=(Z^lY(Y,Q))&0xffffffffn;Z=X,Y=q}let K=Y<<32n|Z;return hY(G$(K,RY,64),8)}function iY(_){let $=String(_??""),j=new Uint8Array(8);for(let N=0;N<8;N+=1){let Z=N<$.length?$.charCodeAt(N)&255:0;j[N]=b7[Z]}return j}function g7(_,$){let j=u7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let N=iY(_),Z=new Uint8Array(16);return Z.set(f7(j.slice(0,8),N),0),Z.set(f7(j.slice(8,16),N),8),Z}var l_="vnc";function nY(_){return Number(_)}function dY(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],N=new Set;for(let Z of $){let Y=nY(Z);if(!Number.isFinite(Y))continue;let K=Number(Y);if(!N.has(K))j.push(K),N.add(K)}if(j.length>0)return j;return[5,2,1,0,-223]}function V$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function oY(_,$){let j=V$(_),N=V$($);if(!j.byteLength)return new Uint8Array(N);if(!N.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+N.byteLength);return Z.set(j,0),Z.set(N,j.byteLength),Z}function rY(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),N=0;for(let Z of _||[]){let Y=V$(Z);j.set(Y,N),N+=Y.byteLength}return j}function sY(){return(_)=>{let $=V$(_);try{let j=[],N=new R7((Z)=>{j.push(new Uint8Array(Z))});if(N.push($,!0),N.err)throw Error(N.msg||"zlib decompression error");return rY(j)}catch(j){try{let N=w7($);return N instanceof Uint8Array?N:new Uint8Array(N)}catch(N){let Z=N instanceof Error?N.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function aY(_){return new TextEncoder().encode(String(_||""))}function X$(_){return new TextDecoder().decode(V$(_))}function tY(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function eY(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function h7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function _K(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function $K(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),N=new DataView(j);N.setUint8(0,2),N.setUint8(1,0),N.setUint16(2,$.length,!1);let Z=4;for(let Y of $)N.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function p7(_,$,j,N=0,Z=0){let Y=new ArrayBuffer(10),K=new DataView(Y);return K.setUint8(0,3),K.setUint8(1,_?1:0),K.setUint16(2,N,!1),K.setUint16(4,Z,!1),K.setUint16(6,Math.max(0,$||0),!1),K.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function B$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function l7(_,$,j,N){if(j===1)return _[$];if(j===2)return N?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return N?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return N?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function jK(_,$,j,N){let Z=N||W$,Y=V$(_),K=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*K;if(Y.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let X=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),q=0,W=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=l7(Y,q,K,Z.bigEndian),E=B$(U>>>Z.redShift&Z.redMax,Z.redMax),J=B$(U>>>Z.greenShift&Z.greenMax,Z.greenMax),A=B$(U>>>Z.blueShift&Z.blueMax,Z.blueMax);X[W]=E,X[W+1]=J,X[W+2]=A,X[W+3]=255,q+=K,W+=4}return X}function z4(_,$,j){let N=j||W$,Z=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=l7(_,$,Z,N.bigEndian);return{rgba:[B$(Y>>>N.redShift&N.redMax,N.redMax),B$(Y>>>N.greenShift&N.greenMax,N.greenMax),B$(Y>>>N.blueShift&N.blueMax,N.blueMax),255],bytesPerPixel:Z}}function x4(_,$,j,N,Z,Y,K){if(!K)return;for(let Q=0;Q<Y;Q+=1)for(let X=0;X<Z;X+=1){let q=((N+Q)*$+(j+X))*4;_[q]=K[0],_[q+1]=K[1],_[q+2]=K[2],_[q+3]=K[3]}}function i7(_,$,j,N,Z,Y,K){for(let Q=0;Q<Y;Q+=1){let X=Q*Z*4,q=((N+Q)*$+j)*4;_.set(K.subarray(X,X+Z*4),q)}}function c7(_,$){let j=$,N=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(N+=Z,Z!==255)break}return{consumed:j-$,runLength:N}}function NK(_,$,j,N,Z,Y,K){let Q=Z||W$,X=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+q)return null;let W=_.slice($+4,$+4+q),V;try{V=K(W)}catch{return{consumed:4+q,skipped:!0}}let U=0,E=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);for(let J=0;J<N;J+=64){let A=Math.min(64,N-J);for(let T=0;T<j;T+=64){let H=Math.min(64,j-T);if(V.byteLength<U+1)return null;let M=V[U++],C=M&127,R=(M&128)!==0;if(!R&&C===0){let D=H*A*X;if(V.byteLength<U+D)return null;let u=Y(V.slice(U,U+D),H,A,Q);U+=D,i7(E,j,T,J,H,A,u);continue}if(!R&&C===1){let D=z4(V,U,Q);if(!D)return null;U+=D.bytesPerPixel,x4(E,j,T,J,H,A,D.rgba);continue}if(!R&&C>1&&C<=16){let D=[];for(let g=0;g<C;g+=1){let w=z4(V,U,Q);if(!w)return null;U+=w.bytesPerPixel,D.push(w.rgba)}let u=C<=2?1:C<=4?2:4,a=Math.ceil(H*u/8),i=a*A;if(V.byteLength<U+i)return null;for(let g=0;g<A;g+=1){let w=U+g*a;for(let l=0;l<H;l+=1){let t=l*u,V0=w+(t>>3),d=8-u-(t&7),N0=V[V0]>>d&(1<<u)-1;x4(E,j,T+l,J+g,1,1,D[N0])}}U+=i;continue}if(R&&C===0){let D=0,u=0;while(u<A){let a=z4(V,U,Q);if(!a)return null;U+=a.bytesPerPixel;let i=c7(V,U);if(!i)return null;U+=i.consumed;for(let g=0;g<i.runLength;g+=1)if(x4(E,j,T+D,J+u,1,1,a.rgba),D+=1,D>=H){if(D=0,u+=1,u>=A)break}}continue}if(R&&C>0){let D=[];for(let i=0;i<C;i+=1){let g=z4(V,U,Q);if(!g)return null;U+=g.bytesPerPixel,D.push(g.rgba)}let u=0,a=0;while(a<A){if(V.byteLength<U+1)return null;let i=V[U++],g=i,w=1;if(i&128){g=i&127;let t=c7(V,U);if(!t)return null;U+=t.consumed,w=t.runLength}let l=D[g];if(!l)return null;for(let t=0;t<w;t+=1)if(x4(E,j,T+u,J+a,1,1,l),u+=1,u>=H){if(u=0,a+=1,a>=A)break}}continue}return{consumed:4+q,skipped:!0}}}return{consumed:4+q,rgba:E,decompressed:V}}function ZK(_,$,j,N,Z){let Y=Z||W$,K=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+K)return null;let X=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),q=4+K+X*(K+8);if(_.byteLength<$+q)return null;let W=$+4,V=z4(_,W,Y);if(!V)return null;W+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);x4(U,j,0,0,j,N,V.rgba);for(let E=0;E<X;E+=1){let J=z4(_,W,Y);if(!J)return null;if(W+=J.bytesPerPixel,_.byteLength<W+8)return null;let A=new DataView(_.buffer,_.byteOffset+W,8),T=A.getUint16(0,!1),H=A.getUint16(2,!1),M=A.getUint16(4,!1),C=A.getUint16(6,!1);W+=8,x4(U,j,T,H,M,C,J.rgba)}return{consumed:W-$,rgba:U}}function YK(_,$,j,N,Z,Y){let K=Z||W$,Q=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8)),X=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4),q=$,W=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<N;U+=16){let E=Math.min(16,N-U);for(let J=0;J<j;J+=16){let A=Math.min(16,j-J);if(_.byteLength<q+1)return null;let T=_[q++];if(T&1){let H=A*E*Q;if(_.byteLength<q+H)return null;let M=Y(_.slice(q,q+H),A,E,K);q+=H,i7(X,j,J,U,A,E,M);continue}if(T&2){let H=z4(_,q,K);if(!H)return null;W=H.rgba,q+=H.bytesPerPixel}if(x4(X,j,J,U,A,E,W),T&4){let H=z4(_,q,K);if(!H)return null;V=H.rgba,q+=H.bytesPerPixel}if(T&8){if(_.byteLength<q+1)return null;let H=_[q++];for(let M=0;M<H;M+=1){let C=V;if(T&16){let w=z4(_,q,K);if(!w)return null;C=w.rgba,q+=w.bytesPerPixel}if(_.byteLength<q+2)return null;let R=_[q++],D=_[q++],u=R>>4,a=R&15,i=(D>>4)+1,g=(D&15)+1;x4(X,j,J+u,U+a,i,g,C)}}}}return{consumed:q-$,rgba:X}}var W$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class b5{protocol=l_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:jK,this.pipeline=_.pipeline||null,this.encodings=dY(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...W$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:sY()}receive(_){if(_)this.buffer=oY(this.buffer,_);let $=[],j=[],N=!0;while(N){if(N=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=X$(Z),K=tY(Y);if(!K)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=K,this.clientVersionText=eY(K),j.push(aY(this.clientVersionText)),$.push({type:"protocol-version",protocol:l_,server:K.text.trim(),client:this.clientVersionText.trim()}),this.state=K.minor>=7?"security-types":"security-type-33",N=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+X)break;this.consume(1);let q=X$(this.consume(4+X).slice(4));throw Error(q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:l_,types:Y});let K=null;if(Y.includes(2)&&this.password!==null)K=2;else if(Y.includes(1))K=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(K)),$.push({type:"security-selected",protocol:l_,securityType:K,label:K===2?"VNC Authentication":"None"}),this.state=K===2?"security-challenge":"security-result",N=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let X=X$(this.consume(4+Q).slice(4));throw Error(X||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:l_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",N=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:l_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(g7(this.password,Z)),this.state="security-result",N=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+K){let Q=X$(this.consume(4+K).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:l_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),K=Z.getUint16(2,!1),Q=h7(Z,4),X=Z.getUint32(20,!1);if(this.buffer.byteLength<24+X)break;let q=this.consume(24),W=new DataView(q.buffer,q.byteOffset,q.byteLength);if(this.framebufferWidth=W.getUint16(0,!1),this.framebufferHeight=W.getUint16(2,!1),this.serverPixelFormat=h7(W,4),this.serverName=X$(this.consume(X)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(_K(this.clientPixelFormat)),j.push($K(this.encodings)),j.push(p7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:l_,width:Y,height:K,name:this.serverName,pixelFormat:Q}),N=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,X=[],q=!1,W=!!this.pipeline;for(let U=0;U<K;U+=1){if(this.buffer.byteLength<Q+12){q=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),J=E.getUint16(0,!1),A=E.getUint16(2,!1),T=E.getUint16(4,!1),H=E.getUint16(6,!1),M=E.getInt32(8,!1);if(Q+=12,M===0){let C=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),R=T*H*C;if(this.buffer.byteLength<Q+R){q=!0;break}let D=this.buffer.slice(Q,Q+R);if(Q+=R,W)this.pipeline.processRawRect(D,J,A,T,H,this.clientPixelFormat),X.push({kind:"pipeline",x:J,y:A,width:T,height:H});else X.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:this.decodeRawRect(D,T,H,this.clientPixelFormat)});continue}if(M===2){let C=ZK(this.buffer,Q,T,H,this.clientPixelFormat);if(!C){q=!0;break}if(W){let R=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processRreRect(R,J,A,T,H,this.clientPixelFormat),X.push({kind:"pipeline",x:J,y:A,width:T,height:H})}else X.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});Q+=C.consumed;continue}if(M===1){if(this.buffer.byteLength<Q+4){q=!0;break}let C=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),R=C.getUint16(0,!1),D=C.getUint16(2,!1);if(Q+=4,W)this.pipeline.processCopyRect(J,A,T,H,R,D),X.push({kind:"pipeline",x:J,y:A,width:T,height:H});else X.push({kind:"copy",x:J,y:A,width:T,height:H,srcX:R,srcY:D});continue}if(M===16){let C=NK(this.buffer,Q,T,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!C){q=!0;break}if(Q+=C.consumed,C.skipped)continue;if(W&&C.decompressed)this.pipeline.processZrleTileData(C.decompressed,J,A,T,H,this.clientPixelFormat),X.push({kind:"pipeline",x:J,y:A,width:T,height:H});else X.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});continue}if(M===5){let C=YK(this.buffer,Q,T,H,this.clientPixelFormat,this.decodeRawRect);if(!C){q=!0;break}if(W){let R=this.buffer.slice(Q,Q+C.consumed);this.pipeline.processHextileRect(R,J,A,T,H,this.clientPixelFormat),X.push({kind:"pipeline",x:J,y:A,width:T,height:H})}else X.push({kind:"rgba",x:J,y:A,width:T,height:H,rgba:C.rgba});Q+=C.consumed;continue}if(M===-223){if(this.framebufferWidth=T,this.framebufferHeight=H,W)this.pipeline.initFramebuffer(T,H);X.push({kind:"resize",x:J,y:A,width:T,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(q)break;this.consume(Q);let V={type:"framebuffer-update",protocol:l_,width:this.framebufferWidth,height:this.framebufferHeight,rects:X};if(W)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(p7(!0,this.framebufferWidth,this.framebufferHeight)),N=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:l_}),N=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+K)break;this.consume(8);let Q=X$(this.consume(K));$.push({type:"clipboard",protocol:l_,text:Q}),N=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var $4="piclaw://vnc";function KK(_){let $=String(_||"");if($===$4)return null;if(!$.startsWith(`${$4}/`))return null;let j=$.slice(`${$4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function t4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function QK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),N=await j.json().catch(()=>({}));if(!j.ok)throw Error(N?.error||`HTTP ${j.status}`);return N}function qK(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function GK(_,$){let j=String(_||"").trim(),N=Math.floor(Number($||0));if(!j||!Number.isFinite(N)||N<=0||N>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${N}`}class n7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=KK($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${t4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${t4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${t4(Z.id)}" data-target-label="${t4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let N=()=>{let Z=GK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=u$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>N());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),K=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,K)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${t4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=u$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=u$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",N=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${N}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let N=j?.reveal===!0;if(this.canvas.style.display=N||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=N||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let N=D7($,j,this.canvas.width,this.canvas.height);this.displayScale=N,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*N))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*N))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return O7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(R5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=G6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~G6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of H7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(J7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=X6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??X6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((N)=>N.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let N=this.canvas?.getContext("2d",{alpha:!1});if(N){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);N.putImageData(Z,0,0),$=!0}}else for(let N of _.rects||[]){if(N.kind==="resize"){this.ensureCanvasSize(N.width,N.height);continue}if(N.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(N),$=!0;continue}if(N.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(N),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let N=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${N}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${N}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new b5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,N=$.receive(j);for(let Z of N.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of N.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let N=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${N}`),this.updateDisplayInfo(`Display protocol error: ${N}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(N))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await F7(),N={};if(j)N.pipeline=j,N.decodeRawRect=(Y,K,Q,X)=>j.decodeRawRectToRgba(Y,K,Q,X);let Z=u$(this.authPassword);if(Z!==null)N.password=Z;if($)N.encodings=$;if(this.protocol=new b5(N),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.canvas)this.canvas.style.display="none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display="";this.socketBoundary=new K6({url:qK(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await QK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${t4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var D6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===$4||$.startsWith(`${$4}/`)?9000:!1},mount(_,$){return new n7(_,$)}};function w4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function XK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,Y=N?.[2]||"",K=N?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),q=Z.startsWith("/")?Z:`${Q?`${Q}/`:""}${Z}`,W=[];for(let U of q.split("/")){if(!U||U===".")continue;if(U===".."){if(W.length>0)W.pop();continue}W.push(U)}let V=W.join("/");return`${G5(V)}${Y}${K}`}function c$(_){return _?.preview||null}function BK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function VK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function WK(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${w4($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${w4(y_($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${w4(s4($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${w4(VK($))}</span>`),N.push(`<span><strong>extension:</strong> ${w4(BK(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${w4(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function LK(_){let $=c$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=WK(_,$);if($.kind==="image"){let N=$.url||($.path?G5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${w4(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=U_($.text||"",null,{rewriteImageSrc:(Z)=>XK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${w4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class E6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=LK(this.context)}getContent(){let _=c$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=c$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var A6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=c$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new E6(_,$)}},M6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return c$(_)||_?.path?1:!1},mount(_,$){return new E6(_,$)}};var UK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),zK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},FK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function o7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function d7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class r7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=o7(j),Y=FK[Z]||"\uD83D\uDCC4",K=zK[Z]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${d7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${d7(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let X=Q.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=o7(_?.path);if(!$||!UK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new r7(_,$);return new s7(_,$)}};var OK=/\.(csv|tsv)$/i;function a7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${a7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!OK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new t7(_,$);return new e7(_,$)}};var HK=/\.pdf$/i;function JK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${JK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var I6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new _9(_,$);return new $9(_,$)}};var DK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function C6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class j9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${C6(Z)}" alt="${C6(N)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${C6(N)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class N9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!DK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new j9(_,$);return new N9(_,$)}};var EK=/\.(mp4|m4v|mov|webm|ogv)$/i;function AK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Z9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${AK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Y9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var T6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new Z9(_,$);return new Y9(_,$)}};function MK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function kK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var S6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function K9(_){let $=String(_||"").trim();return $?$:S6}function PK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function IK(_){let $="",j=32768;for(let N=0;N<_.length;N+=j)$+=String.fromCharCode(..._.subarray(N,N+j));return btoa($)}function CK(_,$="*"){try{let j=(Y)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},N=_.EditorUi;if(N?.prototype&&!N.prototype.__piclawWorkspaceSavePatched){let Y=N.prototype.saveData;N.prototype.saveData=function(K,Q,X,q,W,V){try{if(K&&X!=null&&j({filename:K,format:Q,data:X,mimeType:q,base64Encoded:Boolean(W),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},N.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(K,Q,X,q,W,V){try{if(Q&&j({filename:Q,data:K,mimeType:X,base64Encoded:Boolean(q),mode:W,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(N?.prototype&&N.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function Q9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${IK(j)}`}class q9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${kK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class G9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=PK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(CK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=S6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await Q9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await Q9(_,"image/png");else this.xmlData=K9(await _.text());else if(_.status===404)this.xmlData=S6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?K9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var x6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!MK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new q9(_,$);return new G9(_,$)}};class X9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new X9;var u5="workspaceExplorerScale",yK=["compact","default","comfortable"],TK=new Set(yK),SK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function B9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return TK.has(j)?j:$}function w6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function xK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function wK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function R6(_={}){let $=xK(_),j=_.stored?B9(_.stored,$):$;return wK(j,_)}function V9(_){return SK[B9(_)]}function RK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function v6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let N=$({path:j,mode:"edit"});if(!N||typeof N!=="object")return!1;return N.id!=="editor"}function W9(_,$,j={}){let N=j?.resolvePane;if(v6(_,N))return!0;return RK($)}var vK=60000,F9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function fK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return v6($,(j)=>$1.resolve(j))}function O9(_,$,j,N=0,Z=[]){if(!j&&F9(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)O9(Y,$,j,N+1,Z);return Z}function L9(_,$,j){if(!_)return"";let N=[],Z=(Y)=>{if(!j&&F9(Y))return;if(N.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)Z(K)};return Z(_),N.join("|")}function m6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,Y=!j||j.length!==N.length,K=N.map((Q)=>{let X=m6(Z.get(Q.path),Q);if(X!==Z.get(Q.path))Y=!0;return X});return Y?{...$,children:K}:_}function b6(_,$,j){if(!_)return _;if(_.path===$)return m6(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((Y)=>{let K=b6(Y,$,j);if(K!==Y)N=!0;return K});return N?{..._,children:Z}:_}var H9=4,f6=14,bK=8,uK=16;function J9(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=J9(N);return _.__bytes=j,j}function D9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=H9)return N;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let Q of Z){let X=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(X<=0)continue;if(Q.type==="dir")Y.push({kind:"dir",node:Q,size:X});else Y.push({kind:"file",name:Q.name,path:Q.path,size:X})}Y.sort((Q,X)=>X.size-Q.size);let K=Y;if(Y.length>f6){let Q=Y.slice(0,f6-1),X=Y.slice(f6-1),q=X.reduce((W,V)=>W+V.size,0);Q.push({kind:"other",name:`+${X.length} more`,path:`${N.path}/[other]`,size:q}),K=Q}return N.children=K.map((Q)=>{if(Q.kind==="dir")return D9(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),N}function U9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function E9(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${Y}%)`}function m5(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function g6(_,$,j,N,Z,Y){let K=Math.PI*2-0.0001,Q=Y-Z>K?Z+K:Y,X=m5(_,$,N,Z),q=m5(_,$,N,Q),W=m5(_,$,j,Q),V=m5(_,$,j,Z),U=Q-Z>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${N} ${N} 0 ${U} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var A9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function M9(_,$,j){let N=[],Z=[],Y=Math.max(0,Number($)||0),K=(Q,X,q,W)=>{let V=Array.isArray(Q?.children)?Q.children:[];if(!V.length)return;let U=Math.max(0,Number(Q.size)||0);if(U<=0)return;let E=q-X,J=X;V.forEach((A,T)=>{let H=Math.max(0,Number(A.size)||0);if(H<=0)return;let M=H/U,C=J,R=T===V.length-1?q:J+E*M;if(J=R,R-C<0.003)return;let D=A9[W];if(D){let u=E9(C,W,j);if(N.push({key:A.path,path:A.path,label:A.name,size:H,color:u,depth:W,startAngle:C,endAngle:R,innerRadius:D[0],outerRadius:D[1],d:g6(120,120,D[0],D[1],C,R)}),W===1)Z.push({key:A.path,name:A.name,size:H,pct:Y>0?H/Y*100:0,color:u})}if(W<H9)K(A,C,R,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function u6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=u6(N,$);if(Z)return Z}return null}function k9(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=A9[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,Q=E9(Y,1,N),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:Q,depth:1,startAngle:Y,endAngle:K,innerRadius:Z[0],outerRadius:Z[1],d:g6(120,120,Z[0],Z[1],Y,K)}],legend:[{key:q,name:_,size:j,pct:100,color:Q}]}}function z9(_,$=!1,j=!1){if(!_)return null;let N=J9(_),Z=D9(_,0),Y=Z.size||N,{segments:K,legend:Q}=M9(Z,Y,j);if(!K.length&&Y>0){let X=k9("[files]",Z.path,Y,j);K=X.segments,Q=X.legend}return{root:Z,totalSize:Y,segments:K,legend:Q,truncated:$,isDarkTheme:j}}function mK({payload:_}){if(!_)return null;let[$,j]=c(null),[N,Z]=c(_?.root?.path||"."),[Y,K]=c(()=>[_?.root?.path||"."]),[Q,X]=c(!1);p(()=>{let w=_?.root?.path||".";Z(w),K([w]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!N)return;X(!0);let w=setTimeout(()=>X(!1),180);return()=>clearTimeout(w)},[N]);let q=C0(()=>{return u6(_.root,N)||_.root},[_?.root,N]),W=q?.size||_.totalSize||0,{segments:V,legend:U}=C0(()=>{let w=M9(q,W,_.isDarkTheme);if(w.segments.length>0)return w;if(W<=0)return w;let l=q?.children?.length?"Total":"[files]";return k9(l,q?.path||_?.root?.path||".",W,_.isDarkTheme)},[q,W,_.isDarkTheme,_?.root?.path]),[E,J]=c(V),A=y(new Map),T=y(0);p(()=>{let w=A.current,l=new Map(V.map((N0)=>[N0.key,N0])),t=performance.now(),V0=220,d=(N0)=>{let Z0=Math.min(1,(N0-t)/220),Y0=Z0*(2-Z0),Q0=V.map((X0)=>{let z0=w.get(X0.key)||{startAngle:X0.startAngle,endAngle:X0.startAngle,innerRadius:X0.innerRadius,outerRadius:X0.innerRadius},O0=(l0,S0)=>l0+(S0-l0)*Y0,p0=O0(z0.startAngle,X0.startAngle),k0=O0(z0.endAngle,X0.endAngle),J0=O0(z0.innerRadius,X0.innerRadius),c0=O0(z0.outerRadius,X0.outerRadius);return{...X0,d:g6(120,120,J0,c0,p0,k0)}});if(J(Q0),Z0<1)T.current=requestAnimationFrame(d)};if(T.current)cancelAnimationFrame(T.current);return T.current=requestAnimationFrame(d),A.current=l,()=>{if(T.current)cancelAnimationFrame(T.current)}},[V]);let H=E.length?E:V,M=W>0?y_(W):"0 B",C=q?.name||"",D=(C&&C!=="."?C:"Total")||"Total",u=M,a=Y.length>1,i=(w)=>{if(!w?.path)return;let l=u6(_.root,w.path);if(!l||!Array.isArray(l.children)||l.children.length===0)return;K((t)=>[...t,l.path]),Z(l.path),j(null)},g=()=>{if(!a)return;K((w)=>{let l=w.slice(0,-1);return Z(l[l.length-1]||_?.root?.path||"."),l}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${W}>
                ${H.map((w)=>z`
                    <path
                        key=${w.key}
                        d=${w.d}
                        fill=${w.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===w.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(w)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(w)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>i(w)}
                    >
                        <title>${w.label} — ${y_(w.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${g}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${D}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${u}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((w)=>z`
                        <div key=${w.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${w.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${w.name}>${w.name}</span>
                            <span class="workspace-folder-starburst-size">${y_(w.size)}</span>
                            <span class="workspace-folder-starburst-pct">${w.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function gK({mediaId:_}){let[$,j]=c(null);if(p(()=>{if(!_)return;N$(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?y_($.metadata.size):"";return z`
        <a href=${C_(_)} download=${N} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&z`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function P9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:K,terminalVisible:Q=!1}){let[X,q]=c(null),[W,V]=c(new Set(["."])),[U,E]=c(null),[J,A]=c(null),[T,H]=c(""),[M,C]=c(null),[R,D]=c(null),[u,a]=c(!0),[i,g]=c(!1),[w,l]=c(null),[t,V0]=c(()=>Z$("workspaceShowHidden",!1)),[d,N0]=c(!1),[Z0,Y0]=c(null),[Q0,X0]=c(null),[U0,z0]=c(null),[O0,p0]=c(!1),[k0,J0]=c(null),[c0,l0]=c(()=>U9()),[S0,B0]=c(()=>R6({stored:L_(u5),...w6()})),[P0,D0]=c(!1),q0=y(W),y0=y(""),d0=y(null),m0=y(0),V1=y(new Set),E1=y(null),f0=y(new Map),i0=y(_),j1=y(N),Q1=y(null),o0=y(null),y1=y(null),N1=y(null),b1=y(null),q1=y(null),c1=y("."),b0=y(null),t1=y({path:null,dragging:!1,startX:0,startY:0}),X1=y({path:null,dragging:!1,startX:0,startY:0}),W1=y({path:null,timer:0}),F1=y(!1),T0=y(0),O1=y(new Map),x0=y(null),R0=y(null),a0=y(null),n1=y(null),m=y(null),G0=y(null),E0=y(t),F0=y($),r0=y(j??$),e1=y(0),l1=y(U0),i_=y(d),S_=y(Z0),__=y(null),t0=y({x:0,y:0}),T1=y(0),d1=y(null),S1=y(U),x_=y(J),w_=y(null),F4=y(M);i0.current=_,j1.current=N,p(()=>{q0.current=W},[W]),p(()=>{E0.current=t},[t]),p(()=>{F0.current=$},[$]),p(()=>{r0.current=j??$},[j,$]),p(()=>{l1.current=U0},[U0]),p(()=>{if(typeof window>"u")return;let F=()=>{B0(R6({stored:L_(u5),...w6()}))};F();let P=()=>F(),f=()=>F(),v=(j0)=>{if(!j0||j0.key===null||j0.key===u5)F()};window.addEventListener("resize",P),window.addEventListener("focus",f),window.addEventListener("storage",v);let o=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),W0=(j0,A0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",A0);else if(j0.addListener)j0.addListener(A0)},n=(j0,A0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",A0);else if(j0.removeListener)j0.removeListener(A0)};return W0(o,P),W0(K0,P),()=>{window.removeEventListener("resize",P),window.removeEventListener("focus",f),window.removeEventListener("storage",v),n(o,P),n(K0,P)}},[]),p(()=>{let F=(P)=>{let f=P?.detail?.path;if(!f)return;let v=f.split("/"),o=[];for(let K0=1;K0<v.length;K0++)o.push(v.slice(0,K0).join("/"));if(o.length)V((K0)=>{let W0=new Set(K0);W0.add(".");for(let n of o)W0.add(n);return W0});E(f),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),p(()=>{i_.current=d},[d]),p(()=>{S_.current=Z0},[Z0]),p(()=>{S1.current=U},[U]),p(()=>{x_.current=J},[J]),p(()=>{F4.current=M},[M]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>l0(U9());F();let P=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>F();if(P?.addEventListener)P.addEventListener("change",f);else if(P?.addListener)P.addListener(f);let v=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(v?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)v?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(P?.removeEventListener)P.removeEventListener("change",f);else if(P?.removeListener)P.removeListener(f);v?.disconnect()}},[]),p(()=>{if(!J)return;let F=b1.current;if(!F)return;let P=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(P)},[J]),p(()=>{if(!P0)return;let F=(f)=>{let v=f?.target;if(!(v instanceof Element))return;if(m.current?.contains(v))return;if(G0.current?.contains(v))return;D0(!1)},P=(f)=>{if(f?.key==="Escape")D0(!1),G0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",P),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",P)}},[P0]);let O4=async(F,P={})=>{let f=Boolean(P?.autoOpen),v=String(F||"").trim();g(!0),C(null),D(null);try{let o=await M8(v,20000);if(f&&v&&W9(v,o,{resolvePane:(K0)=>$1.resolve(K0)}))return j1.current?.(v,o),o;return C(o),o}catch(o){let K0={error:o.message||"Failed to load preview"};return C(K0),K0}finally{g(!1)}};Q1.current=O4;let $_=async()=>{if(!F0.current)return;try{let F=await P$("",1,E0.current),P=L9(F.root,q0.current,E0.current);if(P===y0.current){a(!1);return}if(y0.current=P,d0.current=F.root,!m0.current)m0.current=requestAnimationFrame(()=>{m0.current=0,q((f)=>m6(f,d0.current)),a(!1)})}catch(F){l(F.message||"Failed to load workspace"),a(!1)}},n_=async(F)=>{if(!F)return;if(V1.current.has(F))return;V1.current.add(F);try{let P=await P$(F,1,E0.current);q((f)=>b6(f,F,P.root))}catch(P){l(P.message||"Failed to load workspace")}finally{V1.current.delete(F)}};o0.current=n_;let Z1=x(()=>{let F=U;if(!F)return".";let P=f0.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[U]),j4=x((F)=>{let P=F?.closest?.(".workspace-row");if(!P)return null;let f=P.dataset.path,v=P.dataset.type;if(!f)return null;if(v==="dir")return f;if(f.includes("/")){let o=f.split("/");return o.pop(),o.join("/")||"."}return"."},[]),F_=x((F)=>{return j4(F?.target||null)},[j4]),g0=x((F)=>{l1.current=F,z0(F)},[]),L1=x(()=>{let F=W1.current;if(F?.timer)clearTimeout(F.timer);W1.current={path:null,timer:0}},[]),u0=x((F)=>{if(!F||F==="."){L1();return}let P=f0.current?.get(F);if(!P||P.type!=="dir"){L1();return}if(q0.current?.has(F)){L1();return}if(W1.current?.path===F)return;L1();let f=setTimeout(()=>{W1.current={path:null,timer:0},o0.current?.(F),V((v)=>{let o=new Set(v);return o.add(F),o})},600);W1.current={path:F,timer:f}},[L1]),x1=x((F,P)=>{if(t0.current={x:F,y:P},T1.current)return;T1.current=requestAnimationFrame(()=>{T1.current=0;let f=__.current;if(!f)return;let v=t0.current;f.style.transform=`translate(${v.x+12}px, ${v.y+12}px)`})},[]),H1=x((F)=>{if(!F)return;let f=(f0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f)return;X0({path:F,label:f})},[]),N4=x(()=>{if(X0(null),T1.current)cancelAnimationFrame(T1.current),T1.current=0;if(__.current)__.current.style.transform="translate(-9999px, -9999px)"},[]),H4=x((F)=>{if(!F)return".";let P=f0.current?.get(F);if(P&&P.type==="dir")return P.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[]),O_=x(()=>{A(null),H("")},[]),R4=x((F)=>{if(!F)return;let f=(f0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f||F===".")return;A(F),H(f)},[]),i$=x(async()=>{let F=x_.current;if(!F)return;let P=(T||"").trim();if(!P){O_();return}let f=f0.current?.get(F),v=(f?.name||F.split("/").pop()||F).trim();if(P===v){O_();return}try{let K0=(await I8(F,P))?.path||F,W0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(O_(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:K0,type:f?.type||"file"}})),f?.type==="dir")V((n)=>{let j0=new Set;for(let A0 of n)if(A0===F)j0.add(K0);else if(A0.startsWith(`${F}/`))j0.add(`${K0}${A0.slice(F.length)}`);else j0.add(A0);return j0});if(E(K0),f?.type==="dir")C(null),g(!1),D(null);else Q1.current?.(K0);o0.current?.(W0)}catch(o){l(o?.message||"Failed to rename file")}},[O_,T]),e4=x(async(F)=>{let v=F||".";for(let o=0;o<50;o+=1){let W0=`untitled${o===0?"":`-${o}`}.md`;try{let j0=(await P8(v,W0,""))?.path||(v==="."?W0:`${v}/${W0}`);if(v&&v!==".")V((A0)=>new Set([...A0,v]));E(j0),l(null),o0.current?.(v),Q1.current?.(j0);return}catch(n){if(n?.status===409||n?.code==="file_exists")continue;l(n?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),H_=x((F)=>{if(F?.stopPropagation?.(),O0)return;let P=H4(S1.current);e4(P)},[O0,H4,e4]);p(()=>{if(typeof window>"u")return;let F=(P)=>{let f=P?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;q((n)=>{let j0=n;for(let A0 of f){if(!A0?.root)continue;if(!j0||A0.path==="."||!A0.path)j0=A0.root;else j0=b6(j0,A0.path,A0.root)}if(j0)y0.current=L9(j0,q0.current,E0.current);return a(!1),j0});let v=S1.current;if(Boolean(v)&&f.some((n)=>{let j0=n?.path||"";if(!j0||j0===".")return!0;return v===j0||v.startsWith(`${j0}/`)||j0.startsWith(`${v}/`)}))O1.current.clear();if(!v||!F4.current)return;let K0=f0.current?.get(v);if(K0&&K0.type==="dir")return;if(f.some((n)=>{let j0=n?.path||"";if(!j0||j0===".")return!0;return v===j0||v.startsWith(`${j0}/`)}))Q1.current?.(v)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),E1.current=$_;let L$=y(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),P=r0.current??F0.current,f=document.visibilityState!=="hidden"&&(P||F.matches&&F0.current);I$(f,E0.current).catch(()=>{})}).current,j_=y(0),N_=y(()=>{if(j_.current)clearTimeout(j_.current);j_.current=setTimeout(()=>{j_.current=0,L$()},250)}).current;p(()=>{if(F0.current)E1.current?.();N_()},[$,j]),p(()=>{E1.current(),L$();let F=setInterval(()=>E1.current(),vK),P=Y$("previewHeight",null),f=Number.isFinite(P)?Math.min(Math.max(P,80),600):280;if(T0.current=f,y1.current)y1.current.style.setProperty("--preview-height",`${f}px`);let v=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),o=()=>N_();if(v.addEventListener)v.addEventListener("change",o);else if(v.addListener)v.addListener(o);return document.addEventListener("visibilitychange",o),()=>{if(clearInterval(F),m0.current)cancelAnimationFrame(m0.current),m0.current=0;if(v.removeEventListener)v.removeEventListener("change",o);else if(v.removeListener)v.removeListener(o);if(document.removeEventListener("visibilitychange",o),j_.current)clearTimeout(j_.current),j_.current=0;if(b0.current)clearTimeout(b0.current),b0.current=null;I$(!1,E0.current).catch(()=>{})}},[]);let d_=C0(()=>O9(X,W,t),[X,W,t]),J_=C0(()=>new Map(d_.map((F)=>[F.node.path,F.node])),[d_]),u1=C0(()=>V9(S0),[S0]);f0.current=J_;let n0=(U?f0.current.get(U):null)?.type==="dir";p(()=>{if(!U||!n0){J0(null),x0.current=null,R0.current=null;return}let F=U,P=`${t?"hidden":"visible"}:${U}`,f=O1.current,v=f.get(P);if(v?.root){f.delete(P),f.set(P,v);let W0=z9(v.root,Boolean(v.truncated),c0);if(W0)x0.current=W0,R0.current=U,J0({loading:!1,error:null,payload:W0});return}let o=x0.current,K0=R0.current;J0({loading:!0,error:null,payload:K0===U?o:null}),P$(U,bK,t).then((W0)=>{if(S1.current!==F)return;let n={root:W0?.root,truncated:Boolean(W0?.truncated)};f.delete(P),f.set(P,n);while(f.size>uK){let A0=f.keys().next().value;if(!A0)break;f.delete(A0)}let j0=z9(n.root,n.truncated,c0);x0.current=j0,R0.current=U,J0({loading:!1,error:null,payload:j0})}).catch((W0)=>{if(S1.current!==F)return;J0({loading:!1,error:W0?.message||"Failed to load folder size chart",payload:K0===U?o:null})})},[U,n0,t,c0]);let Z_=Boolean(M&&M.kind==="text"&&!n0&&(!M.size||M.size<=262144)),J4=Z_?"Open in editor":M?.size>262144?"File too large to edit":"File is not editable",D4=Boolean(U&&U!=="."),R_=Boolean(U&&!n0),D_=Boolean(U&&!n0),G_=U&&n0?X5(U,t):null,J1=x(()=>D0(!1),[]),G1=x(async(F)=>{J1();try{await F?.()}catch{}},[J1]);p(()=>{let F=a0.current;if(n1.current)n1.current.dispose(),n1.current=null;if(!F)return;if(F.innerHTML="",!U||n0||!M||M.error)return;let P={path:U,content:typeof M.text==="string"?M.text:void 0,mtime:M.mtime,size:M.size,preview:M,mode:"view"},f=$1.resolve(P)||$1.get("workspace-preview-default");if(!f)return;let v=f.mount(F,P);return n1.current=v,()=>{if(n1.current===v)v.dispose(),n1.current=null;F.innerHTML=""}},[U,n0,M]);let o1=(F)=>{let P=F?.target;if(P instanceof Element)return P;return P?.parentElement||null},k1=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},Z4=y((F)=>{let P=o1(F),f=P?.closest?.("[data-path]");if(!f)return;let v=f.dataset.path;if(!v||v===".")return;let o=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),K0=Boolean(P?.closest?.(".workspace-caret"));if(o||K0)return;if(x_.current===v)return;R4(v)}).current,Y4=y((F)=>{if(F1.current){F1.current=!1;return}let P=o1(F),f=P?.closest?.("[data-path]");if(N1.current?.focus?.(),!f)return;let v=f.dataset.path,o=f.dataset.type,K0=Boolean(P?.closest?.(".workspace-caret")),W0=Boolean(P?.closest?.("button"))||Boolean(P?.closest?.("a"))||Boolean(P?.closest?.("input")),n=S1.current===v,j0=x_.current;if(j0){if(j0===v)return;O_()}let A0=o==="file"&&w_.current===v&&!K0&&!W0;if(o==="dir"){if(w_.current=null,E(v),C(null),D(null),g(!1),!q0.current.has(v))o0.current?.(v);if(n&&!K0)return;V((K_)=>{let L=new Set(K_);if(L.has(v))L.delete(v);else L.add(v);return L})}else{w_.current=null,E(v);let g1=f0.current.get(v);if(g1)i0.current?.(g1.path,g1);if(!W0&&!K0&&fK(v))j1.current?.(v,F4.current);else{let L=!W0&&!K0;Q1.current?.(v,{autoOpen:L})}}}).current,E4=y(()=>{y0.current="",E1.current(),Array.from(q0.current||[]).filter((P)=>P&&P!==".").forEach((P)=>o0.current?.(P))}).current,r1=y(()=>{w_.current=null,E(null),C(null),D(null),g(!1)}).current,K4=y(()=>{V0((F)=>{let P=!F;if(typeof window<"u")K1("workspaceShowHidden",String(P));return E0.current=P,I$(!0,P).catch(()=>{}),y0.current="",E1.current?.(),Array.from(q0.current||[]).filter((v)=>v&&v!==".").forEach((v)=>o0.current?.(v)),P})}).current,v4=y((F)=>{if(o1(F)?.closest?.("[data-path]"))return;r1()}).current,v_=x(async(F)=>{if(!F)return;let P=F.split("/").pop()||F;if(!window.confirm(`Delete "${P}"? This cannot be undone.`))return;try{await y8(F);let v=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(S1.current===F)r1();o0.current?.(v),l(null)}catch(v){C((o)=>({...o||{},error:v.message||"Failed to delete file"}))}},[r1]),E_=x((F)=>{let P=N1.current;if(!P||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;P.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X_=x((F)=>{let P=d_;if(!P||P.length===0)return;let f=U?P.findIndex((v)=>v.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let v=Math.min(f+1,P.length-1),o=P[v];if(!o)return;if(E(o.node.path),o.node.type!=="dir")i0.current?.(o.node.path,o.node),Q1.current?.(o.node.path);else C(null),g(!1),D(null);E_(o.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let v=f<=0?0:f-1,o=P[v];if(!o)return;if(E(o.node.path),o.node.type!=="dir")i0.current?.(o.node.path,o.node),Q1.current?.(o.node.path);else C(null),g(!1),D(null);E_(o.node.path);return}if(F.key==="ArrowRight"&&f>=0){let v=P[f];if(v?.node?.type==="dir"&&!W.has(v.node.path))F.preventDefault(),o0.current?.(v.node.path),V((o)=>new Set([...o,v.node.path]));return}if(F.key==="ArrowLeft"&&f>=0){let v=P[f];if(v?.node?.type==="dir"&&W.has(v.node.path))F.preventDefault(),V((o)=>{let K0=new Set(o);return K0.delete(v.node.path),K0});return}if(F.key==="Enter"&&f>=0){F.preventDefault();let v=P[f];if(!v)return;let o=v.node.path;if(v.node.type==="dir"){if(!q0.current.has(o))o0.current?.(o);V((W0)=>{let n=new Set(W0);if(n.has(o))n.delete(o);else n.add(o);return n}),C(null),D(null),g(!1)}else i0.current?.(o,v.node),Q1.current?.(o);return}if((F.key==="Delete"||F.key==="Backspace")&&f>=0){let v=P[f];if(!v||v.node.type==="dir")return;F.preventDefault(),v_(v.node.path);return}if(F.key==="Escape")F.preventDefault(),r1()},[r1,v_,W,d_,E_,U]),f_=x((F)=>{let P=o1(F),f=P?.closest?.(".workspace-row");if(!f)return;let v=f.dataset.type,o=f.dataset.path;if(!o||o===".")return;if(x_.current===o)return;let K0=F?.touches?.[0];if(!K0)return;if(t1.current={path:k1(P)?o:null,dragging:!1,startX:K0.clientX,startY:K0.clientY},v!=="file")return;if(b0.current)clearTimeout(b0.current);b0.current=setTimeout(()=>{if(b0.current=null,t1.current?.dragging)return;v_(o)},600)},[v_]),m1=x(()=>{if(b0.current)clearTimeout(b0.current),b0.current=null;let F=t1.current;if(F?.dragging&&F.path){let P=l1.current||Z1(),f=d1.current;if(typeof f==="function")f(F.path,P)}t1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,N0(!1),Y0(null),g0(null),L1(),N4()},[Z1,N4,g0,L1]),f4=x((F)=>{let P=t1.current,f=F?.touches?.[0];if(!f||!P?.path){if(b0.current)clearTimeout(b0.current),b0.current=null;return}let v=Math.abs(f.clientX-P.startX),o=Math.abs(f.clientY-P.startY),K0=v>8||o>8;if(K0&&b0.current)clearTimeout(b0.current),b0.current=null;if(!P.dragging&&K0)P.dragging=!0,N0(!0),Y0("move"),H1(P.path);if(P.dragging){F.preventDefault(),x1(f.clientX,f.clientY);let W0=document.elementFromPoint(f.clientX,f.clientY),n=j4(W0)||Z1();if(l1.current!==n)g0(n);u0(n)}},[j4,Z1,H1,x1,g0,u0]),b4=y((F)=>{F.preventDefault();let P=y1.current;if(!P)return;let f=F.clientY,v=T0.current||280,o=F.currentTarget;o.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=f,W0=(j0)=>{K0=j0.clientY;let A0=P.clientHeight-80,g1=Math.min(Math.max(v-(j0.clientY-f),80),A0);P.style.setProperty("--preview-height",`${g1}px`),T0.current=g1},n=()=>{let j0=P.clientHeight-80,A0=Math.min(Math.max(v-(K0-f),80),j0);T0.current=A0,o.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(A0))),document.removeEventListener("mousemove",W0),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",W0),document.addEventListener("mouseup",n)}).current,A4=y((F)=>{F.preventDefault();let P=y1.current;if(!P)return;let f=F.touches[0];if(!f)return;let v=f.clientY,o=T0.current||280,K0=F.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let W0=(j0)=>{let A0=j0.touches[0];if(!A0)return;j0.preventDefault();let g1=P.clientHeight-80,K_=Math.min(Math.max(o-(A0.clientY-v),80),g1);P.style.setProperty("--preview-height",`${K_}px`),T0.current=K_},n=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(T0.current||o))),document.removeEventListener("touchmove",W0),document.removeEventListener("touchend",n),document.removeEventListener("touchcancel",n)};document.addEventListener("touchmove",W0,{passive:!1}),document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}).current,o_=async()=>{if(!U)return;try{let F=await k8(U);if(F.media_id)D(F.media_id)}catch(F){C((P)=>({...P||{},error:F.message||"Failed to attach"}))}},b_=async()=>{if(!U||n0)return;await v_(U)},Q4=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},w1=x((F)=>{if(!Q4(F))return;if(F.preventDefault(),e1.current+=1,!i_.current)N0(!0);Y0("upload");let P=F_(F)||Z1();g0(P),u0(P)},[Z1,F_,g0,u0]),u_=x((F)=>{if(!Q4(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!i_.current)N0(!0);if(S_.current!=="upload")Y0("upload");let P=F_(F)||Z1();if(l1.current!==P)g0(P);u0(P)},[Z1,F_,g0,u0]),m_=x((F)=>{if(!Q4(F))return;if(F.preventDefault(),e1.current=Math.max(0,e1.current-1),e1.current===0)N0(!1),Y0(null),g0(null),L1()},[g0,L1]),r_=x(async(F,P=".")=>{let f=Array.from(F||[]);if(f.length===0)return;let v=P&&P!==""?P:".",o=v!=="."?v:"workspace root";p0(!0);try{let K0=null;for(let W0 of f)try{K0=await q5(W0,v)}catch(n){let j0=n?.status,A0=n?.code;if(j0===409||A0==="file_exists"){let g1=W0?.name||"file";if(!window.confirm(`"${g1}" already exists in ${o}. Overwrite?`))continue;K0=await q5(W0,v,{overwrite:!0})}else throw n}if(K0?.path)w_.current=K0.path,E(K0.path),Q1.current?.(K0.path);o0.current?.(v)}catch(K0){l(K0.message||"Failed to upload file")}finally{p0(!1)}},[]),M4=x(async(F,P)=>{if(!F)return;let f=f0.current?.get(F);if(!f)return;let v=P&&P!==""?P:".",o=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(v===o)return;try{let W0=(await C8(F,v))?.path||F;if(f.type==="dir")V((n)=>{let j0=new Set;for(let A0 of n)if(A0===F)j0.add(W0);else if(A0.startsWith(`${F}/`))j0.add(`${W0}${A0.slice(F.length)}`);else j0.add(A0);return j0});if(E(W0),f.type==="dir")C(null),g(!1),D(null);else Q1.current?.(W0);o0.current?.(o),o0.current?.(v)}catch(K0){l(K0?.message||"Failed to move entry")}},[]);d1.current=M4;let U1=x(async(F)=>{if(!Q4(F))return;F.preventDefault(),e1.current=0,N0(!1),Y0(null),z0(null),L1();let P=Array.from(F?.dataTransfer?.files||[]);if(P.length===0)return;let f=l1.current||F_(F)||Z1();await r_(P,f)},[Z1,F_,r_]),k4=x((F)=>{if(F?.stopPropagation?.(),O0)return;let P=F?.currentTarget?.dataset?.uploadTarget||".";c1.current=P,q1.current?.click()},[O0]),s1=x(()=>{if(O0)return;let F=S1.current,P=F?f0.current?.get(F):null;c1.current=P?.type==="dir"?P.path:".",q1.current?.click()},[O0]),Y_=x(()=>{G1(()=>H_(null))},[G1,H_]),A_=x(()=>{G1(()=>s1())},[G1,s1]),u4=x(()=>{G1(()=>E4())},[G1,E4]),P4=x(()=>{G1(()=>K4())},[G1,K4]),q4=x(()=>{if(!U||!Z_)return;G1(()=>j1.current?.(U,M))},[G1,U,Z_,M]),I4=x(()=>{if(!U||U===".")return;G1(()=>R4(U))},[G1,U,R4]),B_=x(()=>{if(!U||n0)return;G1(()=>b_())},[G1,U,n0,b_]),m4=x(()=>{if(!U||n0)return;G1(()=>o_())},[G1,U,n0,o_]),g4=x(()=>{if(!G_)return;if(J1(),typeof window<"u")window.open(G_,"_blank","noopener")},[J1,G_]),C4=x(()=>{J1(),Z?.()},[J1,Z]),_$=x(()=>{J1(),Y?.()},[J1,Y]),M_=x(()=>{J1(),K?.()},[J1,K]),h4=x((F)=>{if(!F||F.button!==0)return;let P=F.currentTarget;if(!P||!P.dataset)return;let f=P.dataset.path;if(!f||f===".")return;if(x_.current===f)return;let v=o1(F);if(v?.closest?.("button, a, input, .workspace-caret"))return;if(!k1(v))return;F.preventDefault(),X1.current={path:f,dragging:!1,startX:F.clientX,startY:F.clientY};let o=(W0)=>{let n=X1.current;if(!n?.path)return;let j0=Math.abs(W0.clientX-n.startX),A0=Math.abs(W0.clientY-n.startY),g1=j0>4||A0>4;if(!n.dragging&&g1)n.dragging=!0,F1.current=!0,N0(!0),Y0("move"),H1(n.path),x1(W0.clientX,W0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(n.dragging){W0.preventDefault(),x1(W0.clientX,W0.clientY);let K_=document.elementFromPoint(W0.clientX,W0.clientY),L=j4(K_)||Z1();if(l1.current!==L)g0(L);u0(L)}},K0=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",K0);let W0=X1.current;if(W0?.dragging&&W0.path){let n=l1.current||Z1(),j0=d1.current;if(typeof j0==="function")j0(W0.path,n)}X1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,N0(!1),Y0(null),g0(null),L1(),N4(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F1.current=!1},0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",K0)},[j4,Z1,H1,x1,N4,g0,u0,L1]),g_=x(async(F)=>{let P=Array.from(F?.target?.files||[]);if(P.length===0)return;let f=c1.current||".";if(await r_(P,f),c1.current=".",F?.target)F.target.value=""},[r_]);return z`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${S0}
            ref=${y1}
            onDragEnter=${w1}
            onDragOver=${u_}
            onDragLeave=${m_}
            onDrop=${U1}
        >
            <input type="file" multiple style="display:none" ref=${q1} onChange=${g_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${G0}
                            class=${`workspace-menu-button${P0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),D0((P)=>!P)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${P0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${P0&&z`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y_} disabled=${O0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${A_} disabled=${O0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${t?" active":""}`} role="menuitem" onClick=${P4}>
                                    ${t?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!n0&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q4} disabled=${!Z_}>Open in editor</button>
                                `}
                                ${D4&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I4}>Rename selected</button>
                                `}
                                ${D_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Download selected file</button>
                                `}
                                ${G_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g4}>Download selected folder (zip)</button>
                                `}
                                ${R_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${B_}>Delete selected file</button>
                                `}

                                ${(Z||Y||K)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Z&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_$}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${K&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M_}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${H_} title="New file" disabled=${O0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${E4} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${v4}>
                ${O0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${u&&z`<div class="workspace-loading">Loading…</div>`}
                ${w&&z`<div class="workspace-error">${w}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${N1}
                        tabIndex="0"
                        onClick=${Y4}
                        onDblClick=${Z4}
                        onKeyDown=${X_}
                        onTouchStart=${f_}
                        onTouchEnd=${m1}
                        onTouchMove=${f4}
                        onTouchCancel=${m1}
                    >
                        ${d_.map(({node:F,depth:P})=>{let f=F.type==="dir",v=F.path===U,o=F.path===J,K0=f&&W.has(F.path),W0=U0&&F.path===U0,n=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${v?" selected":""}${W0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+P*u1.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${h4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?K0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${o?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${b1}
                                                value=${T}
                                                onInput=${(j0)=>H(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),i$();else if(j0.key==="Escape")j0.preventDefault(),O_()}}
                                                onBlur=${O_}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${f&&!K0&&n>0&&z`
                                        <span class="workspace-count">${n}</span>
                                    `}
                                    ${f&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${k4}
                                            disabled=${O0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${A4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${H_} title="New file" disabled=${O0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!n0&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Z_&&j1.current?.(U,M)}
                                    title=${J4}
                                    disabled=${!Z_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${b_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${n0?z`
                                    <button class="workspace-download" onClick=${s1}
                                        title="Upload files to this folder" disabled=${O0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${X5(U,t)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${o_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${i&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${M?.error&&z`<div class="workspace-error">${M.error}</div>`}
                    ${n0&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${k0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${k0?.error&&z`<div class="workspace-error">${k0.error}</div>`}
                        ${k0?.payload&&k0.payload.segments?.length>0&&z`
                            <${mK} payload=${k0.payload} />
                        `}
                        ${k0?.payload&&(!k0.payload.segments||k0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${M&&!M.error&&!n0&&z`
                        <div class="workspace-preview-body" ref=${a0}></div>
                    `}
                    ${R&&z`
                        <div class="workspace-download-card">
                            <${gK} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${Q0&&z`
                <div class="workspace-drag-ghost" ref=${__}>${Q0.label}</div>
            `}
        </aside>
    `}var hK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,pK=/\.(csv|tsv)$/i,cK=/\.pdf$/i,lK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,I9=/\.drawio(\.xml|\.svg|\.png)?$/i;function C9({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:Y,onTogglePin:K,onTogglePreview:Q,previewTabs:X,onToggleDock:q,dockVisible:W,onToggleZen:V,zenMode:U,onPopOutTab:E}){let[J,A]=c(null),T=y(null);p(()=>{if(!J)return;let D=(u)=>{if(u.type==="keydown"&&u.key!=="Escape")return;A(null)};return document.addEventListener("click",D),document.addEventListener("keydown",D),()=>{document.removeEventListener("click",D),document.removeEventListener("keydown",D)}},[J]),p(()=>{let D=(u)=>{if(u.ctrlKey&&u.key==="Tab"){if(u.preventDefault(),!_.length)return;let a=_.findIndex((i)=>i.id===$);if(u.shiftKey){let i=_[(a-1+_.length)%_.length];j?.(i.id)}else{let i=_[(a+1)%_.length];j?.(i.id)}return}if((u.ctrlKey||u.metaKey)&&u.key==="w"){let a=document.querySelector(".editor-pane");if(a&&a.contains(document.activeElement)){if(u.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[_,$,j,N]);let H=x((D,u)=>{if(D.button===1){D.preventDefault(),N?.(u);return}if(D.button===0)j?.(u)},[j,N]),M=x((D,u)=>{D.preventDefault(),A({id:u,x:D.clientX,y:D.clientY})},[]),C=x((D)=>{D.preventDefault(),D.stopPropagation()},[]),R=x((D,u)=>{D.preventDefault(),D.stopPropagation(),N?.(u)},[N]);if(p(()=>{if(!$||!T.current)return;let D=T.current.querySelector(".tab-item.active");if(D)D.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${T} role="tablist">
            ${_.map((D)=>z`
                <div
                    key=${D.id}
                    class=${`tab-item${D.id===$?" active":""}${D.dirty?" dirty":""}${D.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${D.id===$}
                    title=${D.path}
                    onMouseDown=${(u)=>H(u,D.id)}
                    onContextMenu=${(u)=>M(u,D.id)}
                >
                    ${D.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${D.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${C}
                        onClick=${(u)=>R(u,D.id)}
                        title=${D.dirty?"Unsaved changes":"Close"}
                        aria-label=${D.dirty?"Unsaved changes":`Close ${D.label}`}
                    >
                        ${D.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${q}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&z`
                <button
                    class=${`tab-strip-zen-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${U?"Exit":"Enter"} zen mode`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${U?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${J&&z`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{N?.(J.id),A(null)}}>Close</button>
                <button onClick=${()=>{Z?.(J.id),A(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),A(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(J.id),A(null)}}>
                    ${_.find((D)=>D.id===J.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${E&&z`
                    <button onClick=${()=>{let D=_.find((u)=>u.id===J.id);E(J.id,D?.label),A(null)}}>Open in Window</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{Q(J.id),A(null)}}>
                        ${X?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${hK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(J.id),u=J.id.split("/").pop()||"document",a="/office-viewer/?url="+encodeURIComponent(D)+"&name="+encodeURIComponent(u);window.open(a,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${pK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${cK.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${lK.test(J.id)&&!I9.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/image-viewer/?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
                ${I9.test(J.id)&&z`
                    <hr />
                    <button onClick=${()=>{let D="/drawio/edit?path="+encodeURIComponent(J.id);window.open(D,"_blank","noopener"),A(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var iK=400,h6=60,y9=220,p6="mdPreviewHeight";function nK(){try{let _=localStorage.getItem(p6),$=_?Number(_):NaN;return Number.isFinite($)&&$>=h6?$:y9}catch{return y9}}function c6({getContent:_,path:$,onClose:j}){let[N,Z]=c(""),[Y,K]=c(nK),Q=y(null),X=y(null),q=y(""),W=y(_);return W.current=_,p(()=>{let E=()=>{let A=W.current?.()||"";if(A===q.current)return;q.current=A;try{let T=U_(A,null,{sanitize:!1});Z(T)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};E();let J=setInterval(E,iK);return()=>clearInterval(J)},[]),p(()=>{if(Q.current&&N)V4(Q.current).catch(()=>{})},[N]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(E)=>{E.preventDefault();let J=E.clientY,A=X.current?.offsetHeight||Y,T=X.current?.parentElement,H=T?T.offsetHeight*0.7:500,M=E.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let C=(D)=>{let u=Math.min(Math.max(A-(D.clientY-J),h6),H);K(u)},R=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(p6,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",R)}}
            onTouchStart=${(E)=>{E.preventDefault();let J=E.touches[0];if(!J)return;let A=J.clientY,T=X.current?.offsetHeight||Y,H=X.current?.parentElement,M=H?H.offsetHeight*0.7:500,C=E.currentTarget;C.classList.add("dragging"),document.body.style.userSelect="none";let R=(u)=>{let a=u.touches[0];if(!a)return;u.preventDefault();let i=Math.min(Math.max(T-(a.clientY-A),h6),M);K(i)},D=()=>{C.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(p6,String(Math.round(X.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",R),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function T9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:N,chatJid:Z}){let Y=y(_);Y.current=_;let K=y($);K.current=$;let Q=y(j);Q.current=j;let X=y(N);X.current=N,p(()=>{Q.current();let q=new B5((V,U)=>Y.current(V,U),(V)=>K.current(V),{chatJid:Z});q.connect();let W=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),q.disconnect()}},[Z])}function S9(){let[_,$]=c(!1),[j,N]=c("default"),Z=y(!1);p(()=>{let X=Z$("notificationsEnabled",!1);if(Z.current=X,$(X),typeof Notification<"u")N(Notification.permission)},[]),p(()=>{Z.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),K=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(N(q||"default"),q!=="granted"){Z.current=!1,$(!1),K1("notificationsEnabled","false");return}}let X=!Z.current;Z.current=X,$(X),K1("notificationsEnabled",String(X))},[Y]),Q=x((X,q)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(X,{body:q});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:Q}}var l$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function x9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[N,Z]=c(null),[Y,K]=c(!1),Q=y(!1),X=y(null),q=y(!1),W=y(null),V=y(null),U=y(0);p(()=>{Q.current=Y},[Y]),p(()=>{V.current=N},[N]),p(()=>{U.current+=1,W.current=null,q.current=!1,Q.current=!1,K(!1)},[j]);let E=x(async(T=null)=>{let H=U.current;try{if(T){let M=await X8(T,50,0,j);if(H!==U.current)return;Z(M.posts),K(!1)}else{let M=await n4(10,null,j);if(H!==U.current)return;Z(M.posts),K(M.has_more)}}catch(M){if(H!==U.current)return;console.error("Failed to load posts:",M)}},[j]),J=x(async()=>{let T=U.current;try{let H=await n4(10,null,j);if(T!==U.current)return;Z((M)=>{if(!M||M.length===0)return H.posts;return l$([...H.posts,...M])}),K((M)=>M||H.has_more)}catch(H){if(T!==U.current)return;console.error("Failed to refresh timeline:",H)}},[j]),A=x(async(T={})=>{let H=U.current,M=V.current;if(!M||M.length===0)return;if(q.current)return;let{preserveScroll:C=!0,preserveMode:R="top",allowRepeat:D=!1}=T,u=(g)=>{if(!C){g();return}if(R==="top")$(g);else _(g)},i=M.slice().sort((g,w)=>g.id-w.id)[0]?.id;if(!Number.isFinite(i))return;if(!D&&W.current===i)return;q.current=!0,W.current=i;try{let g=await n4(10,i,j);if(H!==U.current)return;if(g.posts.length>0)u(()=>{Z((w)=>l$([...g.posts,...w||[]])),K(g.has_more)});else K(!1)}catch(g){if(H!==U.current)return;console.error("Failed to load more posts:",g)}finally{if(H===U.current)q.current=!1}},[j,_,$]);return p(()=>{X.current=A},[A]),{posts:N,setPosts:Z,hasMore:Y,setHasMore:K,hasMoreRef:Q,loadPosts:E,refreshTimeline:J,loadMore:A,loadMoreRef:X,loadingMoreRef:q,lastBeforeIdRef:W}}function w9(){let[_,$]=c(null),[j,N]=c({text:"",totalLines:0}),[Z,Y]=c(""),[K,Q]=c({text:"",totalLines:0}),[X,q]=c(null),[W,V]=c(null),[U,E]=c(null),J=y(null),A=y(0),T=y(!1),H=y(""),M=y(""),C=y(null),R=y(null),D=y(null),u=y(null),a=y(!1),i=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:Y,agentThought:K,setAgentThought:Q,pendingRequest:X,setPendingRequest:q,currentTurnId:W,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:E,lastAgentEventRef:J,lastSilenceNoticeRef:A,isAgentRunningRef:T,draftBufferRef:H,thoughtBufferRef:M,pendingRequestRef:C,stalledPostIdRef:R,currentTurnIdRef:D,steerQueuedTurnIdRef:u,thoughtExpandedRef:a,draftExpandedRef:i}}function R9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,E=$.current||280,J=W.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientX;let C=Math.min(Math.max(E+(M.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},H=()=>{let M=Math.min(Math.max(E+(A-U),160),600);$.current=M,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,Y=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientX,J=$.current||280,A=W.currentTarget;A.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J+(C.clientX-E),160),600);V.style.setProperty("--sidebar-width",`${R}px`),$.current=R},H=()=>{A.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,E=j.current||$.current||280,J=W.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientX;let C=Math.min(Math.max(E+(M.clientX-U),200),800);V.style.setProperty("--editor-width",`${C}px`),j.current=C},H=()=>{let M=Math.min(Math.max(E+(A-U),200),800);j.current=M,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,Q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientX,J=j.current||$.current||280,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J+(C.clientX-E),200),800);V.style.setProperty("--editor-width",`${R}px`),j.current=R},H=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,X=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientY,E=N?.current||200,J=W.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=U,T=(M)=>{A=M.clientY;let C=Math.min(Math.max(E-(M.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),N)N.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let M=Math.min(Math.max(E-(A-U),100),window.innerHeight*0.5);if(N)N.current=M;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",H)}).current,q=y((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let E=U.clientY,J=N?.current||200,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(M)=>{let C=M.touches[0];if(!C)return;M.preventDefault();let R=Math.min(Math.max(J-(C.clientY-E),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${R}px`),N)N.current=R;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(N?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:q}}function v9({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,N]=c(()=>s0.getTabs()),[Z,Y]=c(()=>s0.getActiveId()),[K,Q]=c(()=>s0.getTabs().length>0);p(()=>{return s0.onChange((R,D)=>{N(R),Y(D),Q(R.length>0)})},[]);let[X,q]=c(()=>new Set),W=x((R)=>{q((D)=>{let u=new Set(D);if(u.has(R))u.delete(R);else u.add(R);return u})},[]),V=x((R)=>{q((D)=>{if(!D.has(R))return D;let u=new Set(D);return u.delete(R),u})},[]),U=x((R,D={})=>{if(!R)return;let u={path:R,mode:"edit"};try{if(!$1.resolve(u)){if(!$1.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(i){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,i)}let a=typeof D?.label==="string"&&D.label.trim()?D.label.trim():void 0;s0.open(R,a)},[]),E=x(()=>{let R=s0.getActiveId();if(R){let D=s0.get(R);if(D?.dirty){if(!window.confirm(`"${D.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)}},[V]),J=x((R)=>{let D=s0.get(R);if(D?.dirty){if(!window.confirm(`"${D.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)},[V]),A=x((R)=>{s0.activate(R)},[]),T=x((R)=>{let D=s0.getTabs().filter((i)=>i.id!==R&&!i.pinned),u=D.filter((i)=>i.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let a=D.map((i)=>i.id);s0.closeOthers(R),a.forEach((i)=>{V(i),$.current?.(i)})},[V]),H=x(()=>{let R=s0.getTabs().filter((a)=>!a.pinned),D=R.filter((a)=>a.dirty).length;if(D>0){if(!window.confirm(`${D} unsaved tab${D>1?"s":""} will be closed. Continue?`))return}let u=R.map((a)=>a.id);s0.closeAll(),u.forEach((a)=>{V(a),$.current?.(a)})},[V]),M=x((R)=>{s0.togglePin(R)},[]),C=x(()=>{let R=s0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return p(()=>{let R=(D)=>{let{oldPath:u,newPath:a,type:i}=D.detail||{};if(!u||!a)return;if(i==="dir"){for(let g of s0.getTabs())if(g.path===u||g.path.startsWith(`${u}/`)){let w=`${a}${g.path.slice(u.length)}`;s0.rename(g.id,w)}}else s0.rename(u,a)};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),p(()=>{let R=(D)=>{if(s0.hasUnsaved())D.preventDefault(),D.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:Z,previewTabs:X,openEditor:U,closeEditor:E,handleTabClose:J,handleTabActivate:A,handleTabCloseOthers:T,handleTabCloseAll:H,handleTabTogglePin:M,handleTabTogglePreview:W,revealInExplorer:C}}function l6(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var i6=l6("warning",30000),f9=l6("finalize",120000),n6=l6("refresh",30000),b9=30000;function u9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function m9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function g9(_=30000){let[,$]=c(0);p(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function d6(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function h9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function o6(_){return String(_||"").trim()||"web:default"}function p9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function c9(_={}){return L4(_)&&T5(_)}function dK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let N=Number($?.innerHeight||0);if(Number.isFinite(N)&&N>0)return Math.round(N);return null}function oK(_={},$={}){if(!c9(_))return null;let j=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!j||!N?.documentElement)return null;let Z=dK({window:j});if(Z&&Z>0)N.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}}return Z}function l9(_={}){if(!c9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let N=0,Z=new Set,Y=()=>{if(N)$.cancelAnimationFrame?.(N),N=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},K=()=>{N=0,oK({window:$,document:j})},Q=()=>{if(N)$.cancelAnimationFrame?.(N);N=$.requestAnimationFrame?.(K)??0},X=()=>{Q();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),Q()},V);if(U!=null)Z.add(U)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},W=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",X,!0),W?.addEventListener?.("resize",X),W?.addEventListener?.("scroll",X),()=>{Y(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",X,!0),W?.removeEventListener?.("resize",X),W?.removeEventListener?.("scroll",X)}}function rK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function T_(_,$,j){let N=_?.[$];return typeof N==="function"?N:rK($,j)}var sK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function i9(_){return sK.has(String(_||"").trim())}function aK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function n9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let N={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:N})),j.dispatchEvent(new CustomEvent(aK(_),{detail:N})),!0}var tK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function d9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(L4({window:j,navigator:N}))};Z();let K=tK.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",Z),()=>Q.removeEventListener("change",Z);if(typeof Q.addListener==="function")return Q.addListener(Z),()=>Q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let Q of K)Q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.document??(typeof document<"u"?document:null);if(!j||!N||typeof _!=="function")return()=>{};let Z=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),N.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),N.removeEventListener?.("visibilitychange",Z)}}var a6="piclaw_btw_session",eK=900,_Q="__piclawRenameBranchFormLock__",r6=()=>{if(typeof window>"u")return null;let _=window,$=_Q,j=_[$];if(j&&typeof j==="object")return j;let N={inFlight:!1,cooldownUntil:0};return _[$]=N,N};function $Q(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function jQ(){let _=L_(a6);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:K==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:K}}catch{return null}}var r9=B8,s9=W8,NQ=U8,a9=J8,t9=D8,s6=z8,g5=T_(W_,"getAgentContext",null),e9=T_(W_,"getAgentModels",{current:null,models:[]}),_j=T_(W_,"getActiveChatAgents",{chats:[]}),h5=T_(W_,"getChatBranches",{chats:[]}),ZQ=T_(W_,"renameChatBranch",null),YQ=T_(W_,"pruneChatBranch",null),$j=T_(W_,"restoreChatBranch",null),jj=T_(W_,"getAgentQueueState",{count:0}),KQ=T_(W_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),QQ=T_(W_,"removeAgentQueueItem",{removed:!1}),qQ=T_(W_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});$1.register(a8);$1.register(M6);$1.register(A6);$1.register(k6);$1.register(P6);$1.register(I6);$1.register(y6);$1.register(T6);$1.register(x6);$1.register(D6);t8();$1.register($6);$1.register(j6);function GQ({locationParams:_,navigate:$}){let j=C0(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),N=C0(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=C0(()=>{let G=(_.get("pane_popout")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Y=C0(()=>{let G=_.get("pane_path");return G&&G.trim()?G.trim():""},[_]),K=C0(()=>{let G=_.get("pane_label");return G&&G.trim()?G.trim():""},[_]),Q=C0(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),X=C0(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():j},[j,_]),[q,W]=c("disconnected"),[V,U]=c(()=>L4()),[E,J]=c(null),[A,T]=c(null),[H,M]=c(!1),[C,R]=c("current"),[D,u]=c([]),[a,i]=c([]),[g,w]=c(null),{agentStatus:l,setAgentStatus:t,agentDraft:V0,setAgentDraft:d,agentPlan:N0,setAgentPlan:Z0,agentThought:Y0,setAgentThought:Q0,pendingRequest:X0,setPendingRequest:U0,currentTurnId:z0,setCurrentTurnId:O0,steerQueuedTurnId:p0,setSteerQueuedTurnId:k0,lastAgentEventRef:J0,lastSilenceNoticeRef:c0,isAgentRunningRef:l0,draftBufferRef:S0,thoughtBufferRef:B0,pendingRequestRef:P0,stalledPostIdRef:D0,currentTurnIdRef:q0,steerQueuedTurnIdRef:y0,thoughtExpandedRef:d0,draftExpandedRef:m0}=w9(),[V1,E1]=c({}),[f0,i0]=c(null),[j1,Q1]=c(null),[o0,y1]=c(!1),[N1,b1]=c(null),[q1,c1]=c([]),[b0,t1]=c([]),[X1,W1]=c(null),[F1,T0]=c([]),[O1,x0]=c(!1),[R0,a0]=c(()=>jQ()),[n1,m]=c(null),G0=y(new Set),E0=C0(()=>q1.find((G)=>G?.chat_jid===j)||null,[q1,j]),F0=C0(()=>b0.find((G)=>G?.chat_jid===j)||E0||null,[E0,b0,j]),r0=F0?.root_chat_jid||E0?.root_chat_jid||j,e1=$Q(C),[l1,i_]=c(()=>({status:Q?"running":"idle",message:Q?"Preparing a new chat branch…":""})),S_=F1.length,__=y(new Set),t0=y([]),T1=y(new Set),d1=y(0),S1=y({inFlight:!1,lastAttemptAt:0,turnId:null});__.current=new Set(F1.map((G)=>G.row_id)),t0.current=F1;let{notificationsEnabled:x_,notificationPermission:w_,toggleNotifications:F4,notify:O4}=S9(),[$_,n_]=c(()=>new Set),[Z1,j4]=c(()=>Z$("workspaceOpen",!0)),F_=y(null),{editorOpen:g0,tabStripTabs:L1,tabStripActiveId:u0,previewTabs:x1,openEditor:H1,closeEditor:N4,handleTabClose:H4,handleTabActivate:O_,handleTabCloseOthers:R4,handleTabCloseAll:i$,handleTabTogglePin:e4,handleTabTogglePreview:H_,revealInExplorer:L$}=v9({onTabClosed:(G)=>F_.current?.(G)}),j_=y(null),N_=y(null),d_=y(null),J_=y(null),u1=$1.getDockPanes().length>0,[q_,n0]=c(!1),Z_=x(()=>n0((G)=>!G),[]),J4=x(()=>{H1(v$,{label:"Terminal"})},[H1]),D4=x(()=>{H1($4,{label:"VNC"})},[H1]),R_=C0(()=>L1.find((G)=>G.id===u0)||L1[0]||null,[u0,L1]),D_=C0(()=>K||R_?.label||Y||"Pane",[R_?.label,K,Y]),G_=C0(()=>L1.length>1||Boolean(u0&&x1.has(u0)),[x1,u0,L1.length]),J1=C0(()=>Y===$4||Y.startsWith(`${$4}/`),[Y]),G1=C0(()=>Y===v$&&!G_||J1,[J1,G_,Y]),o1=Z||!N&&(g0||u1&&q_),[k1,Z4]=c(!1),Y4=y(!1),E4=x(()=>{if(!g0||N)return;if(Y4.current=q_,q_)n0(!1);Z4(!0)},[g0,N,q_]),r1=x(()=>{if(!k1)return;if(Z4(!1),Y4.current)n0(!0),Y4.current=!1},[k1]),K4=x(()=>{if(k1)r1();else E4()},[k1,E4,r1]);p(()=>{if(k1&&!g0)r1()},[k1,g0,r1]),p(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;H1(Y,K?{label:K}:void 0)},[H1,K,Z,Y]),p(()=>{let G=j_.current;if(!G)return;if(N_.current)N_.current.dispose(),N_.current=null;let B=u0;if(!B)return;let O={path:B,mode:"edit"},I=$1.resolve(O)||$1.get("editor");if(!I){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let k=I.mount(G,O);N_.current=k,k.onDirtyChange?.((_0)=>{s0.setDirty(B,_0)}),k.onSaveRequest?.(()=>{}),k.onClose?.(()=>{N4()});let h=s0.getViewState(B);if(h&&typeof k.restoreViewState==="function")requestAnimationFrame(()=>k.restoreViewState(h));if(typeof k.onViewStateChange==="function")k.onViewStateChange((_0)=>{s0.saveViewState(B,_0)});return requestAnimationFrame(()=>k.focus()),()=>{if(N_.current===k)k.dispose(),N_.current=null}},[u0,N4]),p(()=>{let G=d_.current;if(J_.current)J_.current.dispose(),J_.current=null;if(!G||!u1||!q_)return;let B=$1.getDockPanes()[0];if(!B){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=B.mount(G,{mode:"view"});return J_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(J_.current===O)O.dispose(),J_.current=null}},[u1,q_]);let[v4,v_]=c({name:"You",avatar_url:null,avatar_background:null}),E_=y(!1),X_=y(!1),f_=y(null),m1=y(j),f4=y(new Map),b4=y(j),A4=y(0),o_=y(0),b_=y({}),Q4=y({name:null,avatar_url:null}),w1=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),u_=y(null),m_=y(null),r_=y(0),M4=y(0),U1=y(0),k4=y(null),s1=y(null),Y_=y(null),A_=y(null),u4=y(0),P4=y({title:null,avatarBase:null}),q4=y(null),I4=y(!1),[B_,m4]=c(!1),g4=y(0),[C4,_$]=c(!1),[M_,h4]=c(""),g_=C0(()=>f8(M_,F0?.agent_name||""),[F0?.agent_name,M_]),F=y(null),P=x(()=>{if(q4.current)clearTimeout(q4.current),q4.current=null;w(null)},[]);g9(30000),p(()=>{if(!C4)return;requestAnimationFrame(()=>{if(C4)F.current?.focus(),F.current?.select?.()})},[C4]),p(()=>{return Q2()},[]),p(()=>{return d9(U)},[]),p(()=>{K1("workspaceOpen",String(Z1))},[Z1]),p(()=>{return l9()},[]),p(()=>{return()=>{P()}},[P]),p(()=>{if(!R0){K1(a6,"");return}K1(a6,JSON.stringify({question:R0.question||"",answer:R0.answer||"",thinking:R0.thinking||"",error:R0.error||null,status:R0.status||"success"}))},[R0]),p(()=>{b_.current=V1||{}},[V1]),p(()=>{m1.current=j},[j]),p(()=>{Q4.current=v4||{name:"You",avatar_url:null,avatar_background:null}},[v4]);let f=x((G,B,O=null)=>{if(typeof document>"u")return;let I=(G||"").trim()||"PiClaw";if(P4.current.title!==I){document.title=I;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==I)e.setAttribute("content",I);P4.current.title=I}let k=document.getElementById("dynamic-favicon");if(!k)return;let h=k.getAttribute("data-default")||k.getAttribute("href")||"/favicon.ico",_0=B||h,$0=B?`${_0}|${O||""}`:_0;if(P4.current.avatarBase!==$0){let e=B?`${_0}${_0.includes("?")?"&":"?"}v=${O||Date.now()}`:_0;k.setAttribute("href",e),P4.current.avatarBase=$0}},[]),v=x((G)=>{if(!G)return;u((B)=>B.includes(G)?B:[...B,G])},[]),o=x((G)=>{u((B)=>B.filter((O)=>O!==G))},[]);F_.current=o;let K0=x(()=>{u([])},[]),W0=x((G)=>{if(!Array.isArray(G)){u([]);return}let B=[],O=new Set;for(let I of G){if(typeof I!=="string"||!I.trim())continue;let k=I.trim();if(O.has(k))continue;O.add(k),B.push(k)}u(B)},[]),n=x((G,B=null,O="info",I=3000)=>{P(),w({title:G,detail:B||null,kind:O||"info"}),q4.current=setTimeout(()=>{w((k)=>k?.title===G?null:k)},I)},[P]),j0=x((G)=>{let B=h9(G,{editorOpen:g0,resolvePane:(O)=>$1.resolve(O)});if(B.kind==="open"){H1(B.path);return}if(B.kind==="toast")n(B.title,B.detail,B.level)},[g0,H1,n]),A0=x(()=>{let G=u0;if(G)v(G)},[u0,v]),g1=x((G)=>{if(!G)return;i((B)=>B.includes(G)?B:[...B,G])},[]),K_=x(async(G,B=null)=>{let O=(k)=>{k.scrollIntoView({behavior:"smooth",block:"center"}),k.classList.add("post-highlight"),setTimeout(()=>k.classList.remove("post-highlight"),2000)},I=document.getElementById("post-"+G);if(I){O(I);return}try{let k=typeof B==="string"&&B.trim()?B.trim():j,_0=(await V8(G,k))?.thread?.[0];if(!_0)return;v1(($0)=>{if(!$0)return[_0];if($0.some((e)=>e.id===_0.id))return $0;return[...$0,_0]}),requestAnimationFrame(()=>{setTimeout(()=>{let $0=document.getElementById("post-"+G);if($0)O($0)},50)})}catch(k){console.error("[scrollToMessage] Failed to fetch message",G,k)}},[j]),L=x((G)=>{i((B)=>B.filter((O)=>O!==G))},[]),S=x(()=>{i([])},[]),b=x((G)=>{if(!Array.isArray(G)){i([]);return}let B=[],O=new Set;for(let I of G){if(typeof I!=="string"||!I.trim())continue;let k=I.trim();if(O.has(k))continue;O.add(k),B.push(k)}i(B)},[]),r=x((G)=>{let B=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";n("Compose failed",B,"error",5000)},[n]),L0=x((G={})=>{let B=Date.now();if(J0.current=B,G.running)l0.current=!0,x0((O)=>O?O:!0);if(G.clearSilence)c0.current=0},[x0]),I0=x(()=>{if(A_.current)clearTimeout(A_.current),A_.current=null;u4.current=0},[]);p(()=>()=>{I0()},[I0]);let Y1=x(()=>{I0(),t((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:B,lastActivity:O,...I}=G;return I})},[I0]),z1=x((G)=>{if(!G)return;I0();let B=Date.now();u4.current=B,t({type:G.type||"active",last_activity:!0}),A_.current=setTimeout(()=>{if(u4.current!==B)return;t((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},b9)},[I0]),P1=x(()=>{l0.current=!1,x0(!1),J0.current=null,c0.current=0,S0.current="",B0.current="",P0.current=null,s1.current=null,q0.current=null,y0.current=null,f_.current=null,S1.current={inFlight:!1,lastAttemptAt:0,turnId:null},I0(),O0(null),k0(null),d0.current=!1,m0.current=!1},[I0,O0,k0,x0]),h0=x((G)=>{if(!p9({remainingQueueCount:G,currentTurnId:q0.current,isAgentTurnActive:O1}))return;y0.current=null,k0(null)},[O1,k0]),s_=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),G4=x(()=>({agentStatus:l,agentDraft:V0?{...V0}:{text:"",totalLines:0},agentPlan:N0||"",agentThought:Y0?{...Y0}:{text:"",totalLines:0},pendingRequest:X0,currentTurnId:z0,steerQueuedTurnId:p0,isAgentTurnActive:Boolean(O1),followupQueueItems:Array.isArray(F1)?F1.map((G)=>({...G})):[],activeModel:f0,activeThinkingLevel:j1,supportsThinking:Boolean(o0),activeModelUsage:N1,contextUsage:X1,isAgentRunning:Boolean(l0.current),wasAgentActive:Boolean(X_.current),draftBuffer:S0.current||"",thoughtBuffer:B0.current||"",lastAgentEvent:J0.current||null,lastSilenceNotice:c0.current||0,lastAgentResponse:s1.current||null,currentTurnIdRef:q0.current||null,steerQueuedTurnIdRef:y0.current||null,thoughtExpanded:Boolean(d0.current),draftExpanded:Boolean(m0.current),agentStatusRef:f_.current||null,silentRecovery:{...S1.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[f0,N1,j1,V0,N0,l,Y0,X1,z0,F1,O1,X0,p0,o0]),p4=x((G)=>{let B=G||s_();I0(),l0.current=Boolean(B.isAgentRunning),X_.current=Boolean(B.wasAgentActive),x0(Boolean(B.isAgentTurnActive)),J0.current=B.lastAgentEvent||null,c0.current=Number(B.lastSilenceNotice||0),S0.current=B.draftBuffer||"",B0.current=B.thoughtBuffer||"",P0.current=B.pendingRequest||null,s1.current=B.lastAgentResponse||null,q0.current=B.currentTurnIdRef||null,y0.current=B.steerQueuedTurnIdRef||null,f_.current=B.agentStatusRef||null,S1.current=B.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},d0.current=Boolean(B.thoughtExpanded),m0.current=Boolean(B.draftExpanded),t(B.agentStatus||null),d(B.agentDraft?{...B.agentDraft}:{text:"",totalLines:0}),Z0(B.agentPlan||""),Q0(B.agentThought?{...B.agentThought}:{text:"",totalLines:0}),U0(B.pendingRequest||null),O0(B.currentTurnId||null),k0(B.steerQueuedTurnId||null),T0(Array.isArray(B.followupQueueItems)?B.followupQueueItems.map((O)=>({...O})):[]),i0(B.activeModel||null),Q1(B.activeThinkingLevel||null),y1(Boolean(B.supportsThinking)),b1(B.activeModelUsage??null),W1(B.contextUsage??null)},[I0,s_,O0,T0,x0,k0]),I1=x((G)=>{if(!G)return;if(q0.current===G)return;q0.current=G,S1.current={inFlight:!1,lastAttemptAt:0,turnId:G},O0(G),y0.current=null,k0(null),S0.current="",B0.current="",d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,s1.current=null,d0.current=!1,m0.current=!1},[O0,k0]),n$=x((G)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let B=s1.current;if(!B||!B.post)return;if(G&&B.turnId&&B.turnId!==G)return;let O=B.post;if(O.id&&k4.current===O.id)return;let I=String(O?.data?.content||"").trim();if(!I)return;k4.current=O.id||k4.current,s1.current=null;let k=I.replace(/\s+/g," ").slice(0,200),h=b_.current||{},$0=(O?.data?.agent_id?h[O.data.agent_id]:null)?.name||"Pi";O4($0,k)},[O4]),c4=x(async(G,B)=>{if(G!=="thought"&&G!=="draft")return;let O=q0.current;if(G==="thought"){if(d0.current=B,O)try{await t9(O,"thought",B)}catch(I){console.warn("Failed to update thought visibility:",I)}if(!B)return;try{let I=O?await a9(O,"thought"):null;if(I?.text)B0.current=I.text;Q0((k)=>({...k||{text:"",totalLines:0},fullText:B0.current||k?.fullText||"",totalLines:Number.isFinite(I?.total_lines)?I.total_lines:k?.totalLines||0}))}catch(I){console.warn("Failed to fetch full thought:",I)}return}if(m0.current=B,O)try{await t9(O,"draft",B)}catch(I){console.warn("Failed to update draft visibility:",I)}if(!B)return;try{let I=O?await a9(O,"draft"):null;if(I?.text)S0.current=I.text;d((k)=>({...k||{text:"",totalLines:0},fullText:S0.current||k?.fullText||"",totalLines:Number.isFinite(I?.total_lines)?I.total_lines:k?.totalLines||0}))}catch(I){console.warn("Failed to fetch full draft:",I)}},[]),R1=y(null),X4=x(()=>{let G=u_.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);R1.current=X4;let p5=x((G)=>{let B=u_.current;if(!B||typeof G!=="function"){G?.();return}let{currentHashtag:O,searchQuery:I,searchOpen:k}=w1.current||{},h=!((I||k)&&!O),_0=h?B.scrollHeight-B.scrollTop:B.scrollTop;G(),requestAnimationFrame(()=>{let $0=u_.current;if(!$0)return;if(h){let e=Math.max($0.scrollHeight-_0,0);$0.scrollTop=e}else{let e=Math.max($0.scrollHeight-$0.clientHeight,0),s=Math.min(_0,e);$0.scrollTop=s}})},[]),l4=x((G)=>{let B=u_.current;if(!B||typeof G!=="function"){G?.();return}let O=B.scrollTop;G(),requestAnimationFrame(()=>{let I=u_.current;if(!I)return;let k=Math.max(I.scrollHeight-I.clientHeight,0);I.scrollTop=Math.min(O,k)})},[]),c5="Queued as a follow-up (one-at-a-time).",i4="⁣",V_=x((G)=>{if(!G||!Array.isArray(G))return G;let B=__.current,O=new Set(B),I=G.filter((k)=>{if(O.has(k?.id))return!1;if(k?.data?.is_bot_message){let h=k?.data?.content;if(h===c5||h===i4)return!1}return!0});return I.length===G.length?G:I},[]),{posts:a_,setPosts:v1,hasMore:l5,setHasMore:d$,hasMoreRef:t6,loadPosts:h_,refreshTimeline:i1,loadMore:Nj,loadMoreRef:i5}=x9({preserveTimelineScroll:p5,preserveTimelineScrollTop:l4,chatJid:j}),$$=C0(()=>V_(a_),[a_,F1,V_]),o$=x(()=>{let G=D0.current;if(!G)return;v1((B)=>B?B.filter((O)=>O.id!==G):B),D0.current=null},[v1]),{handleSplitterMouseDown:Zj,handleSplitterTouchStart:Yj,handleEditorSplitterMouseDown:Kj,handleEditorSplitterTouchStart:Qj,handleDockSplitterMouseDown:qj,handleDockSplitterTouchStart:Gj}=R9({appShellRef:m_,sidebarWidthRef:r_,editorWidthRef:M4,dockHeightRef:U1}),e6=x(()=>{if(!l0.current)return;l0.current=!1,c0.current=0,J0.current=null,q0.current=null,O0(null),d0.current=!1,m0.current=!1;let G=(S0.current||"").trim();if(S0.current="",B0.current="",d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,s1.current=null,!G){t({type:"error",title:"Response stalled - No content received"});return}let O=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,I=Date.now(),k=new Date().toISOString(),h={id:I,timestamp:k,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};D0.current=I,v1((_0)=>_0?l$([..._0,h]):[h]),R1.current?.(),t(null)},[O0]);p(()=>{w1.current={currentHashtag:E,searchQuery:A,searchOpen:H}},[E,A,H]);let e0=x(()=>{let G=++d1.current,B=j;jj(B).then((O)=>{if(G!==d1.current)return;if(m1.current!==B)return;let I=T1.current,k=Array.isArray(O?.items)?O.items.map((h)=>({...h})).filter((h)=>!I.has(h.row_id)):[];if(k.length){T0((h)=>{if(h.length===k.length&&h.every((_0,$0)=>_0.row_id===k[$0].row_id))return h;return k});return}I.clear(),h0(0),T0((h)=>h.length===0?h:[])}).catch(()=>{if(G!==d1.current)return;if(m1.current!==B)return;T0((O)=>O.length===0?O:[])})},[h0,j,T0]),k_=x(async()=>{let G=j;try{let B=await g5(G);if(m1.current!==G)return;if(B)W1(B)}catch(B){if(m1.current!==G)return;console.warn("Failed to fetch agent context:",B)}},[j]),P_=x(async()=>{let G=j;try{let B=await s6(G);if(m1.current!==G)return null;if(!B||B.status!=="active"||!B.data){if(X_.current){let{currentHashtag:k,searchQuery:h,searchOpen:_0}=w1.current||{};if(!k&&!h&&!_0)i1()}return X_.current=!1,P1(),f_.current=null,t(null),d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,B??null}X_.current=!0;let O=B.data;f_.current=O;let I=O.turn_id||O.turnId;if(I)I1(I);if(L0({running:!0,clearSilence:!0}),Y1(),t(O),B.thought&&B.thought.text)Q0((k)=>{if(k&&k.text&&k.text.length>=B.thought.text.length)return k;return B0.current=B.thought.text,{text:B.thought.text,totalLines:B.thought.totalLines||0}});if(B.draft&&B.draft.text)d((k)=>{if(k&&k.text&&k.text.length>=B.draft.text.length)return k;return S0.current=B.draft.text,{text:B.draft.text,totalLines:B.draft.totalLines||0}});return B}catch(B){return console.warn("Failed to fetch agent status:",B),null}},[P1,Y1,L0,i1,I1]),n5=x(async()=>{if(!l0.current)return null;if(P0.current)return null;let G=q0.current||null,B=S1.current,O=Date.now();if(B.inFlight)return null;if(B.turnId===G&&O-B.lastAttemptAt<n6)return null;B.inFlight=!0,B.lastAttemptAt=O,B.turnId=G;try{let{currentHashtag:I,searchQuery:k,searchOpen:h}=w1.current||{};if(!I&&!k&&!h)await i1();return await e0(),await P_()}finally{B.inFlight=!1}},[P_,e0,i1]);p(()=>{let G=Math.min(1000,Math.max(100,Math.floor(i6/2))),B=setInterval(()=>{if(!l0.current)return;if(P0.current)return;let O=J0.current;if(!O)return;let I=Date.now(),k=I-O,h=T$(f_.current);if(k>=f9){if(!h)t({type:"waiting",title:"Re-syncing after a quiet period…"});n5();return}if(k>=i6){if(I-c0.current>=n6){if(!h){let _0=Math.floor(k/1000);t({type:"waiting",title:`Waiting for model… No events for ${_0}s`})}c0.current=I,n5()}}},G);return()=>clearInterval(B)},[n5]);let Xj=x((G)=>{if(W(G),G!=="connected"){t(null),d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,P1();return}if(!E_.current){E_.current=!0;let{currentHashtag:k,searchQuery:h,searchOpen:_0}=w1.current||{};if(!k&&!h&&!_0)i1();P_(),e0(),k_();return}let{currentHashtag:B,searchQuery:O,searchOpen:I}=w1.current;if(!B&&!O&&!I)i1();P_(),e0(),k_()},[P1,i1,P_,e0,k_]),Bj=x(async(G)=>{J(G),v1(null),await h_(G)},[h_]),Vj=x(async()=>{J(null),T(null),v1(null),await h_()},[h_]),Wj=x(async(G,B=C)=>{if(!G||!G.trim())return;let O=B==="root"||B==="all"?B:"current";R(O),T(G.trim()),J(null),v1(null);try{let I=await r9(G.trim(),50,0,j,O,r0);v1(I.results),d$(!1)}catch(I){console.error("Failed to search:",I),v1([])}},[j,r0,C]),Lj=x(()=>{M(!0),T(null),J(null),R("current"),v1([])},[]),Uj=x(()=>{M(!1),T(null),h_()},[h_]),BQ=x(()=>{},[]),d5=!E&&!A&&!H,zj=x(async(G)=>{if(!G)return;let B=G.id,O=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():j,I=$$?.filter((h)=>h?.data?.thread_id===B&&h?.id!==B).length||0;if(I>0){if(!window.confirm(`Delete this message and its ${I} replies?`))return}let k=(h)=>{if(!h.length)return;n_(($0)=>{let e=new Set($0);return h.forEach((s)=>e.add(s)),e}),setTimeout(()=>{if(l4(()=>{v1(($0)=>$0?$0.filter((e)=>!h.includes(e.id)):$0)}),n_(($0)=>{let e=new Set($0);return h.forEach((s)=>e.delete(s)),e}),t6.current)i5.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await s9(B,I>0,O);if(h?.ids?.length)k(h.ids)}catch(h){let _0=h?.message||"";if(I===0&&_0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await s9(B,!0,O);if(e?.ids?.length)k(e.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${_0}`)}},[j,$$,l4]),_3=x(async()=>{try{let G=await NQ();E1(u9(G));let B=G?.user||{};v_((I)=>{let k=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",h=typeof B.avatar_url==="string"?B.avatar_url.trim():null,_0=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(I.name===k&&I.avatar_url===h&&I.avatar_background===_0)return I;return{name:k,avatar_url:h,avatar_background:_0}});let O=(G?.agents||[]).find((I)=>I.id==="default");f(O?.name,O?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=j,B=await g5(G);if(m1.current!==G)return;if(B)W1(B)}catch{}},[f,j]);p(()=>{_3();let G=Y$("sidebarWidth",null),B=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(r_.current=B,m_.current)m_.current.style.setProperty("--sidebar-width",`${B}px`)},[_3]);let U$=O1||l!==null,$3=x((G)=>{if(!G||typeof G!=="object")return;let B=G.agent_id;if(!B)return;let{agent_name:O,agent_avatar:I}=G;if(!O&&I===void 0)return;let k=b_.current?.[B]||{id:B},h=k.name||null,_0=k.avatar_url??k.avatarUrl??k.avatar??null,$0=!1,e=!1;if(O&&O!==k.name)h=O,e=!0;if(I!==void 0){let s=typeof I==="string"?I.trim():null,H0=typeof _0==="string"?_0.trim():null,w0=s||null;if(w0!==(H0||null))_0=w0,$0=!0}if(!e&&!$0)return;if(E1((s)=>{let w0={...s[B]||{id:B}};if(e)w0.name=h;if($0)w0.avatar_url=_0;return{...s,[B]:w0}}),B==="default")f(h,_0,$0?Date.now():null)},[f]),j3=x((G)=>{if(!G||typeof G!=="object")return;let B=G.user_name??G.userName,O=G.user_avatar??G.userAvatar,I=G.user_avatar_background??G.userAvatarBackground;if(B===void 0&&O===void 0&&I===void 0)return;v_((k)=>{let h=typeof B==="string"&&B.trim()?B.trim():k.name||"You",_0=O===void 0?k.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,$0=I===void 0?k.avatar_background:typeof I==="string"&&I.trim()?I.trim():null;if(k.name===h&&k.avatar_url===_0&&k.avatar_background===$0)return k;return{name:h,avatar_url:_0,avatar_background:$0}})},[]),o5=x((G)=>{if(!G||typeof G!=="object")return;let B=G.model??G.current;if(B!==void 0)i0(B);if(G.thinking_level!==void 0)Q1(G.thinking_level??null);if(G.supports_thinking!==void 0)y1(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)b1(G.provider_usage??null)},[]),z$=x(()=>{let G=j;e9(G).then((B)=>{if(m1.current!==G)return;if(B)o5(B)}).catch(()=>{})},[o5,j]),h1=x(()=>{let G=j,B=(O)=>Array.isArray(O)?O.filter((I)=>I&&typeof I.chat_jid==="string"&&typeof I.agent_name==="string"&&I.agent_name.trim()):[];Promise.all([_j().catch(()=>({chats:[]})),h5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,I])=>{if(m1.current!==G)return;let k=B(O?.chats),h=B(I?.chats);if(h.length===0){c1(k);return}let _0=new Map(k.map((e)=>[e.chat_jid,e])),$0=h.map((e)=>{let s=_0.get(e.chat_jid);return s?{...e,...s,is_active:s.is_active??e.is_active}:e});$0.sort((e,s)=>{if(e.chat_jid===G&&s.chat_jid!==G)return-1;if(s.chat_jid===G&&e.chat_jid!==G)return 1;let H0=Boolean(e.archived_at),w0=Boolean(s.archived_at);if(H0!==w0)return H0?1:-1;if(Boolean(e.is_active)!==Boolean(s.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(s.chat_jid))}),c1($0)}).catch(()=>{if(m1.current!==G)return;c1([])})},[j]),f1=x(()=>{h5(r0).then((G)=>{let B=Array.isArray(G?.chats)?G.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];t1(B)}).catch(()=>{})},[r0]),Fj=x((G)=>{let B=G?.row_id;if(B==null)return;T1.current.add(B),T0((O)=>O.filter((I)=>I?.row_id!==B)),KQ(B,o6(j)).then(()=>{e0()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),n("Failed to steer message","The queued message could not be sent as steering.","warning"),T1.current.delete(B),e0()})},[j,e0,T0,n]),Oj=x((G)=>{let B=G?.row_id;if(B==null)return;let O=t0.current.filter((I)=>I?.row_id!==B).length;T1.current.add(B),h0(O),T0((I)=>I.filter((k)=>k?.row_id!==B)),QQ(B,o6(j)).then(()=>{e0()}).catch((I)=>{console.warn("[queue] Failed to remove queued item:",I),n("Failed to remove message","The queued message could not be removed.","warning"),T1.current.delete(B),e0()})},[h0,j,e0,T0,n]),F$=x((G)=>{if(!G||typeof G!=="object")return;if(h1(),f1(),G?.queued==="followup"||G?.queued==="steer"){e0();return}let B=G?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))e0()},[h1,f1,e0]),r5=x(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;a0(null)},[]),r$=x(async(G)=>{let B=String(G||"").trim();if(!B)return n("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let O=new AbortController;Y_.current=O,a0({question:B,answer:"",thinking:"",error:null,model:null,status:"running"});try{let I=await qQ(B,{signal:O.signal,chatJid:F2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(k,h)=>{if(k==="side_prompt_start")a0((_0)=>_0?{..._0,status:"running"}:_0)},onThinkingDelta:(k)=>{a0((h)=>h?{...h,thinking:`${h.thinking||""}${k||""}`}:h)},onTextDelta:(k)=>{a0((h)=>h?{...h,answer:`${h.answer||""}${k||""}`}:h)}});if(Y_.current!==O)return!0;a0((k)=>k?{...k,answer:I?.result||k.answer||"",thinking:I?.thinking||k.thinking||"",model:I?.model||null,status:"success",error:null}:k)}catch(I){if(O.signal.aborted)return!0;a0((k)=>k?{...k,status:"error",error:I?.payload?.error||I?.message||"BTW request failed."}:k)}finally{if(Y_.current===O)Y_.current=null}return!0},[j,n]),Hj=x(async({content:G})=>{let B=z2(G);if(!B)return!1;if(B.type==="help")return n("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(B.type==="clear")return r5(),n("BTW cleared","Closed the side conversation panel.","info"),!0;if(B.type==="ask")return await r$(B.question),!0;return!1},[r5,r$,n]),Jj=x(()=>{if(R0?.question)r$(R0.question)},[R0,r$]),Dj=x(async()=>{let G=J2(R0);if(!G)return;try{let B=await d4("default",G,null,[],U$?"queue":null,j);F$(B),n(B?.queued==="followup"?"BTW queued":"BTW injected",B?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(B){n("BTW inject failed",B?.message||"Could not inject BTW answer into chat.","warning")}},[R0,F$,U$,n]),N3=x(async(G=null)=>{let[B,O,I,k,h,_0,$0]=await Promise.allSettled([s6(j),g5(j),jj(j),e9(j),_j(),h5(r0),n4(20,null,j)]),e=B.status==="fulfilled"?B.value:null,s=O.status==="fulfilled"?O.value:null,H0=I.status==="fulfilled"?I.value:null,w0=k.status==="fulfilled"?k.value:null,a1=h.status==="fulfilled"?h.value:null,D1=_0.status==="fulfilled"?_0.value:null,t_=$0.status==="fulfilled"?$0.value:null,I_=Array.isArray(t_?.posts)?t_.posts:Array.isArray(a_)?a_:[],Q3=I_.length?I_[I_.length-1]:null,Tj=I_.filter((e5)=>e5?.data?.is_bot_message).length,Sj=I_.filter((e5)=>!e5?.data?.is_bot_message).length,q3=Number(H0?.count??t0.current.length??0)||0,G3=Array.isArray(a1?.chats)?a1.chats.length:q1.length,xj=Array.isArray(D1?.chats)?D1.chats.length:b0.length,X3=Number(s?.percent??X1?.percent??0)||0,wj=Number(s?.tokens??X1?.tokens??0)||0,Rj=Number(s?.contextWindow??X1?.contextWindow??0)||0,vj=w0?.current??f0??null,fj=w0?.thinking_level??j1??null,bj=w0?.supports_thinking??o0,uj=e?.status||(O1?"active":"idle"),mj=e?.data?.type||e?.type||null;return{generatedAt:new Date().toISOString(),request:G,chat:{currentChatJid:j,rootChatJid:r0,activeChats:G3,branches:xj},agent:{status:uj,phase:mj,running:Boolean(O1)},model:{current:vj,thinkingLevel:fj,supportsThinking:Boolean(bj)},context:{tokens:wj,contextWindow:Rj,percent:X3},queue:{count:q3},timeline:{loadedPosts:I_.length,botPosts:Tj,userPosts:Sj,latestPostId:Q3?.id??null,latestTimestamp:Q3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(X3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,q3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,G3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,I_.length*5))}]}},[q1,f0,j1,X1,b0,j,r0,O1,a_,o0]),O$=x(()=>{z$(),h1(),f1(),e0(),k_()},[z$,h1,f1,e0,k_]);p(()=>{O$();let G=setInterval(()=>{z$(),h1(),f1(),e0()},60000);return()=>clearInterval(G)},[O$,z$,h1,f1,e0]),p(()=>{f1()},[f1]),p(()=>{let G=!1,B=()=>{if(G)return;requestAnimationFrame(()=>{if(G)return;X4()})};if(E)return h_(E),()=>{G=!0};if(A)return r9(A,50,0,j,C,r0).then((O)=>{if(G)return;v1(O.results),d$(!1)}).catch((O)=>{if(G)return;console.error("Failed to search:",O),v1([]),d$(!1)}),()=>{G=!0};return h_().then(()=>{B()}).catch((O)=>{if(G)return;console.error("Failed to load timeline:",O)}),()=>{G=!0}},[j,E,A,C,r0,h_,X4,d$,v1]),p(()=>{let G=b4.current||j;f4.current.set(G,G4())},[j,G4]),p(()=>{let G=b4.current||j;if(G===j)return;f4.current.set(G,G4()),b4.current=j,T1.current.clear(),p4(f4.current.get(j)||null),e0(),P_(),k_()},[j,P_,k_,e0,p4,G4]);let Ej=x(()=>{let{currentHashtag:G,searchQuery:B,searchOpen:O}=w1.current||{};if(!G&&!B&&!O)i1();O$()},[O$,i1]),H$=x((G,B="streaming")=>{let O=k2({...G,...G&&G.status?{}:{status:B}});if(!O)return;let I=p1(O);if(I&&G0.current.has(I))return;m((k)=>{let h=p1(k),_0=Boolean(I&&h&&I===h),$0={..._0&&k?.artifact?k.artifact:{},...O.artifact||{}};return{..._0&&k?k:{},...O,artifact:$0,source:"live",originChatJid:O.originChatJid||j,openedAt:_0&&k?.openedAt?k.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),s5=x((G,B)=>{let O=B?.turn_id,I=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null,h=I?I===j:G==="connected"||G==="workspace_update";if(h)$3(B),j3(B);if(G==="ui_theme"){q2(B);return}if(G==="generated_widget_open"){if(!h)return;if(O&&!q0.current)I1(O);H$(B,"loading");return}if(G==="generated_widget_delta"){if(!h)return;if(O&&!q0.current)I1(O);H$(B,"streaming");return}if(G==="generated_widget_final"){if(!h)return;if(O&&!q0.current)I1(O);H$(B,"final");return}if(G==="generated_widget_error"){if(!h)return;H$(B,"error");return}if(G==="generated_widget_close"){if(!h)return;let s=p1(B);m((H0)=>{if(!H0||H0?.source!=="live")return H0;let w0=p1(H0);if(s&&w0&&s!==w0)return H0;return null});return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))Y1()}if(G==="connected"){t(null),d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),P0.current=null,P1();let s=j;s6(s).then((D1)=>{if(m1.current!==s)return;if(!D1||D1.status!=="active"||!D1.data)return;let t_=D1.data,I_=t_.turn_id||t_.turnId;if(I_)I1(I_);if(L0({clearSilence:!0}),z1(t_),D1.thought&&D1.thought.text)B0.current=D1.thought.text,Q0({text:D1.thought.text,totalLines:D1.thought.totalLines||0});if(D1.draft&&D1.draft.text)S0.current=D1.draft.text,d({text:D1.draft.text,totalLines:D1.draft.totalLines||0})}).catch((D1)=>{console.warn("Failed to fetch agent status:",D1)});let{currentHashtag:H0,searchQuery:w0,searchOpen:a1}=w1.current||{};if(!H0&&!w0&&!a1)i1();O$();return}if(G==="agent_status"){if(!h){if(B?.type==="done"||B?.type==="error")h1(),f1();return}if(B.type==="done"||B.type==="error"){if(O&&q0.current&&O!==q0.current)return;if(B.type==="done"){n$(O||q0.current);let{currentHashtag:s,searchQuery:H0,searchOpen:w0}=w1.current||{};if(!s&&!H0&&!w0)i1();if(B.context_usage)W1(B.context_usage)}if(X_.current=!1,P1(),T1.current.clear(),h1(),e0(),d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null),B.type==="error")t({type:"error",title:B.title||"Agent error"}),setTimeout(()=>t(null),8000);else t(null)}else{if(O)I1(O);if(L0({running:!0,clearSilence:!0}),B.type==="thinking")S0.current="",B0.current="",d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0});f_.current=B,t((s)=>{if(s&&s.type===B.type&&s.title===B.title)return s;return B})}return}if(G==="agent_steer_queued"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;let s=O||q0.current;if(!s)return;y0.current=s,k0(s);return}if(G==="agent_followup_queued"){if(!h)return;let s=B?.row_id,H0=B?.content;if(s!=null&&typeof H0==="string"&&H0.trim())T0((w0)=>{if(w0.some((a1)=>a1?.row_id===s))return w0;return[...w0,{row_id:s,content:H0,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});e0();return}if(G==="agent_followup_consumed"){if(!h)return;let s=B?.row_id;if(s!=null){let D1=t0.current.filter((t_)=>t_.row_id!==s).length;h0(D1),T0((t_)=>t_.filter((I_)=>I_.row_id!==s))}e0();let{currentHashtag:H0,searchQuery:w0,searchOpen:a1}=w1.current||{};if(!H0&&!w0&&!a1)i1();return}if(G==="agent_followup_removed"){if(!h)return;let s=B?.row_id;if(s!=null){let H0=t0.current.filter((w0)=>w0.row_id!==s).length;T1.current.add(s),h0(H0),T0((w0)=>w0.filter((a1)=>a1.row_id!==s))}e0();return}if(G==="agent_draft_delta"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)I1(O);if(L0({running:!0,clearSilence:!0}),B?.reset)S0.current="";if(B?.delta)S0.current+=B.delta;let s=Date.now();if(!A4.current||s-A4.current>=100){A4.current=s;let H0=S0.current,w0=d6(H0);if(m0.current)d((a1)=>({text:a1?.text||"",totalLines:w0,fullText:H0}));else d({text:H0,totalLines:w0})}return}if(G==="agent_draft"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)I1(O);L0({running:!0,clearSilence:!0});let s=B.text||"",H0=B.mode||(B.kind==="plan"?"replace":"append"),w0=Number.isFinite(B.total_lines)?B.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(H0==="replace")Z0(s);else Z0((a1)=>(a1||"")+s);else if(!m0.current)S0.current=s,d({text:s,totalLines:w0});return}if(G==="agent_thought_delta"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)I1(O);if(L0({running:!0,clearSilence:!0}),B?.reset)B0.current="";if(typeof B?.delta==="string")B0.current+=B.delta;let s=Date.now();if(d0.current&&(!o_.current||s-o_.current>=100)){o_.current=s;let H0=B0.current;Q0((w0)=>({text:w0?.text||"",totalLines:d6(H0),fullText:H0}))}return}if(G==="agent_thought"){if(!h)return;if(O&&q0.current&&O!==q0.current)return;if(O&&!q0.current)I1(O);L0({running:!0,clearSilence:!0});let s=B.text||"",H0=Number.isFinite(B.total_lines)?B.total_lines:s?s.replace(/\r\n/g,`
`).split(`
`).length:0;if(!d0.current)B0.current=s,Q0({text:s,totalLines:H0});return}if(G==="model_changed"){if(!h)return;if(B?.model!==void 0)i0(B.model);if(B?.thinking_level!==void 0)Q1(B.thinking_level??null);if(B?.supports_thinking!==void 0)y1(Boolean(B.supports_thinking));let s=j;g5(s).then((H0)=>{if(m1.current!==s)return;if(H0)W1(H0)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}if(i9(G)){if(!h)return;if(n9(G,B),G==="extension_ui_notify"&&typeof B?.message==="string")n(B.message,null,B?.type||"info");if(G==="extension_ui_error"&&typeof B?.error==="string")n("Extension UI error",B.error,"error",5000);return}let{currentHashtag:_0,searchQuery:$0,searchOpen:e}=w1.current;if(G==="agent_response"){if(!h)return;o$(),s1.current={post:B,turnId:q0.current}}if(!_0&&!$0&&!e&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))v1((s)=>{if(!s)return[B];if(s.some((H0)=>H0.id===B.id))return s;return[...s,B]}),R1.current?.();if(G==="interaction_updated"){if(!h)return;if(_0||$0||e)return;v1((s)=>{if(!s)return s;if(!s.some((H0)=>H0.id===B.id))return s;return s.map((H0)=>H0.id===B.id?B:H0)})}if(G==="interaction_deleted"){if(!h)return;if(_0||$0||e)return;let s=B?.ids||[];if(s.length){if(l4(()=>{v1((H0)=>H0?H0.filter((w0)=>!s.includes(w0.id)):H0)}),t6.current)i5.current?.({preserveScroll:!0,preserveMode:"top"})}}},[H$,P1,Y1,j,i5,L0,n$,l4,h1,f1,i1,o$,I1,z1,$3,j3,z$,e0,T0]);p(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=s5,G.reset=()=>{o$(),P1(),t(null),d({text:"",totalLines:0}),Z0(""),Q0({text:"",totalLines:0}),U0(null)},G.finalize=()=>e6(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[P1,e6,s5,o$]),T9({handleSseEvent:s5,handleConnectionStatusChange:Xj,loadPosts:h_,onWake:Ej,chatJid:j}),p(()=>{if(!$$||$$.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let B=G.slice(5);K_(B),history.replaceState(null,"",location.pathname+location.search)},[$$,K_]);let a5=l!==null;p(()=>{if(q!=="connected")return;let B=setInterval(()=>{let{currentHashtag:O,searchQuery:I,searchOpen:k}=w1.current||{},h=!O&&!I&&!k;if(a5){if(h)i1();e0(),P_(),k_()}else{if(h)i1();P_(),k_()}},a5?15000:60000);return()=>clearInterval(B)},[q,a5,P_,k_,e0,i1]),p(()=>{return o9(()=>{P_(),k_(),e0()})},[P_,k_,e0]);let Aj=x(()=>{j4((G)=>!G)},[]),Z3=x((G)=>{if(typeof window>"u")return;let B=String(G||"").trim();if(!B||B===j)return;let O=a4(window.location.href,B,{chatOnly:N});$?.(O)},[N,j,$]),t5=x(()=>{if(typeof window>"u"||!F0?.chat_jid)return;let G=Date.now(),B=r6();if(!B)return;if(I4.current||G<g4.current||B.inFlight||G<B.cooldownUntil)return;h4(F0.agent_name||""),_$(!0)},[F0]),J$=x(()=>{_$(!1),h4("")},[]),Y3=x(async(G)=>{if(typeof window>"u"||!F0?.chat_jid)return;if(typeof G!=="string"){t5();return}let B=Date.now(),O=r6();if(!O)return;if(I4.current||B<g4.current||O.inFlight||B<O.cooldownUntil)return;I4.current=!0,O.inFlight=!0,m4(!0);try{let I=F0.agent_name||"",k=f8(G,I);if(!k.canSubmit){n("Could not rename branch",k.message||"Enter a valid branch handle.","warning",4000);return}let h=k.normalized||I,_0=await ZQ(F0.chat_jid,{agentName:h});await Promise.allSettled([h1(),f1()]);let $0=_0?.branch?.agent_name||h||I;n("Branch renamed",`@${$0}`,"info",3500),J$()}catch(I){let k=I instanceof Error?I.message:String(I||"Could not rename branch."),h=/already in use/i.test(k||"")?`${k} Switch to or restore that existing session from the session manager.`:k;n("Could not rename branch",h||"Could not rename branch.","warning",5000)}finally{I4.current=!1,m4(!1);let I=Date.now()+eK;g4.current=I;let k=r6();if(k)k.inFlight=!1,k.cooldownUntil=I}},[J$,F0,h1,f1,t5,m4,n]),K3=x(async(G=null)=>{if(typeof window>"u")return;let B=typeof G==="string"&&G.trim()?G.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",I=B||F0?.chat_jid||O;if(!I){n("Could not prune branch","No active session is selected yet.","warning",4000);return}let k=(F0?.chat_jid===I?F0:null)||b0.find((e)=>e?.chat_jid===I)||q1.find((e)=>e?.chat_jid===I)||null;if(k?.chat_jid===(k?.root_chat_jid||k?.chat_jid)){n("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let _0=`@${k?.agent_name||I}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!window.confirm(`Prune ${_0}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await YQ(I),await Promise.allSettled([h1(),f1()]);let e=k?.root_chat_jid||"web:default";n("Branch pruned",`${_0} has been archived.`,"info",3000);let s=a4(window.location.href,e,{chatOnly:N});$?.(s)}catch(e){let s=e instanceof Error?e.message:String(e||"Could not prune branch.");n("Could not prune branch",s||"Could not prune branch.","warning",5000)}},[q1,N,F0,b0,j,$,h1,f1,n]),Mj=x(async(G)=>{let B=typeof G==="string"?G.trim():"";if(!B||typeof $j!=="function")return;try{let O=b0.find((e)=>e?.chat_jid===B)||null,I=await $j(B);await Promise.allSettled([h1(),f1()]);let k=I?.branch,h=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():B,_0=d3(O?.agent_name,k?.agent_name,h);n("Branch restored",_0,"info",4200);let $0=a4(window.location.href,h,{chatOnly:N});$?.($0)}catch(O){let I=O instanceof Error?O.message:String(O||"Could not restore branch.");n("Could not restore branch",I||"Could not restore branch.","warning",5000)}},[N,b0,$,h1,f1,n]);p(()=>{if(!Q||typeof window>"u")return;let G=!1;return(async()=>{try{i_({status:"running",message:"Preparing a new chat branch…"});let B=await M$(X);if(G)return;let O=B?.branch,I=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!I)throw Error("Branch fork did not return a chat id.");let k=a4(window.location.href,I,{chatOnly:!0});$?.(k,{replace:!0})}catch(B){if(G)return;i_({status:"error",message:S5(B)})}})(),()=>{G=!0}},[Q,X,$]);let kj=x((G)=>{if(!G||typeof G!=="object")return;let B=p1(G);if(B)G0.current.delete(B);m({...G,openedAt:new Date().toISOString()})},[]),D$=x(()=>{m((G)=>{let B=p1(G);if(G?.source==="live"&&B)G0.current.add(B);return null})},[]),Pj=x((G,B)=>{let O=typeof G?.kind==="string"?G.kind:"",I=p1(B);if(!O||!I)return;if(O==="widget.close"){D$();return}if(O==="widget.submit"){let k=y2(G?.payload),h=T2(G?.payload),_0=new Date().toISOString();if(m(($0)=>{let e=p1($0);if(!$0||e!==I)return $0;return{...$0,runtimeState:{...$0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,lastSubmitAt:_0,lastHostUpdate:{type:"submit_pending",submittedAt:_0,preview:k||null}}}}),!k){if(n("Widget submission received","The widget submitted data without a message payload yet.","info",3500),h)D$();return}(async()=>{try{let $0=await d4("default",k,null,[],U$?"queue":null,j);if(F$($0),m((e)=>{let s=p1(e);if(!e||s!==I)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:$0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:_0,preview:k,queued:$0?.queued||null}}}}),n($0?.queued==="followup"?"Widget submission queued":"Widget submission sent",$0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),h)D$()}catch($0){m((e)=>{let s=p1(e);if(!e||s!==I)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:_0,preview:k,error:$0?.message||"Could not send the widget message."}}}}),n("Widget submission failed",$0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let k=new Date().toISOString(),h=Boolean(G?.payload?.buildDashboard||G?.payload?.dashboardKind==="internal-state"),_0=Number(B?.runtimeState?.refreshCount||0)+1;if(m(($0)=>{let e=p1($0);if(!$0||e!==I)return $0;return{...$0,runtimeState:{...$0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,...O==="widget.ready"?{readyAt:k,lastHostUpdate:{type:"ready_ack",at:k}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:k,refreshCount:_0,lastHostUpdate:{type:h?"refresh_building":"refresh_ack",at:k,count:_0,echo:G?.payload||null}}:{}}}}),O==="widget.request_refresh")if(h)(async()=>{try{let $0=await N3(G?.payload||null);m((e)=>{let s=p1(e);if(!e||s!==I)return e;return{...e,runtimeState:{...e.runtimeState||{},dashboard:$0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:_0,echo:G?.payload||null}}}}),n("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch($0){m((e)=>{let s=p1(e);if(!e||s!==I)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:_0,error:$0?.message||"Could not build dashboard."}}}}),n("Dashboard build failed",$0?.message||"Could not build dashboard.","warning",5000)}})();else n("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[N3,j,D$,F$,U$,n]);p(()=>{G0.current.clear(),m(null)},[j]);let Ij=x(async()=>{if(typeof window>"u")return;try{let B=(await M$(j))?.branch,O=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([h1(),f1()]);let I=B?.agent_name?`@${B.agent_name}`:O;n("New branch created",`Switched to ${I}.`,"info",2500);let k=a4(window.location.href,O,{chatOnly:N});$?.(k)}catch(G){n("Could not create branch",S5(G),"warning",5000)}},[N,j,$,h1,f1,n]),s$=x((G,B)=>{if(typeof window>"u"||V)return;let O=typeof G==="string"&&G.trim()?G.trim():"";if(!O)return;let I=()=>{let $0=s0.get(O);if(!$0||$0.dirty)return;H4(O)},k=B7(O);if(!k){n("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let h=X7(window.location.href,O,{label:typeof B==="string"&&B.trim()?B.trim():void 0,chatJid:j});if(k.mode==="tab"){if(!window.open(h,k.target)){n("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}I();return}let _0=N6(k);if(!_0){n("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}Z6(_0,{title:typeof B==="string"&&B.trim()?`Opening ${B}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),Y6(_0,h),I()},[j,H4,V,n]);p(()=>{let G=(O)=>{let I=O.detail?.path,k=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(I)H1(I,k?{label:k}:void 0)},B=(O)=>{let I=O.detail?.path,k=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(I)s$(I,k)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),document.addEventListener("vnc:open-tab",G),document.addEventListener("pane:popout",B),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G),document.removeEventListener("vnc:open-tab",G),document.removeEventListener("pane:popout",B)}},[s$,H1]);let Cj=x(async()=>{if(typeof window>"u"||V)return;let G=Q7(j);if(!G){n("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let O=G7(window.location.href,j,{chatOnly:!0});if(!window.open(O,G.target))n("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let B=N6(G);if(!B){n("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Z6(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let I=(await M$(j))?.branch,k=typeof I?.chat_jid==="string"&&I.chat_jid.trim()?I.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");try{let _0=await L8();c1(Array.isArray(_0?.chats)?_0.chats:[])}catch{}try{let _0=await h5(r0);t1(Array.isArray(_0?.chats)?_0.chats:[])}catch{}let h=a4(window.location.href,k,{chatOnly:!0});Y6(B,h)}catch(O){q7(B),n("Could not open branch window",S5(O),"error",5000)}},[j,r0,V,n]);p(()=>{if(!g0)return;if(typeof window>"u")return;let G=m_.current;if(!G)return;if(!M4.current){let B=Y$("editorWidth",null),O=r_.current||280;M4.current=Number.isFinite(B)?B:O}if(G.style.setProperty("--editor-width",`${M4.current}px`),!U1.current){let B=Y$("dockHeight",null);U1.current=Number.isFinite(B)?B:200}G.style.setProperty("--dock-height",`${U1.current}px`)},[g0]),p(()=>{if(!u1||N)return;let G=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),Z_()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Z_,u1,N]),p(()=>{if(N)return;let G=(B)=>{if(B.ctrlKey&&B.shiftKey&&(B.key==="Z"||B.key==="z")){B.preventDefault(),K4();return}if(B.key==="Escape"&&k1)B.preventDefault(),r1()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[K4,r1,k1,N]);let yj=Boolean(p0&&p0===(l?.turn_id||z0));if(Q)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${l1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${l1.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return z`
            <div class=${`app-shell pane-popout${g0?" editor-open":""}`} ref=${m_}>
                <div class="editor-pane-container pane-popout-container">
                    ${g0&&!G1&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${G_?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${D_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${L1.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${L1.map((G)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${G.id===u0?" active":""}`}
                                                                onClick=${(B)=>{O_(G.id),B.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${G.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${u0&&x1.has(u0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(G)=>{H_(u0),G.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${D_}>${D_}</div>
                                `}
                        </div>
                    `}
                    ${g0?z`<div class="editor-pane-host" ref=${j_}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${g0&&u0&&x1.has(u0)&&z`
                        <${c6}
                            getContent=${()=>N_.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>H_(u0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${Z1?"":" workspace-collapsed"}${g0?" editor-open":""}${N?" chat-only":""}${k1?" zen-mode":""}`} ref=${m_}>
            ${C4&&z`
                <div class="rename-branch-overlay" onPointerDown=${(G)=>{if(G.target===G.currentTarget)J$()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(G)=>{G.preventDefault(),Y3(M_)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${F}
                            value=${M_}
                            onInput=${(G)=>{let B=G.currentTarget?.value??"";h4(String(B))}}
                            onKeyDown=${(G)=>{if(G.key==="Escape")G.preventDefault(),J$()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${g_.kind||"info"}`}>
                            ${g_.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${B_||!g_.canSubmit}>
                                ${B_?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${J$}
                                disabled=${B_}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!N&&z`
                <${P9}
                    onFileSelect=${v}
                    visible=${Z1}
                    active=${Z1||g0}
                    onOpenEditor=${H1}
                    onOpenTerminalTab=${J4}
                    onOpenVncTab=${D4}
                    onToggleTerminal=${u1?Z_:void 0}
                    terminalVisible=${Boolean(u1&&q_)}
                />
                <button
                    class=${`workspace-toggle-tab${Z1?" open":" closed"}`}
                    onClick=${Aj}
                    title=${Z1?"Hide workspace":"Show workspace"}
                    aria-label=${Z1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Zj} onTouchStart=${Yj}></div>
            `}
            ${o1&&z`
                <div class="editor-pane-container">
                    ${k1&&z`<div class="zen-hover-zone"></div>`}
                    ${g0&&z`
                        <${C9}
                            tabs=${L1}
                            activeId=${u0}
                            onActivate=${O_}
                            onClose=${H4}
                            onCloseOthers=${R4}
                            onCloseAll=${i$}
                            onTogglePin=${e4}
                            onTogglePreview=${H_}
                            previewTabs=${x1}
                            onToggleDock=${u1?Z_:void 0}
                            dockVisible=${u1&&q_}
                            onToggleZen=${K4}
                            zenMode=${k1}
                            onPopOutTab=${V?void 0:s$}
                        />
                    `}
                    ${g0&&z`<div class="editor-pane-host" ref=${j_}></div>`}
                    ${g0&&u0&&x1.has(u0)&&z`
                        <${c6}
                            getContent=${()=>N_.current?.getContent?.()}
                            path=${u0}
                            onClose=${()=>H_(u0)}
                        />
                    `}
                    ${u1&&q_&&z`<div class="dock-splitter" onMouseDown=${qj} onTouchStart=${Gj}></div>`}
                    ${u1&&z`<div class=${`dock-panel${q_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&z`
                                    <button class="dock-panel-action" onClick=${()=>s$(v$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${Z_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${d_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${Kj} onTouchStart=${Qj}></div>
            `}
            <div class="container">
                ${A&&m9()&&z`<div class="search-results-spacer"></div>`}
                ${N&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F0?.agent_name?`@${F0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${F0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${b0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(G)=>Z3(G.currentTarget.value)}
                                    >
                                        ${b0.map((G)=>z`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${U5(G,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F0?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${t5}
                                    title=${B_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${B_}
                                >
                                    ${B_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${F0?.chat_jid&&F0.chat_jid!==(F0.root_chat_jid||F0.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${K3}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(E||A)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Vj}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${E?`#${E}`:`Search: ${A} · ${e1}`}</span>
                    </div>
                `}
                <${j7}
                    posts=${$$}
                    hasMore=${d5?l5:!1}
                    onLoadMore=${d5?Nj:void 0}
                    timelineRef=${u_}
                    onHashtagClick=${Bj}
                    onMessageRef=${g1}
                    onScrollToMessage=${K_}
                    onFileRef=${j0}
                    onPostClick=${void 0}
                    onDeletePost=${zj}
                    onOpenWidget=${kj}
                    emptyMessage=${E?`No posts with #${E}`:A?`No results for "${A}"`:void 0}
                    agents=${V1}
                    user=${v4}
                    reverse=${d5}
                    removingPostIds=${$_}
                    searchQuery=${A}
                />
                <${g2}
                    status=${l}
                    draft=${V0}
                    plan=${N0}
                    thought=${Y0}
                    pendingRequest=${X0}
                    intent=${g}
                    turnId=${z0}
                    steerQueued=${yj}
                    onPanelToggle=${c4}
                />
                <${D2}
                    session=${R0}
                    onClose=${r5}
                    onRetry=${Jj}
                    onInject=${Dj}
                />
                <${w2}
                    widget=${n1}
                    onClose=${D$}
                    onWidgetEvent=${Pj}
                />
                <${r3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:B}=w1.current||{};if(!G&&!B)h_(),X4()}}
                    onFocus=${X4}
                    searchMode=${H}
                    searchScope=${C}
                    onSearch=${Wj}
                    onSearchScopeChange=${R}
                    onEnterSearch=${Lj}
                    onExitSearch=${Uj}
                    fileRefs=${D}
                    onRemoveFileRef=${o}
                    onClearFileRefs=${K0}
                    onSetFileRefs=${W0}
                    messageRefs=${a}
                    onRemoveMessageRef=${L}
                    onClearMessageRefs=${S}
                    onSetMessageRefs=${b}
                    onSwitchChat=${Z3}
                    onRenameSession=${Y3}
                    isRenameSessionInProgress=${B_}
                    onCreateSession=${Ij}
                    onDeleteSession=${K3}
                    onRestoreSession=${Mj}
                    activeEditorPath=${N?null:u0}
                    onAttachEditorFile=${N?void 0:A0}
                    onOpenFilePill=${j0}
                    followupQueueCount=${S_}
                    followupQueueItems=${F1}
                    onInjectQueuedFollowup=${Fj}
                    onRemoveQueuedFollowup=${Oj}
                    onSubmitIntercept=${Hj}
                    onMessageResponse=${F$}
                    onSubmitError=${r}
                    onPopOutChat=${V?void 0:Cj}
                    isAgentActive=${U$}
                    activeChatAgents=${q1}
                    currentChatJid=${j}
                    connectionStatus=${q}
                    activeModel=${f0}
                    modelUsage=${N1}
                    thinkingLevel=${j1}
                    supportsThinking=${o0}
                    contextUsage=${X1}
                    notificationsEnabled=${x_}
                    notificationPermission=${w_}
                    onToggleNotifications=${F4}
                    onModelChange=${i0}
                    onModelStateChange=${o5}
                />
                <${h2}
                    request=${X0}
                    onRespond=${()=>{U0(null),P0.current=null}}
                />
            </div>
        </div>
    `}function XQ(){let[_,$]=c(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=x((Z,Y={})=>{if(typeof window>"u")return;let{replace:K=!1}=Y||{},Q=new URL(String(Z||""),window.location.href).toString();if(K)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]),N=C0(()=>new URL(_).searchParams,[_]);return z`<${GQ} locationParams=${N} navigate=${j} />`}v3(z`<${XQ} />`,document.getElementById("app"));

//# debugId=B0C54130FC9911F064756E2164756E21
//# sourceMappingURL=app.bundle.js.map
