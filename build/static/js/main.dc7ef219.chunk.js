(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),o=t.n(r),s=(t(3),t(1)),l={key:"94736521c55c3d3a7c23958269f28c3a",base:"https://api.openweathermap.org/data/2.5/"};var u=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),u=Object(s.a)(o,2),i=u[0],m=u[1];return c.a.createElement("div",{className:"undefined"!=typeof i.main&&i.main.temp>23?"app-warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search....",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l.base,"weather?q=").concat(t,"&units=metric&APPID=").concat(l.key)).then(function(e){return e.json()}).then(function(e){m(e),r(""),console.log(e)})}})),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name," , ",i.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"}," ",Math.round(i.main.temp),"\xb0C "),c.a.createElement("div",{className:"weather"},i.weather[0].description))):""))};o.a.render(c.a.createElement(u,null),document.getElementById("root"))},3:function(e,a,t){},5:function(e,a,t){e.exports=t(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.dc7ef219.chunk.js.map