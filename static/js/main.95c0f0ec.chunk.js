(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),s=n(7),a=n.n(s),i=(n(12),n(5)),o=n(6),r=n(0),d=function(e){return 0===e.todoList.length?Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("h1",{className:"mt-5",children:"No Todo Items"})}):Object(r.jsx)("div",{className:"mt-3",children:Object(r.jsx)("ul",{className:"list-group",children:e.todoList.map((function(t,n){return t.complete?Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(r.jsx)("span",{className:"display-6",onClick:function(){return e.toggleComplete(n)},children:Object(r.jsx)("del",{children:t.name})}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger btn-sm","aria-label":"Close",onClick:function(){return e.deleteItem(n)},children:"delete"})]},"todo-".concat(n)):Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(r.jsx)("span",{className:"display-6",onClick:function(){return e.toggleComplete(n)},children:t.name}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger btn-sm","aria-label":"Close",onClick:function(){return e.deleteItem(n)},children:"delete"})]},"todo-".concat(n))}))})})},m=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"mt-5 text-center",onSubmit:e.addItem,children:[Object(r.jsx)("label",{className:"form-label display-4 ",children:"Add Todo Item"}),Object(r.jsx)("input",{type:"tet",className:"form-control",id:"textField",value:e.input,onChange:e.handleChange,required:!0}),Object(r.jsx)("div",{className:"d-grid gap-2",children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",children:"Submit"})})]})})};var b=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),b=a[0],u=a[1];return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{todoList:n,setTodoList:l,handleChange:function(e){u(e.target.value)},addItem:function(e){e.preventDefault();var t={name:b,complete:!1};l(n.concat(t)),document.getElementById("textField").value="",u("")}}),Object(r.jsx)(d,{todoList:n,toggleComplete:function(e){var t=Object(i.a)(n);!1===t[e].complete?(t[e].complete=!0,l(t)):(t[e].complete=!1,l(t))},deleteItem:function(e){var t=Object(i.a)(n);t.splice(e,1),l(t)}})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),l(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.95c0f0ec.chunk.js.map