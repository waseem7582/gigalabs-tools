var u=Object.defineProperty,b=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var t=(a,e,l)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,r=(a,e)=>{for(var l in e||(e={}))d.call(e,l)&&t(a,l,e[l]);if(o)for(var l of o(e))f.call(e,l)&&t(a,l,e[l]);return a},i=(a,e)=>b(a,p(e));import{S as n}from"./index-5ea60806.js";import{d as m}from"./chartEditStore-87bc983c.js";import{as as s,aA as v}from"./index-3da848c6.js";import"./_arrayMap-23a2d4b9.js";import"./tables_list-7cb7cb60.js";import"./http-5398a097.js";import"./plugin-3ade9cd9.js";import"./icon-42e1d81a.js";import"./SettingItemBox-6900e67c.js";/* empty css                                                                   */import"./CollapseItem-95d54d26.js";var c=[{label:"\u8BF7\u9009\u62E9",value:""},{label:"\u8363\u6210",value:"26700"},{label:"\u6CB3\u5357",value:"20700",disabled:!0},{label:"\u6CB3\u5317",value:"18700"},{label:"\u5F90\u5DDE",value:"17800"},{label:"\u6F2F\u6CB3",value:"16756"},{label:"\u4E09\u95E8\u5CE1",value:"12343"},{label:"\u90D1\u5DDE",value:"9822"},{label:"\u5468\u53E3",value:"8912"},{label:"\u6FEE\u9633",value:"6834"},{label:"\u4FE1\u9633",value:"5875"},{label:"\u65B0\u4E61",value:"3832"},{label:"\u5927\u540C",value:"1811"}];const g={dataset:c,value:"",borderWidth:1,borderStyle:"solid",borderColor:"#1a77a5",background:"none",borderRadius:6,color:"#ffffff",textAlign:"center",fontWeight:"normal",backgroundColor:"transparent",fontSize:20,onChange(a,e){}};class J extends m{constructor(){super(...arguments),this.key=n.key,this.chartConfig=s(n),this.option=s(g),this.attr=i(r({},v),{w:200,h:36,zIndex:1})}}export{J as default,g as option};