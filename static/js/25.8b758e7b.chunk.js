(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{494:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m=l.a.oneOfType([l.a.number,l.a.string]),f={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,c=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(a,t){var r=e[a];if(delete m[a],r){var s=!t;f.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var b=Object(u.m)(d()(a,n?"no-gutters":null,l?"form-row":"row",f),t);return o.a.createElement(i,Object(r.a)({},m,{className:b}))};g.propTypes=f,g.defaultProps=b,a.a=g},495:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),b={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach((function(a,r){var s=e[a];if(delete l[a],s||""===s){var n=!r;if(Object(u.k)(s)){var o,i=n?"-":"-"+a+"-",m=p(n,a,s.size);c.push(Object(u.m)(d()(((o={})[m]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o)),t))}else{var f=p(n,a,s);c.push(f)}}})),c.length||c.push("col");var m=Object(u.m)(d()(a,c),t);return o.a.createElement(i,Object(r.a)({},l,{className:m}))};v.propTypes=b,v.defaultProps=g,a.a=v},497:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m={tag:u.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.m)(d()(a,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return o.a.createElement(m,Object(r.a)({},b,{className:g,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},498:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m={tag:u.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.m)(d()(a,"card-body"),t);return o.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},499:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m={tag:u.q,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.m)(d()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},i,{className:l}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},533:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),o=t.n(n),i=t(61),l=t.n(i),c=t(489),d=t.n(c),u=t(490),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.q,responsiveTag:u.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},f=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,l=e.borderless,c=e.striped,m=e.dark,f=e.hover,b=e.responsive,g=e.tag,p=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(u.m)(d()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!f&&"table-hover"),t),j=o.a.createElement(g,Object(r.a)({},h,{ref:v,className:y}));if(b){var O=Object(u.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return o.a.createElement(p,{className:O},j)}return j};f.propTypes=m,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f},554:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},772:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(t.push(o.value),!a||t.length!==a);r=!0);}catch(l){s=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(s)throw n}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(a);var n=t(151),o=t(152),i=t(154),l=t(153),c=t(2),d=t.n(c),u=t(494),m=t(495),f=t(497),b=t(499),g=t(498),p=t(533),v=t(554),h=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=v.a.find((function(a){return a.id.toString()===e.props.match.params.id})),t=a?Object.entries(a):[["id",d.a.createElement("span",null,d.a.createElement("i",{className:"text-muted icon-ban"})," Not found")]];return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,null,d.a.createElement(m.a,{lg:6},d.a.createElement(f.a,null,d.a.createElement(b.a,null,d.a.createElement("strong",null,d.a.createElement("i",{className:"icon-info pr-1"}),"User id: ",this.props.match.params.id)),d.a.createElement(g.a,null,d.a.createElement(p.a,{responsive:!0,striped:!0,hover:!0},d.a.createElement("tbody",null,t.map((function(e){var a=s(e,2),t=a[0],r=a[1];return d.a.createElement("tr",{key:t},d.a.createElement("td",null,"".concat(t,":")),d.a.createElement("td",null,d.a.createElement("strong",null,r)))})))))))))}}]),t}(c.Component);a.default=h}}]);
//# sourceMappingURL=25.8b758e7b.chunk.js.map