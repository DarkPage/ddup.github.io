import{u as i,r as e,j as s,a as o,L as t,O as b}from"./index.c486b16c.js";const u=r=>{console.log("Home"),i(r);const[a,n]=e.exports.useState(0);return e.exports.useEffect(()=>{const l=window.setInterval(()=>{n(c=>c+1)},1e3);return()=>window.clearInterval(l)},[]),s("div",{className:"page",children:[s("h2",{children:["home: ",a]}),o("br",{}),o(t,{to:"/books/1",children:"go to hot book #1"}),o("br",{}),o(t,{to:"/books/2",children:"go to hot book #2"}),o("br",{}),o(t,{to:"/books",children:"go to book list"}),o("br",{}),o(b,{})]})};export{u as default};
