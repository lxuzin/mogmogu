(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{62601:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(58960)},63036:function(e,t,r){Promise.resolve().then(r.bind(r,8426))},68168:function(e,t,r){"use strict";r.d(t,{bN:function(){return a},nS:function(){return s},rb:function(){return l}});var n=r(57437),o=r(2265);let i=(0,o.createContext)({}),s=e=>{let{children:t}=e,[r,s]=(0,o.useState)(0),[a]=(0,o.useState)(7e4),[l,u]=(0,o.useState)("2023-01-01"),[d,p]=(0,o.useState)(c),[f,x]=(0,o.useState)({});return(0,n.jsx)(i.Provider,{value:{navIdx:r,setNavIdx:s,daysElapsed:l,calendarContents:d,setCalendarContents:p,maxcostPerDate:a,selectedBankName:f,setSelectedBankName:x},children:t})},a=()=>(0,o.useContext)(i),c=[{startDate:new Date("2023-08-15"),endDate:new Date("2023-08-15"),keyword:"광복절",food:"",place:"",image:{name:"Photo",base64:""},diary:"",cost:815},{startDate:new Date("2023-08-25"),endDate:new Date("2023-08-25"),cost:1e4,keyword:"월급날",food:"",place:"",image:{name:"Photo",base64:""},diary:""},{startDate:new Date("2023-08-18"),endDate:new Date("2023-08-28"),cost:5e3,keyword:"배고파",food:"",place:"",image:{name:"Photo",base64:""},diary:""}],l=e=>({startDate:new Date(e),endDate:new Date(e),keyword:"",food:"",place:"",image:{name:"Photo",base64:""},diary:"",cost:0})},8426:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(57437),o=r(2265),i=r(68168),s=r(62601),a=()=>{let e={backgroundColor:"#C998DC",marginLeft:"20px",borderRadius:"6px",border:"none",color:"white",padding:"2px",width:"70px",height:"30px",marginLeft:"50px"},[t,r]=(0,o.useState)([]),a=async()=>{try{let e=await fetch(s.env.NEXT_PUBLIC_API_URL+"bank",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Bad response",{cause:{resp:e}});let t=await e.json();r(t),d(t)}catch(e){console.error(e)}};(0,o.useEffect)(()=>{a()},[]);let[c,l]=(0,o.useState)(!1),[u,d]=(0,o.useState)([]),{selectedBankName:p,setSelectedBankName:f}=(0,i.bN)(),[x,h]=(0,o.useState)(!1),[m,g]=(0,o.useState)({}),y=e=>{let r=u.filter(t=>t.id===e)[0];f(r);let n=t.filter(t=>t.id!==e);d(e=>[...n]),l(!0)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:{backgroundColor:"rgba(203, 161, 220, 0.57)",padding:"10px",color:"white"},children:"계좌 연결"}),(0,n.jsx)("h3",{style:{color:"#C998DC",padding:"9px"},children:"연결 계좌"}),(0,n.jsx)("div",{style:{display:"flex",alignItems:"center"}}),0!==Object.keys(p).length&&(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("img",{src:"/".concat(p.src),alt:"",style:{width:"20px",height:"22px",marginLeft:"10px"}}),(0,n.jsxs)("p",{style:{marginLeft:"10px",padding:"7px"},children:[p.name,(0,n.jsx)("br",{})," ",p.accountNum]}),(0,n.jsx)("button",{type:"submit",style:{backgroundColor:"#C998DC",marginLeft:"10px",borderRadius:"6px",border:"none",color:"white",padding:"2px",width:"65px",height:"30px",marginLeft:"50px"},children:" 상세보기 "})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{style:{color:"#C998DC",padding:"9px"},children:" 연결 추가"}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:x&&u.map((t,r)=>(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)("img",{src:"/".concat(t.src),alt:"",style:{width:"20px",height:"17px",marginLeft:"10px"}}),(0,n.jsxs)("p",{style:{marginLeft:"10px",padding:"7px"},children:[t.name," ",(0,n.jsx)("br",{})," ",t.accountNum]}),(0,n.jsx)("button",{type:"submit",style:e,onClick:()=>y(t.id),children:" 선택하기 "})]},r))})]}),(0,n.jsx)("div",{style:{marginTop:"15px",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,n.jsx)("button",{style:{backgroundColor:"#C998DC",width:"250px",padding:"12px 24px",borderRadius:"20px",marginTop:"5px",border:"none",color:"white"},onClick:()=>{h(!0)},children:" ➕ 계좌 연결 "})}),c&&(0,n.jsxs)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"15px",borderRadius:"10px",boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.1)",textAlign:"center",zIndex:1e3,minWidth:"300px",width:"80%",maxHeight:"80%",overflowY:"auto"},children:[(0,n.jsx)("h3",{children:"새로운 계좌가 연결되었습니다 !"}),(0,n.jsx)("img",{src:"/mog.png",alt:"",style:{maxWidth:"100%"}}),(0,n.jsx)("p",{style:{color:"#C998DC",marginBottom:"8px"},children:"이제 돈을 많이 '모앙'주세요 !"}),(0,n.jsx)("button",{style:{backgroundColor:"#C998DC",border:"none",borderRadius:"5px",color:"white",padding:"8px 20px",cursor:"pointer"},onClick:()=>l(!1),children:"닫기"})]})]})}},58960:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function x(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=x,o.addListener=x,o.once=x,o.off=x,o.removeListener=x,o.removeAllListeners=x,o.emit=x,o.prependListener=x,o.prependOnceListener=x,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},30622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},57437:function(e,t,r){"use strict";e.exports=r(30622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=63036)}),_N_E=e.O()}]);