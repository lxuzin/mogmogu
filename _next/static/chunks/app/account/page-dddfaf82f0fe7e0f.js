(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{72431:function(){},60697:function(e,t,a){Promise.resolve().then(a.bind(a,18722))},16165:function(e,t,a){"use strict";a.r(t),a.d(t,{AccountContextProvider:function(){return c},default:function(){return n}});var o=a(57437),i=a(2265);let s=(0,i.createContext)({}),c=e=>{let{children:t}=e,[a,c]=(0,i.useState)(new Date),[n,l]=(0,i.useState)([]),[d,r]=(0,i.useState)({trans_id:0,bank_id:0,trans_date:new Date,trans_time:new Date,content:"",cost:0,deposit:0,balance:0}),[x,b]=(0,i.useState)([]),[m,u]=(0,i.useState)([]);return(0,o.jsx)(s.Provider,{value:{date:a,setDate:c,datingCostList:n,setDatingCostList:l,datingCostObject:d,setDatingCostObject:r,transactions:x,setTransactions:b,selectDayCost:m,setSelectDayCost:u},children:t})};function n(){return(0,i.useContext)(s)}},18722:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var o=a(57437),i=a(80428),s=a.n(i),c=a(16165);a(52836);var n=a(2265);function l(e){let{day:t,selectedDate:a,handleDateChange:i,getDayName:s}=e,c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{a.getDate()===t&&c.current.scrollIntoView({behavior:"smooth",inline:"center"})},[a,t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{ref:c,onClick:()=>{i(t),c.current.scrollIntoView({behavior:"smooth",block:"start"})},style:{margin:"0.5rem",width:"50px",height:"50px",fontSize:"25px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backgroundColor:a.getDate()===t?"#f0f0f0":"white",color:a.getDate()===t?"#C998DC":"black"},children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{textAlign:"center",fontSize:"15px"},children:s(new Date(a.getFullYear(),a.getMonth(),t))}),(0,o.jsx)("div",{children:t})]})})})}function d(){let{date:e,setDate:t}=(0,c.default)(),[a,i]=(0,n.useState)(),d=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),r=Array.from({length:d},(e,t)=>t+1),x=a=>{t(new Date(e.getFullYear(),e.getMonth(),a))},b=e=>{let t=e.getDay();return["일","월","화","수","목","금","토"][t]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"jsx-4c812554d7533d7d AccountHorizontalScrollDiv",children:(0,o.jsx)("div",{className:"jsx-4c812554d7533d7d AccountHorizontalScrollDivContent",children:r.map((t,a)=>(0,o.jsx)(l,{day:t,selectedDate:e,handleDateChange:x,getDayName:b},a))})}),(0,o.jsx)(s(),{id:"4c812554d7533d7d",children:".AccountHorizontalScrollDiv.jsx-4c812554d7533d7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:1280px;color:black;overflow-x:hidden;overflow:overlay}.AccountHorizontalScrollDivContent.jsx-4c812554d7533d7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.AccountDayContent.jsx-4c812554d7533d7d{width:60px}.AccountDayMonth.jsx-4c812554d7533d7d{font-size:14px;color:#aba9a9;margin-bottom:0}.AccountDayDay.jsx-4c812554d7533d7d{font-size:24px;margin-top:0}"})]})}var r=e=>{let{results:t}=e;return(0,o.jsxs)(o.Fragment,{children:[t.map((e,t)=>(0,o.jsx)("div",{className:"jsx-cc481c538d0f9618 AccountMogContent",children:(0,o.jsxs)("div",{className:"jsx-cc481c538d0f9618 AccountMogOneOfContent",children:[(0,o.jsxs)("div",{className:"jsx-cc481c538d0f9618 AccountMogOneStoreOfContent",children:[(0,o.jsx)("img",{src:"imggs25.png",alt:"",className:"jsx-cc481c538d0f9618"}),(0,o.jsx)("p",{className:"jsx-cc481c538d0f9618",children:e.name})]}),(0,o.jsxs)("p",{className:"jsx-cc481c538d0f9618",children:[" ",e.cost]})]})},t)),(0,o.jsx)(s(),{id:"cc481c538d0f9618",children:".AccountMogContent.jsx-cc481c538d0f9618{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:5%}.AccountMogOneOfContent.jsx-cc481c538d0f9618{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:20px}.AccountMogOneStoreOfContent.jsx-cc481c538d0f9618{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#c998dc}"})]})},x=a(61396),b=a.n(x);a(6543);var m=a(62601);function u(e){let{date:t,setDate:a,datingCostList:i,setDatingCostList:l,datingCostObject:x,setDatingCostObject:u,transactions:p,setTransactions:f}=(0,c.default)(),[j,y]=(0,n.useState)(0),[h,g]=(0,n.useState)(0),[w,k]=(0,n.useState)([]),v=async()=>{try{let e=await fetch(m.env.NEXT_PUBLIC_API_URL+"account",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("Bad response",{cause:{resp:e}});let a=await e.json();f(a);let o=0,i=0,s=[];for(let e=0;e<a.length;e++){let c=a[e];o+=c.cost,new Date(c.date).getDate()===new Date(t).getDate()&&(i+=c.cost,s.push(c))}y(o),g(i),k(s)}catch(e){console.error(e)}};return(0,n.useEffect)(()=>{v()},[t]),(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogBody",children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountCostPayDiv",children:[(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountCostTotal",children:[(0,o.jsx)("p",{className:"jsx-732a52dee9a96019 AccountCostDescription",children:"하루 지출"}),(0,o.jsx)("h1",{className:"jsx-732a52dee9a96019",children:h})]}),(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountCostDetail",children:[(0,o.jsx)("p",{className:"jsx-732a52dee9a96019 AccountCostDescription",children:"이번달 총지출"}),(0,o.jsx)("h2",{className:"jsx-732a52dee9a96019",children:j}),(0,o.jsx)("p",{className:"jsx-732a52dee9a96019 AccountCostDescription",children:"하루 적정지출"}),(0,o.jsx)("h2",{className:"jsx-732a52dee9a96019",children:"30000"})]})]}),(0,o.jsx)("div",{className:"jsx-732a52dee9a96019",children:(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogImgDiv",children:[(0,o.jsx)("img",{src:"/account/mog1.png",alt:"",className:"jsx-732a52dee9a96019"}),(0,o.jsx)("div",{className:"jsx-732a52dee9a96019 AccountMogImgDecriptionCircle",children:(0,o.jsx)("div",{className:"jsx-732a52dee9a96019 AccountMogImgDecription",children:"오늘의 데이트 비용을 기록하세요"})})]})}),(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogDetailDivDescription",children:[(0,o.jsx)("p",{className:"jsx-732a52dee9a96019",children:"상세내역"}),(0,o.jsx)("p",{className:"jsx-732a52dee9a96019",children:"편집"})]}),(0,o.jsx)("hr",{className:"jsx-732a52dee9a96019"}),(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogDetailDiv",children:[(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogContentDiv",children:[(0,o.jsx)(r,{results:w}),!w&&(0,o.jsxs)("div",{className:"jsx-732a52dee9a96019 AccountMogNotContent",children:[(0,o.jsx)("br",{className:"jsx-732a52dee9a96019"}),(0,o.jsx)("h2",{className:"jsx-732a52dee9a96019",children:"공유된 내역이 없습니다."})]})]}),(0,o.jsx)("div",{className:"jsx-732a52dee9a96019",children:(0,o.jsx)("button",{className:"jsx-732a52dee9a96019 AccountDateCostShareBtn",children:(0,o.jsx)(b(),{style:{textDecorationLine:"none",color:"white"},href:"/account/share",children:"데이트비용 공유"})})})]}),(0,o.jsx)(s(),{id:"732a52dee9a96019",children:".AccountMogBody.jsx-732a52dee9a96019{}.AccountHorizontalScrollDiv.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:420px;color:black;overflow-x:hidden;overflow:overlay}.AccountHorizontalScrollDivContent.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.AccountDayContent.jsx-732a52dee9a96019{width:60px}.AccountDayMonth.jsx-732a52dee9a96019{font-size:14px;color:#aba9a9;margin-bottom:0}.AccountDayDay.jsx-732a52dee9a96019{font-size:24px;margin-top:0}.AccountCostPayDiv.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:1rem}.AccountCostTotal.jsx-732a52dee9a96019{color:#c998dc}.NumOfAccountCostTotal.jsx-732a52dee9a96019{margin-left:15px}.AccountCostDescription.jsx-732a52dee9a96019{color:#aba9a9}.AccountMogImgDiv.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.AccountMogImgDecriptionCircle.jsx-732a52dee9a96019{-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:solid 1px;border-color:#aba9a9;font-size:14px;font-weight:bolder;text-align:center;line-height:60px;width:100%;margin-top:1rem;margin-bottom:1rem;margin-left:1rem;margin-right:1rem}.AccountMogDetailDivDescription.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;font-weight:bolder;max-height:30px;border:0;background-color:transparent}.AccountMogDetailDiv.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.AccountMogContentDiv.jsx-732a52dee9a96019{min-height:200px;max-height:300px;width:100%;overflow:overlay}.AccountMogNotContent.jsx-732a52dee9a96019{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#aba9a9}.AccountDateCostShareBtn.jsx-732a52dee9a96019{background-color:#c998dc;color:white;border-color:white;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;font-size:20px;font-weight:bold;padding:20px}"})]})}}},function(e){e.O(0,[677,396,988,971,596,744],function(){return e(e.s=60697)}),_N_E=e.O()}]);