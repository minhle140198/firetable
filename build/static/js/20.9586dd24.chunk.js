(this.webpackJsonpfiretable=this.webpackJsonpfiretable||[]).push([[20],{247:function(e,a,t){"use strict";var o=t(1),r=t(3),l=t(0),c=t.n(l),n=(t(4),t(7)),i=t(165),d=Object(i.a)(c.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),p=t(9),s=t(23),m=t(25),b=t(13),u=t(782),g=c.a.forwardRef((function(e,a){var t=e.avatar,l=e.classes,i=e.className,p=e.clickable,s=e.color,g=void 0===s?"default":s,y=e.component,h=e.deleteIcon,f=e.disabled,v=void 0!==f&&f,C=e.icon,k=e.label,O=e.onClick,j=e.onDelete,S=e.onKeyUp,x=e.size,$=void 0===x?"medium":x,w=e.variant,I=void 0===w?"default":w,E=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),R=c.a.useRef(null),T=Object(m.a)(R,a),L=function(e){e.stopPropagation(),j&&j(e)},N=!(!1===p||!O)||p,P="small"===$,z=y||(N?u.a:"div"),D=z===u.a?{component:"div"}:{},W=null;if(j){var K=Object(n.a)("default"!==g&&("default"===I?l["deleteIconColor".concat(Object(b.a)(g))]:l["deleteIconOutlinedColor".concat(Object(b.a)(g))]),P&&l.deleteIconSmall);W=h&&c.a.isValidElement(h)?c.a.cloneElement(h,{className:Object(n.a)(h.props.className,l.deleteIcon,K),onClick:L}):c.a.createElement(d,{className:Object(n.a)(l.deleteIcon,K),onClick:L})}var U=null;t&&c.a.isValidElement(t)&&(U=c.a.cloneElement(t,{className:Object(n.a)(l.avatar,t.props.className,P&&l.avatarSmall,"default"!==g&&l["avatarColor".concat(Object(b.a)(g))])}));var V=null;return C&&c.a.isValidElement(C)&&(V=c.a.cloneElement(C,{className:Object(n.a)(l.icon,C.props.className,P&&l.iconSmall,"default"!==g&&l["iconColor".concat(Object(b.a)(g))])})),c.a.createElement(z,Object(o.a)({role:N||j?"button":void 0,className:Object(n.a)(l.root,i,"default"!==g&&[l["color".concat(Object(b.a)(g))],N&&l["clickableColor".concat(Object(b.a)(g))],j&&l["deletableColor".concat(Object(b.a)(g))]],"default"!==I&&[l.outlined,{primary:l.outlinedPrimary,secondary:l.outlinedSecondary}[g]],v&&l.disabled,P&&l.sizeSmall,N&&l.clickable,j&&l.deletable),"aria-disabled":!!v||void 0,tabIndex:N||j?0:void 0,onClick:O,onKeyUp:function(e){if(S&&S(e),e.currentTarget===e.target){var a=e.key;!j||"Backspace"!==a&&"Delete"!==a?"Escape"===a&&R.current&&R.current.blur():j(e)}},ref:T},D,E),U||V,c.a.createElement("span",{className:Object(n.a)(l.label,P&&l.labelSmall)},k),W)}));a.a=Object(p.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(s.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(s.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(s.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(s.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(s.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(s.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(s.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},774:function(e,a,t){"use strict";t.r(a);var o=t(159),r=t(160),l=t(0),c=t.n(l),n=t(237),i=t.n(n),d=t(767),p=t(47),s=t(78),m=t(247),b=Object(p.a)((function(e){return Object(s.a)({root:{position:"relative",display:"flex",flexWrap:"wrap",alignItems:"center"},typography:{padding:e.spacing(2)},textArea:{fontSize:14,minWidth:230},paper:{minWidth:200},chip:{margin:e.spacing(1)}})}));a.default=function(e){var a=e.value,t=(e.row,e.onSubmit),l=e.collectionPath,n=e.config,p=e.setSearch,s=b();return c.a.createElement("div",{className:s.root},!n.isLocked&&c.a.createElement(d.a,{onClick:function(e){p((function(e){return Object(r.a)({},e,{collection:l,config:n,onSubmit:function(e){t(a?[].concat(Object(o.a)(a),[e]):[e])}})}))}},c.a.createElement(i.a,null)),a&&a.map((function(e,r){return c.a.createElement(m.a,{key:e.docPath,label:n.primaryKeys.map((function(a){return"".concat(e.snapshot[a]," ")})),onDelete:n.isLocked?void 0:function(){!function(e){var r=Object(o.a)(a);r.splice(e,1),t(r)}(r)},className:s.chip})})))}}}]);
//# sourceMappingURL=20.9586dd24.chunk.js.map