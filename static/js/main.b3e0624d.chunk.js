(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,function(e,t,c){},,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),r=c.n(a),s=(c(12),c(3)),o=c.n(s),l=c(6),d=c(2),j=(c(14),c(15),c(4),c(0)),h=function(e){return Object(j.jsx)("button",{tabIndex:"-1",className:"bookmark",onClick:e.onClick.bind(null,e.city),type:"button",children:Object(j.jsx)("svg",{width:"20",height:"23",viewBox:"0 0 20 23",children:Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 0H17C18.654 0 20 1.346 20 3V22C20 22.382 19.782 22.73 19.439 22.898C19.3 22.966 19.149 23 19 23C18.782 23 18.565 22.929 18.386 22.789L10 16.267L1.614 22.789C1.313 23.024 0.905 23.065 0.561 22.898C0.218 22.73 0 22.382 0 22V3C0 1.346 1.346 0 3 0Z",fill:"#4a4a4a"})})})},b=function(e){return Object(j.jsx)("button",{tabIndex:"-1",className:"bookmark",onClick:e.onClick.bind(null,e.city),type:"button",children:Object(j.jsx)("svg",{tabIndex:"-1",width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",children:Object(j.jsx)("path",{d:"M17 0H3C1.346 0 0 1.346 0 3V22C0 22.382 0.218 22.73 0.561 22.898C0.905 23.065 1.313 23.024 1.614 22.789L10 16.267L18.386 22.789C18.565 22.929 18.782 23 19 23C19.149 23 19.3 22.966 19.439 22.898C19.782 22.73 20 22.382 20 22V3C20 1.346 18.654 0 17 0ZM18 19.956L10.614 14.211C10.434 14.07 10.217 14 10 14C9.783 14 9.566 14.07 9.386 14.21L2 19.956V3C2 2.449 2.449 2 3 2H17C17.551 2 18 2.449 18 3V19.956Z",fill:"#4a4a4a"})})})},u=function(e){var t="http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),c=parseFloat(e.temperature);c=c.toFixed(0);var n=(3.6*e.wind).toFixed(0),i=e.forecast,a=new Date,r=a.getDay();console.log(r,a);var s=["SUN","MON","TUE","WED","THU","FRI","SAT"];return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"card-header",children:[Object(j.jsxs)("h2",{children:[e.city,", ",e.country]}),!e.cities.includes(e.city)&&Object(j.jsx)(b,{onClick:e.onFollowCity,city:e.city}),e.cities.includes(e.city)&&Object(j.jsx)(h,{onClick:e.onUnfollowCity,city:e.city})]}),Object(j.jsxs)("div",{className:"description-box",children:[Object(j.jsx)("h3",{children:e.description}),Object(j.jsxs)("h3",{children:["Wind ",n,"km/h \u2022 ",e.pressure,"hPa"," "]})]}),Object(j.jsxs)("div",{className:"temp-box",children:[Object(j.jsx)("img",{src:t,alt:"weather-img"}),Object(j.jsxs)("h1",{children:[c,"\xb0"]})]}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:s[(r+1)%7]}),Object(j.jsx)("td",{children:s[(r+2)%7]}),Object(j.jsx)("td",{children:s[(r+3)%7]}),Object(j.jsx)("td",{children:s[(r+4)%7]}),Object(j.jsx)("td",{children:s[(r+5)%7]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[i[0].daily[1].temp.day.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[2].temp.day.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[3].temp.day.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[4].temp.day.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[5].temp.day.toFixed(0),"\xb0"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[i[0].daily[1].temp.morn.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[2].temp.morn.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[3].temp.morn.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[4].temp.morn.toFixed(0),"\xb0"]}),Object(j.jsxs)("td",{children:[i[0].daily[5].temp.morn.toFixed(0),"\xb0"]})]})]})]})},x=(c(17),function(e){var t=e.cities;return Object(j.jsx)("div",{className:"city-box",children:t.map((function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"city",children:[Object(j.jsx)("p",{children:t}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"city-check",onClick:e.onFetchCity.bind(null,t),children:"check"}),Object(j.jsx)("button",{className:"city-delete",onClick:e.onUnfollowCity.bind(null,t),children:"delete"})]})]})})}))})}),p=function(e){return Object(j.jsx)("button",{tabIndex:"-1",className:"bookmark",onClick:e.onClick,type:"button",children:Object(j.jsx)("svg",{tabIndex:"-1",width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",children:Object(j.jsx)("path",{d:"M17 0H3C1.346 0 0 1.346 0 3V22C0 22.382 0.218 22.73 0.561 22.898C0.905 23.065 1.313 23.024 1.614 22.789L10 16.267L18.386 22.789C18.565 22.929 18.782 23 19 23C19.149 23 19.3 22.966 19.439 22.898C19.782 22.73 20 22.382 20 22V3C20 1.346 18.654 0 17 0ZM18 19.956L10.614 14.211C10.434 14.07 10.217 14 10 14C9.783 14 9.566 14.07 9.386 14.21L2 19.956V3C2 2.449 2.449 2 3 2H17C17.551 2 18 2.449 18 3V19.956Z",fill:"#4a4a4a"})})})},O=function(e){return Object(j.jsx)("button",{tabIndex:"-1",className:"bookmark",onClick:e.onClick,type:"button",children:Object(j.jsx)("svg",{width:"20",height:"23",viewBox:"0 0 20 23",children:Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 0H17C18.654 0 20 1.346 20 3V22C20 22.382 19.782 22.73 19.439 22.898C19.3 22.966 19.149 23 19 23C18.782 23 18.565 22.929 18.386 22.789L10 16.267L1.614 22.789C1.313 23.024 0.905 23.065 0.561 22.898C0.218 22.73 0 22.382 0 22V3C0 1.346 1.346 0 3 0Z",fill:"#4a4a4a"})})})};0===localStorage.length&&localStorage.setItem("cities","[]");var m=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)([]),r=Object(d.a)(a,2),s=r[0],h=r[1],b=Object(n.useState)(""),m=Object(d.a)(b,2),f=m[0],y=m[1],C=Object(n.useState)(""),g=Object(d.a)(C,2),v=g[0],w=g[1],k=Object(n.useState)(""),S=Object(d.a)(k,2),N=S[0],F=S[1],I=Object(n.useState)(!1),L=Object(d.a)(I,2),V=L[0],J=L[1],M=Object(n.useState)(JSON.parse(localStorage.getItem("cities"))),H=Object(d.a)(M,2),U=H[0],T=H[1],Z=function(e){if(T((function(t){return t.filter((function(t){return t!==e}))})),localStorage.length>0){var t=localStorage.getItem("cities");t=(t=JSON.parse(t)).filter((function(t){return t!==e})),localStorage.setItem("cities",JSON.stringify(t))}},B=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n,a,r,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i([]),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87"));case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,i([n]),a=n.coord.lon,r=n.coord.lat,e.next=12,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(a,"&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87"));case 12:return s=e.sent,e.next=15,s.json();case 15:l=e.sent,h([l]);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n,a,r,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i([]),e.prev=2,""!==f){e.next=5;break}throw new Error("Type in the city.");case 5:return y(""),e.next=8,fetch(v);case 8:if((c=e.sent).ok){e.next=11;break}throw new Error("The city was not found. Check the spelling.");case 11:return e.next=13,c.json();case 13:return n=e.sent,i([n]),a=n.coord.lon,r=n.coord.lat,e.next=19,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(a,"&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87"));case 19:return s=e.sent,e.next=22,s.json();case 22:l=e.sent,h([l]),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(2),F(e.t0.message);case 29:w("");case 30:case"end":return e.stop()}}),e,null,[[2,26]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){J(!V)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"search-box",onSubmit:E,children:[Object(j.jsxs)("div",{className:"search-box-inner",children:[!V&&Object(j.jsx)(p,{onClick:D}),V&&Object(j.jsx)(O,{onClick:D}),Object(j.jsx)("input",{type:"text",placeholder:"Type the city here",value:f,onChange:function(e){y(e.target.value),w("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.target.value,"&units=metric&appid=f7867ff11500ac9739280ca0cd15bf87"))},className:"search-bar"})]}),Object(j.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]}),U.length>0&&V&&Object(j.jsx)(x,{cities:U,onUnfollowCity:Z,onFetchCity:B}),0===U.length&&V&&Object(j.jsx)("p",{className:"fallback",children:"You haven't bookmakred any cities yet."}),0===c.length&&N&&Object(j.jsx)("p",{className:"fallback",children:N}),c.length>0&&s.length>0&&Object(j.jsx)("div",{className:"weather-box",children:Object(j.jsx)(u,{city:c[0].name,country:c[0].sys.country,description:c[0].weather[0].description,icon:c[0].weather[0].icon,temperature:c[0].main.temp,pressure:c[0].main.pressure,humidity:c[0].main.humidity,wind:c[0].wind.speed,forecast:s,onFollowCity:function(e){if(T((function(){return JSON.parse(localStorage.getItem("cities"))})),0===localStorage.length)localStorage.setItem("cities",JSON.stringify([e]));else{var t=localStorage.getItem("cities");(t=JSON.parse(t)).includes(e)||(t.push(e),localStorage.setItem("cities",JSON.stringify(t)))}},onUnfollowCity:Z,cities:U})})]})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b3e0624d.chunk.js.map