(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),c=(a(25),a(4)),m=a(18),o=a(20),u=a(19),i=a.n(u),d=a(2);function b(e){var t=e.setData,a=Object(o.a)(),n=a.register,r=a.handleSubmit,s=a.formState.errors;return Object(d.jsx)("form",{onSubmit:r((function(e){var a=function(e){return console.log(e),i.a.get("http://127.0.0.1:5000/",{headers:"Bearer 12903109230+9123091"}).then((function(e){return e.data}))}(e);t(a)})),children:Object(d.jsxs)("div",{className:"flex flex-col py-5 space-y-5",children:[Object.entries({mass:{name:"Massa [kg/m]",value:19e3},youngs_modulus:{name:"E-modul []",value:2e11},moment_of_inertia:{name:"Tr\xf6ghetsmoment []",value:.86},damping_ratio:{name:"D\xe4mpkvot",value:.005},length:{name:"L\xe4ngd [m]",value:48},element_size:{name:"Elementstorlek [m]",value:.1},mode_numbers:{name:"Antal moder [-]",value:[1,2,3]}}).map((function(e){var t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsx)("p",{className:"text-black text-xs",children:r.name}),Object(d.jsx)("input",Object(m.a)({className:"border border-solid",type:"text",value:r.value,placeholder:r.value},n(a,{required:"F\xe4lt m\xe5ste vara ifyllt."}))),s[a]?Object(d.jsx)("p",{className:"text-red-500 text-xs",children:s[a].message}):null]})})),Object(d.jsx)("button",{className:"bg-green-500 text-white p-2 rounded-md",type:"submit",children:"Ber\xe4kna"})]})})}var j=function(){var e=r.a.useState({}),t=Object(c.a)(e,2),a=(t[0],t[1]);return Object(d.jsxs)("div",{className:"flex flex-col items-center",children:["HELLO A FRONTEND!",Object(d.jsx)(b,{setData:a})]})};l.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.fdc2cdd4.chunk.js.map