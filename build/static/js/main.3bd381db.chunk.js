(this.webpackJsonpfiretable=this.webpackJsonpfiretable||[]).push([[4],{123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),l=n(18),c=n(150),u=n(151),s=n(65),m="Europa, sans-serif",f=n.n(s)()({palette:{primary:{main:"#e22729"},secondary:{main:"#e22729"},text:{secondary:"rgba(0, 0, 0, 0.6)"}},typography:{fontFamily:'"Open Sans", sans-serif',h3:{fontFamily:m,fontSize:"2.25rem",fontWeight:"bold",fontStyle:"normal",lineHeight:"normal",letterSpacing:"normal"},h4:{fontFamily:m,fontWeight:"bold",letterSpacing:.2},h5:{fontFamily:m,fontSize:"1.5rem",fontWeight:"bold",fontStyle:"normal",lineHeight:1.25,letterSpacing:"normal"},h6:{fontFamily:m,fontSize:"1.125rem",fontWeight:"bold",letterSpacing:.2},overline:{fontFamily:m,fontSize:"0.8125rem",fontWeight:"bold",fontStyle:"normal",lineHeight:1.2,letterSpacing:2,color:"rgba(0, 0, 0, 0.6)"},subtitle1:{fontSize:"1rem",lineHeight:1.5,letterSpacing:.15},body1:{lineHeight:1.75,letterSpacing:.5},subtitle2:{fontFamily:m,fontWeight:"bold",fontSize:"1rem",lineHeight:1.5},body2:{fontSize:13.8,fontWeight:"normal",lineHeight:1.45,letterSpacing:.25},button:{fontFamily:m,fontSize:"1rem",fontWeight:"bold",lineHeight:1,letterSpacing:.75},caption:{fontFamily:m,fontSize:"0.8125rem",fontWeight:"bold",letterSpacing:.4,lineHeight:1.2}},overrides:{MuiChip:{root:{borderRadius:4},label:{fontFamily:m,fontSize:13.4,fontWeight:"bold",fontStyle:"normal",lineHeight:1.2,letterSpacing:2,color:"rgba(0, 0, 0, 0.6)",textTransform:"uppercase"},labelSmall:{paddingLeft:12,paddingRight:11}},MuiPaper:{rounded:{borderRadius:8}},MuiFormLabel:{root:{fontFamily:m,fontSize:"1rem",fontWeight:"bold",letterSpacing:.4}},MuiTooltip:{tooltip:{fontFamily:m,fontSize:"0.8125rem",fontWeight:"bold",letterSpacing:.4,lineHeight:1.2}},MuiTab:{root:{fontSize:"1rem !important"}},MuiButton:{contained:{borderRadius:500,minHeight:36},containedSizeLarge:{padding:"8px 32px",minHeight:48}}},props:{MuiRadio:{color:"primary"},MuiCheckbox:{color:"primary"},MuiCircularProgress:{size:44},MuiChip:{size:"small"},MuiSelect:{MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}}},MuiTabs:{indicatorColor:"primary",textColor:"primary"}}}),d=n(37),g=r.a.createContext({}),h=function(e){var t=e.children;return r.a.createElement(d.a,null,r.a.createElement(l.b,null,(function(e){return r.a.createElement(g.Provider,{value:e},t)})))},p=n(64),b=n(40),S=n(36),v=function(e){var t=e.render,n=Object(p.a)(e,["render"]),o=Object(a.useContext)(b.a).currentUser;return o?r.a.createElement(l.b,Object.assign({},n,{render:t})):null===o?r.a.createElement(l.a,{to:"/auth"}):r.a.createElement(l.b,Object.assign({},n,{render:function(){return r.a.createElement(S.a,{message:"Authenticating",fullScreen:!0})}}))},E=n(152),y=n(39);function O(){var e=Object(a.useContext)(y.a),t=e.position,n=e.isOpen,o=e.close,i=e.message,l=(e.duration,e.action),c=t.vertical,u=t.horizontal;return Object(a.useEffect)((function(){n&&setTimeout(o,1e4)}),[n]),r.a.createElement(E.a,{anchorOrigin:{vertical:c,horizontal:u},key:"".concat(c,",").concat(u),open:n,onClose:o,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},i),action:l})}var j=n(62),z=n(63),x=n(73),W=n(71),C=n(74),F=n(41),M=function(e){function t(){var e,n;Object(j.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,errorMessage:""},n}return Object(C.a)(t,e),Object(z.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(F.a,{message:"Something Went Wrong",description:this.state.errorMessage,fullScreen:!0}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errorMessage:e.message}}}]),t}(r.a.Component),P=n(16),T=function(e){var t=e.children,n=Object(a.useState)(!1),o=Object(P.a)(n,2),i=o[0],l=o[1],c=Object(a.useState)(""),u=Object(P.a)(c,2),s=u[0],m=u[1],f=Object(a.useState)(3e3),d=Object(P.a)(f,2),g=d[0],h=d[1],p=Object(a.useState)(r.a.createElement("div",null)),b=Object(P.a)(p,2),S=b[0],v=b[1],E=Object(a.useState)({vertical:"bottom",horizontal:"left"}),O=Object(P.a)(E,2),j=O[0],z=O[1];return r.a.createElement(y.a.Provider,{value:{isOpen:i,message:s,duration:g,position:j,close:function(){l(!1),m(""),h(0)},open:function(e){var t=e.message,n=e.duration,a=e.position,r=e.action;m(t),r&&v(r),h(n||3e3),z(a||{vertical:"bottom",horizontal:"left"}),l(!0)},action:S}},t)},H=n(47),w=n(78),k=Object(H.a)((function(e){return Object(w.a)({"@global":{"*":{fontFeatureSettings:'"liga"'},".rendered-html":{"& p":{margin:0},"& * + p":{marginTop:"1em"},"& ul":{margin:0,paddingLeft:"1.5em"},"& * + ul":{marginTop:"1em"},"& li + li":{marginTop:"0.5em"}},a:{fontWeight:"bold",color:e.palette.primary.main}}})})),A=function(){return k(),null},N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(16)]).then(n.bind(null,745))})),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(12)]).then(n.bind(null,777))})),B=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,778))})),I=Object(a.lazy)((function(){return Promise.all([n.e(13),n.e(34)]).then(n.bind(null,771))})),R=function(){return r.a.createElement(c.a,{theme:f},r.a.createElement(u.a,null),r.a.createElement(A,null),r.a.createElement(M,null,r.a.createElement(b.b,null,r.a.createElement(T,null,r.a.createElement(h,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(S.a,{fullScreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/auth",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(v,{exact:!0,path:"/",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(v,{path:"/table/",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(v,{path:"/editor",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(l.b,{render:function(){return r.a.createElement(F.a,{message:"Page Not Found",fullScreen:!0})}}))),r.a.createElement(O,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),o=n(42),i=n.n(o),l=n(47),c=n(78),u=n(48),s=n(130),m=n(56),f=Object(l.a)((function(e){return Object(c.a)({root:{height:"100%",width:"100%",textAlign:"center"},content:{maxWidth:"25em"},message:{textTransform:"uppercase",marginTop:e.spacing(1),letterSpacing:1}})}));function d(e){var t=e.message,n=void 0===t?"Loading":t,a=e.fullScreen,o=void 0!==a&&a,l=f({});return r.a.createElement(u.a,{container:!0,className:l.root,direction:"column",justify:"center",alignItems:"center",component:o?i.a:"div",style:{height:o?"100rvh":"100%"}},r.a.createElement(u.a,{item:!0,className:l.content},r.a.createElement(s.a,null),r.a.createElement(m.a,{variant:"h6",className:l.message,color:"textSecondary"},n)))}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o={isOpen:!1,message:"",duration:2e3,position:{vertical:"bottom",horizontal:"left"},close:function(){},open:function(e){console.log(e.message,e.duration)},action:r.a.createElement("div",null)},i=r.a.createContext(o)},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(16),r=n(0),o=n.n(r),i=n(57),l=o.a.createContext({currentUser:void 0}),c=function(e){var t=e.children,n=Object(r.useState)(),c=Object(a.a)(n,2),u=c[0],s=c[1];return Object(r.useEffect)((function(){i.a.onAuthStateChanged((function(e){s(e)}))}),[]),Object(r.useEffect)((function(){console.log(u)}),[u]),o.a.createElement(l.Provider,{value:{currentUser:u}},t)}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(42),i=n.n(o),l=n(47),c=n(78),u=n(48),s=n(56),m=n(77),f=n.n(m),d=Object(l.a)((function(e){return Object(c.a)({root:{height:"100%",width:"100%",textAlign:"center"},content:{maxWidth:"25em"},icon:{color:e.palette.text.disabled,fontSize:"3.5rem"},message:{textTransform:"uppercase",marginTop:e.spacing(1),letterSpacing:1}})}));function g(e){var t=e.message,n=void 0===t?"Nothing here":t,a=e.description,o=e.Icon,l=void 0===o?f.a:o,c=e.fullScreen,m=void 0!==c&&c,g=d({});return r.a.createElement(u.a,{container:!0,className:g.root,direction:"column",justify:"center",alignItems:"center",component:m?i.a:"div",style:{height:m?"100rvh":"100%"}},r.a.createElement(u.a,{item:!0,className:g.content},r.a.createElement(l,{className:g.icon}),r.a.createElement(s.a,{variant:"h6",className:g.message,color:"textSecondary",gutterBottom:!0},n),a&&r.a.createElement(s.a,{color:"textSecondary",variant:"body2"},a)))}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s}));var a=n(20),r=n.n(a),o=(n(111),n(113),n(116),n(124),{apiKey:"AIzaSyBiULKGPGmDATTxFlPG4NZpA1j5CTtEXPg",authDomain:"".concat("test-firetable-8656c",".firebaseapp.com"),databaseURL:"https://".concat("test-firetable-8656c",".firebaseio.com"),projectId:"test-firetable-8656c",storageBucket:"".concat("test-firetable-8656c",".appspot.com")});r.a.initializeApp(o);var i=r.a.auth(),l=r.a.firestore(),c=r.a.storage(),u=r.a.functions(),s=new r.a.auth.GoogleAuthProvider},83:function(e,t,n){e.exports=n(123)}},[[83,5,7]]]);
//# sourceMappingURL=main.3bd381db.chunk.js.map