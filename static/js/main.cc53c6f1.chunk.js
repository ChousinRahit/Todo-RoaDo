(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,n){e.exports={headingTodo:"styles_headingTodo__1SreB",outerContainer:"styles_outerContainer__2A57p",actionsContainer:"styles_actionsContainer__2Rlef",actionsBtnContainer:"styles_actionsBtnContainer__3kEgD",activeBtn:"styles_activeBtn__OWnDy",inputBaseContainer:"styles_inputBaseContainer__3bLCl",markAllComp:"styles_markAllComp__3zcJa",inputBase:"styles_inputBase__20gan",darkText:"styles_darkText__2XqNt"}},19:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},3:function(e,t,n){e.exports={todoContainer:"style_todoContainer__2NOwx","slide-right":"style_slide-right__Alepz",todoText:"style_todoText__XroWf",todotextContainer:"style_todotextContainer__1gSs-",editingText:"style_editingText__1irTJ",crossMark:"style_crossMark__KifYi",completed:"style_completed__35sSQ",radioCustom:"style_radioCustom__2Vqnu"}},30:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),i=n(7),c=n(8),u=(n(29),n(4)),s=n(3),d=n.n(s),m=function(e){var t=e.todo,n=e.rmTodo,r=e.toggleCheckbox,l=e.updateTodowithId,i=t.title,c=t.id,s=t.isCompleted,m=Object(a.useState)(!1),p=Object(u.a)(m,2),_=p[0],C=p[1],E=Object(a.useState)(""),T=Object(u.a)(E,2),f=T[0],g=T[1],O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(["Enter",",","Tab","Click"].includes(e.key)||t)&&f.length&&(l(f,c),C(!1))};return o.a.createElement("div",null,o.a.createElement("div",{className:d.a.todoContainer},o.a.createElement("section",{className:d.a.todotextContainer},o.a.createElement("div",null,o.a.createElement("input",{className:d.a.radioCustom,type:"checkbox",checked:s,onChange:function(){return r(c)}})),o.a.createElement("div",null,_?o.a.createElement("input",{type:"text",value:f,className:d.a.editingText,id:c,onChange:function(e){return g(e.target.value)},onKeyUp:function(e){return O(e)},onBlur:function(e){return O(e,!0)}}):o.a.createElement("p",{className:s?[d.a.completed,d.a.todoText].join(" "):d.a.todoText,onDoubleClick:function(){C(!0),g(i)}},i))),o.a.createElement("div",{className:d.a.crossMark,onClick:function(){return n(c)}},"\u2718")))},p=n(1),_=n.n(p),C=Object(c.b)((function(e){return{todos:e}}),(function(e){return{updateTodo:function(t){return e({type:"ADD_TODO",todo:t})},initState:function(){return e({type:"INIT_STATE"})},rmTodo:function(t){return e(function(e){return{type:"REMOVE_TODO",id:e}}(t))},toggleCheckbox:function(t){return e(function(e){return{type:"TOGGLE_COMPLETED",id:e}}(t))},toggleallCompleteTodos:function(t){return e({type:"TOGGLE_ALL_COMPLETED",toggle:t})},deleteAllComp:function(){return e({type:"REMOVE_ALL_COMPLETED"})},updateTodowithId:function(t,n){return e(function(e,t){return{type:"UPDATE_TODO_WITH_ID",value:e,id:t}}(t,n))}}}))((function(e){var t=e.todos,n=e.updateTodo,r=e.initState,l=e.rmTodo,i=e.toggleCheckbox,c=e.toggleallCompleteTodos,s=e.deleteAllComp,d=e.updateTodowithId,p=Object(a.useState)(""),C=Object(u.a)(p,2),E=C[0],T=C[1],f=Object(a.useState)("all"),g=Object(u.a)(f,2),O=g[0],v=g[1],y=Object(a.useState)(!1),b=Object(u.a)(y,2),k=b[0],h=b[1];Object(a.useEffect)((function(){r()}),[r]);var x=function(){return t.filter((function(e){return!e.isCompleted})).length};return o.a.createElement("div",null,o.a.createElement("div",{className:_.a.headingTodo},o.a.createElement("h1",null,"todos")),o.a.createElement("div",{className:_.a.outerContainer},o.a.createElement("section",{className:_.a.actionsContainer},o.a.createElement("div",{className:_.a.actionsBtnContainer},o.a.createElement("button",{onClick:function(){return v("all")},className:"all"===O?_.a.activeBtn:null},"all"),o.a.createElement("button",{onClick:function(){return v("active")},className:"active"===O?_.a.activeBtn:null},"active"),o.a.createElement("button",{onClick:function(){return v("comp")},className:"comp"===O?_.a.activeBtn:null},"completed")),o.a.createElement("p",null,x()," item",x()>1&&"s"," left")),o.a.createElement("section",{className:_.a.inputBaseContainer},o.a.createElement("button",{className:k?[_.a.markAllComp,_.a.darkText].join(" "):_.a.markAllComp,onClick:function(){return function(e){c(e),h(!e)}(k)}},"\u2714"),o.a.createElement("input",{className:_.a.inputBase,placeholder:"What needs to be done?",value:E,onChange:function(e){return T(e.target.value)},onKeyUp:function(e){var t;["Enter","Tab",","].includes((t=e).key)&&E.length&&(t.preventDefault(),n(E),T(""))}}),o.a.createElement("button",{className:k?[_.a.markAllComp,_.a.darkText].join(" "):_.a.markAllComp,onClick:function(){return s()}},"\u2718"," ")),t.map((function(e){return"all"===O?o.a.createElement(m,{todo:e,key:e.id,rmTodo:l,toggleCheckbox:i,updateTodowithId:d}):"comp"===O&&e.isCompleted?o.a.createElement(m,{todo:e,key:e.id,rmTodo:l,toggleCheckbox:i,updateTodowithId:d}):"active"!==O||e.isCompleted?null:o.a.createElement(m,{todo:e,key:e.id,rmTodo:l,toggleCheckbox:i,updateTodowithId:d})}))))}));n(30);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null))},T=n(9),f=n(18),g=n(13),O=n.n(g),v=function(e){localStorage.setItem("myTodos",JSON.stringify(e))},y=[],b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=[].concat(Object(f.a)(e),[{title:t.todo,isCompleted:!1,id:O.a.v4()}]);return v(n),n;case"INIT_STATE":var a=localStorage.getItem("myTodos");return a||(a=JSON.stringify([{title:"An Example todo",isCompleted:!1,id:O.a.v4()}])),JSON.parse(a);case"REMOVE_TODO":var o=e.filter((function(e){return e.id!==t.id}));return v(o),o;case"TOGGLE_COMPLETED":var r=e.map((function(e){return e.id===t.id?Object(T.a)({},e,{isCompleted:!e.isCompleted}):e}));return v(r),r;case"TOGGLE_ALL_COMPLETED":var l=e.map((function(e){return Object(T.a)({},e,{isCompleted:!t.toggle})}));return v(l),l;case"REMOVE_ALL_COMPLETED":var i=e.filter((function(e){return!e.isCompleted}));return v(i),i;case"UPDATE_TODO_WITH_ID":var c=e.map((function(e){return e.id===t.id?Object(T.a)({},e,{title:t.value}):e}));return v(c),c;default:return e}},k=Object(i.b)(b);l.a.render(o.a.createElement(c.a,{store:k},o.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cc53c6f1.chunk.js.map