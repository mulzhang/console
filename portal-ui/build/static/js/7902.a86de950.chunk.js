"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7902],{47902:function(e,t,n){n.r(t);var r=n(29439),a=n(1413),l=n(72791),s=n(26181),i=n.n(s),c=n(78687),u=n(11135),o=n(25787),d=n(61889),m=n(27391),v=n(63466),h=n(25469),p=n(23814),f=n(45248),Z=n(87995),x=n(81207),b=n(92983),j=n(75952),y=n(74794),g=n(80184);t.default=(0,o.Z)((function(e){return(0,u.Z)((0,a.Z)((0,a.Z)((0,a.Z)({tableWrapper:{height:"calc(100vh - 267px)"}},p.OR),p.qg),p.Bz))}))((function(e){var t=e.classes,n=(0,h.TL)(),a=(0,c.v9)((function(e){return e.directPV.selectedDrive})),s=(0,l.useState)([]),u=(0,r.Z)(s,2),o=u[0],p=u[1],P=(0,l.useState)(""),k=(0,r.Z)(P,2),V=k[0],C=k[1],F=(0,l.useState)(!0),K=(0,r.Z)(F,2),N=K[0],S=K[1];(0,l.useEffect)((function(){N&&x.Z.invoke("GET","/api/v1/directpv/volumes?drives=".concat(a)).then((function(e){var t=i()(e,"volumes",[]);t||(t=[]),t.sort((function(e,t){return e.volume>t.volume?1:e.volume<t.volume?-1:0})),p(t),S(!1)})).catch((function(e){S(!1),n((0,Z.Ih)(e))}))}),[N,a,n]);var T=o.filter((function(e){return e.drive.includes(V)}));return(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(j.mr1,{label:"Volumes"}),(0,g.jsxs)(y.Z,{children:[(0,g.jsx)(d.ZP,{item:!0,xs:12,className:t.actionsTray,children:(0,g.jsx)(m.Z,{placeholder:"Search Volumes",className:t.searchField,id:"search-resource",label:"",InputProps:{disableUnderline:!0,startAdornment:(0,g.jsx)(v.Z,{position:"start",children:(0,g.jsx)(j.W1M,{})})},onChange:function(e){C(e.target.value)},variant:"standard"})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)("br",{})}),(0,g.jsx)(d.ZP,{item:!0,xs:12,children:(0,g.jsx)(b.Z,{itemActions:[],columns:[{label:"Volume",elementKey:"volume"},{label:"Capacity",elementKey:"capacity",renderFunction:f.ae},{label:"Node",elementKey:"node"},{label:"Drive",elementKey:"drive"}],isLoading:N,records:T,entityName:"Volumes",idField:"volume",customPaperHeight:t.tableWrapper})})]})]})}))}}]);
//# sourceMappingURL=7902.a86de950.chunk.js.map