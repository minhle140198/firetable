(this.webpackJsonpfiretable=this.webpackJsonpfiretable||[]).push([[18],{247:function(e,a,t){"use strict";var n=t(1),o=t(3),l=t(0),c=t.n(l),r=(t(4),t(7)),i=t(165),s=Object(i.a)(c.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=t(9),p=t(23),m=t(25),u=t(13),b=t(782),f=c.a.forwardRef((function(e,a){var t=e.avatar,l=e.classes,i=e.className,d=e.clickable,p=e.color,f=void 0===p?"default":p,g=e.component,y=e.deleteIcon,h=e.disabled,v=void 0!==h&&h,O=e.icon,j=e.label,E=e.onClick,C=e.onDelete,k=e.onKeyUp,S=e.size,x=void 0===S?"medium":S,P=e.variant,w=void 0===P?"default":P,N=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),T=c.a.useRef(null),$=Object(m.a)(T,a),R=function(e){e.stopPropagation(),C&&C(e)},I=!(!1===d||!E)||d,L="small"===x,z=g||(I?b.a:"div"),F=z===b.a?{component:"div"}:{},W=null;if(C){var V=Object(r.a)("default"!==f&&("default"===w?l["deleteIconColor".concat(Object(u.a)(f))]:l["deleteIconOutlinedColor".concat(Object(u.a)(f))]),L&&l.deleteIconSmall);W=y&&c.a.isValidElement(y)?c.a.cloneElement(y,{className:Object(r.a)(y.props.className,l.deleteIcon,V),onClick:R}):c.a.createElement(s,{className:Object(r.a)(l.deleteIcon,V),onClick:R})}var D=null;t&&c.a.isValidElement(t)&&(D=c.a.cloneElement(t,{className:Object(r.a)(l.avatar,t.props.className,L&&l.avatarSmall,"default"!==f&&l["avatarColor".concat(Object(u.a)(f))])}));var K=null;return O&&c.a.isValidElement(O)&&(K=c.a.cloneElement(O,{className:Object(r.a)(l.icon,O.props.className,L&&l.iconSmall,"default"!==f&&l["iconColor".concat(Object(u.a)(f))])})),c.a.createElement(z,Object(n.a)({role:I||C?"button":void 0,className:Object(r.a)(l.root,i,"default"!==f&&[l["color".concat(Object(u.a)(f))],I&&l["clickableColor".concat(Object(u.a)(f))],C&&l["deletableColor".concat(Object(u.a)(f))]],"default"!==w&&[l.outlined,{primary:l.outlinedPrimary,secondary:l.outlinedSecondary}[f]],v&&l.disabled,L&&l.sizeSmall,I&&l.clickable,C&&l.deletable),"aria-disabled":!!v||void 0,tabIndex:I||C?0:void 0,onClick:E,onKeyUp:function(e){if(k&&k(e),e.currentTarget===e.target){var a=e.key;!C||"Backspace"!==a&&"Delete"!==a?"Escape"===a&&T.current&&T.current.blur():C(e)}},ref:$},F,N),D||K,c.a.createElement("span",{className:Object(r.a)(l.label,L&&l.labelSmall)},j),W)}));a.a=Object(d.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(p.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(p.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(p.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(p.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(p.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(p.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(p.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(p.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(f)},370:function(e,a,t){"use strict";var n=t(1),o=t(3),l=t(0),c=t.n(l),r=(t(4),t(7)),i=t(56),s=t(9),d=t(186),p=c.a.forwardRef((function(e,a){var t=e.children,l=e.classes,s=e.className,p=e.component,m=void 0===p?"div":p,u=e.disablePointerEvents,b=void 0!==u&&u,f=e.disableTypography,g=void 0!==f&&f,y=e.position,h=e.variant,v=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(d.b)()||{},j=h;return h&&O.variant,O&&!j&&(j=O.variant),c.a.createElement(d.a.Provider,{value:null},c.a.createElement(m,Object(n.a)({className:Object(r.a)(l.root,s,b&&l.disablePointerEvents,O.hiddenLabel&&l.hiddenLabel,{filled:l.filled}[j],{start:l.positionStart,end:l.positionEnd}[y],{dense:l.marginDense}[O.margin]),ref:a},v),"string"!==typeof t||g?t:c.a.createElement(i.a,{color:"textSecondary"},t)))}));a.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(p)},785:function(e,a,t){"use strict";t.r(a);var n=t(159),o=t(171),l=t(160),c=t(16),r=t(0),i=t.n(r),s=t(746),d=t(788),p=t(761),m=t(786),u=t(48),b=t(762),f=t(47),g=t(78),y=t(169),h=t(238),v=t.n(h),O=t(247),j=t(237),E=t.n(j),C=t(767),k=t(370),S=Object(f.a)((function(e){return Object(g.a)({root:{},field:{width:"100%"},chipsContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap",maxWidth:300,padding:e.spacing(1)},chip:{margin:e.spacing(.5)}})}));function x(e){var a=e.options,t=e.setValue,o=S(),l=Object(r.useState)(""),s=Object(c.a)(l,2),d=s[0],p=s[1],b=function(){""!==d&&(t("options",[].concat(Object(n.a)(a),[d])),p(""))};return Object(r.useEffect)((function(){t({data:{options:a}})}),[a]),i.a.createElement(u.a,{container:!0,direction:"column",className:o.root},i.a.createElement(u.a,{item:!0},i.a.createElement(m.a,{value:d,className:o.field,label:"New Option",onChange:function(e){p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()},InputProps:{endAdornment:i.a.createElement(k.a,{position:"end"},i.a.createElement(C.a,{edge:"end","aria-label":"toggle password visibility",onClick:function(e){b()}},i.a.createElement(E.a,null)))}})),i.a.createElement(u.a,{item:!0,className:o.chipsContainer},a.map((function(e){return i.a.createElement(O.a,{key:e,label:e,onDelete:(n=e,function(){var e=a.filter((function(e){return e!==n}));t("options",e)}),className:o.chip});var n}))))}var P=t(780),w=t(319),N=t(769),T=t(389),$=t(757),R=Object(f.a)((function(e){return Object(g.a)({root:{display:"flex",justifyContent:"center",flexWrap:"wrap",maxWidth:300,padding:e.spacing(1)},chip:{margin:e.spacing(.5)},formControl:{margin:e.spacing(1),minWidth:120,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"}})})),I={PaperProps:{style:{maxHeight:224,width:250}}};function L(e){var a=e.collectionPath,t=e.setValue,n=Object(T.a)(a||"initial"),o=Object(c.a)(n,2),l=o[0],s=o[1],m=Object(r.useState)([]),u=Object(c.a)(m,2),b=u[0],f=u[1],g=Object(r.useState)([]),y=Object(c.a)(g,2),h=y[0],v=y[1],j=Object(r.useState)([]),E=Object(c.a)(j,2),C=E[0],k=E[1];Object(r.useEffect)((function(){f(l.columns)}),[l.columns]);var S=R(),x=Object(r.useContext)(w.a);return Object(r.useEffect)((function(){t("config",{primaryKeys:h,secondaryKeys:C})}),[h,C]),x.value?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{className:S.formControl},i.a.createElement(d.a,{htmlFor:"select-secondary-multiple-chip"},"Table"),i.a.createElement(P.a,{value:a||null,onChange:function(e,a){t("collectionPath",a.props.value),v([]),k([]),f([]),s.setTable(a.props.value)},id:"select-key",inputProps:{name:"Table",id:"table"}},x.value.map((function(e){return i.a.createElement(N.a,{id:"select-collection-".concat(e.collection),value:e.collection},i.a.createElement(i.a.Fragment,null,e.collection))})))),a?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{className:S.formControl},i.a.createElement(d.a,{htmlFor:"select-primary-multiple-chip"},"Primary Text"),i.a.createElement(P.a,{multiple:!0,value:h,onChange:function(e){v(e.target.value)},input:i.a.createElement($.a,{id:"select-primary-multiple-chip"}),renderValue:function(e){return i.a.createElement("div",{className:S.chips},e.map((function(e){return i.a.createElement(O.a,{key:e,label:e,className:S.chip})})))},MenuProps:I},b&&0!==b.length&&b.map((function(e){return i.a.createElement(N.a,{id:"select-primary-column-".concat(e.key),key:e.key,value:e.key},e.name)})))),i.a.createElement(p.a,{className:S.formControl},i.a.createElement(d.a,{htmlFor:"select-secondary-multiple-chip"},"Secondary Text"),i.a.createElement(P.a,{multiple:!0,value:C,onChange:function(e){k(e.target.value)},input:i.a.createElement($.a,{id:"select-secondary-multiple-chip"}),renderValue:function(e){return i.a.createElement("div",{className:S.chips},e.map((function(e){return i.a.createElement(O.a,{key:e,label:e,className:S.chip})})))},MenuProps:I},b&&0!==b.length&&b.map((function(e){return i.a.createElement(N.a,{id:"select-secondary-column-".concat(e.key),key:e.key,value:e.key},e.name)}))))):"please select a table"):i.a.createElement("div",null)}var z=t(221),F=Object(f.a)((function(e){return Object(g.a)({container:{padding:15},typography:{padding:1},button:{},root:{padding:10,display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},toggleGrouped:{margin:e.spacing(.5),border:"none",padding:e.spacing(0,1),"&:not(:first-child)":{borderRadius:e.shape.borderRadius},"&:first-child":{borderRadius:e.shape.borderRadius}}})}));a.default=function(e){var a=e.anchorEl,t=e.column,f=e.handleClose,g=e.actions,h=Object(r.useState)({type:null,name:"",options:[],collectionPath:"",config:{}}),O=Object(c.a)(h,2),j=O[0],E=O[1],C=Object(r.useState)((function(){return[""]})),k=Object(c.a)(C,2),S=k[0],P=k[1],w=F();var N=function(e,a){E((function(t){return Object(l.a)({},t,Object(o.a)({},e,a))}))};Object(r.useEffect)((function(){t&&!t.isNew&&(E((function(e){return Object(l.a)({},e,{name:t.name,type:t.type,key:t.key,isNew:t.isNew})})),t.options?N("options",t.options):N("options",[]),t.collectionPath&&N("collectionPath",t.collectionPath),["resizable","editable","fixed","hidden"].map((function(e){t[e]&&P([].concat(Object(n.a)(S),[e]))})))}),[t]);var T=function(){E({type:null,name:"",options:[],collectionPath:"",config:{}})},$=function(){var e=j.type,a=j.name;j.options,j.collectionPath,j.config;return!e||""===a};return t?i.a.createElement(b.a,{className:w.root,id:"id-".concat(t.name),open:!!a,anchorEl:a,onClose:function(e){f(),T()}},i.a.createElement(u.a,{container:!0,className:w.container,direction:"column"},i.a.createElement(m.a,{label:"Column name",name:"name",defaultValue:j.name,onChange:function(e){N("name",e.target.value)}}),i.a.createElement(p.a,{className:w.formControl},i.a.createElement(d.a,{htmlFor:"Field-select"},"Field Type"),Object(y.b)(j.type,(function(e){e.stopPropagation(),e.preventDefault(),E((function(a){return Object(l.a)({},a,Object(o.a)({},e.target.name,e.target.value))}))})),(j.type===y.a.singleSelect||j.type===y.a.multiSelect)&&i.a.createElement(x,{setValue:N,options:j.options}),j.type===y.a.documentSelect&&i.a.createElement(L,{setValue:N,collectionPath:j.collectionPath}),t.isNew?i.a.createElement(s.a,{onClick:function(){var e=j.name,a=j.type,t=j.options,n=j.collectionPath,o=j.config;g.add(e,a,{options:t,collectionPath:n,config:o}),f(),T()},disabled:$()},"Add"):i.a.createElement(s.a,{disabled:$(),onClick:function(){var a=[{field:"name",value:j.name},{field:"type",value:j.type},{field:"resizable",value:S.includes("resizable")},{field:"editable",value:S.includes("editable")},{field:"hidden",value:S.includes("hidden")},{field:"fixed",value:S.includes("fixed")}];j.type!==y.a.multiSelect&&j.type!==y.a.singleSelect||a.push({field:"options",value:j.options}),j.type===y.a.documentSelect&&(a.push({field:"collectionPath",value:j.collectionPath}),a.push({field:"config",value:j.config})),g.update(e.column.idx,a),f(),T()}},"update"),!t.isNew&&i.a.createElement(z.a,{message:{customBody:"Are you sure you want to delete this nice column"}},i.a.createElement(s.a,{variant:"outlined",color:"secondary",onClick:function(){g.remove(e.column.idx),f(),T()}},i.a.createElement(v.a,null)," Delete")),i.a.createElement(s.a,{color:"secondary",onClick:function(){f(),T()}},"cancel")))):i.a.createElement("div",null)}}}]);
//# sourceMappingURL=18.05384d3b.chunk.js.map