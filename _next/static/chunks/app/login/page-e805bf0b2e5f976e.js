(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{383:function(e,t,n){Promise.resolve().then(n.bind(n,11217))},11217:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(57437),i=n(80428),a=n.n(i);n(61396);var s=n(24033);n(2265);var r=n(62601);function c(e){let t=(0,s.useRouter)();(0,s.useParams)();let n=async e=>{e.preventDefault();let n=e.target.nickname.value,o=e.target.password.value,i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:n,password:o})};try{let e=await fetch(r.env.API_URL+"login",i);if(!e.ok)throw Error("Bad response",{cause:{resp:e}});t.push("/home")}catch(e){alert("로그인 실패하였습니다. 정보를 확인하세요"),t.refresh()}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"jsx-ff2d5508ac49f6e1 loginbody",children:[(0,o.jsx)("div",{className:"jsx-ff2d5508ac49f6e1 loginImage",children:(0,o.jsx)("a",{href:"/home",className:"jsx-ff2d5508ac49f6e1",children:(0,o.jsx)("img",{src:"/login/whiteHeartLogo.png",alt:"#",className:"jsx-ff2d5508ac49f6e1"})})}),(0,o.jsx)("div",{className:"jsx-ff2d5508ac49f6e1 loginImage",children:(0,o.jsx)("img",{src:"/login/profileLogo.png",alt:"#",className:"jsx-ff2d5508ac49f6e1"})}),(0,o.jsxs)("form",{onSubmit:n,className:"jsx-ff2d5508ac49f6e1 loginForm",children:[(0,o.jsx)("input",{type:"text",name:"nickname",placeholder:"아이디",autoComplete:"off",className:"jsx-ff2d5508ac49f6e1 loginIdPassword"}),(0,o.jsx)("input",{type:"password",name:"password",placeholder:"비밀번호",autoComplete:"off",className:"jsx-ff2d5508ac49f6e1 loginIdPassword"}),(0,o.jsx)("button",{type:"submit",className:"jsx-ff2d5508ac49f6e1 loginBtn",children:"로그인"})]}),(0,o.jsxs)("div",{className:"jsx-ff2d5508ac49f6e1",children:[(0,o.jsx)("button",{className:"jsx-ff2d5508ac49f6e1 loginBottomBtn",children:"아이디찾기"}),(0,o.jsx)("button",{className:"jsx-ff2d5508ac49f6e1 loginBottomBtn",children:"비밀번호 찾기"}),(0,o.jsx)("button",{onClick:e=>{e.preventDefault(),t.push("/join")},className:"jsx-ff2d5508ac49f6e1 loginBottomBtn",children:"회원가입"})]})]}),(0,o.jsx)(a(),{id:"ff2d5508ac49f6e1",children:".loginbody.jsx-ff2d5508ac49f6e1{background-color:#c998dc;margin:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.loginImage.jsx-ff2d5508ac49f6e1{margin-bottom:40px}.loginIdPassword.jsx-ff2d5508ac49f6e1{width:243px;height:35px;background:white;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-top:3px;text-align:center;border-style:none}.loginBtn.jsx-ff2d5508ac49f6e1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:243px;height:35px;background:#a742cf;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-top:3px;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-style:none}.loginForm.jsx-ff2d5508ac49f6e1{width:243px}.loginBottomBtn.jsx-ff2d5508ac49f6e1{background-color:#c998dc;color:white;font-size:14px;border-style:none;padding:.5rem}"})]})}},24033:function(e,t,n){e.exports=n(68165)}},function(e){e.O(0,[677,396,971,596,744],function(){return e(e.s=383)}),_N_E=e.O()}]);