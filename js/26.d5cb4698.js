"use strict";(self["webpackChunkproba"]=self["webpackChunkproba"]||[]).push([[26],{26:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var i=function(){var e=this,t=e._self._c;return t("PortfolioComponent")},r=[],a=s(4562),o=s(9582),l=s(4886),n=s(9256),u=s(9223),c=s(1267),h=s(6369),d=h.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const s=parseInt(this[`${e}Delay`],10);this[`${e}Timeout`]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),s)}}}),p=s(1444),m=s(7678),f=s(4101),v=(0,m.Z)(d,p.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,f.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):((0,f.Kd)("v-hover should only contain a single element",this),e)}}),g=s(4324),y=s(1625),b=s(3201),x=s(2240),Z=s(6878),C=s(4338),I=s(7550),_=s(6669),H=s(5352),k=(0,m.Z)(Z.Z,d,I.Z,C.Z,_.Z).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:e,large:t,light:s,medium:i,small:r,size:a,xLarge:o,xSmall:l}=this.$props;return{dark:e,large:t,light:s,medium:i,size:a,small:r,xLarge:o,xSmall:l}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(e){e!==this.value&&this.$emit("input",e)},value(e){this.internalValue=e}},methods:{createClickFn(e){return t=>{if(this.readonly)return;const s=this.genHoverIndex(t,e);this.clearable&&this.internalValue===s?this.internalValue=0:this.internalValue=s}},createProps(e){const t={index:e,value:this.internalValue,click:this.createClickFn(e),isFilled:Math.floor(this.internalValue)>e,isHovered:Math.floor(this.hoverIndex)>e};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-e)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-e)%1>0),t},genHoverIndex(e,t){let s=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(s=!s),t+(s?.5:1)},getIconName(e){const t=this.isHovering?e.isHovered:e.isFilled,s=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:s?this.halfIcon:this.emptyIcon},getColor(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(e){if(this.halfIncrements){const t=e.target&&e.target.getBoundingClientRect();if(t&&e.pageX-t.left<t.width/2)return!0}return!1},onMouseEnter(e,t){this.runDelay("open",(()=>{this.hoverIndex=this.genHoverIndex(e,t)}))},onMouseLeave(){this.runDelay("close",(()=>this.hoverIndex=-1))},genItem(e){const t=this.createProps(e);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);const s={click:t.click};return this.hover&&(s.mouseenter=t=>this.onMouseEnter(t,e),s.mouseleave=this.onMouseLeave,this.halfIncrements&&(s.mousemove=t=>this.onMouseEnter(t,e))),this.$createElement(x.Z,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,e+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:s}),[this.getIconName(t)])}},render(e){const t=(0,H.MT)(Number(this.length)).map((e=>this.genItem(e)));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},t)}}),S=s(9422),$=s(3687),w=function(){var e=this,t=e._self._c;return t(n.Z,{staticClass:"my-5"},[t(b.Z,{staticClass:"my-10 md10",attrs:{row:"","justify-center":"","align-center":"",wrap:"","d-block":""}},[t("h2",{staticClass:"head-text"},[e._v("Portfolio")]),t("p",[e._v("Some of my works")])]),t(b.Z,{staticClass:"my-10",attrs:{row:"",wrap:"","justify-center":""}},[t(c.Z,{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[t(a.Z,{staticClass:"white--text ma-2",attrs:{color:"#64b5f6"},on:{click:function(t){return e.filter(null)}}},[e._v("All")]),e._l(e.categories,(function(s){return t(a.Z,{key:s.id,staticClass:"white--text ma-2",attrs:{color:"#64b5f6"},on:{click:function(t){return e.filter(s.id)}}},[e._v(e._s(s.name))])}))],2)],1),t("isotope",{ref:"isotope",attrs:{list:e.list}},e._l(e.list,(function(s){return t("div",{key:s.id,staticClass:"isoDefault",attrs:{"data-value":s.value}},[t(v,{scopedSlots:e._u([{key:"default",fn:function({hover:i}){return[t(o.Z,{staticClass:"text-xs-center ma-5",class:{"on-hover":i},attrs:{elevation:i?12:2}},[t(S.Z,{staticClass:"pt-4"},[t(y.Z,{attrs:{src:s.src,"aspect-ratio":"2.75",height:"350"}})],1),t(l.ZB,[t("div",{staticClass:"subheading"},[t("h2",[e._v(e._s(s.name))])]),t(k,{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t("div",{staticClass:"grey--text"},[e._v(e._s(s.system))]),t(u.Z,{staticClass:"mx-4"})],1),t(l.h7,{staticClass:"justify-center"},[t(a.Z,{staticClass:"white--text mb-5 mr-1 px-4 py-2",attrs:{href:s.href,target:"_blank",small:"",color:"blue lighten-2"}},[e._v("Visit Website")])],1),t(l.h7,[t($.Z),t(a.Z,{attrs:{icon:""}},[t(g.Z,{attrs:{color:"#6610f2"}},[e._v("mdi-bootstrap")])],1),t(a.Z,{attrs:{icon:""}},[t(g.Z,{attrs:{color:"blue"}},[e._v("mdi-language-css3")])],1),t(a.Z,{attrs:{icon:""}},[t(g.Z,{attrs:{color:"blue"}},[e._v("mdi-jquery")])],1),t(a.Z,{attrs:{icon:""}},[t(g.Z,{attrs:{color:"yellow"}},[e._v("mdi-language-javascript")])],1)],1)],1)]}}],null,!0)})],1)})),0)],1)},M=[],j=s(851),D=s.n(j),E={components:{isotope:D()},data(){return{list:[{name:"Indonesia",id:1,value:1,system:"Website",href:"https://gilespi.github.io/Indonesia/ ",src:s(5956)},{name:"Real Estate",id:2,value:1,system:"Website",href:"https://gilespi.github.io/Real-estate/",src:s(5948)},{name:"Restaurant",id:3,value:4,system:"Website",href:"https://dev-example-ag.pantheonsite.io/home1/",src:s(207)},{name:"Rent a car",id:4,value:4,system:"Website",href:"https://gilespi.github.io/Rent-a-car/",src:s(6474)},{name:"Portfolio",id:5,value:1,system:"Website",href:"https://gilespi.github.io/Portfolio/ ",src:s(8039)},{name:"Hotel Resort",id:6,value:1,system:"Website",src:"https://media.architecturaldigest.com/photos/57e42de0fe422b3e29b7e78f/1:1/w_960,c_limit/JW_LosCabos_2015_MainExterior.jpg"},{name:"Photo Gallery",id:7,value:7,system:"Card",src:s(165)},{name:"Gadget Gallery",id:8,value:7,system:"App",src:s(7363)},{name:"Card Gallery",id:9,value:4,system:"App",src:"https://cnb1901.com/images/card-gallery-footer6.png"}],categories:[{id:1,name:"Web",order:0},{id:4,name:"Card",order:1},{id:7,name:"App",order:2}]}},methods:{filter:function(e){this.$refs.isotope.arrange({filter:function(t){return!e||parseInt(t.dataset.value,10)===e}})}}},P=E,A=s(1001),F=(0,A.Z)(P,w,M,!1,null,null,null),L=F.exports,T={components:{PortfolioComponent:L}},V=T,B=(0,A.Z)(V,i,r,!1,null,null,null),N=B.exports},6474:function(e,t,s){e.exports=s.p+"img/portfolio-1.ce1573ff.jpg"},207:function(e,t,s){e.exports=s.p+"img/portfolio-10.f06fb0fd.jpg"},165:function(e,t,s){e.exports=s.p+"img/portfolio-11.07201ba9.jpg"},7363:function(e,t,s){e.exports=s.p+"img/portfolio-12.19969c71.jpg"},5956:function(e,t,s){e.exports=s.p+"img/portfolio-2.920f0721.jpg"},5948:function(e,t,s){e.exports=s.p+"img/portfolio-4.1da1eb46.jpg"},8039:function(e,t,s){e.exports=s.p+"img/portfolio-6.2a46c927.png"}}]);
//# sourceMappingURL=26.d5cb4698.js.map