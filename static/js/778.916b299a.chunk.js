"use strict";(self.webpackChunkNew_Trace=self.webpackChunkNew_Trace||[]).push([[778],{5778:(e,s,l)=>{l.r(s),l.d(s,{default:()=>A});var r=l(9950),a=l(2916),t=l(7848),i=l(3047),n=l(3055),c=l(2547);var o=l(1743),d=l(4836),m=l(8549),h=l(7094),j=l(1988),x=l(8769),u=l(9051),p=l.n(u),g=l(6596),v=l(7482),f=l(4414);const y="MM/DD/YYYY";const N=function(e){let{visible:s,onCancel:l}=e;const[a]=d.A.useForm(),[t,i]=(0,r.useState)({visible:s,modalType:"primary",checked:[]});(0,r.useEffect)((()=>{let e=!1;return e||i({visible:s}),()=>{e=!0}}),[s]);const n=async()=>{try{const e=await a.validateFields();console.log("Form Values:",e)}catch(e){console.log("Validation Failed:",e)}},c=()=>{l()};return(0,f.jsx)(g.a,{type:t.modalType,title:"Create Version",visible:t.visible,className:"atbd-modal2",footer:[(0,f.jsxs)("div",{className:"project-modal-footer",children:[(0,f.jsx)(o.$,{size:"default",type:"primary",onClick:n,children:"Save"},"submit"),(0,f.jsx)(o.$,{size:"default",type:"light",outlined:!0,onClick:c,children:"Cancel"},"back")]},"1")],onCancel:c,children:(0,f.jsx)("div",{className:"project-modal",children:(0,f.jsx)(v.mH,{children:(0,f.jsxs)(d.A,{form:a,name:"createProject",onFinish:n,children:[(0,f.jsx)(d.A.Item,{name:"versionId",label:"Version ID",rules:[{required:!0,message:"Please input the Version ID!"},{max:15,message:"Version ID cannot be longer than 15 characters."}],children:(0,f.jsx)(m.A,{placeholder:"Version ID"})}),(0,f.jsx)(d.A.Item,{name:"reason",label:"Reason for Version Changes",rules:[{required:!0,message:"Please input the reason for version changes!"},{min:10,message:"Reason must be at least 10 characters long."}],children:(0,f.jsx)(m.A.TextArea,{rows:3,placeholder:"Description"})}),(0,f.jsx)(d.A.Item,{name:"remarks",label:"Remarks",rules:[{required:!1},{max:200,message:"Remarks cannot be longer than 200 characters."}],children:(0,f.jsx)(m.A,{placeholder:"remarks"})}),(0,f.jsxs)(h.A,{style:{display:"flex",flexDirection:"column"},children:[(0,f.jsx)(j.A,{md:12,xl:12,children:(0,f.jsx)(d.A.Item,{name:"Design",label:"Projected Design Completion Date",rules:[{required:!0,message:"Please select the projected design completion date!"},{validator:(e,s)=>s&&s.isBefore(p()())?Promise.reject(new Error("Date must be in the future")):Promise.resolve()}],children:(0,f.jsx)(x.A,{placeholder:"mm/dd/yyyy",format:y})})}),(0,f.jsx)(j.A,{md:12,xl:12,children:(0,f.jsx)(d.A.Item,{name:"Assembly",label:"Projected Assembly Completion Date",rules:[{required:!0,message:"Please select the projected assembly completion date!"},{validator:(e,s)=>s&&s.isBefore(p()())?Promise.reject(new Error("Date must be in the future")):Promise.resolve()}],children:(0,f.jsx)(x.A,{placeholder:"mm/dd/yyyy",format:y})})}),(0,f.jsx)(j.A,{md:12,xl:12,children:(0,f.jsx)(d.A.Item,{name:"Testing",label:"Projected Testing Completion Date",rules:[{required:!0,message:"Please select the projected testing completion date!"},{validator:(e,s)=>s&&s.isBefore(p()())?Promise.reject(new Error("Date must be in the future")):Promise.resolve()}],children:(0,f.jsx)(x.A,{placeholder:"mm/dd/yyyy",format:y})})})]})]})})})})};const A=function(e){let{value:s}=e;const{title:l,content:d}=s,[m,h]=(0,r.useState)(!1),j=()=>{h(!1)};return(0,f.jsxs)(n.Uj,{children:[(0,f.jsxs)(c.C,{headless:!0,children:[(0,f.jsxs)("div",{className:"project-top",children:[(0,f.jsx)("div",{className:"project-title",children:(0,f.jsx)("h1",{children:l})}),(0,f.jsx)("p",{className:"project-desc",children:(x=d,u=13,"".concat(x.split(" ").slice(0,u).join(" "),"..."))}),(0,f.jsxs)("div",{className:"project-timing",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"created on"}),(0,f.jsx)("strong",{children:"26 Dec 2019"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"created BY"}),(0,f.jsx)("strong",{children:"Yashwanth"})]})]}),(0,f.jsxs)("div",{className:"project-timing",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Modified on"}),(0,f.jsx)("strong",{children:"26 Dec 2019"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Modified By"}),(0,f.jsx)("strong",{children:"Yashwanth"})]})]}),(0,f.jsxs)("div",{className:"project-progress",children:[(0,f.jsx)("h3",{children:"Versions :"}),(0,f.jsxs)(o.$,{size:"small2",type:"primary",onClick:()=>h(!0),children:[(0,f.jsx)(t.A,{icon:"plus",size:3}),"Add Version"]},"2")]})]}),(0,f.jsx)("div",{className:"project-bottom",style:{overflowY:"auto",maxHeight:"150px"},children:(0,f.jsx)("div",{className:"project-assignees",children:(0,f.jsx)("ul",{style:{flexDirection:"column"},children:[{id:"NTP01-V_09",className:"early",status:"Design"},{id:"NTP01-V_08",className:"late",status:"Manufacturing"},{id:"NTP01-V_07",className:"progress",status:"Testing"},{id:"NTP01-V_06",className:"complete",status:"ARCHEIVED"},{id:"NTP01-V_05",className:"complete",status:"ARCHEIVED"},{id:"NTP01-V_04",className:"complete",status:"ARCHEIVED"},{id:"NTP01-V_03",className:"complete",status:"ARCHEIVED"},{id:"NTP01-V_02",className:"complete",status:"ARCHEIVED"},{id:"NTP01-V_01",className:"complete",status:"ARCHEIVED"}].map((e=>(0,f.jsx)(i.k2,{to:"/versionDetails",children:(0,f.jsxs)("li",{children:[(0,f.jsx)("span",{children:e.id}),(0,f.jsx)(a.A,{style:{backgroundColor:"#fff"},className:e.className,children:e.status})]})})))})})})]}),(0,f.jsx)(N,{onCancel:j,onSubmit:()=>{j()},visible:m})]});var x,u}}}]);