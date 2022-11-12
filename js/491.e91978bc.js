"use strict";(self["webpackChunkproba"]=self["webpackChunkproba"]||[]).push([[491],{8491:function(t,e,s){s.r(e),s.d(e,{default:function(){return $}});var i=function(){var t=this,e=t._self._c;return e("AboutComponent")},l=[],a=s(4562),r=s(4886),o=s(9256),n=s(1267),c=s(4324),u=s(1625),f=s(3201),h=s(9592),m=s(7678),p=s(6669),b=(0,m.Z)(p.Z).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),d=s(2240),v=s(6878);const g=(0,m.Z)(v.Z,p.Z);var x=g.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(d.Z,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}}),C=function(){var t=this,e=t._self._c;return e(o.Z,{staticClass:"container align-center pt-5"},[e(f.Z,{staticClass:"my-10 md10 pt-2",attrs:{row:"","justify-center":"","align-center":"",wrap:"","d-block":""}},[e("h2",{staticClass:"head-text"},[t._v("About")]),e("p",[t._v("Something about me")])]),e(f.Z,{staticClass:"mt-4 pt-2",attrs:{row:"","justify-center":"","align-center":"",wrap:""}},[e(n.Z,{staticClass:"mt-4 pt-4",attrs:{xs12:"",sm12:"",md5:"",lg6:"",xl6:""}},[e("h2",{staticClass:"mb-4 pl-4 pt-2"},[t._v("Education")]),e(r.ZB,{staticClass:"py-0"},[e(b,{attrs:{"align-top":"",dense:""}},[e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-3":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Jan 2020 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Feb 2021")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("IT Academy")]),e("div",{staticClass:"caption mb-2"},[t._v("IT Academy, Belgrade, Serbia")])])],1)],1),e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-2":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Sep 2018 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("May 2019")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("Bachelor of fine arts & Graphic Design")]),e("div",{staticClass:"caption mb-2"},[t._v("IT Academy, Belgrade, Serbia")])])],1)],1),e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-3":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Sep 2017 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("May 2018")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("Electrical Technician for Computers")]),e("div",{staticClass:"caption mb-2"},[t._v("IT Academy, Belgrade, Serbia")])])],1)],1)],1)],1)],1),e(n.Z,{staticClass:"mt-4 pt-2",attrs:{xs12:"",sm12:"",md4:"",lg6:"",xl6:""}},[e("h2",{staticClass:"mb-4 pl-4"},[t._v("Experience")]),e(r.ZB,{staticClass:"py-0"},[e(b,{attrs:{"align-top":"",dense:""}},[e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-3":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Jan 2020 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Present")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("Freelance Frontend Developer")]),e("div",{staticClass:"caption mb-2"},[t._v("Remote")])])],1)],1),e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-3":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Feb 2018 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("July 2018")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("Computer technician")]),e("div",{staticClass:"caption mb-2"},[t._v("Experion, Belgrade, Serbia")])])],1)],1),e(x,{attrs:{color:"blue",small:""}},[e(f.Z,{attrs:{"pt-3":""}},[e(n.Z,{attrs:{xs4:""}},[e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Aug 2017 -")]),e("div",{staticClass:"caption font-weight-bold blue--text"},[t._v("Apr 2018")])]),e(n.Z,{staticClass:"pl-2"},[e("strong",[t._v("IT Technician")]),e("div",{staticClass:"caption mb-2"},[t._v("Experion, Belgrade, Serbia")])])],1)],1)],1)],1)],1),e(f.Z,{staticClass:"mt-4 pt-2",attrs:{row:"","justify-center":"","align-center":"",wrap:""}},[e(n.Z,{staticClass:"mx-5 pt-4 flex-column",attrs:{xs12:"",sm12:"",md4:"",lg5:"",xl4:""}},[e("h2",[e("span",[t._v("Design")]),e("span",{staticClass:"blue--text"},[t._v("Skills")])]),e("br"),e("strong",[e(u.Z,{attrs:{"max-height":"45px","max-width":"40px",src:"https://img.icons8.com/color-glass/48/null/adobe-photoshop.png",alt:""}})],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer1,callback:function(e){t.buffer1=e},expression:"buffer1"}}),e("strong",[e(u.Z,{attrs:{"max-height":"39px","max-width":"40px",src:"https://img.icons8.com/color/48/null/adobe-illustrator--v1.png",alt:""}})],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer2,callback:function(e){t.buffer2=e},expression:"buffer2"}}),e("strong",[e(u.Z,{attrs:{"max-height":"39px","max-width":"40px",src:"https://img.icons8.com/color/48/null/adobe-xd--v1.png",alt:""}})],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer3,callback:function(e){t.buffer3=e},expression:"buffer3"}})],1),e(n.Z,{staticClass:"mx-5 pt-4 flex-column text-left",attrs:{xs12:"",sm12:"",md4:"",lg5:"",xl4:""}},[e("h2",[e("span",[t._v("Coding")]),e("span",{staticClass:"blue--text"},[t._v("Skills")])]),e("br"),e("strong",[e(c.Z,{attrs:{"x-large":"",color:"red"}},[t._v("mdi-language-html5")]),e(c.Z,{attrs:{large:"",color:"blue"}},[t._v("mdi-language-css3")])],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer4,callback:function(e){t.buffer4=e},expression:"buffer4"}}),e("strong",[e(c.Z,{attrs:{large:"",color:"yellow"}},[t._v("mdi-language-javascript")]),e(c.Z,{attrs:{color:"blue"}},[t._v("mdi-jquery")])],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer5,callback:function(e){t.buffer5=e},expression:"buffer5"}}),e("strong",{staticClass:"d-flex"},[e(u.Z,{attrs:{"max-width":"40px","max-height":"39px",src:"https://img.icons8.com/color/512/vue-js.png",alt:""}})],1),e(h.Z,{attrs:{"buffer-value":t.bufferValue,color:"blue lighten-2",height:"16"},model:{value:t.buffer6,callback:function(e){t.buffer6=e},expression:"buffer6"}})],1)],1)],1),e(f.Z,{staticClass:"mt-10 pt-2",attrs:{row:"","justify-center":"","align-center":"",wrap:""}},[e("div",{staticClass:"mt-4 pt-2"},[e(a.Z,{attrs:{href:"https://drive.google.com/file/d/1O8VmtOpujN8xvA_-hr0V6YFVtYWcPF8w/view?usp=sharing",target:"_blank",color:"blue lighten-2",dark:"",large:""}},[t._v(" Download Resume "),e(c.Z,{attrs:{right:"",dark:""}},[t._v("mdi-download")])],1)],1)])],1)},_=[],Z={name:"AboutComponent",data(){return{value:0,buffer1:0,buffer2:0,buffer3:0,buffer4:0,buffer5:0,buffer6:0,bufferValue:100,interval:0}},mounted(){this.startBuffer()},beforeDestroy(){clearInterval(this.interval)},methods:{startBuffer(){this.interval=setInterval((()=>{this.buffer1=85,this.buffer2=85,this.buffer3=85,this.buffer4=95,this.buffer5=75,this.buffer6=70}),800)}}},w=Z,y=s(1001),B=(0,y.Z)(w,C,_,!1,null,null,null),k=B.exports,D={components:{AboutComponent:k}},I=D,S=(0,y.Z)(I,i,l,!1,null,null,null),$=S.exports}}]);
//# sourceMappingURL=491.e91978bc.js.map