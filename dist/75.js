/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([75],{1021:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{lineWidth:5,strokeStyle:"pink"}},computed:{},methods:{confirm:function(e,n){console.log(n);var t=document.createElement("img");t.src=n,document.querySelector(".demo1").appendChild(t)},confirm1:function(e,n){var t=document.createElement("img");t.src=n,document.querySelector(".demo2").appendChild(t)}}}},1104:function(e,n,t){(e.exports=t(1)()).push([e.i,"\n.nut-signature .nut-signature-inner {\n  height: 3rem;\n  margin-bottom: 0.1rem;\n  border: 1px solid #eee;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.nut-signature .nut-signature-unsopport {\n  font-size: 0.24rem;\n}\n.nut-signature button {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n  border: none;\n  outline: 0;\n  padding: 0.1rem 0.1rem;\n  border-radius: 0.05rem;\n}\n.demo-show {\n  padding-top: 0.22rem;\n  color: #33C3F0;\n}\n",""])},1236:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),t("h5",[e._v("示例")]),e._v(" "),t("p",[e._v("默认的")]),e._v(" "),t("nut-signature",{on:{confirm:e.confirm}}),e._v(" "),t("div",{ref:"demo1",staticClass:"demo-show demo1"},[e._v("!!!确认之后显示base64图片")]),e._v(" "),t("p",[e._v("修改签字颜色和画笔粗细")]),e._v(" "),t("nut-signature",{attrs:{lineWidth:e.lineWidth,strokeStyle:e.strokeStyle},on:{confirm:e.confirm1}}),e._v(" "),t("div",{ref:"demo2",staticClass:"demo-show demo2"},[e._v("!!!确认之后显示base64图片")])],1)},staticRenderFns:[]}},1334:function(e,n,t){var o=t(1104);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(3)("85f85486",o,!0,{})},910:function(e,n,t){var o=t(2)(t(1021),t(1236),function(e){t(1334)},null,null);e.exports=o.exports}});