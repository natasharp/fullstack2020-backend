(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=function(e){var n=e.value,t=e.handler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){return r.a.createElement("form",{onSubmit:e.submitHandler},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.nameValue,onChange:e.nameHandler})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.phoneValue,onChange:e.phoneHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.removePersonHandler;return r.a.createElement("div",null,n.name,r.a.createElement("span",null," "),n.number,r.a.createElement("span",null," "),r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},d=function(e){var n=e.persons,t=e.removePersonHandler;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.name,person:e,removePersonHandler:t})})))},s=function(e){var n=e.message,t=e.success;return null===n?null:!0===t?r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n):r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},f=t(3),h=t.n(f),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),m=Object(u.a)(c,2),f=m[0],h=m[1],b=Object(a.useState)(""),w=Object(u.a)(b,2),j=w[0],O=w[1],k=Object(a.useState)(""),y=Object(u.a)(k,2),S=y[0],H=y[1],C=Object(a.useState)(null),P=Object(u.a)(C,2),B=P[0],V=P[1],z=Object(a.useState)(!1),A=Object(u.a)(z,2),D=A[0],I=A[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var J=function(e,n){window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&E(e,n).then((function(n){o(t.map((function(t){return t.id!==e?t:n}))),h(""),O("")})).catch((function(e){return L(e.response.data.error)}))},L=function(e){V(e),setTimeout((function(){V(null)}),1e4)},R=function(e){V("Added ".concat(e.name)),I(!0),setTimeout((function(){V(null),I(!1)}),5e3)},T=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:B,success:D}),r.a.createElement(l,{value:S,handler:function(e){return H(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{nameValue:f,nameHandler:function(e){return h(e.target.value)},phoneValue:j,phoneHandler:function(e){return O(e.target.value)},submitHandler:function(e){e.preventDefault();var n={name:f,number:j},a=t.find((function(e){return e.name===n.name}));a?J(a.id,n):p(n).then((function(e){o(t.concat(e)),h(""),O(""),R(e)})).catch((function(e){return L(e.response.data.error)}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:T,removePersonHandler:function(e){window.confirm("Delete ".concat(e.name))&&g(e.id).then(o(t.filter((function(n){return n.id!==e.id})))).catch((function(n){L("Information of '".concat(e.name,"' has already been removed from server")),o(t.filter((function(n){return n.id!==e.id})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b327f27.chunk.js.map