(this.webpackJsonpcontextapp=this.webpackJsonpcontextapp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(16),n(6)),u=n(7),i=n(10),s=n(8),m=n(2),b=n(9),d=n(19),p=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(b.a)(e),[{title:t.book.title,author:t.book.author,id:Object(d.a)()}]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.id}));default:return e}},h=Object(a.createContext)(),f=function(e){var t=Object(a.useReducer)(p,[],(function(){var e=localStorage.getItem("books");return JSON.parse(e)})),n=Object(m.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){localStorage.setItem("books",JSON.stringify(r))}),[r]),o.a.createElement(h.Provider,{value:{books:r,dispatch:c}},e.children)},O=function(){var e=Object(a.useContext)(h).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Reading List "),o.a.createElement("p",null,"currently you have ",e.length," books to get through ..."))},E=function(e){var t=e.book,n=Object(a.useContext)(h).dispatch;return o.a.createElement("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:t.id})}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author))},v=function(){var e=Object(a.useContext)(h).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(E,{key:e.id,book:e})})))):o.a.createElement("p",{className:"empty"}," your reading list is empty, Hello free time :).")},k=function(){var e=Object(a.useContext)(h).dispatch,t=Object(a.useState)(""),n=Object(m.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),u=Object(m.a)(l,2),i=u[0],s=u[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:r,author:i}}),c(""),s("")}},o.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value)},value:r,placeholder:"book title",required:!0}),o.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value)},value:i,placeholder:"book author",required:!0}),o.a.createElement("button",{className:"submit"},"add book"))},g=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null,o.a.createElement(O,null),o.a.createElement(v,null),o.a.createElement(k,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.14c23fdd.chunk.js.map