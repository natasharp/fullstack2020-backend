(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(19),t(2)),l=function(e){var n=e.value,t=e.handler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){return r.a.createElement("form",{onSubmit:e.submitHandler},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.nameValue,onChange:e.nameHandler})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.phoneValue,onChange:e.phoneHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.removePersonHandler;return r.a.createElement("div",null,n.name,r.a.createElement("span",null," "),n.number,r.a.createElement("span",null," "),r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},d=function(e){var n=e.persons,t=e.removePersonHandler;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.name,person:e,removePersonHandler:t})})))},s=function(e){var n=e.message,t=e.success;return null===n?null:!0===t?r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n):r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},f=t(3),h=t.n(f),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),f=m[0],h=m[1],b=Object(a.useState)(""),w=Object(c.a)(b,2),O=w[0],j=w[1],k=Object(a.useState)(""),y=Object(c.a)(k,2),S=y[0],C=y[1],H=Object(a.useState)(null),L=Object(c.a)(H,2),P=L[0],B=L[1],V=Object(a.useState)(!1),x=Object(c.a)(V,2),z=x[0],A=x[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var D=function(e){p(e).then((function(e){o(t.concat(e)),h(""),j(""),R(e)}))},I=function(e){var n=t.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}));window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&E(n.id,e).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e})))})).then(h("")).then(j("")).catch((function(e){J(n),o(t.filter((function(e){return e.id!==n.id})))}))},J=function(e){B("Information of '".concat(e.name,"' has already been removed from server")),setTimeout((function(){B(null)}),5e3)},R=function(e){B("Added ".concat(e.name)),A(!0),setTimeout((function(){B(null),A(!1)}),5e3)},T=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:P,success:z}),r.a.createElement(l,{value:S,handler:function(e){return C(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{nameValue:f,nameHandler:function(e){return h(e.target.value)},phoneValue:O,phoneHandler:function(e){return j(e.target.value)},submitHandler:function(e){e.preventDefault();var n={name:f,number:O};-1===t.map((function(e){return e.name.toLowerCase()})).indexOf(n.name.toLowerCase())?D(n):I(n)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:T,removePersonHandler:function(e){window.confirm("Delete ".concat(e.name))&&g(e.id).then(o(t.filter((function(n){return n.id!==e.id})))).catch((function(n){J(e),o(t.filter((function(n){return n.id!==e.id})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a4910bd.chunk.js.map