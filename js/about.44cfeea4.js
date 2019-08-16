(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1eea":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Content",{style:{padding:"16px"}},[a("sh-filter",{on:{filterChange:e.filterChange}})],1),a("Content",{style:{padding:"0 16px"}},[a("sh-table",{attrs:{filter:e.filter}})],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"filter",staticClass:"c-filter-form",attrs:{model:e.formItem,"label-width":80}},[a("FormItem",{attrs:{label:"查看全部"}},[a("Button",{on:{click:e.resetFilter}},[e._v("查看全部")])],1),a("FormItem",{attrs:{label:"菜系"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.formItem.cuisinesRadio,callback:function(t){e.$set(e.formItem,"cuisinesRadio",t)},expression:"formItem.cuisinesRadio"}},e._l(e.cuisineData,function(t){return a("Radio",{key:t.id,attrs:{label:t.name}},[e._v("\n                "+e._s(t.name)+"\n            ")])}),1)],1),a("FormItem",{attrs:{label:"品级"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.formItem.gradesRadio,callback:function(t){e.$set(e.formItem,"gradesRadio",t)},expression:"formItem.gradesRadio"}},e._l(e.gradeData,function(t){return a("Radio",{key:t.id,attrs:{label:t.name}},[e._v("\n                "+e._s(t.name)+"\n            ")])}),1)],1),a("FormItem",{attrs:{label:"类别"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.formItem.categoryRadio,callback:function(t){e.$set(e.formItem,"categoryRadio",t)},expression:"formItem.categoryRadio"}},e._l(e.categoryData,function(t){return a("Radio",{key:t.id,attrs:{label:t.name}},[e._v("\n                "+e._s(t.name)+"\n            ")])}),1)],1),a("input",{staticStyle:{display:"none"},attrs:{type:"hidden"},domProps:{value:e.computedData}})],1)},c=[],s=(a("ac6a"),a("8615"),[{id:1,name:"东北菜"},{id:2,name:"京菜"},{id:3,name:"川菜"},{id:4,name:"鲁菜"},{id:5,name:"普通菜"},{id:6,name:"浙菜"},{id:7,name:"湘菜"},{id:8,name:"粤菜"},{id:9,name:"苏菜"},{id:10,name:"西北菜"},{id:11,name:"赣菜"},{id:12,name:"闽菜"}]),o=[{id:1,name:"御"},{id:2,name:"珍"},{id:3,name:"尚"},{id:4,name:"良"},{id:5,name:"神秘"}],l=[{id:1,name:"材料"},{id:2,name:"治疗"},{id:3,name:"附毒"},{id:4,name:"控制"},{id:5,name:"嘲讽"},{id:6,name:"群攻"},{id:7,name:"净化"},{id:8,name:"辅助"},{id:9,name:"必中"},{id:10,name:"破防"},{id:11,name:"爆发"},{id:12,name:"禁疗"},{id:13,name:"驱散"},{id:14,name:"免疫"}],m={data:function(){return{cuisineData:s,gradeData:o,categoryData:l,formItem:{cuisinesRadio:"",gradesRadio:"",categoryRadio:""},initialData:{cuisinesRadio:"",gradesRadio:"",categoryRadio:""}}},computed:{computedData:function(){return this.$emit("filterChange",{cuisine:this.formItem.cuisinesRadio,grade:this.formItem.gradesRadio,category:this.formItem.categoryRadio}),Object.values(this.formItem).join("")}},methods:{resetFilter:function(){this.formItem=JSON.parse(JSON.stringify(this.initialData)),this.$refs["filter"].resetFields()}}},d=m,u=(a("5f35"),a("2877")),g=Object(u["a"])(d,n,c,!1,null,null,null),f=g.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Table",{attrs:{border:"",columns:e.columns,data:e.tableData}})},b=[],p=[{id:0,avatar:"https://user-images.githubusercontent.com/54170356/63196615-423f6380-c0a8-11e9-9a3b-a181b2aae3cf.png",name:"饺子",cuisine:"普通菜",grade:"良",category:"治疗",cv:"陈张太康",health:971,damage:111,defence:101,miss:.05,critical_damage:.5,critical:.1,origin:"召唤,副本掉落",gift:"《美味梦工厂》"},{id:1,avatar:"https://user-images.githubusercontent.com/54170356/63196903-00fb8380-c0a9-11e9-9fd1-970ebefe03ba.png",name:"蟹黄汤包",cuisine:"苏菜",grade:"尚",category:"附毒",cv:"张予佟",health:1073,damage:114,defence:104,miss:.05,critical_damage:.6,critical:.08,origin:"召唤,副本掉落",gift:"绵软抱枕"},{id:2,avatar:"",name:"汤圆",cuisine:"普通菜",grade:"良",category:"治疗",cv:"钱琛",health:"",damage:"",defence:"",miss:"",critical_damage:"",critical:"",origin:"暂无",gift:"暂无"},{id:3,avatar:"https://user-images.githubusercontent.com/54170356/63202088-ae2ac780-c0ba-11e9-9bbd-53a96c966809.png",name:"青团",cuisine:"浙菜",grade:"良",category:"净化",cv:"徐徐",health:"968",damage:"108",defence:"111",miss:"0.05",critical_damage:"0.5",critical:"0.1",origin:"召唤,副本掉落",gift:"软翅风筝"},{id:4,avatar:"https://user-images.githubusercontent.com/54170356/63202172-1083c800-c0bb-11e9-9c70-62a7110346b7.png",name:"四喜丸子",cuisine:"鲁菜",grade:"珍",category:"治疗",cv:"邵彤",health:"",damage:"",defence:"",miss:"",critical_damage:"",critical:"",origin:"召唤,副本6掉落",gift:"苏州檀香扇"},{id:5,avatar:"https://user-images.githubusercontent.com/54170356/63202205-3a3cef00-c0bb-11e9-85c4-dda22015c374.png",name:"鹄羹",cuisine:"普通菜",grade:"尚",category:"治疗",cv:"陈家恒",health:"",damage:"",defence:"",miss:"0.05",critical_damage:"0.5",critical:"0.1",origin:"系统给予 食魂召唤 副本掉落",gift:"爱心餐盒"},{id:6,avatar:"https://user-images.githubusercontent.com/54170356/63202258-74a68c00-c0bb-11e9-8833-cf10c354c251.png",name:"一品锅",cuisine:"徽菜",grade:"御",category:"群攻",cv:"赵岭",health:"",damage:"",defence:"",miss:"",critical_damage:"",critical:"",origin:"召唤,副本5掉落",gift:"徽墨"},{id:7,avatar:"https://user-images.githubusercontent.com/54170356/63202303-a881b180-c0bb-11e9-922c-d3b5ec8be1e8.png",name:"太极芋泥",cuisine:"闽菜",grade:"尚",category:"驱散",cv:"孙路路",health:"1142",damage:"108",defence:"106",miss:"0.05",critical_damage:"0.6",critical:"0.08",origin:"召唤,副本掉落",gift:"《脑筋急转弯》"},{id:8,avatar:"https://user-images.githubusercontent.com/54170356/63202395-01514a00-c0bc-11e9-883f-ace0b1b635c3.png",name:"鱼香肉丝",cuisine:"川菜",grade:"尚",category:"控制",cv:"魏超",health:"979",damage:"121",defence:"105",miss:"0.05",critical_damage:"0.6",critical:"0.08",origin:"召唤,副本掉落",gift:"桌上游戏"}],y={props:["filter"],data:function(){return{initialData:p,columns:[{title:"",key:"avatar",render:function(e,t){if(t.row.avatar)return e("img",{attrs:{src:t.row.avatar,style:"width: 40px;height: 40px"}})}},{title:"名称",key:"name",sortable:!0},{title:"菜系",key:"cuisine",sortable:!0},{title:"品级",key:"grade",sortable:!0},{title:"类别",key:"category",sortable:!0},{title:"CV",key:"cv",sortable:!0},{title:"生命",key:"health",sortable:!0},{title:"攻击",key:"damage",sortable:!0},{title:"防御",key:"defence",sortable:!0},{title:"闪避",key:"miss",sortable:!0},{title:"暴伤",key:"critical_damage",sortable:!0},{title:"暴击",key:"critical",sortable:!0},{title:"获取方式",key:"origin",sortable:!0},{title:"喜欢的礼物",key:"gift",sortable:!0}]}},computed:{tableData:function(){var e=this.filter.cuisine.trim(),t=this.filter.grade.trim(),a=this.filter.category.trim();return(e+t+a).length<=0?this.initialData:this.initialData.reduce(function(i,r){var n=!(e.length>0)||r["cuisine"]===e,c=!(t.length>0)||r["grade"]===t,s=!(a.length>0)||r["category"]===a;return n&&c&&s&&i.push(r),i},[])}}},v=y,R=Object(u["a"])(v,h,b,!1,null,null,null),L=R.exports,k={data:function(){return{filter:{cuisine:"",grade:"",category:""}}},components:{shFilter:f,shTable:L},methods:{filterChange:function(e){this.filter=e}}},_=k,S=Object(u["a"])(_,i,r,!1,null,"f106e758",null);t["default"]=S.exports},"504c":function(e,t,a){var i=a("9e1e"),r=a("0d58"),n=a("6821"),c=a("52a7").f;e.exports=function(e){return function(t){var a,s=n(t),o=r(s),l=o.length,m=0,d=[];while(l>m)a=o[m++],i&&!c.call(s,a)||d.push(e?[a,s[a]]:s[a]);return d}}},"5f35":function(e,t,a){"use strict";var i=a("aab4"),r=a.n(i);r.a},8615:function(e,t,a){var i=a("5ca1"),r=a("504c")(!1);i(i.S,"Object",{values:function(e){return r(e)}})},aab4:function(e,t,a){},ac6a:function(e,t,a){for(var i=a("cadf"),r=a("0d58"),n=a("2aba"),c=a("7726"),s=a("32e9"),o=a("84f2"),l=a("2b4c"),m=l("iterator"),d=l("toStringTag"),u=o.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(g),h=0;h<f.length;h++){var b,p=f[h],y=g[p],v=c[p],R=v&&v.prototype;if(R&&(R[m]||s(R,m,u),R[d]||s(R,d,p),o[p]=u,y))for(b in i)R[b]||n(R,b,i[b],!0)}}}]);
//# sourceMappingURL=about.44cfeea4.js.map