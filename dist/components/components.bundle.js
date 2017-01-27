!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("date-fns")):"function"==typeof define&&define.amd?define("vuetiful",["date-fns"],e):"object"==typeof exports?exports.vuetiful=e(require("date-fns")):t.vuetiful=e(t["date-fns"])}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=44)}([function(t,e,n){"use strict";e.a={props:{id:{type:String,required:!0},value:{required:!0},val:{required:!1},disabled:{type:Boolean,default:!1}},data:function(){return{proxy:!1}},computed:{checked:{get:function(){return this.value},set:function(t){this.proxy=t}}},methods:{onChange:function(t){this.$emit("input",this.proxy)}}}},function(t,e,n){"use strict";var r=n(25),i=n.n(r),o=n(27),a=n.n(o),s=n(26),u=n.n(s),c=n(28),l=n.n(c),d=n(13),f=n(29),p=n.n(f),v=n(30),m=n.n(v),h=n(31),b=n.n(h),y=n(32),g=n.n(y),_=n(33),w=n.n(_);e.a={checkbox:{tag:"checkbox",definition:i.a},datatable:{tag:"datatable",definition:a.a},datatableColumn:{tag:"datatable-column",definition:u.a},dateTimePicker:{tag:"datetime-picker",definition:l.a},dynamic:{tag:"dynamic",definition:d.a},floatingPanel:{tag:"floating-panel",definition:p.a},radio:{tag:"radio",definition:m.a},toggle:{tag:"toggle",definition:w.a},tabControl:{tag:"tab-control",definition:b.a},tabPane:{tag:"tab-pane",definition:g.a}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[r.a]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={1:"asc","-1":"desc"};e.default={props:{id:{type:String,required:!0},label:{type:String},width:{type:[Number,String]},formatter:{type:Function},total:{type:Boolean,default:!1}},data:function(){return{sortingDirection:1}},computed:{sorting:{get:function(){return this.$parent.sortingId===this.id},set:function(t){t&&(this.$parent.sortingId=this.id)}},grouping:{get:function(){return this.$parent.groupingId===this.id},set:function(t){t&&(this.$parent.groupingId=this.id)}},columnWidth:function(){if(this.width){var t=parseFloat(this.width),e=isNaN(t)?"":"%";return t+e}},columnStyles:function(){return{width:this.columnWidth}},sortArrowClass:function(){var t=r[this.sortingDirection];return"datatable-sort-arrow-"+t}},methods:{sort:function(){return this.sorting?void(this.sortingDirection*=-1):void(this.sorting=!0)},group:function(){this.grouping||(this.grouping=!0)},formatData:function(t){return this.formatter?this.formatter(t):t}},created:function(){var t=this.$parent.addColumn;return t?void t(this):void console.warn("A datatable-column must be registered within a datatable component.")},destroyed:function(){this.$parent.removeColumn(this)}}},function(t,e,n){"use strict";var r=(n(14),n(15));Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fixed:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},source:{type:Array,default:function(){return[]}},editable:{type:Boolean,default:!1},lineNumbers:{type:Boolean,default:!1}},data:function(){return{columns:[],rowFilter:null,groupingId:null,sortingId:null}},computed:{groupingColumn:function(){var t=this;return this.columns.find(function(e){return e.id===t.groupingId})},sortingColumn:function(){var t=this;return this.columns.find(function(e){return e.id===t.sortingId})},tableClasses:function(){return{"datatable-editable":this.editable,"table-fixed":this.fixed,"table-striped":this.striped}},groups:function t(){var e=this.source;if(this.rowFilter&&(e=r.a(e,this.rowFilter)),this.sortingColumn&&(e=r.b(e,this.sortingColumn.id,this.sortingColumn.sortingDirection)),!this.groupingColumn)return{data:e};var t=r.c(e,this.groupingColumn.id);return t},columnSpan:function(){return this.columns.length+(this.lineNumbers?1:0)},lineColumnWidth:function(){var t=this.source.length;return t.toString().length+2+"em"},showTotals:function(){return this.columns.some(function(t){return t.total})}},methods:{addColumn:function(t){this.columns.push(t)},removeColumn:function(t){var e=this.columns.indexOf(t);this.columns.splice(e,1)},calculateTotal:function(t){var e="n/a";if(!t.total)return e;for(var n=0,r=0;r<this.source.length;r++){var i=this.source[r],o=parseFloat(i[t.id]);if(isNaN(o))return e;n+=o}return t.formatData(n)},setFilter:function(t){this.rowFilter=t}}}},function(t,e,n){"use strict";var r=n(43);n.n(r);Object.defineProperty(e,"__esModule",{value:!0});var i=new Date(-864e13),o=new Date(864e13);e.default={props:{value:{required:!0},type:{type:String,default:"date"},format:{type:String,default:"DD-MM-YYYY"},minDate:{type:Date,default:function(){return i}},maxDate:{type:Date,default:function(){return o}},minHour:{type:Number,default:0},maxHour:{type:Number,default:23},minMinute:{type:Number,default:0},maxMinute:{type:Number,default:59}},data:function(){return{visible:!1}},computed:{formattedValue:function(){return this.value&&n.i(r.isValid)(this.value)?n.i(r.format)(this.value,this.format):null}},methods:{updateValue:function(t){this.$emit("input",t)},show:function(){var t=this;this.visible=!0;var e=function e(n){n.stopPropagation(),t.$el.contains(n.target)||(t.visible=!1,document.removeEventListener("click",e))};document.addEventListener("click",e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{visible:{type:Boolean,default:!1},position:{type:String,default:"bottom left"},showArrow:{type:Boolean,default:!1}}}},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[r.a]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tabs:[],selectedTab:null}},methods:{addTab:function(t){this.tabs.push(t)},removeTab:function(t){var e=this.tabs.indexOf(t);this.tabs.splice(e,1)},selectTab:function(t){this.selectedTab=t,console.log(t)}},mounted:function(){this.tabs.length>0&&(this.selectedTab=this.tabs[0])}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{id:{type:String,required:!0},label:{type:String,required:!0}},data:function(){return{proxy:{id:this.id,label:this.label}}},computed:{selected:function(){return this.$parent.selectedTab===this.proxy}},created:function(){var t=this.$parent.addTab;return t?void t(this.proxy):void console.warn("A tab-pane must be registered in a tab-control.")},destroyed:function(){this.$parent.removeTab(this.proxy)}}},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[r.a]}},function(t,e,n){"use strict";e.a={functional:!0,props:{component:{type:Object,required:!0}},render:function(t,e){var n=e.props.component;if(!n.node)return void console.warn("Dynamic element not rendered. No node name specified.");var r={attrs:n.attrs,props:n.props,domProps:n.domProps,on:n.on};if(!n.children)return t(n.node,r);var i=n.children.map(function(e){return t("dynamic",{props:{component:e}})});return t(n.node,r,i)}}},function(t,e,n){"use strict";var r=n(16);({props:{id:{type:String,required:!0}},created:function(){r.a.register(this.id,this)},destroyed:function(){r.a.drop(this.id)}})},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!e)return t;for(var n=[],r=0;r<t.length;r++){var i=t[r];for(var o in i){var a=i[o];if(!(u.indexOf("undefined"==typeof a?"undefined":s(a))<0)){var c=a.toString().toLowerCase();if(c.indexOf(e.toLowerCase())>-1){n.push(i);break}}}}return n}function o(t,e,n){if(1!==Math.abs(n))throw new Error("Sort direction must be either 1 (ascending) or -1 (descending)");var i=[].concat(r(t));return i.sort(function(t,r){var i=t[e],o=r[e],a=i<o?-1:i>o?1:0;return a*n}),i}function a(t,e){var n={data:t};if(e){n={};var r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value,c=u[e];n.hasOwnProperty(c)||(n[c]=[]),n[c].push(u)}}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}return n}e.a=i,e.b=o,e.c=a;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=["string","number","boolean"]},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){r(this,t),this.components={}}return i(t,[{key:"register",value:function(t,e){this.components[t]=e}},{key:"get",value:function(t){return this.components[t]}},{key:"drop",value:function(t){delete this.components[t]}}]),t}();e.a=new o},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var r,i;n(21),r=n(4);var o=n(39);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(20),r=n(5);var o=n(38);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(18),r=n(6);var o=n(35);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;r=n(7);var o=n(37);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(22),r=n(8);var o=n(40);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(24),r=n(9);var o=n(42);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(17),r=n(10);var o=n(34);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(23),r=n(11);var o=n(41);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e,n){var r,i;n(19),r=n(12);var o=n(36);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(i=r=r.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},[n("div",{staticClass:"tabs-list",attrs:{layout:"row center-left"}},t._l(t.tabs,function(e){return n("div",{staticClass:"tab-item",class:{active:e===t.selectedTab},on:{click:function(n){t.selectTab(e)}}},[t._t(e.id,[n("span",[t._v(t._s(e.label))])],{value:e})],2)})),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-wrapper",attrs:{id:t.id}},[n("table",{staticClass:"datatable",class:t.tableClasses},[n("thead",[n("tr",[t.lineNumbers?n("th",{style:{width:t.lineColumnWidth}},[n("div",{staticClass:"datatable-column datatable-linenumber-column"},[t._v("#")])]):t._e(),t._v(" "),t._t("default")],2)]),t._v(" "),t._l(t.groups,function(e,r,i){return n("tbody",[t.groupingColumn?n("tr",[n("td",{staticClass:"datatable-group-cell",attrs:{colspan:t.columnSpan}},[n("div",{attrs:{layout:"row center-justify"}},[n("span",[t._v(t._s(t.groupingColumn.formatData(r)))]),t._v(" "),e.length>1?n("span",{staticClass:"label datatable-row-count",on:{click:function(e){t.setFilter(r)}}},[t._v(t._s(e.length))]):t._e()])])]):t._e(),t._v(" "),0==e.length?n("tr",[n("td",{staticClass:"datatable-info-cell",attrs:{colspan:t.columnSpan}},[t._v("No results")])]):t._e(),t._v(" "),t._l(e,function(e,r){return n("tr",[t.lineNumbers?n("td",{staticClass:"datatable-linenumber-cell"},[n("span",[t._v(t._s(i+r+1))])]):t._e(),t._v(" "),t._l(t.columns,function(r){return n("td",{staticClass:"datatable-cell"},[t._t(r.id,[t.editable?n("input",{directives:[{name:"model",rawName:"v-model",value:e[r.id],expression:"row[column.id]"}],attrs:{type:"text"},domProps:{value:t._s(e[r.id])},on:{input:function(t){if(!t.target.composing){var n=e,i=r.id;Array.isArray(n)?n.splice(i,1,t.target.value):e[r.id]=t.target.value}}}}):n("span",[t._v(t._s(r.formatData(e[r.id])))])],{row:e,column:r,value:e[r.id]})],2)})],2)})],2)}),t._v(" "),t.showTotals?n("tfoot",[n("tr",[n("td",{attrs:{colspan:t.columnSpan}},[t._v("Total")])]),t._v(" "),n("tr",[t.lineNumbers?n("td",[t._v(" ")]):t._e(),t._v(" "),t._l(t.columns,function(e){return n("td",[t._v(t._s(t.calculateTotal(e)))])})],2)]):t._e()],2),t._v(" "),n("div",{staticClass:"datatable-options"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.groupingId,expression:"groupingId"}],on:{change:function(e){t.groupingId=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[n("option",{domProps:{value:null}},[t._v("No grouping")]),t._v(" "),t._l(t.columns,function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.label))])})],2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rowFilter,expression:"rowFilter"}],attrs:{type:"text",placeholder:"Filter this dataset"},domProps:{value:t._s(t.rowFilter)},on:{input:function(e){e.target.composing||(t.rowFilter=e.target.value)}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toggle"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",id:t.id,name:t.id,disabled:t.disabled},domProps:{value:t.val,checked:Array.isArray(t.checked)?t._i(t.checked,t.val)>-1:t.checked},on:{change:t.onChange,click:function(e){var n=t.checked,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t.val,a=t._i(n,o);i?a<0&&(t.checked=n.concat(o)):a>-1&&(t.checked=n.slice(0,a).concat(n.slice(a+1)))}else t.checked=i}}}),t._v(" "),n("label",{attrs:{for:t.id}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("floating-panel",{staticClass:"date-picker",attrs:{visible:t.visible}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedValue,expression:"formattedValue"}],attrs:{type:"text",readonly:""},domProps:{value:t._s(t.formattedValue)},on:{focus:function(e){t.show()},input:function(e){e.target.composing||(t.formattedValue=e.target.value)}},slot:"host"}),t._v(" "),n("p",{on:{click:function(e){t.updateValue(new Date)}},slot:"content"},[t._v("Hello")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{style:t.columnStyles,on:{click:t.sort}},[n("div",{staticClass:"datatable-column",attrs:{layout:"row center-justify"}},[n("div",[t._t("default",[t._v(t._s(t.label||t.id))])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.sorting,expression:"sorting"}],staticClass:"datatable-sort-arrow",class:t.sortArrowClass})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",id:t.id,name:t.id,disabled:t.disabled},domProps:{value:t.val,checked:Array.isArray(t.checked)?t._i(t.checked,t.val)>-1:t.checked},on:{change:t.onChange,click:function(e){var n=t.checked,r=e.target,i=!!r.checked;if(Array.isArray(n)){var o=t.val,a=t._i(n,o);i?a<0&&(t.checked=n.concat(o)):a>-1&&(t.checked=n.slice(0,a).concat(n.slice(a+1)))}else t.checked=i}}}),t._v(" "),n("label",{attrs:{for:t.id}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float"},[t._t("host"),t._v(" "),n("transition",{attrs:{name:"float"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"float-panel"},[t._t("content")],2)])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.selected?n("div",{staticClass:"tab-pane"},[t._t("default")],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"radio",id:t.id,name:t.id,disabled:t.disabled},domProps:{value:t.val,checked:t._q(t.checked,t.val)},on:{change:t.onChange,click:function(e){t.checked=t.val}}}),t._v(" "),n("label",{attrs:{for:t.id}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){for(var e in a.a){var n=a.a[e];t.component(n.tag,n.definition)}}var i=n(2),o=(n.n(i),n(3)),a=(n.n(o),n(1));Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)}])});
//# sourceMappingURL=components.bundle.js.map