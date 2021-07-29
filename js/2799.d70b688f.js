(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[2799],{5100:(a,n,e)=>{"use strict";e.d(n,{Z:()=>v});var t=e(7875),i=e(349),r={key:0,class:"var-app-bar__left"},o={key:1,class:"var-app-bar__right"},p={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:function(a){return["left","center","right"].includes(a)}},elevation:{type:Boolean,default:!0}};const d=(0,t.aZ)({name:"VarAppBar",props:p});var s=e(6062),l=e.n(s),c=e(4114);l()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,d.render=function(a,n,e,p,d,s){return(0,t.wg)(),(0,t.j4)("div",{class:["var-app-bar",{"var-elevation--3":a.elevation}],style:{background:a.color,color:a.textColor}},[a.$slots.left?((0,t.wg)(),(0,t.j4)("div",r,[(0,t.WI)(a.$slots,"left")])):(0,t.kq)("v-if",!0),(0,t.Wm)("div",{class:["var-app-bar__title","var-app-bar__title-"+a.titlePosition],style:{paddingLeft:a.$slots.left&&"center"!==a.titlePosition?"30px":"10px",paddingRight:a.$slots.right&&"center"!==a.titlePosition?"30px":"10px"}},[(0,t.WI)(a.$slots,"default",{},(function(){return[(0,t.Uk)((0,i.zw)(a.title),1)]}))],6),a.$slots.right?((0,t.wg)(),(0,t.j4)("div",o,[(0,t.WI)(a.$slots,"right")])):(0,t.kq)("v-if",!0)],6)};const x=d;x.install=function(a){a.component(x.name,x)};const v=x},7245:(a,n,e)=>{"use strict";e.d(n,{Z:()=>t});const t={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},10:{name:"October",abbr:"OCT"},11:{name:"November",abbr:"NOV"},12:{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"}},9486:(a,n,e)=>{"use strict";e.d(n,{bU:()=>o,P2:()=>d,IH:()=>s,D$:()=>l});var t=e(2122),i=e(641),r=e(8732);function o(){var a={},n=(0,i.iH)({}),e=function(e){if(!a[e])return console.warn("The "+e+" does not exist. You can mount a language package using the add method"),{};n.value=a[e]};return{packs:a,pack:n,add:function(n,e){e.lang=n,a[n]=e},use:e,merge:function(n,i){a[n]?(a[n]=(0,t.Z)({},a[n],i),e(n)):console.warn("The "+n+" does not exist. You can mount a language package using the add method")}}}var p=o(),d=(p.packs,p.pack),s=p.add,l=p.use;p.merge,s("zh-CN",r.Z),l("zh-CN")},8732:(a,n,e)=>{"use strict";e.d(n,{Z:()=>t});const t={dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",monthDictionary:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},weekDictionary:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},selected:"个被选择"}},6209:(a,n,e)=>{"use strict";e.d(n,{Z:()=>r});var t=e(2609),i=e.n(t)()((function(a){return a[1]}));i.push([a.id,".app-type {\n  width: 100%;\n  padding: 15px 0;\n  color: #888;\n  font-size: 14px;\n}\n",""]);const r=i},4114:(a,n,e)=>{"use strict";e.d(n,{Z:()=>r});var t=e(2609),i=e.n(t)()((function(a){return a[1]}));i.push([a.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n:root {\n  --app-bar-color: var(--color-primary);\n  --app-bar-text-color: #fff;\n  --app-bar-height: 50px;\n  --app-bar-padding: 0 10px;\n  --app-bar-title-line-height: 50px;\n}\n.var-app-bar {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--app-bar-height);\n  padding: var(--app-bar-padding);\n  background: var(--app-bar-color);\n  color: var(--app-bar-text-color);\n}\n.var-app-bar__title {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: var(--app-bar-title-line-height);\n  display: flex;\n}\n.var-app-bar__title-center {\n  justify-content: center;\n}\n.var-app-bar__title-left {\n  justify-content: flex-start;\n}\n.var-app-bar__title-right {\n  justify-content: flex-end;\n}\n.var-app-bar__left,\n.var-app-bar__right {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  z-index: 2;\n}\n.var-app-bar__left {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.var-app-bar__right {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n",""]);const r=i},5307:(a,n,e)=>{"use strict";e.d(n,{Z:()=>r});var t=e(2609),i=e.n(t)()((function(a){return a[1]}));i.push([a.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n:root {\n  --divider-color: #bcc2cb;\n  --divider-text-color: #888;\n  --divider-text-margin: 8px 0;\n  --divider-text-padding: 0 8px;\n  --divider-inset: 72px;\n  --divider-vertical-inset: 8px;\n}\n.var-divider {\n  position: relative;\n  width: 100%;\n  height: 0;\n  border: none;\n  border-top: 1px solid var(--divider-color);\n  margin: var(--divider-text-margin);\n  font-size: var(--font-size-md);\n  color: #888;\n}\n.var-divider--vertical {\n  width: 0;\n  height: 80%;\n  margin: auto var(--divider-text-margin);\n  padding: var(--divider-text-margin);\n  border-top: none;\n  border-left: 1px solid var(--divider-color);\n}\n.var-divider--inset {\n  width: calc(100% - var(--divider-inset));\n  left: var(--divider-inset);\n}\n.var-divider--vertical.var-divider--inset {\n  width: 0;\n  left: unset;\n  height: calc(80% - var(--divider-vertical-inset));\n}\n.var-divider__text {\n  display: inline-block;\n  padding: var(--divider-text-padding);\n}\n.var-divider--with-text {\n  background-color: transparent;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n}\n.var-divider--with-text::before,\n.var-divider--with-text::after {\n  display: inline-block;\n  content: '';\n  flex: 1;\n  height: 0;\n  border-top: 1px solid var(--divider-color);\n}\n.var-divider--dashed {\n  border-top-style: dashed;\n}\n.var-divider--dashed.var-divider--vertical {\n  border-top: none;\n  border-left-style: dashed;\n}\n",""]);const r=i},3650:(a,n,e)=>{"use strict";e.d(n,{Z:()=>r});var t=e(2609),i=e.n(t)()((function(a){return a[1]}));i.push([a.id,".vertical-divider-wrapper[data-v-3bb06c6c] {\n  display: flex;\n  justify-content: center;\n  color: #333;\n  height: 36px;\n  line-height: 36px;\n}\n.vertical-divider-wrapper span[data-v-3bb06c6c] {\n  font-size: 14px;\n  color: #888;\n}\n",""]);const r=i},9800:(a,n,e)=>{"use strict";e.d(n,{Z:()=>s});var t=e(7875),i={class:"app-type"};const r=(0,t.aZ)({name:"AppType"});var o=e(6062),p=e.n(o),d=e(6209);p()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,r.render=function(a,n,e,r,o,p){return(0,t.wg)(),(0,t.j4)("div",i,[(0,t.WI)(a.$slots,"default")])};const s=r},2799:(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>$});var t=e(7875),i=e(349),r=(0,t.HX)("data-v-3bb06c6c");(0,t.dD)("data-v-3bb06c6c");var o={class:"vertical-divider-wrapper"};(0,t.Cn)();var p=r((function(a,n,e,p,d,s){var l=(0,t.up)("app-type"),c=(0,t.up)("var-divider"),x=(0,t.up)("var-icon");return(0,t.wg)(),(0,t.j4)(t.HY,null,[(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.basicUsage),1)]})),_:1}),(0,t.Wm)(c)]),(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.dashed),1)]})),_:1}),(0,t.Wm)(c,{dashed:""})]),(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.inset),1)]})),_:1}),(0,t.Wm)(c,{inset:""}),(0,t.Wm)(c,{inset:36,margin:"36px 0"}),(0,t.Wm)(c,{inset:"-36px"})]),(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.vertical),1)]})),_:1}),(0,t.Wm)("div",o,[(0,t.Wm)("span",null,(0,i.zw)(p.pack.text),1),(0,t.Wm)(c,{vertical:""}),(0,t.Wm)("span",null,(0,i.zw)(p.pack.text),1),(0,t.Wm)(c,{vertical:""}),(0,t.Wm)("span",null,(0,i.zw)(p.pack.text),1)])]),(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.withDesc),1)]})),_:1}),(0,t.Wm)(c,{description:p.pack.withDescText},null,8,["description"])]),(0,t.Wm)("div",null,[(0,t.Wm)(l,null,{default:r((function(){return[(0,t.Uk)((0,i.zw)(p.pack.custom),1)]})),_:1}),(0,t.Wm)(c,null,{default:r((function(){return[(0,t.Wm)(x,{name:"heart-outline",style:{margin:"0 16px",color:"rgb(41, 121, 255)"}})]})),_:1})])],64)})),d=e(9800),s={key:0,class:"var-divider__text"},l=e(2122),c=e(641),x=e(4268),v=e(8442),b={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};const u=(0,t.aZ)({name:"VarDivider",props:b,setup:function(a,n){var e=n.slots,i=(0,c.qj)({withText:!1}),r=(0,t.Fl)((function(){return!(0,v.Bl)(a.inset)||a.inset})),o=(0,t.Fl)((function(){var n=a.inset,e=a.vertical,t={margin:a.margin};if((0,v.Bl)(n)||0===n)return(0,l.Z)({},t);var i=(0,v.He)(n),r=Math.abs(i)+(n+"").replace(i+"","");return e?(0,l.Z)({},t,{height:"calc(80% - "+(0,x.gI)(r)+")"}):(0,l.Z)({},t,{width:"calc(100% - "+(0,x.gI)(r)+")",left:i>0?(0,x.gI)(r):(0,x.gI)(0)})})),p=function(){i.withText=Boolean(null==e.default?void 0:e.default().length)||Boolean(a.description)};return(0,t.bv)((function(){p()})),(0,t.ic)((function(){p()})),(0,l.Z)({},(0,c.BK)(i),{style:o,isInset:r})}});var y=e(6062),h=e.n(y),m=e(5307);h()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,u.render=function(a,n,e,r,o,p){return(0,t.wg)(),(0,t.j4)("div",{class:["var-divider var--box",[a.vertical?"var-divider--vertical":null,a.withText?"var-divider--with-text":null,a.isInset?"var-divider--inset":null,a.dashed?"var-divider--dashed":null]],style:a.style},[(0,t.WI)(a.$slots,"default",{},(function(){return[a.description?((0,t.wg)(),(0,t.j4)("span",s,(0,i.zw)(a.description),1)):(0,t.kq)("v-if",!0)]}))],6)};const w=u;w.install=function(a){a.component(w.name,w)};const f=w;var k=e(5100),g=e(1999),z=e(8732),_=e(7245),T=e(9486),W=(0,T.bU)(),Z=W.add,C=W.use,D=W.pack,B=(W.packs,W.merge,function(a){(0,T.D$)(a),C(a)});(0,T.IH)("zh-CN",z.Z),(0,T.IH)("en-US",_.Z),Z("zh-CN",{basicUsage:"基本使用",dashed:"虚线",inset:"缩进",vertical:"垂直分割线",text:"文字",withDesc:"带有文字描述的分割线",withDescText:"文字描述",custom:"自定义"}),Z("en-US",{basicUsage:"Basic Usage",dashed:"Dashed Divider",inset:"Inset Divider",vertical:"Vertical Divider",text:"Text",withDesc:"The Divider with description",withDescText:"Description",custom:"Custom"});var S,U=e(5831);const j={name:"DividerExample",components:(S={},S[g.Z.name]=g.Z,S[k.Z.name]=k.Z,S[f.name]=f,S.AppType=d.Z,S),setup:function(){return(0,U.jS)(B),{pack:D}}};var I=e(3650);h()(I.Z,{insert:"head",singleton:!1}),I.Z.locals,j.render=p,j.__scopeId="data-v-3bb06c6c";const $=j}}]);