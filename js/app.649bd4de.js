(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bin2dec/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("8a23"),n=o.n(a);n.a},"0b84":function(e,t,o){},"2f03":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("h1",[e._v("Binary Convertor")])]),o("v-row",{attrs:{justify:"center"}},[o("p",[e._v("Selecione o tipo de conversão que voçe deseja")])]),o("v-row",{staticClass:"convert-input",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"9"}},[o("v-textarea",{attrs:{autofocus:"",clearable:"","auto-grow":"",rows:"1",flat:"",solo:""},on:{keydown:function(t){return e.validateInput(t)}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),o("v-col",{attrs:{cols:"3"}},[o("v-select",{attrs:{items:e.items,solo:"",flat:""},model:{value:e.inputType,callback:function(t){e.inputType=t},expression:"inputType"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-btn",{staticClass:"btn-convert",attrs:{fab:"",text:"",large:"",width:"72",height:"72"},on:{click:e.exchange}},[o("v-icon",{attrs:{dark:""}},[e._v("mdi-minus")])],1)],1),o("v-row",{staticClass:"convert-input",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"9"}},[o("v-textarea",{attrs:{clearable:"","auto-grow":"",disabled:"",rows:"1",flat:"",solo:""},model:{value:e.output,callback:function(t){e.output=t},expression:"output"}})],1),o("v-col",{attrs:{cols:"3"}},[o("v-select",{attrs:{items:e.items,solo:"",flat:""},model:{value:e.outputType,callback:function(t){e.outputType=t},expression:"outputType"}})],1)],1)],1)},n=[],r=(o("c975"),{name:"Convert",data:function(){return{items:["Binary","Decimal","Hexadecimal","Octal"],input:"",inputType:"Binary",output:"",outputType:"Decimal",binaryValues:["0","1"],decimalValues:["0","1","2","3","4","5","6","7","8","9"],hexadecimalValues:["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],octalValues:["0","1","2","3","4","5","6","7"]}},methods:{validateInput:function(e){var t=this.validValues();console.log(t),console.log(e.key),console.log(t.indexOf(e.key)),t.indexOf(e.key)<0&&e.preventDefault()},validValues:function(){switch(this.inputType){case"Binary":return this.binaryValues;case"Decimal":return this.decimalValues;case"Hexadecimal":return this.hexadecimalValues;case"Octal":return this.octalValues}},exchange:function(){var e=this.inputType;this.inputType=this.outputType,this.outputType=e}}}),i=r,s=(o("f1f5"),o("2877")),c=o("6544"),l=o.n(c),u=o("8336"),p=o("62ad"),d=o("a523"),f=o("132d"),v=o("0fd9"),h=o("b974"),b=o("a844"),m=Object(s["a"])(i,a,n,!1,null,null,null);t["default"]=m.exports;l()(m,{VBtn:u["a"],VCol:p["a"],VContainer:d["a"],VIcon:f["a"],VRow:v["a"],VSelect:h["a"],VTextarea:b["a"]})},"40b9":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[o("v-btn",e._g({attrs:{text:"",dark:"",color:"primary"}},a),[e._v(" About pomodoro ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("v-card",[o("v-card-title",[e._v(" About pomodoro "),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[o("v-icon",[e._v("fas fa-times")])],1)],1),o("v-divider"),o("v-card-text",[o("p",[e._v("The "),o("b",[e._v("Pomodoro Technique")]),e._v(" is a time management method developed by "),o("a",{staticClass:"new",attrs:{href:"https://en.m.wikipedia.org/wiki/Francesco_Cirillo",title:"Francesco Cirillo (page does not exist)"}},[e._v("Francesco Cirillo")]),e._v(" in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a "),o("i",[e._v("pomodoro")]),e._v(", from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. ")]),o("p",[e._v(" The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts. ")]),o("p",[e._v("There are six steps in the original technique: ")]),o("ol",[o("li",[e._v("Decide on the task to be done.")]),o("li",[e._v("Set the pomodoro timer (traditionally to 25 minutes).")]),o("li",[e._v("Work on the task.")]),o("li",[e._v("End work when the timer rings and put a checkmark on a piece of paper.")]),o("li",[e._v("If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.")]),o("li",[e._v("After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.")])])]),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)},n=[],r={name:"AboutPomodoro",data:function(){return{dialog:!1}}},i=r,s=o("2877"),c=o("6544"),l=o.n(c),u=o("8336"),p=o("b0af"),d=o("99d9"),f=o("169a"),v=o("ce7e"),h=o("132d"),b=o("2fa4"),m=Object(s["a"])(i,a,n,!1,null,"016441a0",null);t["default"]=m.exports;l()(m,{VBtn:u["a"],VCard:p["a"],VCardActions:d["a"],VCardText:d["b"],VCardTitle:d["c"],VDialog:f["a"],VDivider:v["a"],VIcon:h["a"],VSpacer:b["a"]})},"4a80":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("app-bar"),o("v-container",{attrs:{fluid:"","pa-0":""}},[o("v-row",{staticClass:"app-content",style:{height:e.windowSize.y+"px"},attrs:{align:"center",justify:"center"}},[o("div",[o("convert")],1)])],1),o("app-footer")],1)},r=[],i={name:"App",data:function(){return{windowSize:{x:0,y:0}}},mounted:function(){this.onResize()},methods:{onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}}}},s=i,c=(o("034f"),o("2877")),l=o("6544"),u=o.n(l),p=o("7496"),d=o("a523"),f=o("0fd9"),v=Object(c["a"])(s,n,r,!1,null,null,null),h=v.exports;u()(v,{VApp:p["a"],VContainer:d["a"],VRow:f["a"]});var b=o("9483");Object(b["a"])("".concat("/bin2dec/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=o("f309");a["a"].use(m["a"]);var g=new m["a"]({}),y=(o("4160"),o("d3b7"),o("ac1f"),o("5319"),o("1276"),o("159b"),o("ddb0"),o("8103")),w=o.n(y),k=o("bba4"),_=o.n(k),x=o("6809");x.keys().forEach((function(e){var t=x(e),o=w()(_()(e.split("/").pop().replace(/\.\w+$/,"")));a["a"].component(o,t.default||t)})),a["a"].config.productionTip=!1,new a["a"]({vuetify:g,render:function(e){return e(h)}}).$mount("#app")},6809:function(e,t,o){var a={"./AboutPomodoro.vue":"40b9","./AppBar.vue":"dd38","./AppFooter.vue":"f657","./Convert.vue":"2f03"};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="6809"},"8a23":function(e,t,o){},"9b19":function(e,t,o){e.exports=o.p+"img/logo.40c52418.svg"},dd38:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",absolute:"",color:"transparent",dark:"",flat:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{attrs:{alt:"Logo",src:o("9b19"),width:"60"}})],1),a("v-spacer"),a("about-pomodoro")],1)},n=[],r={name:"AppBar"},i=r,s=o("2877"),c=o("6544"),l=o.n(c),u=o("40dc"),p=o("adda"),d=o("2fa4"),f=Object(s["a"])(i,a,n,!1,null,"6a610086",null);t["default"]=f.exports;l()(f,{VAppBar:u["a"],VImg:p["a"],VSpacer:d["a"]})},e31d:function(e,t,o){"use strict";var a=o("0b84"),n=o.n(a);n.a},f1f5:function(e,t,o){"use strict";var a=o("4a80"),n=o.n(a);n.a},f657:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-footer",{attrs:{absolute:"",color:"transparent"}},[o("v-col",{staticClass:"me",attrs:{cols:"4"}},[o("a",{staticClass:"me",attrs:{href:"https://github.com/JefersonUrbieta/pomodoro"}},[o("i",{staticClass:"fab fa-github"}),e._v(" View on GitHub")])]),o("v-spacer"),o("v-col",{staticClass:"text-right me",attrs:{cols:"4"}},[e._v(" "+e._s((new Date).getFullYear())+" - Made with "),o("i",{staticClass:"fas fa-heart fa-beat mr-1 ml-1 heart"}),e._v(" by Jeferson Urbieta. ")])],1)},n=[],r={name:"AppFooter"},i=r,s=(o("e31d"),o("2877")),c=o("6544"),l=o.n(c),u=o("62ad"),p=o("553a"),d=o("2fa4"),f=Object(s["a"])(i,a,n,!1,null,"3fc93008",null);t["default"]=f.exports;l()(f,{VCol:u["a"],VFooter:p["a"],VSpacer:d["a"]})}});
//# sourceMappingURL=app.649bd4de.js.map