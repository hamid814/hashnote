(this.webpackJsonphashnote=this.webpackJsonphashnote||[]).push([[0],{29:function(e,t,a){e.exports=a(65)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),l=(a(34),a(10)),s=a(8),i=(a(35),a(1)),u=a(11),m=function(e,t){switch(t.type){case"set-alert":return Object(u.a)({},e,{alertStatus:t.payload.status,alertMsg:t.payload.msg,alertType:t.payload.type,alertTime:t.payload.time});default:return e}},f={alertStatus:"first-off",alertMsg:"alert text",alertType:"success",alertTime:1e3},d=Object(n.createContext)(f),h=function(e){var t=e.children,a=Object(n.useReducer)(m,f),c=Object(i.a)(a,2),r=c[0],l=c[1];return o.a.createElement(d.Provider,{value:{alertStatus:r.alertStatus,alertMsg:r.alertMsg,alertType:r.alertType,setAlert:function(e,t,a,n){var o="on"===e?a:r.alertType,c="on"===e?t:r.alertMsg;l({type:"set-alert",payload:{status:e,msg:c,type:o,time:n}})}}},t)},v=function(){var e=Object(n.useContext)(d).setAlert;return o.a.createElement("div",{className:"logo",onClick:function(){e("on","you successfully clicked on logo","success",3e3)}},o.a.createElement("div",{className:"col col-1"},o.a.createElement("div",{className:"row row-1"}),o.a.createElement("div",{className:"row row-2"}),o.a.createElement("div",{className:"row row-3"})),o.a.createElement("div",{className:"col col-2"},o.a.createElement("div",{className:"row row-1"}),o.a.createElement("div",{className:"row row-2"}),o.a.createElement("div",{className:"row row-3"})))},p=(a(36),function(){return o.a.createElement("div",null,"from theme changer")}),E=function(e,t){switch(t.type){case"set-modal":return Object(u.a)({},e,{modalStatus:t.payload.status,modalType:t.payload.type});default:return e}},g={modalStatus:"first-off",modalType:"none"},b=Object(n.createContext)(g),y=function(e){var t=e.children,a=Object(n.useReducer)(E,g),c=Object(i.a)(a,2),r=c[0],l=c[1];return o.a.createElement(b.Provider,{value:{modalStatus:r.modalStatus,modalType:r.modalType,setModal:function(e,t){"off"===e?l({type:"set-modal",payload:{status:e,type:r.modalType}}):"on"===e&&l({type:"set-modal",payload:{status:e,type:t}})}}},t)},w=(a(37),function(){var e=Object(n.useContext)(b).setModal;return o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"navbar-left"},o.a.createElement("div",null,"right"),o.a.createElement("div",null,"search")),o.a.createElement("div",null,o.a.createElement(v,null)),o.a.createElement("div",{className:"navbar-right"},o.a.createElement(p,null),o.a.createElement("button",{className:"insert-button",onClick:function(){e("on","quick-insert")}},"insert")))}),j=function(){return o.a.createElement("div",null,"from quick insert")},O=(a(38),function(){var e=Object(n.useContext)(b),t=e.modalStatus,a=e.modalType,c=e.setModal,r=Object(n.useState)("off"),l=Object(i.a)(r,2),s=l[0],u=l[1];Object(n.useEffect)((function(){"off"===t?(u("go"),setTimeout((function(){u("off")}),480)):"on"===t?(u("come"),setTimeout((function(){u("on")}),480)):"first-off"===t&&u("off")}),[t]);var m=function(){c("off")};return o.a.createElement("div",{className:"modal-container ".concat(s),onClick:function(e){e.target.classList.contains("modal-container")&&m()}},o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",{className:"close-modal-btn",onClick:m}),"moda content","quick-insert"===a&&o.a.createElement(j,null)))}),N=(a(39),function(){var e=Object(n.useContext)(d),t=e.alertStatus,a=e.alertMsg,c=e.alertType,r=e.setAlert,l=Object(n.useState)("off"),s=Object(i.a)(l,2),u=s[0],m=s[1];Object(n.useEffect)((function(){"off"===t?(m("go"),setTimeout((function(){m("off")}),380)):"on"===t?(m("come"),setTimeout((function(){m("on")}),380)):"first-off"===t&&m("off")}),[t]);return o.a.createElement("div",{className:"alert ".concat(u," alert-").concat(c),onClick:function(){r("off")}},a)}),k=a(7),x=a.n(k),S=function(e){var t=e.tag,a=Object(n.useState)({}),c=Object(i.a)(a,2),r=c[0],s=c[1];Object(n.useEffect)((function(){try{x.a.get("/tags/".concat(t.id)).then((function(e){return s(e.data)}))}catch(e){console.log(e)}}),[]);var u={background:r.color};return o.a.createElement(l.b,{to:"".concat("/hashnote","/tag/").concat(t.id),className:"tag",style:u},"#",t.name)},T=(a(62),function(e){var t=e.note,a=t.tags,c=Object(n.useState)({}),r=Object(i.a)(c,2),l=r[0],s=r[1];Object(n.useEffect)((function(){try{x.a.get("/tags/".concat(a.first.id)).then((function(e){return s(e.data)}))}catch(e){console.log(e)}}),[]);var u={borderColor:l.color};return o.a.createElement("div",{className:"note",style:u},t.text,o.a.createElement("div",{className:"note-footer"},o.a.createElement(S,{tag:a.first}),a.other.map((function(e){return o.a.createElement(S,{key:e.id,tag:e})}))))}),C=(a(63),function(e){var t=e.notes;return o.a.createElement("div",{className:"notes-container"},t.map((function(e){return o.a.createElement(T,{key:e.id,note:e})})))}),M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){try{x.a.get("/notes").then((function(e){return c(e.data)}))}catch(e){console.log(e)}}),[]),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(C,{notes:a}))},A=(a(64),function(e){var t=e.match.params.id,a=Object(n.useState)({}),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)([]),m=Object(i.a)(u,2),f=m[0],d=m[1];Object(n.useEffect)((function(){x.a.get("/tags/".concat(t)).then((function(e){return s(e.data)})),x.a.get("/notes/tag/".concat(t)).then((function(e){return d(e.data)}))}),[]);var h={color:r.color};return o.a.createElement("div",{className:"tag-page"},o.a.createElement(l.b,{to:"".concat("/hashnote","/")},"go home"),o.a.createElement("h1",{style:h,className:"tag-name"},"#",r.name),f.length>0&&o.a.createElement(C,{notes:f}))}),W=function(){return o.a.createElement("div",null,"from Tags page")},R=function(e){e.match;return o.a.createElement("div",null,"from note page")},P=function(){return o.a.createElement("div",null,"from stats")},q=function(){return o.a.createElement("div",null,"from rules")},L=function(){return o.a.createElement("div",null,"from current tasks")},U=function(){return console.log("how to relate tags to each other???"),console.log("tag with no notes page"),o.a.createElement(l.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null),o.a.createElement(N,null),o.a.createElement(w,null),o.a.createElement("div",{className:"container"},o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/"),component:M}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/hashnote"),component:M}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/tag/:id"),component:A}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/tags"),component:W}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/note/:id"),component:R}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/statics"),component:P}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/rules"),component:q}),o.a.createElement(s.a,{exact:!0,path:"".concat("/hashnote","/current-tasks"),component:L})))))},B=function(e,t){switch(t.type){case"test":return Object(u.a)({},e,{test:t.payload});default:return e}},F={test:"test text"},J=Object(n.createContext)(F),I=function(e){var t=e.children,a=Object(n.useReducer)(B,F),c=Object(i.a)(a,2),r=c[0],l=c[1];return o.a.createElement(J.Provider,{value:{test:r.test,testFunc:function(){l({type:"test",payload:"test-text-2"})}}},t)},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement((function(){return o.a.createElement(I,null,o.a.createElement(y,null,o.a.createElement(h,null,o.a.createElement(U,null))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hashnote",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hashnote","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.fbf8cbf0.chunk.js.map