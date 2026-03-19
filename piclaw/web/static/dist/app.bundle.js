var f9=Object.defineProperty;var S9=(_)=>_;function R9(_,$){this[_]=S9.bind(null,$)}var v9=(_,$)=>{for(var j in $)f9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:R9.bind($,j)})};var Z1,r_,I3,u9,a$,O3,M3,C3,T3,p1,v1,u1,m9,_1={},$1=[],g9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function c1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function f3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?Z1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return a2(_,z,Z,N,null)}function a2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++I3:N,__i:-1,__u:0};return N==null&&r_.vnode!=null&&r_.vnode(K),K}function K1(_){return _.children}function t2(_,$){this.props=_,this.context=$}function Q2(_,$){if($==null)return _.__?Q2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?Q2(_):null}function p9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=R$({},$);K.__v=$.__v+1,r_.vnode&&r_.vnode(K),h1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?Q2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,u3(Z,K,N),$.__e=$.__=null,K.__e!=j&&S3(K)}}function S3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),S3(_)}function F3(_){(!_.__d&&(_.__d=!0)&&a$.push(_)&&!j1.__r++||O3!=r_.debounceRendering)&&((O3=r_.debounceRendering)||M3)(j1)}function j1(){try{for(var _,$=1;a$.length;)a$.length>$&&a$.sort(C3),_=a$.shift(),$=a$.length,p9(_)}finally{a$.length=j1.__r=0}}function R3(_,$,j,Z,N,K,z,X,Q,V,U){var q,H,y,C,S,f,w,b=Z&&Z.__k||$1,u=$.length;for(Q=c9(j,$,b,Q,u),q=0;q<u;q++)(y=j.__k[q])!=null&&(H=y.__i!=-1&&b[y.__i]||_1,y.__i=q,f=h1(_,y,H,N,K,z,X,Q,V,U),C=y.__e,y.ref&&H.ref!=y.ref&&(H.ref&&i1(H.ref,null,y),U.push(y.ref,y.__c||C,y)),S==null&&C!=null&&(S=C),(w=!!(4&y.__u))||H.__k===y.__k?Q=v3(y,Q,_,w):typeof y.type=="function"&&f!==void 0?Q=f:C&&(Q=C.nextSibling),y.__u&=-7);return j.__e=S,Q}function c9(_,$,j,Z,N){var K,z,X,Q,V,U=j.length,q=U,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=a2(null,z,null,null,null):N1(z)?z=_.__k[K]=a2(K1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=a2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,Q=K+H,z.__=_,z.__b=_.__b+1,X=null,(V=z.__i=h9(z,j,Q,q))!=-1&&(q--,(X=j[V])&&(X.__u|=2)),X==null||X.__v==null?(V==-1&&(N>U?H--:N<U&&H++),typeof z.type!="function"&&(z.__u|=4)):V!=Q&&(V==Q-1?H--:V==Q+1?H++:(V>Q?H--:H++,z.__u|=4))):_.__k[K]=null;if(q)for(K=0;K<U;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=Q2(X)),g3(X,X));return Z}function v3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=v3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=Q2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function h9(_,$,j,Z){var N,K,z,X=_.key,Q=_.type,V=$[j],U=V!=null&&(2&V.__u)==0;if(V===null&&X==null||U&&X==V.key&&Q==V.type)return j;if(Z>(U?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[z=N>=0?N--:K++])!=null&&(2&V.__u)==0&&X==V.key&&Q==V.type)return z}return-1}function H3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||g9.test($)?j:j+"px"}function r2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||H3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||H3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(T3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=p1,_.addEventListener($,K?u1:v1,K)):_.removeEventListener($,K?u1:v1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function D3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=p1++;else if($.t<j.u)return;return j(r_.event?r_.event($):$)}}}function h1(_,$,j,Z,N,K,z,X,Q,V){var U,q,H,y,C,S,f,w,b,u,J,v,d,t,l,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(Q=!!(32&j.__u),K=[X=$.__e=j.__e]),(U=r_.__b)&&U($);_:if(typeof j_=="function")try{if(w=$.props,b=j_.prototype&&j_.prototype.render,u=(U=j_.contextType)&&Z[U.__c],J=U?u?u.props.value:U.__:Z,j.__c?f=(q=$.__c=j.__c).__=q.__E:(b?$.__c=q=new j_(w,J):($.__c=q=new t2(w,J),q.constructor=j_,q.render=l9),u&&u.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),b&&q.__s==null&&(q.__s=q.state),b&&j_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=R$({},q.__s)),R$(q.__s,j_.getDerivedStateFromProps(w,q.__s))),y=q.props,C=q.state,q.__v=$,H)b&&j_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),b&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(b&&j_.getDerivedStateFromProps==null&&w!==y&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(w,J),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(w,q.__s,J)===!1){$.__v!=j.__v&&(q.props=w,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),$1.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&z.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(w,q.__s,J),b&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(y,C,S)})}if(q.context=J,q.props=w,q.__P=_,q.__e=!1,v=r_.__r,d=0,b)q.state=q.__s,q.__d=!1,v&&v($),U=q.render(q.props,q.state,q.context),$1.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,v&&v($),U=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++d<25);q.state=q.__s,q.getChildContext!=null&&(Z=R$(R$({},Z),q.getChildContext())),b&&!H&&q.getSnapshotBeforeUpdate!=null&&(S=q.getSnapshotBeforeUpdate(y,C)),t=U!=null&&U.type===K1&&U.key==null?m3(U.props.children):U,X=R3(_,N1(t)?t:[t],$,j,Z,N,K,z,X,Q,V),q.base=$.__e,$.__u&=-161,q.__h.length&&z.push(q),f&&(q.__E=q.__=null)}catch(h){if($.__v=null,Q||K!=null)if(h.then){for($.__u|=Q?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(l=K.length;l--;)c1(K[l]);m1($)}else $.__e=j.__e,$.__k=j.__k,h.then||m1($);r_.__e(h,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=i9(j.__e,$,j,Z,N,K,z,Q,V);return(U=r_.diffed)&&U($),128&$.__u?void 0:X}function m1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(m1))}function u3(_,$,j){for(var Z=0;Z<j.length;Z++)i1(j[Z],j[++Z],j[++Z]);r_.__c&&r_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){r_.__e(K,N.__v)}})}function m3(_){return typeof _!="object"||_==null||_.__b>0?_:N1(_)?_.map(m3):R$({},_)}function i9(_,$,j,Z,N,K,z,X,Q){var V,U,q,H,y,C,S,f=j.props||_1,w=$.props,b=$.type;if(b=="svg"?N="http://www.w3.org/2000/svg":b=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((y=K[V])&&"setAttribute"in y==!!b&&(b?y.localName==b:y.nodeType==3)){_=y,K[V]=null;break}}if(_==null){if(b==null)return document.createTextNode(w);_=document.createElementNS(N,b,w.is&&w),X&&(r_.__m&&r_.__m($,K),X=!1),K=null}if(b==null)f===w||X&&_.data==w||(_.data=w);else{if(K=K&&Z1.call(_.childNodes),!X&&K!=null)for(f={},V=0;V<_.attributes.length;V++)f[(y=_.attributes[V]).name]=y.value;for(V in f)y=f[V],V=="dangerouslySetInnerHTML"?q=y:V=="children"||(V in w)||V=="value"&&("defaultValue"in w)||V=="checked"&&("defaultChecked"in w)||r2(_,V,null,y,N);for(V in w)y=w[V],V=="children"?H=y:V=="dangerouslySetInnerHTML"?U=y:V=="value"?C=y:V=="checked"?S=y:X&&typeof y!="function"||f[V]===y||r2(_,V,y,f[V],N);if(U)X||q&&(U.__html==q.__html||U.__html==_.innerHTML)||(_.innerHTML=U.__html),$.__k=[];else if(q&&(_.innerHTML=""),R3($.type=="template"?_.content:_,N1(H)?H:[H],$,j,Z,b=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&Q2(j,0),X,Q),K!=null)for(V=K.length;V--;)c1(K[V]);X||(V="value",b=="progress"&&C==null?_.removeAttribute("value"):C!=null&&(C!==_[V]||b=="progress"&&!C||b=="option"&&C!=f[V])&&r2(_,V,C,f[V],N),V="checked",S!=null&&S!=_[V]&&r2(_,V,S,f[V],N))}return _}function i1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){r_.__e(N,j)}}function g3(_,$,j){var Z,N;if(r_.unmount&&r_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||i1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){r_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&g3(Z[N],$,j||typeof _.type!="function");j||c1(_.__e),_.__c=_.__=_.__e=void 0}function l9(_,$,j){return this.constructor(_,j)}function p3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),r_.__&&r_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],h1($,_=(!Z&&j||$).__k=f3(K1,null,[_]),N||_1,_1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?Z1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),u3(K,_,z)}Z1=$1.slice,r_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(X){_=X}throw _}},I3=0,u9=function(_){return _!=null&&_.constructor===void 0},t2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),F3(this))},t2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),F3(this))},t2.prototype.render=K1,a$=[],M3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C3=function(_,$){return _.__v.__b-$.__v.__b},j1.__r=0,T3=/(PointerCapture)$|Capture$/i,p1=0,v1=D3(!1),u1=D3(!0),m9=0;var C2,V0,R1,J3,T2=0,c3=[],X0=r_,y3=X0.__b,E3=X0.__r,k3=X0.diffed,w3=X0.__c,A3=X0.unmount,P3=X0.__;function l1(_,$){X0.__h&&X0.__h(V0,_,T2||$),T2=0;var j=V0.__H||(V0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function M(_){return T2=1,n9(i3,_)}function n9(_,$,j){var Z=l1(C2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):i3(void 0,$),function(X){var Q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(Q,X);Q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=V0,!V0.__f)){var N=function(X,Q,V){if(!Z.__c.__H)return!0;var U=Z.__c.__H.__.filter(function(H){return H.__c});if(U.every(function(H){return!H.__N}))return!K||K.call(this,X,Q,V);var q=Z.__c.props!==X;return U.some(function(H){if(H.__N){var y=H.__[0];H.__=H.__N,H.__N=void 0,y!==H.__[0]&&(q=!0)}}),K&&K.call(this,X,Q,V)||q};V0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=V0;V0.componentWillUpdate=function(X,Q,V){if(this.__e){var U=K;K=void 0,N(X,Q,V),K=U}z&&z.call(this,X,Q,V)},V0.shouldComponentUpdate=N}return Z.__N||Z.__}function T(_,$){var j=l1(C2++,3);!X0.__s&&h3(j.__H,$)&&(j.__=_,j.u=$,V0.__H.__h.push(j))}function E(_){return T2=5,g_(function(){return{current:_}},[])}function g_(_,$){var j=l1(C2++,7);return h3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return T2=8,g_(function(){return _},$)}function d9(){for(var _;_=c3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(e2),$.__h.some(g1),$.__h=[]}catch(j){$.__h=[],X0.__e(j,_.__v)}}}X0.__b=function(_){V0=null,y3&&y3(_)},X0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),P3&&P3(_,$)},X0.__r=function(_){E3&&E3(_),C2=0;var $=(V0=_.__c).__H;$&&(R1===V0?($.__h=[],V0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(e2),$.__h.some(g1),$.__h=[],C2=0)),R1=V0},X0.diffed=function(_){k3&&k3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(c3.push($)!==1&&J3===X0.requestAnimationFrame||((J3=X0.requestAnimationFrame)||s9)(d9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),R1=V0=null},X0.__c=function(_,$){$.some(function(j){try{j.__h.some(e2),j.__h=j.__h.filter(function(Z){return!Z.__||g1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],X0.__e(Z,j.__v)}}),w3&&w3(_,$)},X0.unmount=function(_){A3&&A3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{e2(Z)}catch(N){$=N}}),j.__H=void 0,$&&X0.__e($,j.__v))};var b3=typeof requestAnimationFrame=="function";function s9(_){var $,j=function(){clearTimeout(Z),b3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);b3&&($=requestAnimationFrame(j))}function e2(_){var $=V0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),V0=$}function g1(_){var $=V0;_.__c=_.__(),V0=$}function h3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function i3(_,$){return typeof $=="function"?$(_):$}var l3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],X=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=X:z===4?Z[1]=Object.assign(Z[1]||{},X):z===5?(Z[1]=Z[1]||{})[$[++K]]=X:z===6?Z[1][$[++K]]+=X+"":z?(N=_.apply(X,l3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},x3=new Map;function o9(_){var $=x3.get(this);return $||($=new Map,x3.set(this,$)),($=l3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",X="",Q=[0],V=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,H,z):K===3&&(H||z)?(Q.push(3,H,z),K=2):K===2&&z==="..."&&H?Q.push(4,H,0):K===2&&z&&!H?Q.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(Q.push(K,0,z,N),K=6),H&&(Q.push(K,H,0,N),K=6)),z=""},U=0;U<j.length;U++){U&&(K===1&&V(),V(U));for(var q=0;q<j[U].length;q++)Z=j[U][q],K===1?Z==="<"?(V(),Q=[Q],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:X?Z===X?X="":z+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[U][q+1]===">")?(V(),K===3&&(Q=Q[0]),K=Q,(Q=Q[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,Q=Q[0])}return V(),Q}(_)),$),arguments,[])).length>1?$:$[0]}var O=o9.bind(f3);var r0={};v9(r0,{uploadWorkspaceFile:()=>z1,uploadMedia:()=>e1,updateWorkspaceFile:()=>V5,submitAdaptiveCardAction:()=>_4,streamSidePrompt:()=>W5,steerAgentQueueItem:()=>z5,setWorkspaceVisibility:()=>u2,setAgentThoughtVisibility:()=>Z4,sendPeerAgentMessage:()=>Z5,sendAgentMessage:()=>B2,searchPosts:()=>d1,restoreChatBranch:()=>j5,respondToAgentRequest:()=>Y1,renameWorkspaceFile:()=>G4,renameChatBranch:()=>_5,removeAgentQueueItem:()=>Y5,pruneChatBranch:()=>$5,moveWorkspaceEntry:()=>X4,getWorkspaceTree:()=>v2,getWorkspaceRawUrl:()=>W1,getWorkspaceFile:()=>Y4,getWorkspaceDownloadUrl:()=>G1,getWorkspaceBranch:()=>X5,getTimeline:()=>f2,getThumbnailUrl:()=>N4,getThread:()=>s1,getPostsByHashtag:()=>n1,getMediaUrl:()=>W$,getMediaText:()=>K4,getMediaInfo:()=>U2,getMediaBlob:()=>G5,getChatBranches:()=>e9,getAgents:()=>a1,getAgentThought:()=>j4,getAgentStatus:()=>t1,getAgentQueueState:()=>K5,getAgentModels:()=>R2,getAgentContext:()=>N5,getActiveChatAgents:()=>r1,forkChatBranch:()=>S2,deleteWorkspaceFile:()=>V4,deletePost:()=>o1,createWorkspaceFile:()=>W4,createReply:()=>t9,createPost:()=>a9,attachWorkspaceFile:()=>z4,addToWhitelist:()=>$4,SSEClient:()=>X1});async function S_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function n3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function r9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:X}=await j.read();if(X)break;N+=Z.decode(z,{stream:!0});let Q=N.split(`

`);N=Q.pop()||"";for(let V of Q){let U=n3(V);if(U)$(U.event,U.data)}}N+=Z.decode();let K=n3(N);if(K)$(K.event,K.data)}async function f2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return S_(Z)}async function n1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function d1(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",Q=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return S_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${X}${Q}`)}async function s1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return S_(`/thread/${_}${j}`)}async function a9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return S_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function t9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function o1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return S_(N,{method:"DELETE"})}async function B2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return S_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function r1(){return S_("/agent/active-chats")}async function e9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return S_(`/agent/branches${Z}`)}async function S2(_,$={}){return S_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function _5(_,$={}){return S_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function $5(_){return S_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function j5(_,$={}){return S_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Z5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return S_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function a1(){return S_("/agent/roster")}async function t1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/status${$}`)}async function N5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/context${$}`)}async function K5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/queue-state${$}`)}async function Y5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function z5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/models${$}`)}async function e1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Y1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function _4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function W5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await r9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function $4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return S_(j)}async function Z4(_,$,j){return S_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function W$(_){return`/media/${_}`}function N4(_){return`/media/${_}/thumbnail`}async function U2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function K4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function G5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return S_(Z)}async function X5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return S_($)}async function Y4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return S_(N)}async function V5(_,$){return S_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function z4(_){return S_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function z1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+z,{method:"POST",body:Z});if(!X.ok){let Q=await X.json().catch(()=>({error:"Upload failed"})),V=Error(Q.error||`HTTP ${X.status}`);throw V.status=X.status,V.code=Q.code,V}return X.json()}async function W4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function G4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function X4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function V4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return S_($,{method:"DELETE"})}async function u2(_,$=!1){return S_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function W1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function G1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class X1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function a0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function p_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O2(_,$=!1){let j=a0(_);if(j===null)return $;return j==="true"}function F2(_,$=null){let j=a0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function V1(_){return String(_||"").trim().toLowerCase()}function q4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return V1($[1]||"")}function d3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=V1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function s3(_,$,j={}){let Z=q4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return d3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return V1(K?.agent_name).startsWith(Z)})}function L4(_){let $=V1(_);return $?`@${$} `:""}function o3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return d3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function r3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let X=`${_}-file-pill`,Q=`${_}-file-name`,V=`${_}-file-remove`,U=z==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${X} title=${j||$} onClick=${N}>
      ${U}
      <span class=${Q}>${$}</span>
      ${Z&&O`
        <button
          class=${V}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var q5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function L5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,K="Compact context",X=`${Z!=null?`Context: ${a3(Z)} / ${a3(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,Q=9,V=2*Math.PI*9,U=j/100*V,q=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${X}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${V}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function a3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function t3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:X,fileRefs:Q=[],onRemoveFileRef:V,onClearFileRefs:U,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:y,activeModel:C=null,modelUsage:S=null,thinkingLevel:f=null,supportsThinking:w=!1,contextUsage:b=null,onContextCompact:u,notificationsEnabled:J=!1,notificationPermission:v="default",onToggleNotifications:d,onModelChange:t,onModelStateChange:l,activeEditorPath:j_=null,onAttachEditorFile:h,onOpenFilePill:G_,followupQueueItems:v_=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:o,onSubmitIntercept:Z_,onMessageResponse:__,onPopOutChat:N_,isAgentActive:P_=!1,activeChatAgents:B_=[],currentChatJid:X_="web:default",connectionStatus:V_="connected",onSetFileRefs:C_,onSetMessageRefs:R_,onSubmitError:J_,onSwitchChat:b_,onRenameSession:u_,onCreateSession:Y0,onDeleteSession:z_,onRestoreSession:$_}){let[W_,K_]=M(""),[U_,d_]=M(""),[m_,h_]=M([]),[a_,T_]=M(!1),[E_,H_]=M([]),[e_,k_]=M(0),[z0,x_]=M(!1),[Z0,N0]=M([]),[f0,I_]=M(0),[q0,D_]=M(!1),[s_,w0]=M(!1),[M_,_0]=M(!1),[$0,q_]=M(!1),[O0,I]=M([]),[a,F_]=M(!1),[O_,j0]=M(0),[v0,o_]=M(null),y_=E(null),i0=E(null),e$=E(null),u0=E(null),m$=E(null),F0=E(null),g$=E(null),S0=E(null),K0=E(0),p$=200,l0=(Y)=>{let L=new Set,B=[];for(let F of Y||[]){if(typeof F!=="string")continue;let x=F.trim();if(!x||L.has(x))continue;L.add(x),B.push(x)}return B},L0=()=>{let Y=a0("piclaw_compose_history");if(!Y)return[];try{let L=JSON.parse(Y);if(!Array.isArray(L))return[];return l0(L)}catch{return[]}},J2=(Y)=>{p_("piclaw_compose_history",JSON.stringify(Y))},M0=E(L0()),O$=E(-1),i_=E(""),V$=W_.trim()||m_.length>0||Q.length>0||q.length>0,F$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),A0=typeof window<"u"&&typeof Notification<"u",C0=typeof window<"u"?Boolean(window.isSecureContext):!1,E$=A0&&C0&&v!=="denied",H$=v==="granted"&&J,_2=H$?"Disable notifications":"Enable notifications",c$=m_.length>0||Q.length>0||q.length>0,Q0=V_==="disconnected"?"Reconnecting":String(V_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Y)=>Y.toUpperCase()),h$=V_==="disconnected"?"Reconnecting":`Connection: ${Q0}`,e0=(Array.isArray(B_)?B_:[]).filter((Y)=>!Y?.archived_at),H0=o3(e0,{currentChatJid:X_,limit:4}),P0=!j&&r3({footerWidth:O_,visibleAgentCount:H0.length,hasContextIndicator:Boolean(b&&b.percent!=null)}),W0=(()=>{for(let Y of Array.isArray(B_)?B_:[]){let L=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(L&&L===X_)return Y}return null})(),R0=Boolean(W0&&W0.chat_jid===(W0.root_chat_jid||W0.chat_jid)),$2=(()=>{let Y=new Set,L=[];for(let B of Array.isArray(B_)?B_:[]){let F=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(!F||F===X_||Y.has(F))continue;if(!(typeof B?.agent_name==="string"?B.agent_name.trim():""))continue;Y.add(F),L.push(B)}return L})(),_$=$2.length>0,b0=_$&&typeof b_==="function",i$=_$&&typeof $_==="function",k$=!j&&typeof u_==="function",l_=!j&&typeof Y0==="function",D0=!j&&typeof z_==="function"&&!R0,w$=!j&&(b0||i$||k$||l_||D0),D$=C||"",l$=w&&f?` (${f})`:"",V2=l$.trim()?`${f}`:"",m0=typeof S?.hint_short==="string"?S.hint_short.trim():"",B0=[V2||null,m0||null].filter(Boolean).join(" • "),w_=[D$?`Current model: ${D$}${l$}`:null,S?.plan?`Plan: ${S.plan}`:null,m0||null,S?.primary?.reset_description||null,S?.secondary?.reset_description||null].filter(Boolean),$$=s_?"Switching model…":w_.join(" • ")||`Current model: ${D$}${l$} (tap to open model picker)`,j$=(Y)=>{if(!Y||typeof Y!=="object")return;let L=Y.model??Y.current;if(typeof l==="function")l({model:L??null,thinking_level:Y.thinking_level??null,supports_thinking:Y.supports_thinking,provider_usage:Y.provider_usage??null});if(L&&typeof t==="function")t(L)},J$=(Y)=>{let L=Y||y_.current;if(!L)return;L.style.height="auto",L.style.height=`${L.scrollHeight}px`,L.style.overflowY="hidden"},j2=(Y)=>{if(!Y)return{content:Y,fileRefs:[]};let B=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),F=-1;for(let n=0;n<B.length;n+=1)if(B[n].trim()==="Files:"&&B[n+1]&&/^\s*-\s+/.test(B[n+1])){F=n;break}if(F===-1)return{content:Y,fileRefs:[]};let x=[],m=F+1;for(;m<B.length;m+=1){let n=B[m];if(/^\s*-\s+/.test(n))x.push(n.replace(/^\s*-\s+/,"").trim());else if(!n.trim())break;else break}if(x.length===0)return{content:Y,fileRefs:[]};let g=B.slice(0,F),i=B.slice(m);return{content:[...g,...i].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:x}},A$=(Y)=>{if(!Y)return{content:Y,messageRefs:[]};let B=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),F=-1;for(let n=0;n<B.length;n+=1)if(B[n].trim()==="Referenced messages:"&&B[n+1]&&/^\s*-\s+/.test(B[n+1])){F=n;break}if(F===-1)return{content:Y,messageRefs:[]};let x=[],m=F+1;for(;m<B.length;m+=1){let n=B[m];if(/^\s*-\s+/.test(n)){let t_=n.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(t_)x.push(t_[1])}else if(!n.trim())break;else break}if(x.length===0)return{content:Y,messageRefs:[]};let g=B.slice(0,F),i=B.slice(m);return{content:[...g,...i].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:x}},P$=(Y)=>{let L=j2(Y||""),B=A$(L.content||"");return{text:B.content||"",fileRefs:L.fileRefs,messageRefs:B.messageRefs}},J0=(Y)=>{if(!Y.startsWith("/")||Y.includes(`
`)){x_(!1),H_([]);return}let L=Y.toLowerCase().split(" ")[0];if(L.length<1){x_(!1),H_([]);return}let B=q5.filter((F)=>F.name.startsWith(L)||F.name.replace(/-/g,"").startsWith(L.replace(/-/g,"")));if(B.length>0&&!(B.length===1&&B[0].name===L))D_(!1),N0([]),H_(B),k_(0),x_(!0);else x_(!1),H_([])},L$=(Y)=>{let L=W_,B=L.indexOf(" "),F=B>=0?L.slice(B):"",x=Y.name+F;K_(x),x_(!1),H_([]),requestAnimationFrame(()=>{let m=y_.current;if(!m)return;let g=x.length;m.selectionStart=g,m.selectionEnd=g,m.focus()})},g0=(Y)=>{if(q4(Y)==null){D_(!1),N0([]);return}let L=s3(e0,Y,{currentChatJid:X_});if(L.length>0&&!(L.length===1&&L4(L[0].agent_name).trim().toLowerCase()===String(Y||"").trim().toLowerCase()))x_(!1),H_([]),N0(L),I_(0),D_(!0);else D_(!1),N0([])},Q$=(Y)=>{let L=L4(Y?.agent_name);if(!L)return;K_(L),D_(!1),N0([]),requestAnimationFrame(()=>{let B=y_.current;if(!B)return;let F=L.length;B.selectionStart=F,B.selectionEnd=F,B.focus()})},b$=(Y)=>{if(Y?.preventDefault?.(),Y?.stopPropagation?.(),j||!b0&&!i$&&!k$&&!l_&&!D0)return;_0(!1),x_(!1),H_([]),D_(!1),N0([]),q_((L)=>!L)},n$=(Y)=>{let L=typeof Y==="string"?Y.trim():"";if(q_(!1),!L||L===X_){requestAnimationFrame(()=>y_.current?.focus());return}b_?.(L)},d$=async(Y)=>{let L=typeof Y==="string"?Y.trim():"";if(q_(!1),!L||typeof $_!=="function"){requestAnimationFrame(()=>y_.current?.focus());return}try{await $_(L)}catch(B){console.warn("Failed to restore session:",B),requestAnimationFrame(()=>y_.current?.focus())}},Z$=(Y)=>{let L=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(L&&typeof b_==="function"){b_(L);return}Q$(Y)},n0=async()=>{if(typeof u_!=="function")return;q_(!1);try{await u_()}catch(Y){console.warn("Failed to rename session:",Y)}requestAnimationFrame(()=>y_.current?.focus())},s$=async()=>{if(typeof Y0!=="function")return;q_(!1);try{await Y0()}catch(Y){console.warn("Failed to create session:",Y)}requestAnimationFrame(()=>y_.current?.focus())},x$=async()=>{if(typeof z_!=="function")return;q_(!1);try{await z_(X_)}catch(Y){console.warn("Failed to delete session:",Y)}requestAnimationFrame(()=>y_.current?.focus())},p0=(Y)=>{if(j)d_(Y);else K_(Y),J0(Y),g0(Y);requestAnimationFrame(()=>J$())},B$=(Y)=>{let L=j?U_:W_,B=L&&!L.endsWith(`
`)?`
`:"",F=`${L}${B}${Y}`.trimStart();p0(F)},o$=(Y)=>{let L=Y?.command?.model_label;if(L)return L;let B=Y?.command?.message;if(typeof B==="string"){let F=B.match(/•\s+([^\n]+?)\s+\(current\)/);if(F?.[1])return F[1].trim()}return null},I$=async(Y)=>{if(j||s_)return;w0(!0);try{let L=await B2("default",Y,null,[],null,X_),B=o$(L);j$({model:B??C??null,thinking_level:L?.command?.thinking_level,supports_thinking:L?.command?.supports_thinking});try{let F=await R2(X_);if(F)j$(F)}catch{}return _?.(),!0}catch(L){return console.error("Failed to switch model:",L),alert("Failed to switch model: "+L.message),!1}finally{w0(!1)}},Z2=async()=>{await I$("/cycle-model")},M$=async(Y)=>{if(!Y||s_)return;if(await I$(`/model ${Y}`))_0(!1)},y2=(Y)=>{Y.preventDefault(),Y.stopPropagation(),q_(!1),_0((L)=>!L)},E2=async()=>{if(j)return;u?.(),await N$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},Q_=(Y)=>{if(Y==="queue"||Y==="steer"||Y==="auto")return Y;return P_?"queue":null},N$=async(Y,L,B={})=>{let{includeMedia:F=!0,includeFileRefs:x=!0,includeMessageRefs:m=!0,clearAfterSubmit:g=!0,recordHistory:i=!0}=B||{},p=typeof Y==="string"?Y:Y&&typeof Y?.target?.value==="string"?Y.target.value:W_,n=typeof p==="string"?p:"";if(!n.trim()&&(F?m_.length===0:!0)&&(x?Q.length===0:!0)&&(m?q.length===0:!0))return;x_(!1),H_([]),D_(!1),N0([]),q_(!1),o_(null);let t_=F?[...m_]:[],h0=x?[...Q]:[],T0=m?[...q]:[],T$=n.trim();if(i&&T$){let N2=M0.current,U0=l0(N2.filter((L2)=>L2!==T$));if(U0.push(T$),U0.length>200)U0.splice(0,U0.length-200);M0.current=U0,J2(U0),O$.current=-1,i_.current=""}let G0=()=>{if(F)h_([...t_]);if(x)C_?.(h0);if(m)R_?.(T0);K_(T$),requestAnimationFrame(()=>J$())};if(g)K_(""),h_([]),U?.(),y?.();(async()=>{try{if(await Z_?.({content:T$,submitMode:L,fileRefs:h0,messageRefs:T0,mediaFiles:t_})){_?.();return}let U0=[];for(let x0 of t_){let S$=await e1(x0);U0.push(S$.id)}let L2=h0.length?`Files:
${h0.map((x0)=>`- ${x0}`).join(`
`)}`:"",o0=T0.length?`Referenced messages:
${T0.map((x0)=>`- message:${x0}`).join(`
`)}`:"",y0=U0.length?`Attachments:
${U0.map((x0,S$)=>{let P1=t_[S$]?.name||`attachment-${S$+1}`;return`- attachment:${x0} (${P1})`}).join(`
`)}`:"",A1=[T$,L2,o0,y0].filter(Boolean).join(`

`),f$=await B2("default",A1,null,U0,Q_(L),X_);if(__?.(f$),f$?.command){j$({model:f$.command.model_label??C??null,thinking_level:f$.command.thinking_level,supports_thinking:f$.command.supports_thinking});try{let x0=await R2(X_);if(x0)j$(x0)}catch{}}_?.()}catch(N2){if(g)G0();let U0=N2?.message||"Failed to send message.";o_(U0),J_?.(U0),console.error("Failed to post:",N2)}})()},k2=(Y)=>{r?.(Y)},w2=(Y)=>{if(Y.isComposing)return;if(j&&Y.key==="Escape"){Y.preventDefault(),d_(""),X?.();return}if(!j&&$0&&Y.key==="Escape"){Y.preventDefault(),q_(!1);return}if(q0&&Z0.length>0){let L=y_.current?.value??(j?U_:W_);if(!String(L||"").match(/^@([a-zA-Z0-9_-]*)$/))D_(!1),N0([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),I_((B)=>(B+1)%Z0.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),I_((B)=>(B-1+Z0.length)%Z0.length);return}if(Y.key==="Tab"||Y.key==="Enter"){Y.preventDefault(),Q$(Z0[f0]);return}if(Y.key==="Escape"){Y.preventDefault(),D_(!1),N0([]);return}}}if(z0&&E_.length>0){let L=y_.current?.value??(j?U_:W_);if(!String(L||"").startsWith("/"))x_(!1),H_([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),k_((B)=>(B+1)%E_.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),k_((B)=>(B-1+E_.length)%E_.length);return}if(Y.key==="Tab"){Y.preventDefault(),L$(E_[e_]);return}if(Y.key==="Enter"&&!Y.shiftKey){if(!(y_.current?.value??(j?U_:W_)).includes(" ")){Y.preventDefault();let x=E_[e_];x_(!1),H_([]),N$(x.name);return}}if(Y.key==="Escape"){Y.preventDefault(),x_(!1),H_([]);return}}}if(!j&&(Y.key==="ArrowUp"||Y.key==="ArrowDown")&&!Y.metaKey&&!Y.ctrlKey&&!Y.altKey&&!Y.shiftKey){let L=y_.current;if(!L)return;let B=L.value||"",F=L.selectionStart===0&&L.selectionEnd===0,x=L.selectionStart===B.length&&L.selectionEnd===B.length;if(Y.key==="ArrowUp"&&F||Y.key==="ArrowDown"&&x){let m=M0.current;if(!m.length)return;Y.preventDefault();let g=O$.current;if(Y.key==="ArrowUp"){if(g===-1)i_.current=B,g=m.length-1;else if(g>0)g-=1;O$.current=g,p0(m[g]||"")}else{if(g===-1)return;if(g<m.length-1)g+=1,O$.current=g,p0(m[g]||"");else O$.current=-1,p0(i_.current||""),i_.current=""}requestAnimationFrame(()=>{let i=y_.current;if(!i)return;let p=i.value.length;i.selectionStart=p,i.selectionEnd=p});return}}if(Y.key==="Enter"&&!Y.shiftKey&&(Y.ctrlKey||Y.metaKey)){Y.preventDefault();let L=y_.current?.value??(j?U_:W_);if(j){if(L.trim())N?.(L.trim(),Z)}else N$(L,"steer");return}if(Y.key==="Enter"&&!Y.shiftKey){Y.preventDefault();let L=y_.current?.value??(j?U_:W_);if(j){if(L.trim())N?.(L.trim(),Z)}else N$(L)}},C$=(Y)=>{let L=Array.from(Y||[]).filter((B)=>B instanceof File&&!String(B.name||"").startsWith(".DS_Store"));if(!L.length)return;h_((B)=>[...B,...L]),o_(null)},A2=(Y)=>{C$(Y.target.files),Y.target.value=""},P2=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),K0.current+=1,T_(!0)},b2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),K0.current=Math.max(0,K0.current-1),K0.current===0)T_(!1)},x2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";T_(!0)},d0=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),K0.current=0,T_(!1),C$(Y.dataTransfer?.files||[])},c0=(Y)=>{if(j)return;let L=Y.clipboardData?.items;if(!L||!L.length)return;let B=[];for(let F of L){if(F.kind!=="file")continue;let x=F.getAsFile?.();if(x)B.push(x)}if(B.length>0)Y.preventDefault(),C$(B)},r$=(Y)=>{h_((L)=>L.filter((B,F)=>F!==Y))},q2=()=>{o_(null),h_([]),U?.(),y?.()},s0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Y)=>{let{latitude:L,longitude:B,accuracy:F}=Y.coords,x=`${L.toFixed(5)}, ${B.toFixed(5)}`,m=Number.isFinite(F)?` ±${Math.round(F)}m`:"",g=`https://maps.google.com/?q=${L},${B}`,i=`Location: ${x}${m} ${g}`;B$(i)},(Y)=>{let L=Y?.message||"Unable to retrieve location.";alert(`Location error: ${L}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};T(()=>{if(!M_)return;F_(!0),R2(X_).then((Y)=>{let L=Array.isArray(Y?.models)?Y.models.filter((B)=>typeof B==="string"&&B.trim().length>0):[];L.sort((B,F)=>B.localeCompare(F,void 0,{sensitivity:"base"})),I(L),j$(Y)}).catch((Y)=>{console.warn("Failed to load model list:",Y),I([])}).finally(()=>{F_(!1)})},[M_,C]),T(()=>{if(j)_0(!1),q_(!1),x_(!1),H_([]),D_(!1),N0([])},[j]),T(()=>{if($0&&!w$)q_(!1)},[$0,w$]),T(()=>{if(!M_)return;let Y=(L)=>{let B=u0.current,F=m$.current,x=L.target;if(B&&B.contains(x))return;if(F&&F.contains(x))return;_0(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[M_]),T(()=>{if(!$0)return;let Y=(L)=>{let B=F0.current,F=g$.current,x=L.target;if(B&&B.contains(x))return;if(F&&F.contains(x))return;q_(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[$0]),T(()=>{let Y=()=>{let m=S0.current?.clientWidth||0;j0((g)=>g===m?g:m)};Y();let L=S0.current,B=0,F=()=>{if(B)cancelAnimationFrame(B);B=requestAnimationFrame(()=>{B=0,Y()})},x=null;if(L&&typeof ResizeObserver<"u")x=new ResizeObserver(()=>F()),x.observe(L);if(typeof window<"u")window.addEventListener("resize",F);return()=>{if(B)cancelAnimationFrame(B);if(x?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",F)}},[j,C,H0.length,b?.percent]);let y$=(Y)=>{let L=Y.target.value;if(o_(null),$0)q_(!1);J$(Y.target),p0(L)};return T(()=>{requestAnimationFrame(()=>J$())},[W_,U_,j]),T(()=>{if(j)return;g0(W_)},[e0,X_,W_,j]),O`
        <div class="compose-box">
            ${!j&&v_.length>0&&O`
                <div class="compose-queue-stack">
                    ${v_.map((Y)=>{let L=typeof Y?.content==="string"?Y.content:"",B=P$(L);if(!B.text.trim()&&B.fileRefs.length===0&&B.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${L}>
                                    ${B.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${B.text}</div>
                                    `}
                                    ${(B.messageRefs.length>0||B.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${B.messageRefs.map((F)=>O`
                                                <${U$}
                                                    key=${"queue-msg-"+F}
                                                    prefix="compose"
                                                    label=${"msg:"+F}
                                                    title=${"Message reference: "+F}
                                                    icon="message"
                                                />
                                            `)}
                                            ${B.fileRefs.map((F)=>{let x=F.split("/").pop()||F;return O`
                                                    <${U$}
                                                        key=${"queue-file-"+F}
                                                        prefix="compose"
                                                        label=${x}
                                                        title=${F}
                                                        onClick=${()=>G_?.(F)}
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
                                        onClick=${()=>k2(Y)}
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
                                        onClick=${()=>o?.(Y)}
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
                class=${`compose-input-wrapper${a_?" drag-active":""}`}
                onDragEnter=${P2}
                onDragOver=${x2}
                onDragLeave=${b2}
                onDrop=${d0}
            >
                <div class="compose-input-main">
                    ${v0&&!c$&&O`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${v0}</div>
                    `}
                    ${c$&&O`
                        <div class="compose-file-refs">
                            ${v0&&O`
                                <div class="compose-submit-error" role="status" aria-live="polite">${v0}</div>
                            `}
                            ${q.map((Y)=>{return O`
                                    <${U$}
                                        key=${"msg-"+Y}
                                        prefix="compose"
                                        label=${"msg:"+Y}
                                        title=${"Message reference: "+Y}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(Y)}
                                    />
                                `})}
                            ${Q.map((Y)=>{let L=Y.split("/").pop()||Y;return O`
                                    <${U$}
                                        prefix="compose"
                                        label=${L}
                                        title=${Y}
                                        onClick=${()=>G_?.(Y)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Y)}
                                    />
                                `})}
                            ${m_.map((Y,L)=>{let B=Y?.name||`attachment-${L+1}`;return O`
                                    <${U$}
                                        key=${B+L}
                                        prefix="compose"
                                        label=${B}
                                        title=${B}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>r$(L)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${q2}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof N_==="function"&&O`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>N_?.()}
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
                        ref=${y_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?U_:W_}
                        onInput=${y$}
                        onKeyDown=${w2}
                        onPaste=${c0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${q0&&Z0.length>0&&O`
                        <div class="slash-autocomplete" ref=${e$}>
                            ${Z0.map((Y,L)=>O`
                                <div
                                    key=${Y.chat_jid||Y.agent_name}
                                    class=${`slash-item${L===f0?" active":""}`}
                                    onMouseDown=${(B)=>{B.preventDefault(),Q$(Y)}}
                                    onMouseEnter=${()=>I_(L)}
                                >
                                    <span class="slash-name">@${Y.agent_name}</span>
                                    <span class="slash-desc">${Y.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${z0&&E_.length>0&&O`
                        <div class="slash-autocomplete" ref=${i0}>
                            ${E_.map((Y,L)=>O`
                                <div
                                    key=${Y.name}
                                    class=${`slash-item${L===e_?" active":""}`}
                                    onMouseDown=${(B)=>{B.preventDefault(),L$(Y)}}
                                    onMouseEnter=${()=>k_(L)}
                                >
                                    <span class="slash-name">${Y.name}</span>
                                    <span class="slash-desc">${Y.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${M_&&!j&&O`
                        <div class="compose-model-popup" ref=${u0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${a&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!a&&O0.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!a&&O0.map((Y)=>O`
                                    <button
                                        key=${Y}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${C===Y?" active":""}`}
                                        onClick=${()=>{M$(Y)}}
                                        disabled=${s_}
                                    >
                                        ${Y}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Z2()}}
                                    disabled=${s_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${$0&&!j&&O`
                        <div class="compose-model-popup" ref=${F0}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${O`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Y=typeof W0?.agent_name==="string"&&W0.agent_name.trim()?`@${W0.agent_name.trim()}`:X_,L=typeof W0?.chat_jid==="string"&&W0.chat_jid.trim()?W0.chat_jid.trim():X_;return`${Y} — ${L} • current`})()}
                                    </div>
                                `}
                                ${!_$&&O`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${_$&&$2.map((Y)=>{let L=Boolean(Y.archived_at),F=Y.chat_jid!==(Y.root_chat_jid||Y.chat_jid)&&!Y.is_active&&!L&&typeof z_==="function",x=`@${Y.agent_name} — ${Y.chat_jid}${Y.is_active?" • active":""}${L?" • archived":""}`;return O`
                                        <div key=${Y.chat_jid} class=${`compose-model-popup-item-row${L?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${L?" archived":""}`}
                                                onClick=${()=>{if(L){d$(Y.chat_jid);return}n$(Y.chat_jid)}}
                                                disabled=${L?!i$:!b0}
                                                title=${L?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${x}
                                            </button>
                                            ${F&&O`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${Y.agent_name}`}
                                                    onClick=${(m)=>{m.stopPropagation(),q_(!1),z_(Y.chat_jid)}}
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
                            ${(l_||k$||D0)&&O`
                                <div class="compose-model-popup-actions">
                                    ${l_&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{s$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${k$&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{n0()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${D0&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{x$()}}
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
                <div class="compose-footer" ref=${S0}>
                    ${!j&&C&&O`
                    <div class="compose-meta-row">
                        ${!j&&C&&O`
                            <div class="compose-model-meta">
                                <button
                                    ref=${m$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${$$}
                                    aria-label="Open model picker"
                                    onClick=${y2}
                                    disabled=${s_}
                                >
                                    ${s_?"Switching…":D$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!s_&&B0&&O`
                                        <span class="compose-model-usage-hint" title=${$$}>
                                            ${B0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&b&&b.percent!=null&&O`
                            <${L5} usage=${b} onCompact=${E2} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${P0&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${H0.map((Y)=>O`
                                <button
                                    key=${Y.chat_jid||Y.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>Z$(Y)}
                                    title=${`${Y.chat_jid||"Active agent"} — switch to @${Y.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Y.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${w$&&O`
                        ${W0?.agent_name&&O`
                            <span
                                class="compose-current-agent-label"
                                title=${W0.chat_jid||X_}
                                onClick=${b$}
                            >@${W0.agent_name}</span>
                        `}
                        <button
                            ref=${g$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${$0?" active":""}`}
                            onClick=${b$}
                            title=${$0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${$0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&O`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Y)=>K?.(Y.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${F$&&!j&&O`
                        <button
                            class="icon-btn location-btn"
                            onClick=${s0}
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
                    ${E$&&!j&&O`
                        <button
                            class=${`icon-btn notification-btn${H$?" active":""}`}
                            onClick=${d}
                            title=${_2}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&O`
                        ${j_&&h&&O`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${h}
                                title=${`Attach open file: ${j_}`}
                                type="button"
                                disabled=${Q.includes(j_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${A2} />
                        </label>
                    `}
                    ${(V_!=="connected"||!j)&&O`
                        <div class="compose-send-stack">
                            ${V_!=="connected"&&O`
                                <span class="compose-connection-status connection-status ${V_}" title=${h$}>
                                    ${Q0}
                                </span>
                            `}
                            ${!j&&O`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{N$()}}
                                    disabled=${!V$}
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
    `}var U4="piclaw_theme",L1="piclaw_tint",$8="piclaw_chat_themes",g2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},j8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={default:{label:"Default",mode:"auto",light:g2,dark:j8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},Q5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],Y2={theme:"default",tint:null},Z8="light",Q4=!1;function Q1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function B5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,z,X].every((V)=>Number.isFinite(V)))return null;let Q=`#${[K,z,X].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:X,hex:Q}}function N8(_){return D2(_)||B5(_)}function m2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function B4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function U5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function O5(_){return U5(_)>0.4?"#000000":"#ffffff"}function K8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function O4(_){return e3[_]||e3.default}function F5(_){return _.mode==="auto"?K8():_.mode}function Y8(_,$){let j=O4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||g2}function z8(_,$,j){let Z=N8($);if(!Z)return _;let N=D2(_.bgPrimary),K=D2(_.bgSecondary),z=D2(_.bgHover),X=D2(_.borderColor);if(!N||!K||!z||!X)return _;let V=D2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:m2(N,Z,0.08),bgSecondary:m2(K,Z,0.12),bgHover:m2(z,Z,0.16),borderColor:m2(X,Z,0.08),accent:Z.hex,accentHover:V?m2(Z,V,0.18):Z.hex}}function H5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=N8(Z),K=N?B4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?B4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?B4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q=N?O5(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":X,"--accent-contrast-text":Q,"--danger-color":_.danger||g2.danger,"--success-color":_.success||g2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([U,q])=>{if(q)j.style.setProperty(U,q)})}function D5(){if(typeof document>"u")return;let _=document.documentElement;Q5.forEach(($)=>_.style.removeProperty($))}function H2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function _8(_){let $=Q1(Y2?.theme||"default"),j=Y2?.tint?String(Y2.tint).trim():null,Z=Y8($,_);if($==="default"&&j)Z=z8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?j8.bgPrimary:g2.bgPrimary}function J5(_,$){if(typeof document>"u")return;let j=H2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=H2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",_8("light"));let N=H2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",_8("dark"));let K=H2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=H2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let X=H2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function y5(){if(typeof window>"u")return;let _={...Y2,mode:Z8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function W8(){try{let _=a0($8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function E5(_,$,j){let Z=W8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};p_($8,JSON.stringify(Z))}function k5(_){if(!_)return null;return W8()[_]||null}function G8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function F4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=Q1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=O4(j),K=F5(N),z=Y8(j,K);Y2={theme:j,tint:Z},Z8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let Q=z;if(j==="default"&&Z)Q=z8(z,Z,K);if(j==="default"&&!Z)D5();else H5(Q,K);if(J5(Q.bgPrimary,K),y5(),$.persist!==!1)if(p_(U4,j),Z)p_(L1,Z);else p_(L1,"")}function q1(){if(O4(Y2.theme).mode!=="auto")return;F4(Y2,{persist:!1})}function X8(){if(typeof window>"u")return()=>{};let _=G8(),$=k5(_),j=$?Q1($.theme||"default"):Q1(a0(U4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=a0(L1);return N?N.trim():null})();if(F4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!Q4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",q1);else if(N.addListener)N.addListener(q1);return Q4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",q1);else if(N.removeListener)N.removeListener(q1);Q4=!1}}return()=>{}}function V8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||G8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(E5($,j||"default",Z),F4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")p_(U4,j||"default"),p_(L1,Z||"")}function q8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return K8()}var B1=/#(\w+)/g,w5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),A5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),P5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),b5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},x5=new Set(["http:","https:","mailto:",""]);function H4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function z2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!x5.has(Z.protocol))return null;return Z.href}catch{return null}}function L8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let X=z.tagName.toLowerCase();if(!A5.has(X)){let V=z.parentNode;if(!V)continue;while(z.firstChild)V.insertBefore(z.firstChild,z);V.removeChild(z);continue}let Q=b5[X]||new Set;for(let V of Array.from(z.attributes)){let U=V.name.toLowerCase(),q=V.value;if(U.startsWith("on")){z.removeAttribute(V.name);continue}if(U.startsWith("data-")||U.startsWith("aria-"))continue;if(Q.has(U)||P5.has(U)){if(U==="href"){let H=z2(q);if(!H)z.removeAttribute(V.name);else if(z.setAttribute(V.name,H),X==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(U==="src"){let H=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,y=z2(H,{allowDataImage:X==="img"});if(!y)z.removeAttribute(V.name);else z.setAttribute(V.name,y)}continue}z.removeAttribute(V.name)}}return j.body.innerHTML}function Q8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function U1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=Q8(j);if(N===j)break;j=N}return j}function I5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&X.trim().match(/^```\s*$/)){let Q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${Q}@@`),K=!1,z=[];continue}if(K)z.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function M5(_){if(!_)return _;return U1(_,5)}function C5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function T5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function f5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=M5(K);return`<div class="mermaid-container" data-mermaid="${C5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function B8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var S5={span:new Set(["title","class","lang","dir"])};function R5(_,$){let j=S5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${H4(X)}"`)}return Z.join("")}function U8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[Q=""]=X.split(/\s+/,1),V=Q.toLowerCase();if(!V||!w5.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let U=X.slice(Q.length).trim(),q=R5(V,U);return`<${V}${q}>`})}function O8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function F8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function v5(_){if(!window.katex)return _;let $=(z)=>Q8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let X=[],Q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let U=X.length;return X.push(V),`@@CODE_BLOCK_${U}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let U=X.length;return X.push(V),`@@CODE_INLINE_${U}@@`}),{html:Q,blocks:X}},Z=(z,X)=>{if(!X.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,V)=>{let U=Number(V);return X[U]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,X,Q)=>{try{let V=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${X}${V}`}catch(V){return`<span class="math-error" title="${H4(V.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,X,Q)=>{if(/\s$/.test(Q))return z;try{let V=katex.renderToString($(Q),{displayMode:!1,throwOnError:!1});return`${X}${V}`}catch(V){return`${X}<span class="math-error" title="${H4(V.message)}">$${Q}$</span>`}}),Z(K,N.blocks)}function u5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(B1.lastIndex=0,!B1.test(z))continue;B1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let Q=z.split(B1);if(Q.length<=1)continue;let V=$.createDocumentFragment();Q.forEach((U,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",U),H.textContent=`#${U}`,V.appendChild(H)}else V.appendChild($.createTextNode(U))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function m5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function t0(_,$,j={}){if(!_)return"";let Z=m5(_),{text:N,blocks:K}=I5(Z),z=U1(N,2),Q=B8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=U8(Q),U=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return U=O8(U),U=F8(U),U=v5(U),U=u5(U),U=f5(U,K),U=L8(U,j),U}function O1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=U1($,2),N=B8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=U8(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=O8(z),z=F8(z),z=L8(z),z}function g5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let z=N.trim().split(/\s+/).map((Q)=>{let[V,U]=Q.split(",").map(Number);return{x:V,y:U}});if(z.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${z[0].x},${z[0].y}`];for(let Q=1;Q<z.length-1;Q++){let V=z[Q-1],U=z[Q],q=z[Q+1],H=U.x-V.x,y=U.y-V.y,C=q.x-U.x,S=q.y-U.y,f=Math.sqrt(H*H+y*y),w=Math.sqrt(C*C+S*S),b=Math.min($,f/2,w/2);if(b<0.5){X.push(`L ${U.x},${U.y}`);continue}let u=U.x-H/f*b,J=U.y-y/f*b,v=U.x+C/w*b,d=U.y+S/w*b,l=H*S-y*C>0?1:0;X.push(`L ${u},${J}`),X.push(`A ${b},${b} 0 0 ${l} ${v},${d}`)}return X.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=q8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let X=z.dataset.mermaid,Q=T5(X||""),V=U1(Q,2),U=await $(V,{...N,transparent:!0});U=g5(U),z.innerHTML=U,z.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${X.message}`,z.innerHTML="",z.appendChild(Q),z.removeAttribute("data-mermaid")}}function H8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function D8(_){return String(_||"").trim()||"web:default"}function J8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function y8(_){if(!_)return!1;return _.status!=="running"}function E8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function k8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=E(null),K=E(null),z=_?.thinking?O1(_.thinking):"",X=_?.answer?t0(_.answer,null,{sanitize:!1}):"";if(T(()=>{if(N.current&&z)v$(N.current).catch(()=>{})},[z]),T(()=>{if(K.current&&X)v$(K.current).catch(()=>{})},[X]),!_)return null;let Q=_.status==="running",V=Boolean(String(_.answer||"").trim()),U=Boolean(String(_.thinking||"").trim()),q=J8(_),H=y8(_),y=!Q&&V,C=Q?"Thinking…":_.status==="error"?"Error":"Done";return O`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${C}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&O`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&O`<div class="btw-block btw-error">${_.error}</div>`}
            ${U&&O`
                <details class="btw-block btw-thinking" open=${Q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${q&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${H&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!y}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var w8="PiClaw";function D4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,X=K[z],Q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",U=V?V:null,q=j||Q==="PiClaw".toLowerCase()||Q==="pi";return{letter:N,color:X,image:U||(q?"/static/icon-192.png":null)}}function A8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function P8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function b8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",Q=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(Q&&(X||z&&z!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function p5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function p2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function x8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return p2(_)?"Compacting context":"Working..."}function c5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function I8(_,$=Date.now()){let j=p5(_);if(j===null)return null;return c5(Math.max(0,$-j))}function M8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:X,onPanelToggle:Q}){let q=($_)=>{if(!$_)return{text:"",totalLines:0,fullText:""};if(typeof $_==="string"){let d_=$_,m_=d_?d_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:d_,totalLines:m_,fullText:d_}}let W_=$_.text||"",K_=$_.fullText||$_.full_text||W_,U_=Number.isFinite($_.totalLines)?$_.totalLines:K_?K_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W_,totalLines:U_,fullText:K_}},H=160,y=($_)=>String($_||"").replace(/<\/?internal>/gi,""),C=($_)=>{if(!$_)return 1;return Math.max(1,Math.ceil($_.length/160))},S=($_,W_,K_)=>{let U_=($_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!U_)return{text:"",omitted:0,totalLines:Number.isFinite(K_)?K_:0,visibleLines:0};let d_=U_.split(`
`),m_=d_.length>W_?d_.slice(0,W_).join(`
`):U_,h_=Number.isFinite(K_)?K_:d_.reduce((E_,H_)=>E_+C(H_),0),a_=m_?m_.split(`
`).reduce((E_,H_)=>E_+C(H_),0):0,T_=Math.max(h_-a_,0);return{text:m_,omitted:T_,totalLines:h_,visibleLines:a_}},f=q(j),w=q(Z),b=q($),u=Boolean(f.text)||f.totalLines>0,J=Boolean(w.text)||w.totalLines>0,v=Boolean(b.fullText?.trim()||b.text?.trim());if(!_&&!v&&!u&&!J&&!N&&!K)return null;let[d,t]=M(new Set),[l,j_]=M(()=>Date.now()),h=($_)=>t((W_)=>{let K_=new Set(W_),U_=!K_.has($_);if(U_)K_.add($_);else K_.delete($_);if(typeof Q==="function")Q($_,U_);return K_});T(()=>{t(new Set)},[z]);let G_=p2(_);T(()=>{if(!G_)return;j_(Date.now());let $_=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval($_)},[G_,_?.started_at,_?.startedAt]);let v_=_?.turn_id||z,r=b8(v_),o=X?"turn-dot turn-dot-queued":"turn-dot",Z_=($_)=>$_,__=Boolean(_?.last_activity||_?.lastActivity),N_=($_)=>$_==="warning"?"#f59e0b":$_==="error"?"var(--danger-color)":$_==="success"?"var(--success-color)":r,P_=K?.kind||"info",B_=N_(P_),X_=N_(_?.kind||(G_?"warning":"info")),V_="",C_=_?.title,R_=_?.status;if(_?.type==="plan")V_=C_?`Planning: ${C_}`:"Planning...";else if(_?.type==="tool_call")V_=C_?`Running: ${C_}`:"Running tool...";else if(_?.type==="tool_status")V_=C_?`${C_}: ${R_||"Working..."}`:R_||"Working...";else if(_?.type==="error")V_=C_||"Agent error";else V_=C_||R_||"Working...";if(__)V_="Last activity just now";let J_=({panelTitle:$_,text:W_,fullText:K_,totalLines:U_,maxLines:d_,titleClass:m_,panelKey:h_})=>{let a_=d.has(h_),T_=K_||W_||"",E_=h_==="thought"||h_==="draft"?y(T_):T_,H_=typeof d_==="number",e_=a_&&H_,k_=H_?S(E_,d_,U_):{text:E_||"",omitted:0,totalLines:Number.isFinite(U_)?U_:0};if(!E_&&!(Number.isFinite(k_.totalLines)&&k_.totalLines>0))return null;let z0=`agent-thinking-body${H_?" agent-thinking-body-collapsible":""}`,x_=H_?`--agent-thinking-collapsed-lines: ${d_};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${a_?"true":"false"}
                data-collapsible=${H_?"true":"false"}
                style=${r?`--turn-color: ${r};`:""}
            >
                <div class="agent-thinking-title ${m_||""}">
                    ${r&&O`<span class=${o} aria-hidden="true"></span>`}
                    ${$_}
                    ${e_&&O`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$_} panel`}
                            onClick=${()=>h(h_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${z0}
                    style=${x_}
                    dangerouslySetInnerHTML=${{__html:O1(E_)}}
                />
                ${!a_&&k_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>h(h_)}>
                        ▸ ${k_.omitted} more lines
                    </button>
                `}
                ${a_&&k_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>h(h_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},b_=N?.tool_call?.title,u_=b_?`Awaiting approval: ${b_}`:"Awaiting approval",Y0=G_?I8(_,l):null,z_=($_,W_,K_=null)=>{let U_=x8($_);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W_?`--turn-color: ${W_};`:""}
                title=${$_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W_&&O`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${U_}</span>
                    ${K_&&O`<span class="agent-status-elapsed">${K_}</span>`}
                </div>
                ${$_.detail&&O`<div class="agent-thinking-body">${$_.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${K&&z_(K,B_)}
            ${_?.type==="intent"&&z_(_,X_,Y0)}
            ${N&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    <span class=${o} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${u_}</span>
                </div>
            `}
            ${u&&J_({panelTitle:Z_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${J&&J_({panelTitle:Z_("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${v&&J_({panelTitle:Z_("Draft"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${__?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    ${r&&O`<span class=${o} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!__&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${V_}</span>
                </div>
            `}
        </div>
    `}function C8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",X=Z?.kind||"other",Q=Z?.rawInput||{},V=Q.command||Q.commands&&Q.commands[0]||null,U=Q.diff||null,q=Q.fileName||Q.path||null,H=Z?.description||Q.description||Q.explanation||null,C=(Array.isArray(Z?.locations)?Z.locations:[]).map((u)=>u?.path).filter((u)=>Boolean(u)),S=Array.from(new Set([q,...C].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(u)=>{try{await Y1(j,u,K||null),$()}catch(J){console.error("Failed to respond to agent request:",J)}},w=async()=>{try{await $4(z,`Auto-approved: ${z}`),await Y1(j,"approved",K||null),$()}catch(u){console.error("Failed to add to whitelist:",u)}},b=N&&N.length>0;return O`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(H||V||U||S.length>0)&&O`
                    <div class="agent-request-body">
                        ${H&&O`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${S.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${S.map((u,J)=>O`<li key=${J}>${u}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&O`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${U&&O`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${U}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${b?N.map((u)=>O`
                            <button 
                                key=${u.optionId||u.id||String(u)}
                                class="agent-request-btn ${u.kind==="allow_once"||u.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(u.optionId||u.id||u)}
                            >
                                ${u.name||u.label||u.optionId||u.id||String(u)}
                            </button>
                        `):O`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${w}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function T8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${V}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${X}`}function c2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function G$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function W2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var h5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),i5=new Set(["text/markdown"]),l5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),n5=new Set(["application/vnd.jgraph.mxfile"]);function h2(_){return typeof _==="string"?_.trim().toLowerCase():""}function d5(_){let $=h2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function s5(_){let $=h2(_);return!!$&&$.endsWith(".pdf")}function o5(_){let $=h2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function i2(_,$){let j=h2(_);if(d5($)||n5.has(j))return"drawio";if(s5($)||j==="application/pdf")return"pdf";if(o5($)||l5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(h5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function f8(_){let $=h2(_);return i5.has($)}function S8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function r5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function a5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function R8(_){return r5(_)||a5(_)}function F1(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function t5(_,$){let j=Math.max(F1(_),F1($)),Z=Math.min(F1(_),F1($));return(j+0.05)/(Z+0.05)}function e5(_,$,j="#ffffff"){let Z=R8(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let X=R8(z);if(!X)continue;let Q=t5(Z,X);if(Q>K)N=z,K=Q}return N}function J4(){let _=getComputedStyle(document.documentElement),$=(C,S)=>{for(let f of C){let w=_.getPropertyValue(f).trim();if(w)return w}return S},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),Q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),U=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),y=e5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:X,good:Q,warning:V,attention:U,border:q,fontFamily:H,buttonTextColor:y}}function v8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:X,border:Q,fontFamily:V}=J4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:Q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var _7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),u8=!1,H1=null,m8=!1;function y4(_){_.querySelector(".adaptive-card-notice")?.remove()}function $7(_,$,j="error"){y4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function j7(_,$=(j)=>t0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Z7(_=($)=>t0($,null)){return($,j)=>{try{let Z=j7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function N7(_){if(m8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Z7(),m8=!0}async function K7(){if(u8)return;if(H1)return H1;return H1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{u8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),H1}function Y7(){return globalThis.AdaptiveCards}function z7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function W7(_){return _7.has(_)}function k4(_){if(!Array.isArray(_))return[];return _.filter(z7)}function G7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function E4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>E4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${E4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function X7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return E4($);return typeof $==="string"?$:String($)}function V7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=X7(z.type,j[z.id],z);for(let[X,Q]of Object.entries(z))if(Array.isArray(Q)||Q&&typeof Q==="object")z[X]=Z(Q);return z};return Z(_)}function q7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function L7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Q7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=L7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function g8(_,$,j){if(!W7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await K7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Y7();N7(Z);let N=new Z.AdaptiveCard,K=J4();N.hostConfig=new Z.HostConfig(v8());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:V7($.payload,z);N.parse(X),N.onExecuteAction=(U)=>{let q=G7(U);if(j?.onAction)y4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let y=H instanceof Error?H.message:String(H||"Action failed.");$7(_,y||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let Q=N.render();if(!Q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=Q7($);if(V){_.classList.add("adaptive-card-finished");let U=document.createElement("div");U.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=V.label,U.appendChild(q),V.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=V.detail,U.appendChild(H)}_.appendChild(U)}if(y4(_),_.appendChild(Q),V)q7(Q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function p8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l2(j)})).filter(($)=>$.value)}function B7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function w4(_){if(!Array.isArray(_))return[];return _.filter(B7)}function c8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=p8(j).map(({key:K,value:z})=>`${K}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function h8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=p8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:z})=>`${K}: ${z}`).join(", "):l2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function U7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?G$($):null},{label:"Added",value:_?.created_at?W2(_.created_at):null}].filter((Z)=>Z.value)}function O7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=W$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function i8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=g_(()=>i2($?.content_type,Z),[$?.content_type,Z]),K=S8(N),z=g_(()=>f8($?.content_type),[$?.content_type]),[X,Q]=M(N==="text"),[V,U]=M(""),[q,H]=M(null),y=E(null),C=g_(()=>U7($),[$]),S=g_(()=>O7(_,Z,N),[_,Z,N]),f=g_(()=>{if(!z||!V)return"";return t0(V)},[z,V]);return T(()=>{let w=(b)=>{if(b.key==="Escape")j()};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[j]),T(()=>{if(!y.current||!f)return;v$(y.current);return},[f]),T(()=>{let w=!1;async function b(){if(N!=="text"){Q(!1),H(null);return}Q(!0),H(null);try{let u=await K4(_);if(!w)U(u)}catch{if(!w)H("Failed to load text preview.")}finally{if(!w)Q(!1)}}return b(),()=>{w=!0}},[_,N]),O`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(w)=>{w.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${S&&O`
                            <a
                                href=${S}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(w)=>w.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${W$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(w)=>w.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&q&&O`<div class="attachment-preview-state">${q}</div>`}
                    ${!X&&!q&&N==="image"&&O`
                        <img class="attachment-preview-image" src=${W$(_)} alt=${Z} />
                    `}
                    ${!X&&!q&&(N==="pdf"||N==="office"||N==="drawio")&&S&&O`
                        <iframe class="attachment-preview-frame" src=${S} title=${Z}></iframe>
                    `}
                    ${!X&&!q&&N==="drawio"&&O`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!q&&N==="text"&&z&&O`
                        <div
                            ref=${y}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!X&&!q&&N==="text"&&!z&&O`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!X&&!q&&N==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${C.map((w)=>O`
                        <div class="attachment-preview-meta-item" key=${w.label}>
                            <span class="attachment-preview-meta-label">${w.label}</span>
                            <span class="attachment-preview-meta-value">${w.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function l8({src:_,onClose:$}){return T(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function F7({mediaId:_,onPreview:$}){let[j,Z]=M(null);if(T(()=>{U2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?G$(K):"",Q=i2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${W$(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${z&&O`<span class="file-size">${z}</span>`}
                        ${j.content_type&&O`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${Q}
            </button>
        </div>
    `}function H7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=M(null);T(()=>{if(!Number.isFinite(j))return;U2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?W$(j):null,Q=i2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${K}>
            ${z?O`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${U$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:O`
                    <${U$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&O`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function D1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?W2(Z):null;return O`
        <div class="content-annotations">
            ${$&&$.length>0&&O`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&O`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&O`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function D7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?G$(_.size):"",N=_.mime_type||"",K=y7(N),z=z2(_.uri);return O`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&O`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&O`<span>${N}</span>`}
                    ${Z&&O`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function J7({block:_}){let[$,j]=M(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&O`
                ${N&&O`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&O`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:z||"application/octet-stream"}),V=URL.createObjectURL(Q),U=document.createElement("a");U.href=V,U.download=Z.split("/").pop()||"resource",U.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function y7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function E7({preview:_}){let $=z2(_.url),j=z2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return O`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function k7(_,$){return typeof _==="string"?_:""}var w7=1800,A7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,P7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,b7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function x7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function I7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let X=z||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=P7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=b7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=A7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),z.appendChild(X);let Q=async(V)=>{V.preventDefault(),V.stopPropagation();let q=K.querySelector("code")?.textContent||"",H=await x7(q);N(X,H?"success":"error");let y=j.get(X);if(y)clearTimeout(y);let C=setTimeout(()=>{N(X,"idle"),j.delete(X)},w7);j.set(X,C)};X.addEventListener("click",Q),Z.push(()=>{X.removeEventListener("click",Q);let V=j.get(X);if(V)clearTimeout(V);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function M7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),X=j.slice(K),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:N}}function C7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let q=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),X=j.slice(K),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:N}}function T7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1){let U=j[V].trim();if((U==="Images:"||U==="Attachments:")&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let U=V.replace(/^\s*-\s+/,"").trim(),q=U.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||U.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],y=(q[2]||"").trim()||H;N.push({id:H,label:y,raw:U})}else N.push({id:null,label:U,raw:U})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),X=j.slice(K),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:N}}function f7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(f7).sort((U,q)=>q.length-U.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),X=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),Q=[],V;while(V=X.nextNode())Q.push(V);for(let U of Q){let q=U.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=U.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let y=q.split(N).filter((S)=>S!=="");if(y.length===0)continue;let C=z.createDocumentFragment();for(let S of y)if(K.test(S)){let f=z.createElement("mark");f.className="search-highlight-term",f.textContent=S,C.appendChild(f)}else C.appendChild(z.createTextNode(S));U.parentNode.replaceChild(C,U)}return z.body.innerHTML}function n8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:X,userAvatarUrl:Q,userAvatarBackground:V,onDelete:U,isThreadReply:q,isThreadPrev:H,isThreadNext:y,isRemoving:C,highlightQuery:S,onFileRef:f}){let[w,b]=M(null),u=E(null),J=_.data,v=J.type==="agent_response",d=X||"You",t=v?K||w8:d,l=v?D4(K,z,!0):D4(d,Q),j_=typeof V==="string"?V.trim().toLowerCase():"",h=!v&&l.image&&(j_==="clear"||j_==="transparent"),G_=v&&Boolean(l.image),v_=`background-color: ${h||G_?"transparent":l.color}`,r=J.content_meta,o=Boolean(r?.truncated),Z_=Boolean(r?.preview),__=o&&!Z_,N_=o?{originalLength:Number.isFinite(r?.original_length)?r.original_length:J.content?J.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,P_=J.content_blocks||[],B_=J.media_ids||[],X_=k7(J.content,J.link_previews),{content:V_,fileRefs:C_}=M7(X_),{content:R_,messageRefs:J_}=C7(V_),{content:b_,attachments:u_}=T7(R_);X_=b_;let Y0=k4(P_),z_=w4(P_),$_=Y0.length===1&&typeof Y0[0]?.fallback_text==="string"?Y0[0].fallback_text.trim():"",W_=z_.length===1?c8(z_[0]).trim():"",K_=Boolean($_)&&X_?.trim()===$_||Boolean(W_)&&X_?.trim()===W_,U_=Boolean(X_)&&!__&&!K_,d_=typeof S==="string"?S.trim():"",m_=g_(()=>{if(!X_||K_)return"";let I=t0(X_,j);return d_?S7(I,d_):I},[X_,K_,d_]),h_=(I,a)=>{I.stopPropagation(),b(W$(a))},[a_,T_]=M(null),E_=(I)=>{T_(I)},H_=(I)=>{I.stopPropagation(),U?.(_)},e_=(I,a)=>{let F_=new Set;if(!I||a.length===0)return{content:I,usedIds:F_};return{content:I.replace(/attachment:([^\s)"']+)/g,(j0,v0,o_,y_)=>{let i0=v0.replace(/^\/+/,""),u0=a.find((F0)=>F0.name&&F0.name.toLowerCase()===i0.toLowerCase()&&!F_.has(F0.id))||a.find((F0)=>!F_.has(F0.id));if(!u0)return j0;if(F_.add(u0.id),y_.slice(Math.max(0,o_-2),o_)==="](")return`/media/${u0.id}`;return u0.name||"attachment"}),usedIds:F_}},k_=[],z0=[],x_=[],Z0=[],N0=[],f0=[],I_=0;if(P_.length>0)P_.forEach((I)=>{if(I?.type==="text"&&I.annotations)f0.push(I.annotations);if(I?.type==="resource_link")Z0.push(I);else if(I?.type==="resource")N0.push(I);else if(I?.type==="file"){let a=B_[I_++];if(a)z0.push(a),x_.push({id:a,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let a=B_[I_++];if(a){let F_=typeof I?.mime_type==="string"?I.mime_type:void 0;k_.push({id:a,annotations:I?.annotations,mimeType:F_}),x_.push({id:a,name:I?.name||I?.filename||I?.title})}}});else if(B_.length>0){let I=u_.length>0;B_.forEach((a,F_)=>{let O_=u_[F_]||null;if(x_.push({id:a,name:O_?.label||null}),I)z0.push(a);else k_.push({id:a,annotations:null})})}if(u_.length>0)u_.forEach((I)=>{if(!I?.id)return;let a=x_.find((F_)=>String(F_.id)===String(I.id));if(a&&!a.name)a.name=I.label});let{content:q0,usedIds:D_}=e_(X_,x_);X_=q0;let s_=k_.filter(({id:I})=>!D_.has(I)),w0=z0.filter((I)=>!D_.has(I)),M_=u_.length>0?u_.map((I,a)=>({id:I.id||`attachment-${a+1}`,label:I.label||`attachment-${a+1}`})):x_.map((I,a)=>({id:I.id,label:I.name||`attachment-${a+1}`})),_0=g_(()=>k4(P_),[P_]),$0=g_(()=>w4(P_),[P_]),q_=g_(()=>{return _0.map((I)=>`${I.card_id}:${I.state}`).join("|")},[_0]);T(()=>{if(!u.current)return;return v$(u.current),I7(u.current)},[m_]);let O0=E(null);return T(()=>{if(!O0.current||_0.length===0)return;let I=O0.current;I.innerHTML="";for(let a of _0){let F_=document.createElement("div");I.appendChild(F_),g8(F_,a,{onAction:async(O_)=>{if(O_.type==="Action.OpenUrl"){let j0=z2(O_.url||"");if(!j0)throw Error("Invalid URL");window.open(j0,"_blank","noopener,noreferrer");return}if(O_.type==="Action.Submit"){await _4({post_id:_.id,thread_id:J.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:O_.type,title:O_.title||"",data:O_.data}});return}console.warn("[post] unsupported adaptive card action:",O_.type,O_)}}).catch((O_)=>{console.error("[post] adaptive card render error:",O_),F_.textContent=a.fallback_text||"Card failed to render."})}},[q_,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${v?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${y?"thread-next":""} ${C?"removing":""}" onClick=${$}>
            <div class="post-avatar ${v?"agent-avatar":""} ${l.image?"has-image":""}" style=${v_}>
                ${l.image?O`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${H_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),Z)Z(_.id)}}>${T8(_.timestamp)}</a>
                </div>
                ${__&&N_&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${c2(N_.originalLength)} chars
                            ${N_.maxLength?O` • Display limit: ${c2(N_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Z_&&N_&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${c2(N_.maxLength)} of ${c2(N_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(C_.length>0||J_.length>0||M_.length>0)&&O`
                    <div class="post-file-refs">
                        ${J_.map((I)=>{let a=(F_)=>{if(F_.preventDefault(),F_.stopPropagation(),N)N(I,_.chat_jid||null);else{let O_=document.getElementById("post-"+I);if(O_)O_.scrollIntoView({behavior:"smooth",block:"center"}),O_.classList.add("post-highlight"),setTimeout(()=>O_.classList.remove("post-highlight"),2000)}};return O`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${a}>
                                    <${U$}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${C_.map((I)=>{let a=I.split("/").pop()||I;return O`
                                <${U$}
                                    prefix="post"
                                    label=${a}
                                    title=${I}
                                    onClick=${()=>f?.(I)}
                                />
                            `})}
                        ${M_.map((I)=>O`
                            <${H7}
                                key=${I.id}
                                attachment=${I}
                                onPreview=${E_}
                            />
                        `)}
                    </div>
                `}
                ${U_&&O`
                    <div 
                        ref=${u}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let a=I.target.dataset.hashtag;if(a)j?.(a)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),b(I.target.src)}}
                    />
                `}
                ${_0.length>0&&O`
                    <div ref=${O0} class="post-adaptive-cards" />
                `}
                ${$0.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${$0.map((I,a)=>{let F_=h8(I),O_=`${I.card_id}-${a}`;return O`
                                <div key=${O_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F_.title}</span>
                                        </div>
                                    </div>
                                    ${F_.fields.length>0&&O`
                                        <div class="adaptive-card-submission-fields">
                                            ${F_.fields.map((j0)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${j0.key}: ${j0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${j0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${j0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${W2(F_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${f0.length>0&&O`
                    ${f0.map((I,a)=>O`
                        <${D1} key=${a} annotations=${I} />
                    `)}
                `}
                ${s_.length>0&&O`
                    <div class="media-preview">
                        ${s_.map(({id:I,mimeType:a})=>{let O_=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?W$(I):N4(I);return O`
                                <img 
                                    key=${I} 
                                    src=${O_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(j0)=>h_(j0,I)}
                                />
                            `})}
                    </div>
                `}
                ${s_.length>0&&O`
                    ${s_.map(({annotations:I},a)=>O`
                        ${I&&O`<${D1} key=${a} annotations=${I} />`}
                    `)}
                `}
                ${w0.length>0&&O`
                    <div class="file-attachments">
                        ${w0.map((I)=>O`
                            <${F7} key=${I} mediaId=${I} onPreview=${E_} />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&O`
                    <div class="resource-links">
                        ${Z0.map((I,a)=>O`
                            <div key=${a}>
                                <${D7} block=${I} />
                                <${D1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&O`
                    <div class="resource-embeds">
                        ${N0.map((I,a)=>O`
                            <div key=${a}>
                                <${J7} block=${I} />
                                <${D1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${J.link_previews.map((I,a)=>O`
                            <${E7} key=${a} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${w&&O`<${l8} src=${w} onClose=${()=>b(null)} />`}
        ${a_&&O`
            <${i8}
                mediaId=${a_.mediaId}
                info=${a_.info}
                onClose=${()=>T_(null)}
            />
        `}
    `}function d8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:X,emptyMessage:Q,timelineRef:V,agents:U,user:q,onDeletePost:H,reverse:y=!0,removingPostIds:C,searchQuery:S}){let[f,w]=M(!1),b=E(null),u=typeof IntersectionObserver<"u",J=P(async()=>{if(!j||!$||f)return;w(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{w(!1)}},[$,f,j]),v=P((r)=>{let{scrollTop:o,scrollHeight:Z_,clientHeight:__}=r.target,N_=y?Z_-__-o:o,P_=Math.max(300,__);if(N_<P_)J()},[y,J]);T(()=>{if(!u)return;let r=b.current,o=V?.current;if(!r||!o)return;let Z_=300,__=new IntersectionObserver((N_)=>{for(let P_ of N_){if(!P_.isIntersecting)continue;J()}},{root:o,rootMargin:`${Z_}px 0px ${Z_}px 0px`,threshold:0});return __.observe(r),()=>__.disconnect()},[u,$,j,V,J]);let d=E(J);if(d.current=J,T(()=>{if(u)return;if(!V?.current)return;let{scrollTop:r,scrollHeight:o,clientHeight:Z_}=V.current,__=y?o-Z_-r:r,N_=Math.max(300,Z_);if(__<N_)d.current?.()},[u,_,$,y,V]),T(()=>{if(!V?.current)return;if(!$||f)return;let{scrollTop:r,scrollHeight:o,clientHeight:Z_}=V.current,__=y?o-Z_-r:r,N_=Math.max(300,Z_);if(o<=Z_+1||__<N_)d.current?.()},[_,$,f,y,V]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,o)=>r.id-o.id),l=(r)=>{let o=r?.data?.thread_id;if(o===null||o===void 0||o==="")return null;let Z_=Number(o);return Number.isFinite(Z_)?Z_:null},j_=new Map;for(let r=0;r<t.length;r+=1){let o=t[r],Z_=Number(o?.id),__=l(o);if(__!==null){let N_=j_.get(__)||{anchorIndex:-1,replyIndexes:[]};N_.replyIndexes.push(r),j_.set(__,N_)}else if(Number.isFinite(Z_)){let N_=j_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};N_.anchorIndex=r,j_.set(Z_,N_)}}let h=new Map;for(let[r,o]of j_.entries()){let Z_=new Set;if(o.anchorIndex>=0)Z_.add(o.anchorIndex);for(let __ of o.replyIndexes)Z_.add(__);h.set(r,Array.from(Z_).sort((__,N_)=>__-N_))}let G_=t.map((r,o)=>{let Z_=l(r);if(Z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let __=h.get(Z_);if(!__||__.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let N_=__.indexOf(o);if(N_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:N_>0,hasThreadNext:N_<__.length-1}}),v_=O`<div class="timeline-sentinel" ref=${b}></div>`;return O`
        <div class="timeline ${y?"reverse":"normal"}" ref=${V} onScroll=${v}>
            <div class="timeline-content">
                ${y?v_:null}
                ${t.map((r,o)=>{let Z_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),__=C?.has?.(r.id),N_=G_[o]||{};return O`
                    <${n8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${Z_}
                        isThreadPrev=${N_.hasThreadPrev}
                        isThreadNext=${N_.hasThreadNext}
                        isRemoving=${__}
                        highlightQuery=${S}
                        agentName=${A8(r.data?.agent_id,U||{})}
                        agentAvatarUrl=${P8(r.data?.agent_id,U||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${X}
                        onDelete=${H}
                    />
                `})}
                ${y?null:v_}
            </div>
        </div>
    `}class s8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n_=new s8;var J1=null,A4=null;function R7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function o8(){if(A4)return Promise.resolve(A4);if(!J1)J1=import(R7()).then((_)=>{return A4=_,_}).catch((_)=>{throw J1=null,_});return J1}class r8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await o8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var P4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new r8(_,$)}};function b4(){o8().catch(()=>{})}var I4="piclaw://terminal";var v7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},u7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},y1=null,x4=null;function m7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function g7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!m7(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function p7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!y1)y1=g7(()=>Promise.resolve($.init?.())).catch((j)=>{throw y1=null,j});return await y1,$}async function c7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!x4)x4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await x4}async function h7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function i7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function l7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function n7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function a8(){let _=l7(),$=_?u7:v7,j=u$("--bg-primary",_?"#000000":"#ffffff"),Z=u$("--text-primary",_?"#e7e9ea":"#0f1419"),N=u$("--text-secondary",_?"#71767b":"#536471"),K=u$("--accent-color","#1d9bf0"),z=u$("--danger-color",_?"#ff7b72":"#cf222e"),X=u$("--success-color",_?"#7ee787":"#1a7f37"),Q=u$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=u$("--border-color",_?"#2f3336":"#eff3f4"),U=u$("--accent-soft-strong",n7(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:U,selectionForeground:Z,black:Q,red:z,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class M4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await p7();if(await c7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:a8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=a8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await h7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(i7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var C4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new M4(_,$)}},T4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new M4(_,$)}};function t$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,U=[];for(let H of V.split("/")){if(!H||H===".")continue;if(H===".."){if(U.length>0)U.pop();continue}U.push(H)}let q=U.join("/");return`${W1(q)}${K}${z}`}function n2(_){return _?.preview||null}function s7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function o7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function r7(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${t$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${t$(G$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${t$(W2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${t$(o7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${t$(s7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${t$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function a7(_){let $=n2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=r7(_,$);if($.kind==="image"){let Z=$.url||($.path?W1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${t$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=t0($.text||"",null,{rewriteImageSrc:(N)=>d7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${t$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class f4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=a7(this.context)}getContent(){let _=n2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=n2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var S4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=n2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new f4(_,$)}},R4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return n2(_)||_?.path?1:!1},mount(_,$){return new f4(_,$)}};var t7=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),e7={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},_j={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function e8(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function t8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=e8(j),K=_j[N]||"\uD83D\uDCC4",z=e7[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${t8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${t8(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Q=X.querySelector("#ov-open-tab");if(Q)Q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=e8(_?.path);if(!$||!t7.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _6(_,$);return new $6(_,$)}};var $j=/\.(csv|tsv)$/i;function j6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Z6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${j6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${j6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class N6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$j.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new Z6(_,$);return new N6(_,$)}};var jj=/\.pdf$/i;function Zj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class K6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Zj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Y6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!jj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new K6(_,$);return new Y6(_,$)}};var Nj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function g4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class z6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${g4(N)}" alt="${g4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${g4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class W6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Nj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new z6(_,$);return new W6(_,$)}};var Kj=/\.(mp4|m4v|mov|webm|ogv)$/i;function Yj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class G6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Yj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class X6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Kj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new G6(_,$);return new X6(_,$)}};function zj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Wj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var h4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function V6(_){let $=String(_||"").trim();return $?$:h4}function Gj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Xj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Vj(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,X,Q,V,U,q){try{if(z&&Q!=null&&j({filename:z,format:X,data:Q,mimeType:V,base64Encoded:Boolean(U),defaultMode:q}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,X,Q,V,U,q){try{if(X&&j({filename:X,data:z,mimeType:Q,base64Encoded:Boolean(V),mode:U,folderId:q}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function q6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Xj(j)}`}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Wj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Gj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Vj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=h4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await q6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await q6(_,"image/png");else this.xmlData=V6(await _.text());else if(_.status===404)this.xmlData=h4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?V6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var i4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!zj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new L6(_,$);return new Q6(_,$)}};class B6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var c_=new B6;var E1="workspaceExplorerScale",qj=["compact","default","comfortable"],Lj=new Set(qj),Qj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function U6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return Lj.has(j)?j:$}function l4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Bj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Uj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function n4(_={}){let $=Bj(_),j=_.stored?U6(_.stored,$):$;return Uj(j,_)}function O6(_){return Qj[U6(_)]}var Oj=60000,J6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function y6(_,$,j,Z=0,N=[]){if(!j&&J6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)y6(K,$,j,Z+1,N);return N}function F6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&J6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function r4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,z=Z.map((X)=>{let Q=r4(N.get(X.path),X);if(Q!==N.get(X.path))K=!0;return Q});return K?{...$,children:z}:_}function s4(_,$,j){if(!_)return _;if(_.path===$)return r4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=s4(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var E6=4,d4=14,Fj=8,Hj=16;function k6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=k6(Z);return _.__bytes=j,j}function w6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=E6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let Q=Math.max(0,Number(X?.__bytes??X?.size??0));if(Q<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:Q});else K.push({kind:"file",name:X.name,path:X.path,size:Q})}K.sort((X,Q)=>Q.size-X.size);let z=K;if(K.length>d4){let X=K.slice(0,d4-1),Q=K.slice(d4-1),V=Q.reduce((U,q)=>U+q.size,0);X.push({kind:"other",name:`+${Q.length} more`,path:`${Z.path}/[other]`,size:V}),z=X}return Z.children=z.map((X)=>{if(X.kind==="dir")return w6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function H6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function A6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function k1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function a4(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,X=K-N>z?N+z:K,Q=k1(_,$,Z,N),V=k1(_,$,Z,X),U=k1(_,$,j,X),q=k1(_,$,j,N),H=X-N>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${U.x.toFixed(3)} ${U.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var P6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function b6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(X,Q,V,U)=>{let q=Array.isArray(X?.children)?X.children:[];if(!q.length)return;let H=Math.max(0,Number(X.size)||0);if(H<=0)return;let y=V-Q,C=Q;q.forEach((S,f)=>{let w=Math.max(0,Number(S.size)||0);if(w<=0)return;let b=w/H,u=C,J=f===q.length-1?V:C+y*b;if(C=J,J-u<0.003)return;let v=P6[U];if(v){let d=A6(u,U,j);if(Z.push({key:S.path,path:S.path,label:S.name,size:w,color:d,depth:U,startAngle:u,endAngle:J,innerRadius:v[0],outerRadius:v[1],d:a4(120,120,v[0],v[1],u,J)}),U===1)N.push({key:S.path,name:S.name,size:w,pct:K>0?w/K*100:0,color:d})}if(U<E6)z(S,u,J,U+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function o4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=o4(Z,$);if(N)return N}return null}function x6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=P6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,X=A6(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:a4(120,120,N[0],N[1],K,z)}],legend:[{key:V,name:_,size:j,pct:100,color:X}]}}function D6(_,$=!1,j=!1){if(!_)return null;let Z=k6(_),N=w6(_,0),K=N.size||Z,{segments:z,legend:X}=b6(N,K,j);if(!z.length&&K>0){let Q=x6("[files]",N.path,K,j);z=Q.segments,X=Q.legend}return{root:N,totalSize:K,segments:z,legend:X,truncated:$,isDarkTheme:j}}function Dj({payload:_}){if(!_)return null;let[$,j]=M(null),[Z,N]=M(_?.root?.path||"."),[K,z]=M(()=>[_?.root?.path||"."]),[X,Q]=M(!1);T(()=>{let h=_?.root?.path||".";N(h),z([h]),j(null)},[_?.root?.path,_?.totalSize]),T(()=>{if(!Z)return;Q(!0);let h=setTimeout(()=>Q(!1),180);return()=>clearTimeout(h)},[Z]);let V=g_(()=>{return o4(_.root,Z)||_.root},[_?.root,Z]),U=V?.size||_.totalSize||0,{segments:q,legend:H}=g_(()=>{let h=b6(V,U,_.isDarkTheme);if(h.segments.length>0)return h;if(U<=0)return h;let G_=V?.children?.length?"Total":"[files]";return x6(G_,V?.path||_?.root?.path||".",U,_.isDarkTheme)},[V,U,_.isDarkTheme,_?.root?.path]),[y,C]=M(q),S=E(new Map),f=E(0);T(()=>{let h=S.current,G_=new Map(q.map((Z_)=>[Z_.key,Z_])),v_=performance.now(),r=220,o=(Z_)=>{let __=Math.min(1,(Z_-v_)/220),N_=__*(2-__),P_=q.map((B_)=>{let V_=h.get(B_.key)||{startAngle:B_.startAngle,endAngle:B_.startAngle,innerRadius:B_.innerRadius,outerRadius:B_.innerRadius},C_=(Y0,z_)=>Y0+(z_-Y0)*N_,R_=C_(V_.startAngle,B_.startAngle),J_=C_(V_.endAngle,B_.endAngle),b_=C_(V_.innerRadius,B_.innerRadius),u_=C_(V_.outerRadius,B_.outerRadius);return{...B_,d:a4(120,120,b_,u_,R_,J_)}});if(C(P_),__<1)f.current=requestAnimationFrame(o)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(o),S.current=G_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[q]);let w=y.length?y:q,b=U>0?G$(U):"0 B",u=V?.name||"",v=(u&&u!=="."?u:"Total")||"Total",d=b,t=K.length>1,l=(h)=>{if(!h?.path)return;let G_=o4(_.root,h.path);if(!G_||!Array.isArray(G_.children)||G_.children.length===0)return;z((v_)=>[...v_,G_.path]),N(G_.path),j(null)},j_=()=>{if(!t)return;z((h)=>{let G_=h.slice(0,-1);return N(G_[G_.length-1]||_?.root?.path||"."),G_}),j(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${U}>
                ${w.map((h)=>O`
                    <path
                        key=${h.key}
                        d=${h.d}
                        fill=${h.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===h.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(h)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(h)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(h)}
                    >
                        <title>${h.label} — ${G$(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${j_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${v}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${d}</text>
                </g>
            </svg>
            ${H.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((h)=>O`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${G$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Jj({mediaId:_}){let[$,j]=M(null);if(T(()=>{if(!_)return;U2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?G$($.metadata.size):"";return O`
        <a href=${W$(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&O`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function I6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[X,Q]=M(null),[V,U]=M(new Set(["."])),[q,H]=M(null),[y,C]=M(null),[S,f]=M(""),[w,b]=M(null),[u,J]=M(null),[v,d]=M(!0),[t,l]=M(!1),[j_,h]=M(null),[G_,v_]=M(()=>O2("workspaceShowHidden",!1)),[r,o]=M(!1),[Z_,__]=M(null),[N_,P_]=M(null),[B_,X_]=M(null),[V_,C_]=M(!1),[R_,J_]=M(null),[b_,u_]=M(()=>H6()),[Y0,z_]=M(()=>n4({stored:a0(E1),...l4()})),[$_,W_]=M(!1),K_=E(V),U_=E(""),d_=E(null),m_=E(0),h_=E(new Set),a_=E(null),T_=E(new Map),E_=E(_),H_=E(Z),e_=E(null),k_=E(null),z0=E(null),x_=E(null),Z0=E(null),N0=E(null),f0=E("."),I_=E(null),q0=E({path:null,dragging:!1,startX:0,startY:0}),D_=E({path:null,dragging:!1,startX:0,startY:0}),s_=E({path:null,timer:0}),w0=E(!1),M_=E(0),_0=E(new Map),$0=E(null),q_=E(null),O0=E(null),I=E(null),a=E(null),F_=E(null),O_=E(G_),j0=E($),v0=E(j??$),o_=E(0),y_=E(B_),i0=E(r),e$=E(Z_),u0=E(null),m$=E({x:0,y:0}),F0=E(0),g$=E(null),S0=E(q),K0=E(y),p$=E(null),l0=E(null),L0=E(w);E_.current=_,H_.current=Z,T(()=>{K_.current=V},[V]),T(()=>{O_.current=G_},[G_]),T(()=>{j0.current=$},[$]),T(()=>{v0.current=j??$},[j,$]),T(()=>{y_.current=B_},[B_]),T(()=>{if(typeof window>"u")return;let Y=()=>{z_(n4({stored:a0(E1),...l4()}))};Y();let L=()=>Y(),B=()=>Y(),F=(p)=>{if(!p||p.key===null||p.key===E1)Y()};window.addEventListener("resize",L),window.addEventListener("focus",B),window.addEventListener("storage",F);let x=window.matchMedia?.("(pointer: coarse)"),m=window.matchMedia?.("(hover: none)"),g=(p,n)=>{if(!p)return;if(p.addEventListener)p.addEventListener("change",n);else if(p.addListener)p.addListener(n)},i=(p,n)=>{if(!p)return;if(p.removeEventListener)p.removeEventListener("change",n);else if(p.removeListener)p.removeListener(n)};return g(x,L),g(m,L),()=>{window.removeEventListener("resize",L),window.removeEventListener("focus",B),window.removeEventListener("storage",F),i(x,L),i(m,L)}},[]),T(()=>{let Y=(L)=>{let B=L?.detail?.path;if(!B)return;let F=B.split("/"),x=[];for(let m=1;m<F.length;m++)x.push(F.slice(0,m).join("/"));if(x.length)U((m)=>{let g=new Set(m);g.add(".");for(let i of x)g.add(i);return g});H(B),requestAnimationFrame(()=>{let m=document.querySelector(`[data-path="${CSS.escape(B)}"]`);if(m)m.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",Y),()=>window.removeEventListener("workspace-reveal-path",Y)},[]),T(()=>{i0.current=r},[r]),T(()=>{e$.current=Z_},[Z_]),T(()=>{S0.current=q},[q]),T(()=>{K0.current=y},[y]),T(()=>{L0.current=w},[w]),T(()=>{if(typeof window>"u"||typeof document>"u")return;let Y=()=>u_(H6());Y();let L=window.matchMedia?.("(prefers-color-scheme: dark)"),B=()=>Y();if(L?.addEventListener)L.addEventListener("change",B);else if(L?.addListener)L.addListener(B);let F=typeof MutationObserver<"u"?new MutationObserver(()=>Y()):null;if(F?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)F?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(L?.removeEventListener)L.removeEventListener("change",B);else if(L?.removeListener)L.removeListener(B);F?.disconnect()}},[]),T(()=>{if(!y)return;let Y=Z0.current;if(!Y)return;let L=requestAnimationFrame(()=>{try{Y.focus(),Y.select()}catch{}});return()=>cancelAnimationFrame(L)},[y]),T(()=>{if(!$_)return;let Y=(B)=>{let F=B?.target;if(!(F instanceof Element))return;if(a.current?.contains(F))return;if(F_.current?.contains(F))return;W_(!1)},L=(B)=>{if(B?.key==="Escape")W_(!1),F_.current?.focus?.()};return document.addEventListener("mousedown",Y),document.addEventListener("touchstart",Y,{passive:!0}),document.addEventListener("keydown",L),()=>{document.removeEventListener("mousedown",Y),document.removeEventListener("touchstart",Y),document.removeEventListener("keydown",L)}},[$_]);let J2=async(Y)=>{l(!0),b(null),J(null);try{let L=await Y4(Y,20000);b(L)}catch(L){b({error:L.message||"Failed to load preview"})}finally{l(!1)}};e_.current=J2;let M0=async()=>{if(!j0.current)return;try{let Y=await v2("",1,O_.current),L=F6(Y.root,K_.current,O_.current);if(L===U_.current){d(!1);return}if(U_.current=L,d_.current=Y.root,!m_.current)m_.current=requestAnimationFrame(()=>{m_.current=0,Q((B)=>r4(B,d_.current)),d(!1)})}catch(Y){h(Y.message||"Failed to load workspace"),d(!1)}},O$=async(Y)=>{if(!Y)return;if(h_.current.has(Y))return;h_.current.add(Y);try{let L=await v2(Y,1,O_.current);Q((B)=>s4(B,Y,L.root))}catch(L){h(L.message||"Failed to load workspace")}finally{h_.current.delete(Y)}};k_.current=O$;let i_=P(()=>{let Y=q;if(!Y)return".";let L=T_.current?.get(Y);if(L&&L.type==="dir")return L.path;if(Y==="."||!Y.includes("/"))return".";let B=Y.split("/");return B.pop(),B.join("/")||"."},[q]),V$=P((Y)=>{let L=Y?.closest?.(".workspace-row");if(!L)return null;let B=L.dataset.path,F=L.dataset.type;if(!B)return null;if(F==="dir")return B;if(B.includes("/")){let x=B.split("/");return x.pop(),x.join("/")||"."}return"."},[]),F$=P((Y)=>{return V$(Y?.target||null)},[V$]),A0=P((Y)=>{y_.current=Y,X_(Y)},[]),C0=P(()=>{let Y=s_.current;if(Y?.timer)clearTimeout(Y.timer);s_.current={path:null,timer:0}},[]),q$=P((Y)=>{if(!Y||Y==="."){C0();return}let L=T_.current?.get(Y);if(!L||L.type!=="dir"){C0();return}if(K_.current?.has(Y)){C0();return}if(s_.current?.path===Y)return;C0();let B=setTimeout(()=>{s_.current={path:null,timer:0},k_.current?.(Y),U((F)=>{let x=new Set(F);return x.add(Y),x})},600);s_.current={path:Y,timer:B}},[C0]),E$=P((Y,L)=>{if(m$.current={x:Y,y:L},F0.current)return;F0.current=requestAnimationFrame(()=>{F0.current=0;let B=u0.current;if(!B)return;let F=m$.current;B.style.transform=`translate(${F.x+12}px, ${F.y+12}px)`})},[]),H$=P((Y)=>{if(!Y)return;let B=(T_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!B)return;P_({path:Y,label:B})},[]),_2=P(()=>{if(P_(null),F0.current)cancelAnimationFrame(F0.current),F0.current=0;if(u0.current)u0.current.style.transform="translate(-9999px, -9999px)"},[]),c$=P((Y)=>{if(!Y)return".";let L=T_.current?.get(Y);if(L&&L.type==="dir")return L.path;if(Y==="."||!Y.includes("/"))return".";let B=Y.split("/");return B.pop(),B.join("/")||"."},[]),Q0=P(()=>{C(null),f("")},[]),h$=P((Y)=>{if(!Y)return;let B=(T_.current?.get(Y)?.name||Y.split("/").pop()||Y).trim();if(!B||Y===".")return;C(Y),f(B)},[]),e0=P(async()=>{let Y=K0.current;if(!Y)return;let L=(S||"").trim();if(!L){Q0();return}let B=T_.current?.get(Y),F=(B?.name||Y.split("/").pop()||Y).trim();if(L===F){Q0();return}try{let m=(await G4(Y,L))?.path||Y,g=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(Q0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:Y,newPath:m,type:B?.type||"file"}})),B?.type==="dir")U((i)=>{let p=new Set;for(let n of i)if(n===Y)p.add(m);else if(n.startsWith(`${Y}/`))p.add(`${m}${n.slice(Y.length)}`);else p.add(n);return p});if(H(m),B?.type==="dir")b(null),l(!1),J(null);else e_.current?.(m);k_.current?.(g)}catch(x){h(x?.message||"Failed to rename file")}},[Q0,S]),H0=P(async(Y)=>{let F=Y||".";for(let x=0;x<50;x+=1){let g=`untitled${x===0?"":`-${x}`}.md`;try{let p=(await W4(F,g,""))?.path||(F==="."?g:`${F}/${g}`);if(F&&F!==".")U((n)=>new Set([...n,F]));H(p),h(null),k_.current?.(F),e_.current?.(p);return}catch(i){if(i?.status===409||i?.code==="file_exists")continue;h(i?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),P0=P((Y)=>{if(Y?.stopPropagation?.(),V_)return;let L=c$(S0.current);H0(L)},[V_,c$,H0]);T(()=>{if(typeof window>"u")return;let Y=(L)=>{let B=L?.detail?.updates||[];if(!Array.isArray(B)||B.length===0)return;Q((i)=>{let p=i;for(let n of B){if(!n?.root)continue;if(!p||n.path==="."||!n.path)p=n.root;else p=s4(p,n.path,n.root)}if(p)U_.current=F6(p,K_.current,O_.current);return d(!1),p});let F=S0.current;if(Boolean(F)&&B.some((i)=>{let p=i?.path||"";if(!p||p===".")return!0;return F===p||F.startsWith(`${p}/`)||p.startsWith(`${F}/`)}))_0.current.clear();if(!F||!L0.current)return;let m=T_.current?.get(F);if(m&&m.type==="dir")return;if(B.some((i)=>{let p=i?.path||"";if(!p||p===".")return!0;return F===p||F.startsWith(`${p}/`)}))e_.current?.(F)};return window.addEventListener("workspace-update",Y),()=>window.removeEventListener("workspace-update",Y)},[]),a_.current=M0;let W0=E(()=>{if(typeof window>"u")return;let Y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),L=v0.current??j0.current,B=document.visibilityState!=="hidden"&&(L||Y.matches&&j0.current);u2(B,O_.current).catch(()=>{})}).current,R0=E(0),$2=E(()=>{if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=0,W0()},250)}).current;T(()=>{if(j0.current)a_.current?.();$2()},[$,j]),T(()=>{a_.current(),W0();let Y=setInterval(()=>a_.current(),Oj),L=F2("previewHeight",null),B=Number.isFinite(L)?Math.min(Math.max(L,80),600):280;if(M_.current=B,z0.current)z0.current.style.setProperty("--preview-height",`${B}px`);let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),x=()=>$2();if(F.addEventListener)F.addEventListener("change",x);else if(F.addListener)F.addListener(x);return document.addEventListener("visibilitychange",x),()=>{if(clearInterval(Y),m_.current)cancelAnimationFrame(m_.current),m_.current=0;if(F.removeEventListener)F.removeEventListener("change",x);else if(F.removeListener)F.removeListener(x);if(document.removeEventListener("visibilitychange",x),R0.current)clearTimeout(R0.current),R0.current=0;if(I_.current)clearTimeout(I_.current),I_.current=null;u2(!1,O_.current).catch(()=>{})}},[]);let _$=g_(()=>y6(X,V,G_),[X,V,G_]),b0=g_(()=>new Map(_$.map((Y)=>[Y.node.path,Y.node])),[_$]),i$=g_(()=>O6(Y0),[Y0]);T_.current=b0;let l_=(q?T_.current.get(q):null)?.type==="dir";T(()=>{if(!q||!l_){J_(null),$0.current=null,q_.current=null;return}let Y=q,L=`${G_?"hidden":"visible"}:${q}`,B=_0.current,F=B.get(L);if(F?.root){B.delete(L),B.set(L,F);let g=D6(F.root,Boolean(F.truncated),b_);if(g)$0.current=g,q_.current=q,J_({loading:!1,error:null,payload:g});return}let x=$0.current,m=q_.current;J_({loading:!0,error:null,payload:m===q?x:null}),v2(q,Fj,G_).then((g)=>{if(S0.current!==Y)return;let i={root:g?.root,truncated:Boolean(g?.truncated)};B.delete(L),B.set(L,i);while(B.size>Hj){let n=B.keys().next().value;if(!n)break;B.delete(n)}let p=D6(i.root,i.truncated,b_);$0.current=p,q_.current=q,J_({loading:!1,error:null,payload:p})}).catch((g)=>{if(S0.current!==Y)return;J_({loading:!1,error:g?.message||"Failed to load folder size chart",payload:m===q?x:null})})},[q,l_,G_,b_]);let D0=Boolean(w&&w.kind==="text"&&!l_&&(!w.size||w.size<=262144)),w$=D0?"Open in editor":w?.size>262144?"File too large to edit":"File is not editable",D$=Boolean(q&&q!=="."),l$=Boolean(q&&!l_),V2=Boolean(q&&!l_),m0=q&&l_?G1(q,G_):null,B0=P(()=>W_(!1),[]),w_=P(async(Y)=>{B0();try{await Y?.()}catch{}},[B0]);T(()=>{let Y=O0.current;if(I.current)I.current.dispose(),I.current=null;if(!Y)return;if(Y.innerHTML="",!q||l_||!w||w.error)return;let L={path:q,content:typeof w.text==="string"?w.text:void 0,mtime:w.mtime,size:w.size,preview:w,mode:"view"},B=n_.resolve(L)||n_.get("workspace-preview-default");if(!B)return;let F=B.mount(Y,L);return I.current=F,()=>{if(I.current===F)F.dispose(),I.current=null;Y.innerHTML=""}},[q,l_,w]);let $$=(Y)=>{let L=Y?.target;if(L instanceof Element)return L;return L?.parentElement||null},j$=(Y)=>{return Boolean(Y?.closest?.(".workspace-node-icon, .workspace-label-text"))},J$=E((Y)=>{if(l0.current)clearTimeout(l0.current),l0.current=null;let B=$$(Y)?.closest?.("[data-path]");if(!B)return;let F=B.dataset.path;if(B.dataset.type==="dir"||!F)return;if(K0.current===F)Q0();H_.current?.(F)}).current,j2=E((Y)=>{if(w0.current){w0.current=!1;return}let L=$$(Y),B=L?.closest?.("[data-path]");if(x_.current?.focus?.(),!B)return;let F=B.dataset.path,x=B.dataset.type,m=Boolean(L?.closest?.(".workspace-caret")),g=Boolean(L?.closest?.("button"))||Boolean(L?.closest?.("a"))||Boolean(L?.closest?.("input")),i=S0.current===F,p=K0.current;if(p){if(p===F)return;Q0()}let n=x==="file"&&p$.current===F&&!m&&!g;if(i&&!m&&!g&&F!=="."&&!n){if(l0.current)clearTimeout(l0.current);l0.current=setTimeout(()=>{l0.current=null,h$(F)},350);return}if(x==="dir"){if(p$.current=null,H(F),b(null),J(null),l(!1),!K_.current.has(F))k_.current?.(F);if(i&&!m)return;U((h0)=>{let T0=new Set(h0);if(T0.has(F))T0.delete(F);else T0.add(F);return T0})}else{p$.current=null,H(F);let t_=T_.current.get(F);if(t_)E_.current?.(t_.path,t_);e_.current?.(F)}}).current,A$=E(()=>{U_.current="",a_.current(),Array.from(K_.current||[]).filter((L)=>L&&L!==".").forEach((L)=>k_.current?.(L))}).current,P$=E(()=>{p$.current=null,H(null),b(null),J(null),l(!1)}).current,J0=E(()=>{v_((Y)=>{let L=!Y;if(typeof window<"u")p_("workspaceShowHidden",String(L));return O_.current=L,u2(!0,L).catch(()=>{}),U_.current="",a_.current?.(),Array.from(K_.current||[]).filter((F)=>F&&F!==".").forEach((F)=>k_.current?.(F)),L})}).current,L$=E((Y)=>{if($$(Y)?.closest?.("[data-path]"))return;P$()}).current,g0=P(async(Y)=>{if(!Y)return;let L=Y.split("/").pop()||Y;if(!window.confirm(`Delete "${L}"? This cannot be undone.`))return;try{await V4(Y);let F=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(S0.current===Y)P$();k_.current?.(F),h(null)}catch(F){b((x)=>({...x||{},error:F.message||"Failed to delete file"}))}},[P$]),Q$=P((Y)=>{let L=x_.current;if(!L||!Y||typeof CSS>"u"||typeof CSS.escape!=="function")return;L.querySelector(`[data-path="${CSS.escape(Y)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b$=P((Y)=>{let L=_$;if(!L||L.length===0)return;let B=q?L.findIndex((F)=>F.node.path===q):-1;if(Y.key==="ArrowDown"){Y.preventDefault();let F=Math.min(B+1,L.length-1),x=L[F];if(!x)return;if(H(x.node.path),x.node.type!=="dir")E_.current?.(x.node.path,x.node),e_.current?.(x.node.path);else b(null),l(!1),J(null);Q$(x.node.path);return}if(Y.key==="ArrowUp"){Y.preventDefault();let F=B<=0?0:B-1,x=L[F];if(!x)return;if(H(x.node.path),x.node.type!=="dir")E_.current?.(x.node.path,x.node),e_.current?.(x.node.path);else b(null),l(!1),J(null);Q$(x.node.path);return}if(Y.key==="ArrowRight"&&B>=0){let F=L[B];if(F?.node?.type==="dir"&&!V.has(F.node.path))Y.preventDefault(),k_.current?.(F.node.path),U((x)=>new Set([...x,F.node.path]));return}if(Y.key==="ArrowLeft"&&B>=0){let F=L[B];if(F?.node?.type==="dir"&&V.has(F.node.path))Y.preventDefault(),U((x)=>{let m=new Set(x);return m.delete(F.node.path),m});return}if(Y.key==="Enter"&&B>=0){Y.preventDefault();let F=L[B];if(!F)return;let x=F.node.path;if(F.node.type==="dir"){if(!K_.current.has(x))k_.current?.(x);U((g)=>{let i=new Set(g);if(i.has(x))i.delete(x);else i.add(x);return i}),b(null),J(null),l(!1)}else E_.current?.(x,F.node),e_.current?.(x);return}if((Y.key==="Delete"||Y.key==="Backspace")&&B>=0){let F=L[B];if(!F||F.node.type==="dir")return;Y.preventDefault(),g0(F.node.path);return}if(Y.key==="Escape")Y.preventDefault(),P$()},[P$,g0,V,_$,Q$,q]),n$=P((Y)=>{let L=$$(Y),B=L?.closest?.(".workspace-row");if(!B)return;let F=B.dataset.type,x=B.dataset.path;if(!x||x===".")return;if(K0.current===x)return;let m=Y?.touches?.[0];if(!m)return;if(q0.current={path:j$(L)?x:null,dragging:!1,startX:m.clientX,startY:m.clientY},F!=="file")return;if(I_.current)clearTimeout(I_.current);I_.current=setTimeout(()=>{if(I_.current=null,q0.current?.dragging)return;g0(x)},600)},[g0]),d$=P(()=>{if(I_.current)clearTimeout(I_.current),I_.current=null;let Y=q0.current;if(Y?.dragging&&Y.path){let L=y_.current||i_(),B=g$.current;if(typeof B==="function")B(Y.path,L)}q0.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,o(!1),__(null),A0(null),C0(),_2()},[i_,_2,A0,C0]),Z$=P((Y)=>{let L=q0.current,B=Y?.touches?.[0];if(!B||!L?.path){if(I_.current)clearTimeout(I_.current),I_.current=null;return}let F=Math.abs(B.clientX-L.startX),x=Math.abs(B.clientY-L.startY),m=F>8||x>8;if(m&&I_.current)clearTimeout(I_.current),I_.current=null;if(!L.dragging&&m)L.dragging=!0,o(!0),__("move"),H$(L.path);if(L.dragging){Y.preventDefault(),E$(B.clientX,B.clientY);let g=document.elementFromPoint(B.clientX,B.clientY),i=V$(g)||i_();if(y_.current!==i)A0(i);q$(i)}},[V$,i_,H$,E$,A0,q$]),n0=E((Y)=>{Y.preventDefault();let L=z0.current;if(!L)return;let B=Y.clientY,F=M_.current||280,x=Y.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=B,g=(p)=>{m=p.clientY;let n=L.clientHeight-80,t_=Math.min(Math.max(F-(p.clientY-B),80),n);L.style.setProperty("--preview-height",`${t_}px`),M_.current=t_},i=()=>{let p=L.clientHeight-80,n=Math.min(Math.max(F-(m-B),80),p);M_.current=n,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",p_("previewHeight",String(Math.round(n))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",i)}).current,s$=E((Y)=>{Y.preventDefault();let L=z0.current;if(!L)return;let B=Y.touches[0];if(!B)return;let F=B.clientY,x=M_.current||280,m=Y.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(p)=>{let n=p.touches[0];if(!n)return;p.preventDefault();let t_=L.clientHeight-80,h0=Math.min(Math.max(x-(n.clientY-F),80),t_);L.style.setProperty("--preview-height",`${h0}px`),M_.current=h0},i=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",p_("previewHeight",String(Math.round(M_.current||x))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}).current,x$=async()=>{if(!q)return;try{let Y=await z4(q);if(Y.media_id)J(Y.media_id)}catch(Y){b((L)=>({...L||{},error:Y.message||"Failed to attach"}))}},p0=async()=>{if(!q||l_)return;await g0(q)},B$=(Y)=>{return Array.from(Y?.dataTransfer?.types||[]).includes("Files")},o$=P((Y)=>{if(!B$(Y))return;if(Y.preventDefault(),o_.current+=1,!i0.current)o(!0);__("upload");let L=F$(Y)||i_();A0(L),q$(L)},[i_,F$,A0,q$]),I$=P((Y)=>{if(!B$(Y))return;if(Y.preventDefault(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";if(!i0.current)o(!0);if(e$.current!=="upload")__("upload");let L=F$(Y)||i_();if(y_.current!==L)A0(L);q$(L)},[i_,F$,A0,q$]),Z2=P((Y)=>{if(!B$(Y))return;if(Y.preventDefault(),o_.current=Math.max(0,o_.current-1),o_.current===0)o(!1),__(null),A0(null),C0()},[A0,C0]),M$=P(async(Y,L=".")=>{let B=Array.from(Y||[]);if(B.length===0)return;let F=L&&L!==""?L:".",x=F!=="."?F:"workspace root";C_(!0);try{let m=null;for(let g of B)try{m=await z1(g,F)}catch(i){let p=i?.status,n=i?.code;if(p===409||n==="file_exists"){let t_=g?.name||"file";if(!window.confirm(`"${t_}" already exists in ${x}. Overwrite?`))continue;m=await z1(g,F,{overwrite:!0})}else throw i}if(m?.path)p$.current=m.path,H(m.path),e_.current?.(m.path);k_.current?.(F)}catch(m){h(m.message||"Failed to upload file")}finally{C_(!1)}},[]),y2=P(async(Y,L)=>{if(!Y)return;let B=T_.current?.get(Y);if(!B)return;let F=L&&L!==""?L:".",x=Y.includes("/")?Y.split("/").slice(0,-1).join("/")||".":".";if(F===x)return;try{let g=(await X4(Y,F))?.path||Y;if(B.type==="dir")U((i)=>{let p=new Set;for(let n of i)if(n===Y)p.add(g);else if(n.startsWith(`${Y}/`))p.add(`${g}${n.slice(Y.length)}`);else p.add(n);return p});if(H(g),B.type==="dir")b(null),l(!1),J(null);else e_.current?.(g);k_.current?.(x),k_.current?.(F)}catch(m){h(m?.message||"Failed to move entry")}},[]);g$.current=y2;let E2=P(async(Y)=>{if(!B$(Y))return;Y.preventDefault(),o_.current=0,o(!1),__(null),X_(null),C0();let L=Array.from(Y?.dataTransfer?.files||[]);if(L.length===0)return;let B=y_.current||F$(Y)||i_();await M$(L,B)},[i_,F$,M$]),Q_=P((Y)=>{if(Y?.stopPropagation?.(),V_)return;let L=Y?.currentTarget?.dataset?.uploadTarget||".";f0.current=L,N0.current?.click()},[V_]),N$=P(()=>{if(V_)return;let Y=S0.current,L=Y?T_.current?.get(Y):null;f0.current=L?.type==="dir"?L.path:".",N0.current?.click()},[V_]),k2=P(()=>{w_(()=>P0(null))},[w_,P0]),w2=P(()=>{w_(()=>N$())},[w_,N$]),C$=P(()=>{w_(()=>A$())},[w_,A$]),A2=P(()=>{w_(()=>J0())},[w_,J0]),P2=P(()=>{if(!q||!D0)return;w_(()=>H_.current?.(q,w))},[w_,q,D0,w]),b2=P(()=>{if(!q||q===".")return;w_(()=>h$(q))},[w_,q,h$]),x2=P(()=>{if(!q||l_)return;w_(()=>p0())},[w_,q,l_,p0]),d0=P(()=>{if(!q||l_)return;w_(()=>x$())},[w_,q,l_,x$]),c0=P(()=>{if(!m0)return;if(B0(),typeof window<"u")window.open(m0,"_blank","noopener")},[B0,m0]),r$=P(()=>{B0(),N?.()},[B0,N]),q2=P(()=>{B0(),K?.()},[B0,K]),s0=P((Y)=>{if(!Y||Y.button!==0)return;let L=Y.currentTarget;if(!L||!L.dataset)return;let B=L.dataset.path;if(!B||B===".")return;if(K0.current===B)return;let F=$$(Y);if(F?.closest?.("button, a, input, .workspace-caret"))return;if(!j$(F))return;Y.preventDefault(),D_.current={path:B,dragging:!1,startX:Y.clientX,startY:Y.clientY};let x=(g)=>{let i=D_.current;if(!i?.path)return;let p=Math.abs(g.clientX-i.startX),n=Math.abs(g.clientY-i.startY),t_=p>4||n>4;if(!i.dragging&&t_)i.dragging=!0,w0.current=!0,o(!0),__("move"),H$(i.path),E$(g.clientX,g.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(i.dragging){g.preventDefault(),E$(g.clientX,g.clientY);let h0=document.elementFromPoint(g.clientX,g.clientY),T0=V$(h0)||i_();if(y_.current!==T0)A0(T0);q$(T0)}},m=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",m);let g=D_.current;if(g?.dragging&&g.path){let i=y_.current||i_(),p=g$.current;if(typeof p==="function")p(g.path,i)}D_.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,o(!1),__(null),A0(null),C0(),_2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{w0.current=!1},0)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",m)},[V$,i_,H$,E$,_2,A0,q$,C0]),y$=P(async(Y)=>{let L=Array.from(Y?.target?.files||[]);if(L.length===0)return;let B=f0.current||".";if(await M$(L,B),f0.current=".",Y?.target)Y.target.value=""},[M$]);return O`
        <aside
            class=${`workspace-sidebar${r?" workspace-drop-active":""}`}
            data-workspace-scale=${Y0}
            ref=${z0}
            onDragEnter=${o$}
            onDragOver=${I$}
            onDragLeave=${Z2}
            onDrop=${E2}
        >
            <input type="file" multiple style="display:none" ref=${N0} onChange=${y$} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${F_}
                            class=${`workspace-menu-button${$_?" active":""}`}
                            onClick=${(Y)=>{Y.stopPropagation(),W_((L)=>!L)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${$_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${$_&&O`
                            <div class="workspace-menu-dropdown" ref=${a} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${k2} disabled=${V_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${w2} disabled=${V_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${C$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${G_?" active":""}`} role="menuitem" onClick=${A2}>
                                    ${G_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${q&&O`<div class="workspace-menu-separator"></div>`}
                                ${q&&!l_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P2} disabled=${!D0}>Open in editor</button>
                                `}
                                ${D$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Rename selected</button>
                                `}
                                ${V2&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d0}>Download selected file</button>
                                `}
                                ${m0&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c0}>Download selected folder (zip)</button>
                                `}
                                ${l$&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${x2}>Delete selected file</button>
                                `}

                                ${(N||K)&&O`<div class="workspace-menu-separator"></div>`}
                                ${N&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${r$}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${P0} title="New file" disabled=${V_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${A$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${L$}>
                ${V_&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${v&&O`<div class="workspace-loading">Loading…</div>`}
                ${j_&&O`<div class="workspace-error">${j_}</div>`}
                ${X&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${x_}
                        tabIndex="0"
                        onClick=${j2}
                        onDblClick=${J$}
                        onKeyDown=${b$}
                        onTouchStart=${n$}
                        onTouchEnd=${d$}
                        onTouchMove=${Z$}
                        onTouchCancel=${d$}
                    >
                        ${_$.map(({node:Y,depth:L})=>{let B=Y.type==="dir",F=Y.path===q,x=Y.path===y,m=B&&V.has(Y.path),g=B_&&Y.path===B_,i=Array.isArray(Y.children)&&Y.children.length>0?Y.children.length:Number(Y.child_count)||0;return O`
                                <div
                                    key=${Y.path}
                                    class=${`workspace-row${F?" selected":""}${g?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+L*i$.indentPx}px`}}
                                    data-path=${Y.path}
                                    data-type=${Y.type}
                                    onMouseDown=${s0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${B?m?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${B?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${B?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${x?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${Z0}
                                                value=${S}
                                                onInput=${(p)=>f(p?.target?.value||"")}
                                                onKeyDown=${(p)=>{if(p.key==="Enter")p.preventDefault(),e0();else if(p.key==="Escape")p.preventDefault(),Q0()}}
                                                onBlur=${Q0}
                                                onClick=${(p)=>p.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${Y.name}</span></span>`}
                                    ${B&&!m&&i>0&&O`
                                        <span class="workspace-count">${i}</span>
                                    `}
                                    ${B&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${Y.path}
                                            title="Upload files to this folder"
                                            onClick=${Q_}
                                            disabled=${V_}
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
            ${q&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${n0} onTouchStart=${s$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${q}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${P0} title="New file" disabled=${V_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!l_&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D0&&H_.current?.(q,w)}
                                    title=${w$}
                                    disabled=${!D0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${p0}
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
                            ${l_?O`
                                    <button class="workspace-download" onClick=${N$}
                                        title="Upload files to this folder" disabled=${V_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${G1(q,G_)}
                                        title="Download folder as zip" onClick=${(Y)=>Y.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:O`<button class="workspace-download" onClick=${x$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${t&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${w?.error&&O`<div class="workspace-error">${w.error}</div>`}
                    ${l_&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&O`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&O`
                            <${Dj} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${w&&!w.error&&!l_&&O`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${u&&O`
                        <div class="workspace-download-card">
                            <${Jj} mediaId=${u} />
                        </div>
                    `}
                </div>
            `}
            ${N_&&O`
                <div class="workspace-drag-ghost" ref=${u0}>${N_.label}</div>
            `}
        </aside>
    `}var yj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Ej=/\.(csv|tsv)$/i,kj=/\.pdf$/i,wj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,M6=/\.drawio(\.xml|\.svg|\.png)?$/i;function C6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:X,previewTabs:Q,onToggleDock:V,dockVisible:U,onToggleZen:q,zenMode:H}){let[y,C]=M(null),S=E(null);T(()=>{if(!y)return;let J=(v)=>{if(v.type==="keydown"&&v.key!=="Escape")return;C(null)};return document.addEventListener("click",J),document.addEventListener("keydown",J),()=>{document.removeEventListener("click",J),document.removeEventListener("keydown",J)}},[y]),T(()=>{let J=(v)=>{if(v.ctrlKey&&v.key==="Tab"){if(v.preventDefault(),!_.length)return;let d=_.findIndex((t)=>t.id===$);if(v.shiftKey){let t=_[(d-1+_.length)%_.length];j?.(t.id)}else{let t=_[(d+1)%_.length];j?.(t.id)}return}if((v.ctrlKey||v.metaKey)&&v.key==="w"){let d=document.querySelector(".editor-pane");if(d&&d.contains(document.activeElement)){if(v.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$,j,Z]);let f=P((J,v)=>{if(J.button===1){J.preventDefault(),Z?.(v);return}if(J.button===0)j?.(v)},[j,Z]),w=P((J,v)=>{J.preventDefault(),C({id:v,x:J.clientX,y:J.clientY})},[]),b=P((J)=>{J.preventDefault(),J.stopPropagation()},[]),u=P((J,v)=>{J.preventDefault(),J.stopPropagation(),Z?.(v)},[Z]);if(T(()=>{if(!$||!S.current)return;let J=S.current.querySelector(".tab-item.active");if(J)J.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${S} role="tablist">
            ${_.map((J)=>O`
                <div
                    key=${J.id}
                    class=${`tab-item${J.id===$?" active":""}${J.dirty?" dirty":""}${J.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${J.id===$}
                    title=${J.path}
                    onMouseDown=${(v)=>f(v,J.id)}
                    onContextMenu=${(v)=>w(v,J.id)}
                >
                    ${J.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${J.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${b}
                        onClick=${(v)=>u(v,J.id)}
                        title=${J.dirty?"Unsaved changes":"Close"}
                        aria-label=${J.dirty?"Unsaved changes":`Close ${J.label}`}
                    >
                        ${J.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&O`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${q&&O`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${q}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?O`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:O`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${y&&O`
            <div class="tab-context-menu" style=${{left:y.x+"px",top:y.y+"px"}}>
                <button onClick=${()=>{Z?.(y.id),C(null)}}>Close</button>
                <button onClick=${()=>{N?.(y.id),C(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),C(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(y.id),C(null)}}>
                    ${_.find((J)=>J.id===y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{X(y.id),C(null)}}>
                        ${Q?.has(y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${yj.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(y.id),v=y.id.split("/").pop()||"document",d="/office-viewer/?url="+encodeURIComponent(J)+"&name="+encodeURIComponent(v);window.open(d,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${Ej.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/csv-viewer/?path="+encodeURIComponent(y.id);window.open(J,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${kj.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(y.id);window.open(J,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${wj.test(y.id)&&!M6.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/image-viewer/?path="+encodeURIComponent(y.id);window.open(J,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${M6.test(y.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/drawio/edit?path="+encodeURIComponent(y.id);window.open(J,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Aj=400,t4=60,T6=220,e4="mdPreviewHeight";function Pj(){try{let _=localStorage.getItem(e4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=t4?$:T6}catch{return T6}}function f6({getContent:_,path:$,onClose:j}){let[Z,N]=M(""),[K,z]=M(Pj),X=E(null),Q=E(null),V=E(""),U=E(_);return U.current=_,T(()=>{let y=()=>{let S=U.current?.()||"";if(S===V.current)return;V.current=S;try{let f=t0(S,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};y();let C=setInterval(y,Aj);return()=>clearInterval(C)},[]),T(()=>{if(X.current&&Z)v$(X.current).catch(()=>{})},[Z]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(y)=>{y.preventDefault();let C=y.clientY,S=Q.current?.offsetHeight||K,f=Q.current?.parentElement,w=f?f.offsetHeight*0.7:500,b=y.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=(v)=>{let d=Math.min(Math.max(S-(v.clientY-C),t4),w);z(d)},J=()=>{b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(e4,String(Math.round(Q.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",J)}}
            onTouchStart=${(y)=>{y.preventDefault();let C=y.touches[0];if(!C)return;let S=C.clientY,f=Q.current?.offsetHeight||K,w=Q.current?.parentElement,b=w?w.offsetHeight*0.7:500,u=y.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let J=(d)=>{let t=d.touches[0];if(!t)return;d.preventDefault();let l=Math.min(Math.max(f-(t.clientY-S),t4),b);z(l)},v=()=>{u.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(e4,String(Math.round(Q.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",J),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",v)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",v),document.addEventListener("touchcancel",v)}}
        ></div>
        <div class="md-preview-panel" ref=${Q} style=${{height:K+"px"}}>
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
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function S6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=E(_);K.current=_;let z=E($);z.current=$;let X=E(j);X.current=j;let Q=E(Z);Q.current=Z,T(()=>{X.current();let V=new X1((q,H)=>K.current(q,H),(q)=>z.current(q),{chatJid:N});V.connect();let U=()=>{V.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")Q.current?.()};return window.addEventListener("focus",U),document.addEventListener("visibilitychange",U),()=>{window.removeEventListener("focus",U),document.removeEventListener("visibilitychange",U),V.disconnect()}},[N])}function R6(){let[_,$]=M(!1),[j,Z]=M("default"),N=E(!1);T(()=>{let Q=O2("notificationsEnabled",!1);if(N.current=Q,$(Q),typeof Notification<"u")Z(Notification.permission)},[]),T(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Q=Notification.requestPermission();if(Q&&typeof Q.then==="function")return Q;return Promise.resolve(Q)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),p_("notificationsEnabled","false");return}}let Q=!N.current;N.current=Q,$(Q),p_("notificationsEnabled",String(Q))},[K]),X=P((Q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let U=new Notification(Q,{body:V});return U.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:X}}var d2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function v6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=M(null),[K,z]=M(!1),X=E(!1),Q=E(null),V=E(!1),U=E(null),q=E(null),H=E(0);T(()=>{X.current=K},[K]),T(()=>{q.current=Z},[Z]),T(()=>{H.current+=1,q.current=null,U.current=null,V.current=!1,X.current=!1,N(null),z(!1)},[j]);let y=P(async(f=null)=>{let w=H.current;try{if(f){let b=await n1(f,50,0,j);if(w!==H.current)return;N(b.posts),z(!1)}else{let b=await f2(10,null,j);if(w!==H.current)return;N(b.posts),z(b.has_more)}}catch(b){if(w!==H.current)return;console.error("Failed to load posts:",b)}},[j]),C=P(async()=>{let f=H.current;try{let w=await f2(10,null,j);if(f!==H.current)return;N((b)=>{if(!b||b.length===0)return w.posts;return d2([...w.posts,...b])}),z((b)=>b||w.has_more)}catch(w){if(f!==H.current)return;console.error("Failed to refresh timeline:",w)}},[j]),S=P(async(f={})=>{let w=H.current,b=q.current;if(!b||b.length===0)return;if(V.current)return;let{preserveScroll:u=!0,preserveMode:J="top",allowRepeat:v=!1}=f,d=(j_)=>{if(!u){j_();return}if(J==="top")$(j_);else _(j_)},l=b.slice().sort((j_,h)=>j_.id-h.id)[0]?.id;if(!Number.isFinite(l))return;if(!v&&U.current===l)return;V.current=!0,U.current=l;try{let j_=await f2(10,l,j);if(w!==H.current)return;if(j_.posts.length>0)d(()=>{N((h)=>d2([...j_.posts,...h||[]])),z(j_.has_more)});else z(!1)}catch(j_){if(w!==H.current)return;console.error("Failed to load more posts:",j_)}finally{if(w===H.current)V.current=!1}},[j,_,$]);return T(()=>{Q.current=S},[S]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:X,loadPosts:y,refreshTimeline:C,loadMore:S,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:U}}function u6(){let[_,$]=M(null),[j,Z]=M({text:"",totalLines:0}),[N,K]=M(""),[z,X]=M({text:"",totalLines:0}),[Q,V]=M(null),[U,q]=M(null),[H,y]=M(null),C=E(null),S=E(0),f=E(!1),w=E(""),b=E(""),u=E(null),J=E(null),v=E(null),d=E(null),t=E(!1),l=E(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:X,pendingRequest:Q,setPendingRequest:V,currentTurnId:U,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:y,lastAgentEventRef:C,lastSilenceNoticeRef:S,isAgentRunningRef:f,draftBufferRef:w,thoughtBufferRef:b,pendingRequestRef:u,stalledPostIdRef:J,currentTurnIdRef:v,steerQueuedTurnIdRef:d,thoughtExpandedRef:t,draftExpandedRef:l}}function m6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.clientX,y=$.current||280,C=U.currentTarget;C.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let S=H,f=(b)=>{S=b.clientX;let u=Math.min(Math.max(y+(b.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${u}px`),$.current=u},w=()=>{let b=Math.min(Math.max(y+(S-H),160),600);$.current=b,C.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",p_("sidebarWidth",String(Math.round(b))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,K=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.touches[0];if(!H)return;let y=H.clientX,C=$.current||280,S=U.currentTarget;S.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let J=Math.min(Math.max(C+(u.clientX-y),160),600);q.style.setProperty("--sidebar-width",`${J}px`),$.current=J},w=()=>{S.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",p_("sidebarWidth",String(Math.round($.current||C))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,z=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.clientX,y=j.current||$.current||280,C=U.currentTarget;C.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let S=H,f=(b)=>{S=b.clientX;let u=Math.min(Math.max(y+(b.clientX-H),200),800);q.style.setProperty("--editor-width",`${u}px`),j.current=u},w=()=>{let b=Math.min(Math.max(y+(S-H),200),800);j.current=b,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",p_("editorWidth",String(Math.round(b))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,X=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.touches[0];if(!H)return;let y=H.clientX,C=j.current||$.current||280,S=U.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let f=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let J=Math.min(Math.max(C+(u.clientX-y),200),800);q.style.setProperty("--editor-width",`${J}px`),j.current=J},w=()=>{S.classList.remove("dragging"),document.body.style.userSelect="",p_("editorWidth",String(Math.round(j.current||C))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,Q=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.clientY,y=Z?.current||200,C=U.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let S=H,f=(b)=>{S=b.clientY;let u=Math.min(Math.max(y-(b.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${u}px`),Z)Z.current=u;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{let b=Math.min(Math.max(y-(S-H),100),window.innerHeight*0.5);if(Z)Z.current=b;C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",p_("dockHeight",String(Math.round(b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)}).current,V=E((U)=>{U.preventDefault();let q=_.current;if(!q)return;let H=U.touches[0];if(!H)return;let y=H.clientY,C=Z?.current||200,S=U.currentTarget;S.classList.add("dragging"),document.body.style.userSelect="none";let f=(b)=>{let u=b.touches[0];if(!u)return;b.preventDefault();let J=Math.min(Math.max(C-(u.clientY-y),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${J}px`),Z)Z.current=J;window.dispatchEvent(new CustomEvent("dock-resize"))},w=()=>{S.classList.remove("dragging"),document.body.style.userSelect="",p_("dockHeight",String(Math.round(Z?.current||C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:V}}function g6({onTabClosed:_}={}){let $=E(_);$.current=_;let[j,Z]=M(()=>c_.getTabs()),[N,K]=M(()=>c_.getActiveId()),[z,X]=M(()=>c_.getTabs().length>0);T(()=>{return c_.onChange((J,v)=>{Z(J),K(v),X(J.length>0)})},[]);let[Q,V]=M(()=>new Set),U=P((J)=>{V((v)=>{let d=new Set(v);if(d.has(J))d.delete(J);else d.add(J);return d})},[]),q=P((J)=>{V((v)=>{if(!v.has(J))return v;let d=new Set(v);return d.delete(J),d})},[]),H=P((J,v={})=>{if(!J)return;let d={path:J,mode:"edit"};try{if(!n_.resolve(d)){if(!n_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,l)}let t=typeof v?.label==="string"&&v.label.trim()?v.label.trim():void 0;c_.open(J,t)},[]),y=P(()=>{let J=c_.getActiveId();if(J){let v=c_.get(J);if(v?.dirty){if(!window.confirm(`"${v.label}" has unsaved changes. Close anyway?`))return}c_.close(J),q(J),$.current?.(J)}},[q]),C=P((J)=>{let v=c_.get(J);if(v?.dirty){if(!window.confirm(`"${v.label}" has unsaved changes. Close anyway?`))return}c_.close(J),q(J),$.current?.(J)},[q]),S=P((J)=>{c_.activate(J)},[]),f=P((J)=>{let v=c_.getTabs().filter((l)=>l.id!==J&&!l.pinned),d=v.filter((l)=>l.dirty).length;if(d>0){if(!window.confirm(`${d} unsaved tab${d>1?"s":""} will be closed. Continue?`))return}let t=v.map((l)=>l.id);c_.closeOthers(J),t.forEach((l)=>{q(l),$.current?.(l)})},[q]),w=P(()=>{let J=c_.getTabs().filter((t)=>!t.pinned),v=J.filter((t)=>t.dirty).length;if(v>0){if(!window.confirm(`${v} unsaved tab${v>1?"s":""} will be closed. Continue?`))return}let d=J.map((t)=>t.id);c_.closeAll(),d.forEach((t)=>{q(t),$.current?.(t)})},[q]),b=P((J)=>{c_.togglePin(J)},[]),u=P(()=>{let J=c_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return T(()=>{let J=(v)=>{let{oldPath:d,newPath:t,type:l}=v.detail||{};if(!d||!t)return;if(l==="dir"){for(let j_ of c_.getTabs())if(j_.path===d||j_.path.startsWith(`${d}/`)){let h=`${t}${j_.path.slice(d.length)}`;c_.rename(j_.id,h)}}else c_.rename(d,t)};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),T(()=>{let J=(v)=>{if(c_.hasUnsaved())v.preventDefault(),v.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:Q,openEditor:H,closeEditor:y,handleTabClose:C,handleTabActivate:S,handleTabCloseOthers:f,handleTabCloseAll:w,handleTabTogglePin:b,handleTabTogglePreview:U,revealInExplorer:u}}function _3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var $3=_3("warning",30000),p6=_3("finalize",120000),j3=_3("refresh",30000),c6=30000;function h6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function i6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function l6(_=30000){let[,$]=M(0);T(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function Z3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function n6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function G2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function N3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function d6(_,$={}){if(G2($))return null;if(N3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:bj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function s6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function o6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function r6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function a6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function t6(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function bj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function w1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function K3(_){return String(_||"").trim()||"web:default"}function e6({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function _9(_={}){return G2(_)&&N3(_)}function xj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Ij(_={},$={}){if(!_9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=xj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function $9(_={}){if(!_9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},z=()=>{Z=0,Ij({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},Q=()=>{X();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),X()},q);if(H!=null)N.add(H)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;Q()},U=$.visualViewport;return Q(),$.addEventListener("focus",Q),$.addEventListener("pageshow",Q),$.addEventListener("resize",Q),$.addEventListener("orientationchange",Q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",Q,!0),U?.addEventListener?.("resize",Q),U?.addEventListener?.("scroll",Q),()=>{K(),$.removeEventListener("focus",Q),$.removeEventListener("pageshow",Q),$.removeEventListener("resize",Q),$.removeEventListener("orientationchange",Q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",Q,!0),U?.removeEventListener?.("resize",Q),U?.removeEventListener?.("scroll",Q)}}function Mj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function X$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Mj($,j)}var Cj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function j9(_){return Cj.has(String(_||"").trim())}function Tj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function Z9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Tj(_),{detail:Z})),!0}var fj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function N9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(G2({window:j,navigator:Z}))};N();let z=fj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of z)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function K9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var W3="piclaw_btw_session";function Sj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Rj(){let _=a0(W3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var Y9=d1,z9=o1,vj=a1,W9=j4,G9=Z4,X9=t1,Y3=X$(r0,"getAgentContext",null),uj=X$(r0,"getAgentModels",{current:null,models:[]}),mj=X$(r0,"getActiveChatAgents",{chats:[]}),z3=X$(r0,"getChatBranches",{chats:[]}),gj=X$(r0,"renameChatBranch",null),pj=X$(r0,"pruneChatBranch",null),V9=X$(r0,"restoreChatBranch",null),cj=X$(r0,"getAgentQueueState",{count:0}),hj=X$(r0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),ij=X$(r0,"removeAgentQueueItem",{removed:!1}),lj=X$(r0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n_.register(P4);n_.register(R4);n_.register(S4);n_.register(v4);n_.register(u4);n_.register(m4);n_.register(p4);n_.register(c4);n_.register(i4);b4();n_.register(C4);n_.register(T4);function nj({locationParams:_}){let $=g_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=g_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=g_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=g_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=M("disconnected"),[X,Q]=M(()=>G2()),[V,U]=M(null),[q,H]=M(null),[y,C]=M(!1),[S,f]=M("current"),[w,b]=M([]),[u,J]=M([]),[v,d]=M(null),{agentStatus:t,setAgentStatus:l,agentDraft:j_,setAgentDraft:h,agentPlan:G_,setAgentPlan:v_,agentThought:r,setAgentThought:o,pendingRequest:Z_,setPendingRequest:__,currentTurnId:N_,setCurrentTurnId:P_,steerQueuedTurnId:B_,setSteerQueuedTurnId:X_,lastAgentEventRef:V_,lastSilenceNoticeRef:C_,isAgentRunningRef:R_,draftBufferRef:J_,thoughtBufferRef:b_,pendingRequestRef:u_,stalledPostIdRef:Y0,currentTurnIdRef:z_,steerQueuedTurnIdRef:$_,thoughtExpandedRef:W_,draftExpandedRef:K_}=u6(),[U_,d_]=M({}),[m_,h_]=M(null),[a_,T_]=M(null),[E_,H_]=M(!1),[e_,k_]=M(null),[z0,x_]=M([]),[Z0,N0]=M([]),[f0,I_]=M(null),[q0,D_]=M([]),[s_,w0]=M(!1),[M_,_0]=M(()=>Rj()),$0=g_(()=>z0.find((G)=>G?.chat_jid===$)||null,[z0,$]),q_=g_(()=>Z0.find((G)=>G?.chat_jid===$)||$0||null,[$0,Z0,$]),O0=q_?.root_chat_jid||$0?.root_chat_jid||$,I=Sj(S),[a,F_]=M(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),O_=q0.length,j0=E(new Set),v0=E([]),o_=E(new Set),y_=E(0),i0=E({inFlight:!1,lastAttemptAt:0,turnId:null});j0.current=new Set(q0.map((G)=>G.row_id)),v0.current=q0;let{notificationsEnabled:e$,notificationPermission:u0,toggleNotifications:m$,notify:F0}=R6(),[g$,S0]=M(()=>new Set),[K0,p$]=M(()=>O2("workspaceOpen",!0)),l0=E(null),{editorOpen:L0,tabStripTabs:J2,tabStripActiveId:M0,previewTabs:O$,openEditor:i_,closeEditor:V$,handleTabClose:F$,handleTabActivate:A0,handleTabCloseOthers:C0,handleTabCloseAll:q$,handleTabTogglePin:E$,handleTabTogglePreview:H$,revealInExplorer:_2}=g6({onTabClosed:(G)=>l0.current?.(G)}),c$=E(null),Q0=E(null),h$=E(null),e0=E(null),H0=n_.getDockPanes().length>0,[P0,W0]=M(!1),R0=P(()=>W0((G)=>!G),[]),$2=P(()=>{i_(I4,{label:"Terminal"})},[i_]),_$=!j&&(L0||H0&&P0),[b0,i$]=M(!1),k$=E(!1),l_=P(()=>{if(!L0||j)return;if(k$.current=P0,P0)W0(!1);i$(!0)},[L0,j,P0]),D0=P(()=>{if(!b0)return;if(i$(!1),k$.current)W0(!0),k$.current=!1},[b0]),w$=P(()=>{if(b0)D0();else l_()},[b0,l_,D0]);T(()=>{if(b0&&!L0)D0()},[b0,L0,D0]),T(()=>{let G=c$.current;if(!G)return;if(Q0.current)Q0.current.dispose(),Q0.current=null;let W=M0;if(!W)return;let D={path:W,mode:"edit"},k=n_.resolve(D)||n_.get("editor");if(!k){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=k.mount(G,D);Q0.current=A,A.onDirtyChange?.((s)=>{c_.setDirty(W,s)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{V$()});let R=c_.getViewState(W);if(R&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(R));if(typeof A.onViewStateChange==="function")A.onViewStateChange((s)=>{c_.saveViewState(W,s)});return requestAnimationFrame(()=>A.focus()),()=>{if(Q0.current===A)A.dispose(),Q0.current=null}},[M0,V$]),T(()=>{let G=(W)=>{let D=W.detail?.path;if(D)i_(D)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G)}},[i_]),T(()=>{let G=h$.current;if(e0.current)e0.current.dispose(),e0.current=null;if(!G||!H0||!P0)return;let W=n_.getDockPanes()[0];if(!W){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let D=W.mount(G,{mode:"view"});return e0.current=D,requestAnimationFrame(()=>D.focus?.()),()=>{if(e0.current===D)D.dispose(),e0.current=null}},[H0,P0]);let[D$,l$]=M({name:"You",avatar_url:null,avatar_background:null}),V2=E(!1),m0=E(!1),B0=E(null),w_=E($),$$=E(new Map),j$=E($),J$=E(0),j2=E(0),A$=E({}),P$=E({name:null,avatar_url:null}),J0=E({currentHashtag:null,searchQuery:null,searchOpen:!1}),L$=E(null),g0=E(null),Q$=E(0),b$=E(0),n$=E(0),d$=E(null),Z$=E(null),n0=E(null),s$=E(null),x$=E(0),p0=E({title:null,avatarBase:null}),B$=E(null),o$=P(()=>{if(B$.current)clearTimeout(B$.current),B$.current=null;d(null)},[]);l6(30000),T(()=>{return X8()},[]),T(()=>{return N9(Q)},[]),T(()=>{p_("workspaceOpen",String(K0))},[K0]),T(()=>{return $9()},[]),T(()=>{return()=>{o$()}},[o$]),T(()=>{if(!M_){p_(W3,"");return}p_(W3,JSON.stringify({question:M_.question||"",answer:M_.answer||"",thinking:M_.thinking||"",error:M_.error||null,status:M_.status||"success"}))},[M_]),T(()=>{A$.current=U_||{}},[U_]),T(()=>{w_.current=$},[$]),T(()=>{P$.current=D$||{name:"You",avatar_url:null,avatar_background:null}},[D$]);let I$=P((G,W,D=null)=>{if(typeof document>"u")return;let k=(G||"").trim()||"PiClaw";if(p0.current.title!==k){document.title=k;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==k)e.setAttribute("content",k);p0.current.title=k}let A=document.getElementById("dynamic-favicon");if(!A)return;let R=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",s=W||R,Y_=W?`${s}|${D||""}`:s;if(p0.current.avatarBase!==Y_){let e=W?`${s}${s.includes("?")?"&":"?"}v=${D||Date.now()}`:s;A.setAttribute("href",e),p0.current.avatarBase=Y_}},[]),Z2=P((G)=>{if(!G)return;b((W)=>W.includes(G)?W:[...W,G])},[]),M$=P((G)=>{b((W)=>W.filter((D)=>D!==G))},[]);l0.current=M$;let y2=P(()=>{b([])},[]),E2=P((G)=>{if(!Array.isArray(G)){b([]);return}let W=[],D=new Set;for(let k of G){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(D.has(A))continue;D.add(A),W.push(A)}b(W)},[]),Q_=P((G,W=null,D="info",k=3000)=>{o$(),d({title:G,detail:W||null,kind:D||"info"}),B$.current=setTimeout(()=>{d((A)=>A?.title===G?null:A)},k)},[o$]),N$=P((G)=>{let W=n6(G,{editorOpen:L0,resolvePane:(D)=>n_.resolve(D)});if(W.kind==="open"){i_(W.path);return}if(W.kind==="toast")Q_(W.title,W.detail,W.level)},[L0,i_,Q_]),k2=P(()=>{let G=M0;if(G)Z2(G)},[M0,Z2]),w2=P((G)=>{if(!G)return;J((W)=>W.includes(G)?W:[...W,G])},[]),C$=P(async(G,W=null)=>{let D=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},k=document.getElementById("post-"+G);if(k){D(k);return}try{let A=typeof W==="string"&&W.trim()?W.trim():$,s=(await s1(G,A))?.thread?.[0];if(!s)return;G0((Y_)=>{if(!Y_)return[s];if(Y_.some((e)=>e.id===s.id))return Y_;return[...Y_,s]}),requestAnimationFrame(()=>{setTimeout(()=>{let Y_=document.getElementById("post-"+G);if(Y_)D(Y_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",G,A)}},[$]),A2=P((G)=>{J((W)=>W.filter((D)=>D!==G))},[]),P2=P(()=>{J([])},[]),b2=P((G)=>{if(!Array.isArray(G)){J([]);return}let W=[],D=new Set;for(let k of G){if(typeof k!=="string"||!k.trim())continue;let A=k.trim();if(D.has(A))continue;D.add(A),W.push(A)}J(W)},[]),x2=P((G)=>{let W=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";Q_("Compose failed",W,"error",5000)},[Q_]),d0=P((G={})=>{let W=Date.now();if(V_.current=W,G.running)R_.current=!0,w0((D)=>D?D:!0);if(G.clearSilence)C_.current=0},[w0]),c0=P(()=>{if(s$.current)clearTimeout(s$.current),s$.current=null;x$.current=0},[]);T(()=>()=>{c0()},[c0]);let r$=P(()=>{c0(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:W,lastActivity:D,...k}=G;return k})},[c0]),q2=P((G)=>{if(!G)return;c0();let W=Date.now();x$.current=W,l({type:G.type||"active",last_activity:!0}),s$.current=setTimeout(()=>{if(x$.current!==W)return;l((D)=>{if(!D||!(D.last_activity||D.lastActivity))return D;return null})},c6)},[c0]),s0=P(()=>{R_.current=!1,w0(!1),V_.current=null,C_.current=0,J_.current="",b_.current="",u_.current=null,Z$.current=null,z_.current=null,$_.current=null,B0.current=null,i0.current={inFlight:!1,lastAttemptAt:0,turnId:null},c0(),P_(null),X_(null),W_.current=!1,K_.current=!1},[c0,P_,X_,w0]),y$=P((G)=>{if(!e6({remainingQueueCount:G,currentTurnId:z_.current,isAgentTurnActive:s_}))return;$_.current=null,X_(null)},[s_,X_]),Y=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),L=P(()=>({agentStatus:t,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:G_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:N_,steerQueuedTurnId:B_,isAgentTurnActive:Boolean(s_),followupQueueItems:Array.isArray(q0)?q0.map((G)=>({...G})):[],activeModel:m_,activeThinkingLevel:a_,supportsThinking:Boolean(E_),activeModelUsage:e_,contextUsage:f0,isAgentRunning:Boolean(R_.current),wasAgentActive:Boolean(m0.current),draftBuffer:J_.current||"",thoughtBuffer:b_.current||"",lastAgentEvent:V_.current||null,lastSilenceNotice:C_.current||0,lastAgentResponse:Z$.current||null,currentTurnIdRef:z_.current||null,steerQueuedTurnIdRef:$_.current||null,thoughtExpanded:Boolean(W_.current),draftExpanded:Boolean(K_.current),agentStatusRef:B0.current||null,silentRecovery:{...i0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[m_,e_,a_,j_,G_,t,r,f0,N_,q0,s_,Z_,B_,E_]),B=P((G)=>{let W=G||Y();c0(),R_.current=Boolean(W.isAgentRunning),m0.current=Boolean(W.wasAgentActive),w0(Boolean(W.isAgentTurnActive)),V_.current=W.lastAgentEvent||null,C_.current=Number(W.lastSilenceNotice||0),J_.current=W.draftBuffer||"",b_.current=W.thoughtBuffer||"",u_.current=W.pendingRequest||null,Z$.current=W.lastAgentResponse||null,z_.current=W.currentTurnIdRef||null,$_.current=W.steerQueuedTurnIdRef||null,B0.current=W.agentStatusRef||null,i0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},W_.current=Boolean(W.thoughtExpanded),K_.current=Boolean(W.draftExpanded),l(W.agentStatus||null),h(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),v_(W.agentPlan||""),o(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),__(W.pendingRequest||null),P_(W.currentTurnId||null),X_(W.steerQueuedTurnId||null),D_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((D)=>({...D})):[]),h_(W.activeModel||null),T_(W.activeThinkingLevel||null),H_(Boolean(W.supportsThinking)),k_(W.activeModelUsage??null),I_(W.contextUsage??null)},[c0,Y,P_,D_,w0,X_]),F=P((G)=>{if(!G)return;if(z_.current===G)return;z_.current=G,i0.current={inFlight:!1,lastAttemptAt:0,turnId:G},P_(G),$_.current=null,X_(null),J_.current="",b_.current="",h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),u_.current=null,Z$.current=null,W_.current=!1,K_.current=!1},[P_,X_]),x=P((G)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let W=Z$.current;if(!W||!W.post)return;if(G&&W.turnId&&W.turnId!==G)return;let D=W.post;if(D.id&&d$.current===D.id)return;let k=String(D?.data?.content||"").trim();if(!k)return;d$.current=D.id||d$.current,Z$.current=null;let A=k.replace(/\s+/g," ").slice(0,200),R=A$.current||{},Y_=(D?.data?.agent_id?R[D.data.agent_id]:null)?.name||"Pi";F0(Y_,A)},[F0]),m=P(async(G,W)=>{if(G!=="thought"&&G!=="draft")return;let D=z_.current;if(G==="thought"){if(W_.current=W,D)try{await G9(D,"thought",W)}catch(k){console.warn("Failed to update thought visibility:",k)}if(!W)return;try{let k=D?await W9(D,"thought"):null;if(k?.text)b_.current=k.text;o((A)=>({...A||{text:"",totalLines:0},fullText:b_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full thought:",k)}return}if(K_.current=W,D)try{await G9(D,"draft",W)}catch(k){console.warn("Failed to update draft visibility:",k)}if(!W)return;try{let k=D?await W9(D,"draft"):null;if(k?.text)J_.current=k.text;h((A)=>({...A||{text:"",totalLines:0},fullText:J_.current||A?.fullText||"",totalLines:Number.isFinite(k?.total_lines)?k.total_lines:A?.totalLines||0}))}catch(k){console.warn("Failed to fetch full draft:",k)}},[]),g=E(null),i=P(()=>{let G=L$.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);g.current=i;let p=P((G)=>{let W=L$.current;if(!W||typeof G!=="function"){G?.();return}let{currentHashtag:D,searchQuery:k,searchOpen:A}=J0.current||{},R=!((k||A)&&!D),s=R?W.scrollHeight-W.scrollTop:W.scrollTop;G(),requestAnimationFrame(()=>{let Y_=L$.current;if(!Y_)return;if(R){let e=Math.max(Y_.scrollHeight-s,0);Y_.scrollTop=e}else{let e=Math.max(Y_.scrollHeight-Y_.clientHeight,0),c=Math.min(s,e);Y_.scrollTop=c}})},[]),n=P((G)=>{let W=L$.current;if(!W||typeof G!=="function"){G?.();return}let D=W.scrollTop;G(),requestAnimationFrame(()=>{let k=L$.current;if(!k)return;let A=Math.max(k.scrollHeight-k.clientHeight,0);k.scrollTop=Math.min(D,A)})},[]),t_="Queued as a follow-up (one-at-a-time).",h0="⁣",T0=P((G)=>{if(!G||!Array.isArray(G))return G;let W=j0.current,D=new Set(W),k=G.filter((A)=>{if(D.has(A?.id))return!1;if(A?.data?.is_bot_message){let R=A?.data?.content;if(R===t_||R===h0)return!1}return!0});return k.length===G.length?G:k},[]),{posts:T$,setPosts:G0,hasMore:N2,setHasMore:U0,hasMoreRef:L2,loadPosts:o0,refreshTimeline:y0,loadMore:A1,loadMoreRef:f$}=v6({preserveTimelineScroll:p,preserveTimelineScrollTop:n,chatJid:$}),x0=g_(()=>T0(T$),[T$,q0,T0]),S$=P(()=>{let G=Y0.current;if(!G)return;G0((W)=>W?W.filter((D)=>D.id!==G):W),Y0.current=null},[G0]),{handleSplitterMouseDown:G3,handleSplitterTouchStart:P1,handleEditorSplitterMouseDown:q9,handleEditorSplitterTouchStart:L9,handleDockSplitterMouseDown:Q9,handleDockSplitterTouchStart:B9}=m6({appShellRef:g0,sidebarWidthRef:Q$,editorWidthRef:b$,dockHeightRef:n$}),X3=P(()=>{if(!R_.current)return;R_.current=!1,C_.current=0,V_.current=null,z_.current=null,P_(null),W_.current=!1,K_.current=!1;let G=(J_.current||"").trim();if(J_.current="",b_.current="",h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),u_.current=null,Z$.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let D=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,k=Date.now(),A=new Date().toISOString(),R={id:k,timestamp:A,data:{type:"agent_response",content:D,agent_id:"default",is_local_stall:!0}};Y0.current=k,G0((s)=>s?d2([...s,R]):[R]),g.current?.(),l(null)},[P_]);T(()=>{J0.current={currentHashtag:V,searchQuery:q,searchOpen:y}},[V,q,y]);let f_=P(()=>{let G=++y_.current,W=$;cj(W).then((D)=>{if(G!==y_.current)return;if(w_.current!==W)return;let k=o_.current,A=Array.isArray(D?.items)?D.items.map((R)=>({...R})).filter((R)=>!k.has(R.row_id)):[];if(A.length){D_((R)=>{if(R.length===A.length&&R.every((s,Y_)=>s.row_id===A[Y_].row_id))return R;return A});return}k.clear(),y$(0),D_((R)=>R.length===0?R:[])}).catch(()=>{if(G!==y_.current)return;if(w_.current!==W)return;D_((D)=>D.length===0?D:[])})},[y$,$,D_]),K$=P(async()=>{let G=$;try{let W=await Y3(G);if(w_.current!==G)return;if(W)I_(W)}catch(W){if(w_.current!==G)return;console.warn("Failed to fetch agent context:",W)}},[$]),Y$=P(async()=>{let G=$;try{let W=await X9(G);if(w_.current!==G)return null;if(!W||W.status!=="active"||!W.data){if(m0.current){let{currentHashtag:A,searchQuery:R,searchOpen:s}=J0.current||{};if(!A&&!R&&!s)y0()}return m0.current=!1,s0(),B0.current=null,l(null),h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),u_.current=null,W??null}m0.current=!0;let D=W.data;B0.current=D;let k=D.turn_id||D.turnId;if(k)F(k);if(d0({running:!0,clearSilence:!0}),r$(),l(D),W.thought&&W.thought.text)o((A)=>{if(A&&A.text&&A.text.length>=W.thought.text.length)return A;return b_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)h((A)=>{if(A&&A.text&&A.text.length>=W.draft.text.length)return A;return J_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[s0,r$,d0,y0,F]),b1=P(async()=>{if(!R_.current)return null;if(u_.current)return null;let G=z_.current||null,W=i0.current,D=Date.now();if(W.inFlight)return null;if(W.turnId===G&&D-W.lastAttemptAt<j3)return null;W.inFlight=!0,W.lastAttemptAt=D,W.turnId=G;try{let{currentHashtag:k,searchQuery:A,searchOpen:R}=J0.current||{};if(!k&&!A&&!R)await y0();return await f_(),await Y$()}finally{W.inFlight=!1}},[Y$,f_,y0]);T(()=>{let G=Math.min(1000,Math.max(100,Math.floor($3/2))),W=setInterval(()=>{if(!R_.current)return;if(u_.current)return;let D=V_.current;if(!D)return;let k=Date.now(),A=k-D,R=p2(B0.current);if(A>=p6){if(!R)l({type:"waiting",title:"Re-syncing after a quiet period…"});b1();return}if(A>=$3){if(k-C_.current>=j3){if(!R){let s=Math.floor(A/1000);l({type:"waiting",title:`Waiting for model… No events for ${s}s`})}C_.current=k,b1()}}},G);return()=>clearInterval(W)},[b1]);let U9=P((G)=>{if(z(G),G!=="connected"){l(null),h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),u_.current=null,s0();return}if(!V2.current){V2.current=!0;let{currentHashtag:A,searchQuery:R,searchOpen:s}=J0.current||{};if(!A&&!R&&!s)y0();Y$(),f_(),K$();return}let{currentHashtag:W,searchQuery:D,searchOpen:k}=J0.current;if(!W&&!D&&!k)y0();Y$(),f_(),K$()},[s0,y0,Y$,f_,K$]),O9=P(async(G)=>{U(G),G0(null),await o0(G)},[o0]),F9=P(async()=>{U(null),H(null),G0(null),await o0()},[o0]),H9=P(async(G,W=S)=>{if(!G||!G.trim())return;let D=W==="root"||W==="all"?W:"current";f(D),H(G.trim()),U(null),G0(null);try{let k=await Y9(G.trim(),50,0,$,D,O0);G0(k.results),U0(!1)}catch(k){console.error("Failed to search:",k),G0([])}},[$,O0,S]),D9=P(()=>{C(!0),H(null),U(null),f("current"),G0([])},[]),J9=P(()=>{C(!1),H(null),o0()},[o0]),sj=P(()=>{},[]),x1=!V&&!q&&!y,y9=P(async(G)=>{if(!G)return;let W=G.id,D=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,k=x0?.filter((R)=>R?.data?.thread_id===W&&R?.id!==W).length||0;if(k>0){if(!window.confirm(`Delete this message and its ${k} replies?`))return}let A=(R)=>{if(!R.length)return;S0((Y_)=>{let e=new Set(Y_);return R.forEach((c)=>e.add(c)),e}),setTimeout(()=>{if(n(()=>{G0((Y_)=>Y_?Y_.filter((e)=>!R.includes(e.id)):Y_)}),S0((Y_)=>{let e=new Set(Y_);return R.forEach((c)=>e.delete(c)),e}),L2.current)f$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let R=await z9(W,k>0,D);if(R?.ids?.length)A(R.ids)}catch(R){let s=R?.message||"";if(k===0&&s.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await z9(W,!0,D);if(e?.ids?.length)A(e.ids);return}console.error("Failed to delete post:",R),alert(`Failed to delete message: ${s}`)}},[$,x0,n]),V3=P(async()=>{try{let G=await vj();d_(h6(G));let W=G?.user||{};l$((k)=>{let A=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",R=typeof W.avatar_url==="string"?W.avatar_url.trim():null,s=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(k.name===A&&k.avatar_url===R&&k.avatar_background===s)return k;return{name:A,avatar_url:R,avatar_background:s}});let D=(G?.agents||[]).find((k)=>k.id==="default");I$(D?.name,D?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,W=await Y3(G);if(w_.current!==G)return;if(W)I_(W)}catch{}},[I$,$]);T(()=>{V3();let G=F2("sidebarWidth",null),W=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(Q$.current=W,g0.current)g0.current.style.setProperty("--sidebar-width",`${W}px`)},[V3]);let I1=s_||t!==null,q3=P((G)=>{if(!G||typeof G!=="object")return;let W=G.agent_id;if(!W)return;let{agent_name:D,agent_avatar:k}=G;if(!D&&k===void 0)return;let A=A$.current?.[W]||{id:W},R=A.name||null,s=A.avatar_url??A.avatarUrl??A.avatar??null,Y_=!1,e=!1;if(D&&D!==A.name)R=D,e=!0;if(k!==void 0){let c=typeof k==="string"?k.trim():null,L_=typeof s==="string"?s.trim():null,A_=c||null;if(A_!==(L_||null))s=A_,Y_=!0}if(!e&&!Y_)return;if(d_((c)=>{let A_={...c[W]||{id:W}};if(e)A_.name=R;if(Y_)A_.avatar_url=s;return{...c,[W]:A_}}),W==="default")I$(R,s,Y_?Date.now():null)},[I$]),L3=P((G)=>{if(!G||typeof G!=="object")return;let W=G.user_name??G.userName,D=G.user_avatar??G.userAvatar,k=G.user_avatar_background??G.userAvatarBackground;if(W===void 0&&D===void 0&&k===void 0)return;l$((A)=>{let R=typeof W==="string"&&W.trim()?W.trim():A.name||"You",s=D===void 0?A.avatar_url:typeof D==="string"&&D.trim()?D.trim():null,Y_=k===void 0?A.avatar_background:typeof k==="string"&&k.trim()?k.trim():null;if(A.name===R&&A.avatar_url===s&&A.avatar_background===Y_)return A;return{name:R,avatar_url:s,avatar_background:Y_}})},[]),M1=P((G)=>{if(!G||typeof G!=="object")return;let W=G.model??G.current;if(W!==void 0)h_(W);if(G.thinking_level!==void 0)T_(G.thinking_level??null);if(G.supports_thinking!==void 0)H_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)k_(G.provider_usage??null)},[]),I2=P(()=>{let G=$;uj(G).then((W)=>{if(w_.current!==G)return;if(W)M1(W)}).catch(()=>{})},[M1,$]),I0=P(()=>{let G=$,W=(D)=>Array.isArray(D)?D.filter((k)=>k&&typeof k.chat_jid==="string"&&typeof k.agent_name==="string"&&k.agent_name.trim()):[];Promise.all([mj().catch(()=>({chats:[]})),z3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([D,k])=>{if(w_.current!==G)return;let A=W(D?.chats),R=W(k?.chats);if(R.length===0){x_(A);return}let s=new Map(A.map((e)=>[e.chat_jid,e])),Y_=R.map((e)=>{let c=s.get(e.chat_jid);return c?{...e,...c,is_active:c.is_active??e.is_active}:e});Y_.sort((e,c)=>{if(e.chat_jid===G&&c.chat_jid!==G)return-1;if(c.chat_jid===G&&e.chat_jid!==G)return 1;let L_=Boolean(e.archived_at),A_=Boolean(c.archived_at);if(L_!==A_)return L_?1:-1;if(Boolean(e.is_active)!==Boolean(c.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(c.chat_jid))}),x_(Y_)}).catch(()=>{if(w_.current!==G)return;x_([])})},[$]),E0=P(()=>{z3(O0).then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((D)=>D&&typeof D.chat_jid==="string"&&typeof D.agent_name==="string"):[];N0(W)}).catch(()=>{})},[O0]),E9=P((G)=>{let W=G?.row_id;if(W==null)return;o_.current.add(W),D_((D)=>D.filter((k)=>k?.row_id!==W)),hj(W,K3($)).then(()=>{f_()}).catch((D)=>{console.warn("[queue] Failed to steer queued item:",D),Q_("Failed to steer message","The queued message could not be sent as steering.","warning"),o_.current.delete(W),f_()})},[$,f_,D_,Q_]),k9=P((G)=>{let W=G?.row_id;if(W==null)return;let D=v0.current.filter((k)=>k?.row_id!==W).length;o_.current.add(W),y$(D),D_((k)=>k.filter((A)=>A?.row_id!==W)),ij(W,K3($)).then(()=>{f_()}).catch((k)=>{console.warn("[queue] Failed to remove queued item:",k),Q_("Failed to remove message","The queued message could not be removed.","warning"),o_.current.delete(W),f_()})},[y$,$,f_,D_,Q_]),C1=P((G)=>{if(!G||typeof G!=="object")return;if(I0(),E0(),G?.queued==="followup"||G?.queued==="steer"){f_();return}let W=G?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))f_()},[I0,E0,f_]),T1=P(()=>{if(n0.current)n0.current.abort(),n0.current=null;_0(null)},[]),s2=P(async(G)=>{let W=String(G||"").trim();if(!W)return Q_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(n0.current)n0.current.abort();let D=new AbortController;n0.current=D,_0({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let k=await lj(W,{signal:D.signal,chatJid:D8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,R)=>{if(A==="side_prompt_start")_0((s)=>s?{...s,status:"running"}:s)},onThinkingDelta:(A)=>{_0((R)=>R?{...R,thinking:`${R.thinking||""}${A||""}`}:R)},onTextDelta:(A)=>{_0((R)=>R?{...R,answer:`${R.answer||""}${A||""}`}:R)}});if(n0.current!==D)return!0;_0((A)=>A?{...A,answer:k?.result||A.answer||"",thinking:k?.thinking||A.thinking||"",model:k?.model||null,status:"success",error:null}:A)}catch(k){if(D.signal.aborted)return!0;_0((A)=>A?{...A,status:"error",error:k?.payload?.error||k?.message||"BTW request failed."}:A)}finally{if(n0.current===D)n0.current=null}return!0},[$,Q_]),w9=P(async({content:G})=>{let W=H8(G);if(!W)return!1;if(W.type==="help")return Q_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return T1(),Q_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await s2(W.question),!0;return!1},[T1,s2,Q_]),A9=P(()=>{if(M_?.question)s2(M_.question)},[M_,s2]),P9=P(async()=>{let G=E8(M_);if(!G)return;try{let W=await B2("default",G,null,[],I1?"queue":null,$);C1(W),Q_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){Q_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[M_,C1,I1,Q_]),M2=P(()=>{I2(),I0(),E0(),f_(),K$()},[I2,I0,E0,f_,K$]);T(()=>{M2();let G=setInterval(()=>{I2(),I0(),E0(),f_()},60000);return()=>clearInterval(G)},[M2,I2,I0,E0,f_]),T(()=>{E0()},[E0]),T(()=>{let G=!1;if(G0(null),V)return o0(V),()=>{G=!0};if(q)return Y9(q,50,0,$,S,O0).then((W)=>{if(G)return;G0(W.results),U0(!1)}).catch((W)=>{if(G)return;console.error("Failed to search:",W),G0([]),U0(!1)}),()=>{G=!0};return o0(),()=>{G=!0}},[$,V,q,S,O0,o0,U0,G0]),T(()=>{let G=j$.current||$;$$.current.set(G,L())},[$,L]),T(()=>{let G=j$.current||$;if(G===$)return;$$.current.set(G,L()),j$.current=$,o_.current.clear(),B($$.current.get($)||null),f_(),Y$(),K$()},[$,Y$,K$,f_,B,L]);let b9=P(()=>{let{currentHashtag:G,searchQuery:W,searchOpen:D}=J0.current||{};if(!G&&!W&&!D)y0();M2()},[M2,y0]),f1=P((G,W)=>{let D=W?.turn_id,k=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,R=k?k===$:G==="connected"||G==="workspace_update";if(R)q3(W),L3(W);if(G==="ui_theme"){V8(W);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))r$()}if(G==="connected"){l(null),h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),u_.current=null,s0();let c=$;X9(c).then((k0)=>{if(w_.current!==c)return;if(!k0||k0.status!=="active"||!k0.data)return;let K2=k0.data,o2=K2.turn_id||K2.turnId;if(o2)F(o2);if(d0({clearSilence:!0}),q2(K2),k0.thought&&k0.thought.text)b_.current=k0.thought.text,o({text:k0.thought.text,totalLines:k0.thought.totalLines||0});if(k0.draft&&k0.draft.text)J_.current=k0.draft.text,h({text:k0.draft.text,totalLines:k0.draft.totalLines||0})}).catch((k0)=>{console.warn("Failed to fetch agent status:",k0)});let{currentHashtag:L_,searchQuery:A_,searchOpen:z$}=J0.current||{};if(!L_&&!A_&&!z$)y0();M2();return}if(G==="agent_status"){if(!R){if(W?.type==="done"||W?.type==="error")I0(),E0();return}if(W.type==="done"||W.type==="error"){if(D&&z_.current&&D!==z_.current)return;if(W.type==="done"){x(D||z_.current);let{currentHashtag:c,searchQuery:L_,searchOpen:A_}=J0.current||{};if(!c&&!L_&&!A_)y0();if(W.context_usage)I_(W.context_usage)}if(m0.current=!1,s0(),o_.current.clear(),I0(),f_(),h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null),W.type==="error")l({type:"error",title:W.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(D)F(D);if(d0({running:!0,clearSilence:!0}),W.type==="thinking")J_.current="",b_.current="",h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0});B0.current=W,l((c)=>{if(c&&c.type===W.type&&c.title===W.title)return c;return W})}return}if(G==="agent_steer_queued"){if(!R)return;if(D&&z_.current&&D!==z_.current)return;let c=D||z_.current;if(!c)return;$_.current=c,X_(c);return}if(G==="agent_followup_queued"){if(!R)return;let c=W?.row_id,L_=W?.content;if(c!=null&&typeof L_==="string"&&L_.trim())D_((A_)=>{if(A_.some((z$)=>z$?.row_id===c))return A_;return[...A_,{row_id:c,content:L_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});f_();return}if(G==="agent_followup_consumed"){if(!R)return;let c=W?.row_id;if(c!=null){let k0=v0.current.filter((K2)=>K2.row_id!==c).length;y$(k0),D_((K2)=>K2.filter((o2)=>o2.row_id!==c))}f_();let{currentHashtag:L_,searchQuery:A_,searchOpen:z$}=J0.current||{};if(!L_&&!A_&&!z$)y0();return}if(G==="agent_followup_removed"){if(!R)return;let c=W?.row_id;if(c!=null){let L_=v0.current.filter((A_)=>A_.row_id!==c).length;o_.current.add(c),y$(L_),D_((A_)=>A_.filter((z$)=>z$.row_id!==c))}f_();return}if(G==="agent_draft_delta"){if(!R)return;if(D&&z_.current&&D!==z_.current)return;if(D&&!z_.current)F(D);if(d0({running:!0,clearSilence:!0}),W?.reset)J_.current="";if(W?.delta)J_.current+=W.delta;let c=Date.now();if(!J$.current||c-J$.current>=100){J$.current=c;let L_=J_.current,A_=Z3(L_);if(K_.current)h((z$)=>({text:z$?.text||"",totalLines:A_,fullText:L_}));else h({text:L_,totalLines:A_})}return}if(G==="agent_draft"){if(!R)return;if(D&&z_.current&&D!==z_.current)return;if(D&&!z_.current)F(D);d0({running:!0,clearSilence:!0});let c=W.text||"",L_=W.mode||(W.kind==="plan"?"replace":"append"),A_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(L_==="replace")v_(c);else v_((z$)=>(z$||"")+c);else if(!K_.current)J_.current=c,h({text:c,totalLines:A_});return}if(G==="agent_thought_delta"){if(!R)return;if(D&&z_.current&&D!==z_.current)return;if(D&&!z_.current)F(D);if(d0({running:!0,clearSilence:!0}),W?.reset)b_.current="";if(typeof W?.delta==="string")b_.current+=W.delta;let c=Date.now();if(W_.current&&(!j2.current||c-j2.current>=100)){j2.current=c;let L_=b_.current;o((A_)=>({text:A_?.text||"",totalLines:Z3(L_),fullText:L_}))}return}if(G==="agent_thought"){if(!R)return;if(D&&z_.current&&D!==z_.current)return;if(D&&!z_.current)F(D);d0({running:!0,clearSilence:!0});let c=W.text||"",L_=Number.isFinite(W.total_lines)?W.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!W_.current)b_.current=c,o({text:c,totalLines:L_});return}if(G==="model_changed"){if(!R)return;if(W?.model!==void 0)h_(W.model);if(W?.thinking_level!==void 0)T_(W.thinking_level??null);if(W?.supports_thinking!==void 0)H_(Boolean(W.supports_thinking));let c=$;Y3(c).then((L_)=>{if(w_.current!==c)return;if(L_)I_(L_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(j9(G)){if(!R)return;if(Z9(G,W),G==="extension_ui_notify"&&typeof W?.message==="string")Q_(W.message,null,W?.type||"info");if(G==="extension_ui_error"&&typeof W?.error==="string")Q_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:s,searchQuery:Y_,searchOpen:e}=J0.current;if(G==="agent_response"){if(!R)return;S$(),Z$.current={post:W,turnId:z_.current}}if(!s&&!Y_&&!e&&R&&(G==="new_post"||G==="new_reply"||G==="agent_response"))G0((c)=>{if(!c)return[W];if(c.some((L_)=>L_.id===W.id))return c;return[...c,W]}),g.current?.();if(G==="interaction_updated"){if(!R)return;if(s||Y_||e)return;G0((c)=>{if(!c)return c;if(!c.some((L_)=>L_.id===W.id))return c;return c.map((L_)=>L_.id===W.id?W:L_)})}if(G==="interaction_deleted"){if(!R)return;if(s||Y_||e)return;let c=W?.ids||[];if(c.length){if(n(()=>{G0((L_)=>L_?L_.filter((A_)=>!c.includes(A_.id)):L_)}),L2.current)f$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[s0,r$,$,f$,d0,x,n,I0,E0,y0,S$,F,q2,q3,L3,I2,f_,D_]);T(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=f1,G.reset=()=>{S$(),s0(),l(null),h({text:"",totalLines:0}),v_(""),o({text:"",totalLines:0}),__(null)},G.finalize=()=>X3(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[s0,X3,f1,S$]),S6({handleSseEvent:f1,handleConnectionStatusChange:U9,loadPosts:o0,onWake:b9,chatJid:$}),T(()=>{if(!x0||x0.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let W=G.slice(5);C$(W),history.replaceState(null,"",location.pathname+location.search)},[x0,C$]);let S1=t!==null;T(()=>{if(K!=="connected")return;let W=setInterval(()=>{let{currentHashtag:D,searchQuery:k,searchOpen:A}=J0.current||{},R=!D&&!k&&!A;if(S1){if(R)y0();f_(),Y$(),K$()}else{if(R)y0();Y$(),K$()}},S1?15000:60000);return()=>clearInterval(W)},[K,S1,Y$,K$,f_,y0]),T(()=>{return K9(()=>{Y$(),K$(),f_()})},[Y$,K$,f_]);let x9=P(()=>{p$((G)=>!G)},[]),Q3=P((G)=>{if(typeof window>"u")return;let W=String(G||"").trim();if(!W||W===$)return;let D=X2(window.location.href,W,{chatOnly:j});window.location.assign(D)},[j,$]),B3=P(async()=>{if(typeof window>"u"||!q_?.chat_jid)return;let G=q_.display_name||q_.agent_name||"",W=window.prompt("Agent name",G);if(W===null)return;let D=W.trim(),k=D.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||q_.agent_name||"";try{let A=await gj(q_.chat_jid,{displayName:D,agentName:k});await Promise.allSettled([I0(),E0()]);let R=A?.branch?.agent_name||k||q_.agent_name||"",s=A?.branch?.display_name||D||R;Q_("Branch renamed",`${s} (@${R})`,"info",3500)}catch(A){let R=A instanceof Error?A.message:String(A||"Could not rename branch."),s=/already in use/i.test(R||"")?`${R} Switch to or restore that existing session from the session manager.`:R;Q_("Could not rename branch",s||"Could not rename branch.","warning",5000)}},[q_,I0,E0,Q_]),U3=P(async(G=null)=>{if(typeof window>"u")return;let W=typeof G==="string"&&G.trim()?G.trim():"",D=typeof $==="string"&&$.trim()?$.trim():"",k=W||q_?.chat_jid||D;if(!k){Q_("Could not prune branch","No active session is selected yet.","warning",4000);return}let A=(q_?.chat_jid===k?q_:null)||Z0.find((e)=>e?.chat_jid===k)||z0.find((e)=>e?.chat_jid===k)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid)){Q_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let s=`@${A?.agent_name||k}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!window.confirm(`Prune ${s}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await pj(k),await Promise.allSettled([I0(),E0()]);let e=A?.root_chat_jid||"web:default";Q_("Branch pruned",`${s} has been archived.`,"info",3000);let c=X2(window.location.href,e,{chatOnly:j});window.location.assign(c)}catch(e){let c=e instanceof Error?e.message:String(e||"Could not prune branch.");Q_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[z0,j,q_,Z0,$,I0,E0,Q_]),I9=P(async(G)=>{let W=typeof G==="string"?G.trim():"";if(!W||typeof V9!=="function")return;try{let D=await V9(W);await Promise.allSettled([I0(),E0()]);let k=D?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():W,R=typeof k?.agent_name==="string"&&k.agent_name.trim()?`@${k.agent_name.trim()}`:A;Q_("Branch restored",`Restored ${R}.`,"info",3200);let s=X2(window.location.href,A,{chatOnly:j});window.location.assign(s)}catch(D){let k=D instanceof Error?D.message:String(D||"Could not restore branch.");Q_("Could not restore branch",k||"Could not restore branch.","warning",5000)}},[j,I0,E0,Q_]);T(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{F_({status:"running",message:"Preparing a new chat branch…"});let W=await S2(N);if(G)return;let D=W?.branch,k=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");let A=X2(window.location.href,k,{chatOnly:!0});window.location.replace(A)}catch(W){if(G)return;F_({status:"error",message:w1(W)})}})(),()=>{G=!0}},[Z,N]);let M9=P(async()=>{if(typeof window>"u")return;try{let W=(await S2($))?.branch,D=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([I0(),E0()]);let k=W?.agent_name?`@${W.agent_name}`:D;Q_("New branch created",`Switched to ${k}.`,"info",2500);let A=X2(window.location.href,D,{chatOnly:j});window.location.assign(A)}catch(G){Q_("Could not create branch",w1(G),"warning",5000)}},[j,$,I0,E0,Q_]),C9=P(async()=>{if(typeof window>"u"||X)return;let G=d6($);if(!G){Q_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let D=t6(window.location.href,$,{chatOnly:!0});if(!window.open(D,G.target))Q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=s6(G);if(!W){Q_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}o6(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await S2($))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let s=await r1();x_(Array.isArray(s?.chats)?s.chats:[])}catch{}try{let s=await z3(O0);N0(Array.isArray(s?.chats)?s.chats:[])}catch{}let R=X2(window.location.href,A,{chatOnly:!0});r6(W,R)}catch(D){a6(W),Q_("Could not open branch window",w1(D),"error",5000)}},[$,O0,X,Q_]);T(()=>{if(!L0)return;if(typeof window>"u")return;let G=g0.current;if(!G)return;if(!b$.current){let W=F2("editorWidth",null),D=Q$.current||280;b$.current=Number.isFinite(W)?W:D}if(G.style.setProperty("--editor-width",`${b$.current}px`),!n$.current){let W=F2("dockHeight",null);n$.current=Number.isFinite(W)?W:200}G.style.setProperty("--dock-height",`${n$.current}px`)},[L0]),T(()=>{if(!H0||j)return;let G=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),R0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[R0,H0,j]),T(()=>{if(j)return;let G=(W)=>{if(W.ctrlKey&&W.shiftKey&&(W.key==="Z"||W.key==="z")){W.preventDefault(),w$();return}if(W.key==="Escape"&&b0)W.preventDefault(),D0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[w$,D0,b0,j]);let T9=Boolean(B_&&B_===(t?.turn_id||N_));if(Z)return O`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${a.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${a.message}</p>
                    </div>
                </div>
            </div>
        `;return O`
        <div class=${`app-shell${K0?"":" workspace-collapsed"}${L0?" editor-open":""}${j?" chat-only":""}${b0?" zen-mode":""}`} ref=${g0}>
            ${!j&&O`
                <${I6}
                    onFileSelect=${Z2}
                    visible=${K0}
                    active=${K0||L0}
                    onOpenEditor=${i_}
                    onOpenTerminalTab=${$2}
                    onToggleTerminal=${H0?R0:void 0}
                    terminalVisible=${Boolean(H0&&P0)}
                />
                <button
                    class=${`workspace-toggle-tab${K0?" open":" closed"}`}
                    onClick=${x9}
                    title=${K0?"Hide workspace":"Show workspace"}
                    aria-label=${K0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${G3} onTouchStart=${P1}></div>
            `}
            ${_$&&O`
                <div class="editor-pane-container">
                    ${b0&&O`<div class="zen-hover-zone"></div>`}
                    ${L0&&O`
                        <${C6}
                            tabs=${J2}
                            activeId=${M0}
                            onActivate=${A0}
                            onClose=${F$}
                            onCloseOthers=${C0}
                            onCloseAll=${q$}
                            onTogglePin=${E$}
                            onTogglePreview=${H$}
                            previewTabs=${O$}
                            onToggleDock=${H0?R0:void 0}
                            dockVisible=${H0&&P0}
                            onToggleZen=${w$}
                            zenMode=${b0}
                        />
                    `}
                    ${L0&&O`<div class="editor-pane-host" ref=${c$}></div>`}
                    ${L0&&M0&&O$.has(M0)&&O`
                        <${f6}
                            getContent=${()=>Q0.current?.getContent?.()}
                            path=${M0}
                            onClose=${()=>H$(M0)}
                        />
                    `}
                    ${H0&&P0&&O`<div class="dock-splitter" onMouseDown=${Q9} onTouchStart=${B9}></div>`}
                    ${H0&&O`<div class=${`dock-panel${P0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${R0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${h$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${q9} onTouchStart=${L9}></div>
            `}
            <div class="container">
                ${q&&i6()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${q_?.agent_name?`@${q_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${q_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Z0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>Q3(G.currentTarget.value)}
                                    >
                                        ${Z0.map((G)=>O`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${q_?.chat_jid&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${B3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${q_?.chat_jid&&q_.chat_jid!==(q_.root_chat_jid||q_.chat_jid)&&O`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${U3}
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
                ${(V||q)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${F9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${q} · ${I}`}</span>
                    </div>
                `}
                <${d8}
                    posts=${x0}
                    hasMore=${x1?N2:!1}
                    onLoadMore=${x1?A1:void 0}
                    timelineRef=${L$}
                    onHashtagClick=${O9}
                    onMessageRef=${w2}
                    onScrollToMessage=${C$}
                    onFileRef=${N$}
                    onPostClick=${void 0}
                    onDeletePost=${y9}
                    emptyMessage=${V?`No posts with #${V}`:q?`No results for "${q}"`:void 0}
                    agents=${U_}
                    user=${D$}
                    reverse=${x1}
                    removingPostIds=${g$}
                    searchQuery=${q}
                />
                <${M8}
                    status=${t}
                    draft=${j_}
                    plan=${G_}
                    thought=${r}
                    pendingRequest=${Z_}
                    intent=${v}
                    turnId=${N_}
                    steerQueued=${T9}
                    onPanelToggle=${m}
                />
                <${k8}
                    session=${M_}
                    onClose=${T1}
                    onRetry=${A9}
                    onInject=${P9}
                />
                <${t3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:W}=J0.current||{};if(!G&&!W)o0(),i()}}
                    onFocus=${i}
                    searchMode=${y}
                    searchScope=${S}
                    onSearch=${H9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${D9}
                    onExitSearch=${J9}
                    fileRefs=${w}
                    onRemoveFileRef=${M$}
                    onClearFileRefs=${y2}
                    onSetFileRefs=${E2}
                    messageRefs=${u}
                    onRemoveMessageRef=${A2}
                    onClearMessageRefs=${P2}
                    onSetMessageRefs=${b2}
                    onSwitchChat=${Q3}
                    onRenameSession=${B3}
                    onCreateSession=${M9}
                    onDeleteSession=${U3}
                    onRestoreSession=${I9}
                    activeEditorPath=${j?null:M0}
                    onAttachEditorFile=${j?void 0:k2}
                    onOpenFilePill=${N$}
                    followupQueueCount=${O_}
                    followupQueueItems=${q0}
                    onInjectQueuedFollowup=${E9}
                    onRemoveQueuedFollowup=${k9}
                    onSubmitIntercept=${w9}
                    onMessageResponse=${C1}
                    onSubmitError=${x2}
                    onPopOutChat=${X?void 0:C9}
                    isAgentActive=${I1}
                    activeChatAgents=${z0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${m_}
                    modelUsage=${e_}
                    thinkingLevel=${a_}
                    supportsThinking=${E_}
                    contextUsage=${f0}
                    notificationsEnabled=${e$}
                    notificationPermission=${u0}
                    onToggleNotifications=${m$}
                    onModelChange=${h_}
                    onModelStateChange=${M1}
                />
                <${C8}
                    request=${Z_}
                    onRespond=${()=>{__(null),u_.current=null}}
                />
            </div>
        </div>
    `}function dj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return O`<${nj} locationParams=${_} />`}p3(O`<${dj} />`,document.getElementById("app"));

//# debugId=304BA08D0884463464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
