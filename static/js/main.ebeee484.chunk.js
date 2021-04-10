(this.webpackJsonpguess=this.webpackJsonpguess||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(25),o=n.n(s),r=(n(32),n(9)),l=(n(33),n(2)),i=n(4),u=n(15),j=n(0),b=function(e){var t=e.component,n=Object(u.a)(e,["component"]),c=localStorage.getItem("credentials");return Object(j.jsx)(l.b,{render:function(){return c?Object(j.jsx)(t,Object(i.a)({},n)):Object(j.jsx)(l.a,{to:"/login"})}})},d=function(e){var t=e.component,n=Object(u.a)(e,["component"]),c=localStorage.getItem("credentials");return localStorage.getItem("applicantId")&&c?Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(l.a,{to:"/play"})}}):c?Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(l.a,{to:"/apply"})}}):Object(j.jsx)(l.b,{render:function(){return Object(j.jsx)(t,Object(i.a)({},n))}})},p=n(11),O=n(7),m=(n(39),function(){var e=Object(c.useState)({username:"",password:""}),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(l.g)(),o=function(e,t){a(Object(i.a)(Object(i.a)({},n),{},Object(p.a)({},e,t)))};return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h1",{children:"Login to Guess Game"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Username",value:n.username,onChange:function(e){return o("username",e.target.value)},className:"input"}),Object(j.jsx)("input",{type:"password",placeholder:"Password",value:n.password,onChange:function(e){return o("password",e.target.value)},className:"input"}),Object(j.jsx)("button",{disabled:!n.password||!n.username,onClick:function(e){e.preventDefault(),localStorage.setItem("credentials",JSON.stringify(n)),s.push("apply")},className:"button",children:"Login"})]})]})}),g=n(14),h=(n(53),n(27)),f=n.n(h),x=function(e,t){return new Promise((function(n,c){var a=JSON.parse(localStorage.getItem("credentials")),s={method:"GET",headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*",Accept:"application/json",Authorization:"Basic ".concat(f.a.encode("".concat(null===a||void 0===a?void 0:a.username,":").concat(null===a||void 0===a?void 0:a.password)))}},o=Object(i.a)(Object(i.a)({},s),t);o.body&&(o.body=JSON.stringify(o.body)),fetch("".concat("https://game.flowautobody.com.au").concat(e),o).then((function(e){return 200===e.status||201===e.status||304===e.status?n(e.json()||{}):c(e.json()||{})})).catch((function(e){return c(e)}))}))},v=function(){localStorage.removeItem("credentials"),localStorage.removeItem("applicantId"),localStorage.removeItem("gameId")},I=function(){var e=Object(c.useState)({preferredName:"",emailAddress:""}),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(1),o=Object(O.a)(s,2),r=o[0],u=o[1],b=Object(c.useState)(""),d=Object(O.a)(b,2),m=d[0],h=d[1],f=Object(l.g)(),I=function(e,t){a(Object(i.a)(Object(i.a)({},n),{},Object(p.a)({},e,t)))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h1",{children:"".concat(1===r?"Apply to play":"Instructions")}),1===r?Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Preferred Name",value:n.preferredName,onChange:function(e){return I("preferredName",e.target.value)},type:"text",className:"input"}),Object(j.jsx)("input",{placeholder:"Email address",value:n.emailAddress,onChange:function(e){return I("emailAddress",e.target.value)},type:"email",className:"input"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),x("/apply",{body:n,method:"POST"}).then((function(e){localStorage.setItem("applicantId",e.applicantId),u(r+1),h(e.instructions),x("/game",{method:"POST",body:{applicantId:e.applicantId}}).then((function(e){localStorage.setItem("gameId",e.gameId)}))})).catch((function(e){console.log(e)}))},className:"button",disabled:!n.emailAddress||!n.preferredName,children:"Apply"})]}):Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("p",{children:Object(g.a)(m.replaceAll("\n","<br />"))}),Object(j.jsx)("button",{onClick:function(){f.push("/play")},className:"button",children:"Play"})]})]}),Object(j.jsx)("button",{className:"logout-btn button",onClick:function(){v(),f.push("/login")},children:"Logout"})]})},S=(n(55),function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(O.a)(s,2),r=o[0],i=o[1],u=Object(c.useState)(""),b=Object(O.a)(u,2),d=b[0],p=b[1],m=Object(c.useState)(!1),h=Object(O.a)(m,2),f=h[0],I=h[1],S=Object(c.useState)(""),y=Object(O.a)(S,2),N=y[0],C=y[1],w=Object(l.g)();Object(c.useEffect)((function(){var e=localStorage.getItem("gameId"),t=localStorage.getItem("applicantId");e||x("/game",{method:"POST",body:{applicantId:t}}).then((function(e){localStorage.setItem("gameId",e.gameId)}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"form-container",children:["correct"!==d&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Enter your guess"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Guess",onChange:function(e){return a(e.target.value)},value:n,className:"input"}),Object(j.jsx)("button",{className:"button",onClick:function(e){e.preventDefault();var t=localStorage.getItem("applicantId"),c=localStorage.getItem("gameId");I(!0),x("/game",{method:"PUT",body:{applicantId:t,gameId:c,guess:Number(n)}}).then((function(e){var t=e.result,c=e.instructions;p(t),i(n),a(""),"correct"===t&&C(c)})).finally((function(){I(!1)}))},disabled:!n||f,children:f?"Processing...":"Send"})]})]}),r&&"correct"!==d&&Object(j.jsxs)("div",{className:"error",children:[Object(j.jsxs)("span",{children:["Your guess: ",r]}),Object(j.jsxs)("span",{children:["Go ",d]})]}),"correct"===d&&Object(j.jsxs)("div",{className:"success",children:[Object(j.jsxs)("span",{children:["Your guess: ",r]}),Object(j.jsx)("span",{children:"That is correct!!!"}),Object(j.jsx)("p",{children:Object(g.a)(N.replaceAll("\n","<br />"))})]})]}),Object(j.jsx)("button",{className:"logout-btn button",onClick:function(){v(),w.push("/login")},children:"Logout"})]})}),y=function(){return Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",children:Object(j.jsx)(l.a,{to:"/login"})}),Object(j.jsx)(d,{path:"/login",exact:!0,component:m}),Object(j.jsx)(b,{path:"/apply",exact:!0,component:I}),Object(j.jsx)(b,{path:"/play",exact:!0,component:S})]})};var N=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.a,{basename:"/guess",children:Object(j.jsx)(y,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),C()}},[[56,1,2]]]);
//# sourceMappingURL=main.ebeee484.chunk.js.map