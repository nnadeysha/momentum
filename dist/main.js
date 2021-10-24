(()=>{"use strict";const e=function(){function e(e,t,n,o){void 0===t&&(t="section"),void 0===n&&(n=""),void 0===o&&(o="");var r=document.createElement(t);r.className=n,r.textContent=o,e&&e.append(r),this.node=r}return e.prototype.destroy=function(){this.node.remove()},e}();var t,n,o=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),r=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function u(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((o=o.apply(e,t||[])).next())}))},a=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},i=function(e){function t(n){var o=e.call(this,n,"section","wrapper")||this;return o.wrapper=new t(o.node),o.randomBackgraund=new u(o.node),o.weather=new s(o.node),o.timeAndDate=new p(o.node),o.player=new c(o.node),window.onload=function(){o.weather.getCityToLocalStorage(),o.weather.getWeather(),o.randomBackgraund.randomImage(),o.timeAndDate.timeDateUpdate(),o.timeAndDate.gritingUpdate(),o.timeAndDate.getNameToLocalStorage()},o}return o(t,e),t}(e),u=function(t){function n(n){var o=t.call(this,n,"section")||this;return o.wrapper=new i(o.node),o.background=new e(o.node,"div","background"),o.prevBtn=new e(o.node,"button","prev-button"),o.nextBtn=new e(o.node,"button","next-button"),o.nextBtn.node.onclick=function(){o.randomImage()},o.prevBtn.node.onclick=function(){o.randomImage()},o}return o(n,t),n.prototype.update=function(){return r(this,void 0,void 0,(function(){var e,t,n;return a(this,(function(o){switch(o.label){case 0:e="https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=w31RDyFST2zqqLMiwCr2dzkpaQW0cUKu1HF0V86oMsY",o.label=1;case 1:return o.trys.push([1,4,,5]),[4,fetch(e)];case 2:return[4,o.sent().json()];case 3:return t=o.sent(),this.background.node.style.backgroundImage="url("+t.urls.regular+")",[3,5];case 4:return n=o.sent(),console.log("error"+n),[3,5];case 5:return[2]}}))}))},n.prototype.randomImage=function(){var e,t=(new Date).getHours(),n=["night","morning","afternoon","evening"],o=function(){return n[Math.floor(t/6)]},r=(e=Math.floor(19*Math.random()+1))<10?"0"+e:e;console.log("url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"+o()+"/"+r+".jpg')"),this.wrapper.node.style.backgroundImage="url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"+o()+"/"+r+".jpg')"},n}(e),c=function(t){function n(n){var o=t.call(this,n,"section","player-wrapper")||this,r=new e(o.node,"div","player-control");return o.playerPrevBtn=new e(r.node,"button","player-prev-btn"),o.playerPlayBtn=new e(r.node,"button","player-play-btn"),o.playerPauseBtn=new e(r.node,"button","player-pause-btn"),o.playerNextBtn=new e(r.node,"button","player-next-btn"),o}return o(n,t),n}(e),s=function(t){function n(n){var o=t.call(this,n,"section","weather-wrapper")||this,r=new e(o.node,"div","weather-block");return o.weatherTemperature=new e(r.node,"span","weather-temperature"),o.weatherImg=new e(r.node,"i","weather-img owf"),o.weatherDescription=new e(o.node,"p","weather-description"),o.weatherWind=new e(o.node,"p","weather-wind"),o.weatherHumidity=new e(o.node,"p","weather-humidity"),o.cityInput=new e(o.node,"input","city-input"),o.cityInput.node.placeholder="Your city",o.cityInput.node.type="text",o.cityInput.node.maxLength=20,o.cityInput.node.oninput=function(){o.getWeather(),o.setCityToLocalStorage()},o}return o(n,t),n.prototype.setCityToLocalStorage=function(){localStorage.setItem("city",this.cityInput.node.value)},n.prototype.getCityToLocalStorage=function(){this.cityInput.node.value=localStorage.getItem("city")},n.prototype.getWeather=function(){return r(this,void 0,void 0,(function(){var e,t,n;return a(this,(function(o){switch(o.label){case 0:e="https://api.openweathermap.org/data/2.5/weather?q="+this.cityInput.node.value+"&lang=ru&appid=acc15865bcf9f67a7111310944bdfafe&units=metric",o.label=1;case 1:return o.trys.push([1,4,,5]),[4,fetch(e)];case 2:return[4,o.sent().json()];case 3:return t=o.sent(),this.weatherImg.node.classList.add("owf-"+t.weather[0].id),this.weatherTemperature.node.textContent=Math.floor(t.main.temp)+"°C",this.weatherDescription.node.textContent=t.weather[0].description,this.weatherWind.node.textContent=Math.floor(t.wind.speed)+" m/s - wind speed",this.weatherHumidity.node.textContent=Math.floor(t.main.humidity)+" % - humidity",console.log(t.weather[0].id,t.weather[0].description,t.main.temp,t.main.humidity),[3,5];case 4:return n=o.sent(),console.log("error"+n),[3,5];case 5:return[2]}}))}))},n}(e),p=function(t){function n(n){var o=t.call(this,n,"section","time-date-block")||this;o.time=new e(o.node,"div","time"),o.date=new e(o.node,"div","date");var r=new e(o.node,"div","greeting-wrapper");return o.greeting=new e(r.node,"div","greeting"),o.inputName=new e(r.node,"input","input-name"),o.inputName.node.placeholder="Enter name",o.inputName.node.type="text",o.inputName.node.maxLength=20,o.inputName.node.oninput=function(){return o.setNameToLocalStorage()},o}return o(n,t),n.prototype.timeDateUpdate=function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear(),o=e.getDate()+" "+t+" "+n;this.date.node.textContent=o;var r=a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds());function a(e){return e<10?"0"+e:e}this.time.node.textContent=r,setInterval(this.timeDateUpdate.bind(this),1e3)},n.prototype.setNameToLocalStorage=function(){localStorage.setItem("name",this.inputName.node.value)},n.prototype.getNameToLocalStorage=function(){this.inputName.node.value=localStorage.getItem("name")},n.prototype.gritingUpdate=function(){var e=(new Date).getHours();this.greeting.node.textContent="Good "+["night","morning","afternoon","evening"][Math.floor(e/6)]},n}(e),l=(o((function(e){return n.call(this,e)||this}),n=e),document.querySelector("#momentum"));new i(l)})();