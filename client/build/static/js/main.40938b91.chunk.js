(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{205:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(68),c=n.n(s),o=(n(78),n(11)),i=n(39),l=n.n(i),d=n(69),u=n(70),j=n.n(u),b=n(73),h=(n(205),n(1)),f=function(e){for(var t=e.datas,n=e.color,a=e.sensor,r=[],s=0;s<24;s++)r.push(s);return Object(h.jsx)("div",{class:"chart_container",children:Object(h.jsx)(b.a,{data:{labels:r,datasets:[{label:a,data:t,borderColor:n,backgroundColor:n}]},width:520,height:400,options:{maintainAspectRatio:!1,scales:{x:{display:!0,title:{display:!0,text:"Time in hrs"}},y:{display:!0,title:{display:!0,text:"Sensor Reading"}}}}})})},p=(n(207),function(e){var t=e.data;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Data collected from all 4 sensors"}),Object(h.jsxs)("div",{className:"linechart_container",children:[Object(h.jsx)(f,{datas:t("sensor1"),color:"#edde0e",sensor:"Sensor 1"}),Object(h.jsx)(f,{datas:t("sensor2"),color:"#03fcdf",sensor:"Sensor 2"}),Object(h.jsx)(f,{datas:t("sensor3"),color:"#ed0ed3",sensor:"Sensor 3"}),Object(h.jsx)(f,{datas:t("sensor4"),color:"#ed3e0e",sensor:"Sensor 4"})]})]})}),x=(n(208),function(e){var t=e.handleDate,n=e.selectedDate,a=new Date;console.log(a);var r=a.getDate()-1,s=a.getDate()-2,c=a.getDate()-3,o=[a.getDate(),r,s,c];return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("label",{children:["Select the date:",Object(h.jsx)("select",{className:"header_select",value:n,onChange:t,children:o.map((function(e,t){return Object(h.jsxs)("option",{value:e,children:[e,"/",a.getMonth()+1,"/",a.getFullYear()]},t)}))})]})})}),O=(n(209),function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/data");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)((new Date).getDate()),c=Object(o.a)(s,2),i=c[0],l=c[1];Object(a.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var d=n.filter((function(e){return new Date(e.createdAt).getDate()===i}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{handleDate:function(e){l(Number(e.target.value))},selectedDate:i}),Object(h.jsx)(p,{data:function(e){return d.map((function(t){return{x:new Date(t.createdAt).getHours(),y:t[e]?t[e]:0}}))}})]})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},78:function(e,t,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.40938b91.chunk.js.map