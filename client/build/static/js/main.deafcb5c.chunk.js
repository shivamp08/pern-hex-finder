(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{177:function(e,t,a){},179:function(e,t,a){},285:function(e,t,a){},323:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),c=a(10),o=a.n(c),i=(a(177),a(17)),l=a.n(i),d=a(38),u=a(30),b=a(20),h=(a(179),a(56)),p=a(72),j=a(73),g=a(81),x=a(80),m=a(113),f=a(57),O=a(110),v=a.n(O),k=a(156),y=a.n(k),C=function(e){return(0,e.children)({})},S=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).recalculate=function(){var e=n.texts.map((function(e){return e.getBBox()})),t=n.getScalesAndGaps(e),a=t.scales,r=t.gaps;n.setState({scales:a,gaps:r})},n.getScalesAndGaps=function(e){return e.reduce((function(e,t){var a=e.scales,r=e.gaps,s=t.width,c=void 0===s?0:s,o=t.height,i=void 0===o?0:o,l=c?.8*n.props.size/c:1,d=.7*i*l/2;return{scales:[].concat(Object(h.a)(a),[l]),gaps:[].concat(Object(h.a)(r),[d])}}),{scales:[],gaps:[]})},n.getStyle=function(e,t){var a={stiffness:30,damping:10},r=n.state.open&&!n.forceClose?t:e,s=r.y1,c=r.y2,o=r.d;return{y1:Object(f.spring)(s,a),y2:Object(f.spring)(c,a),d:Object(f.spring)(o,a)}},n.getDefaultStyle=function(e,t){return n.state.open&&!n.forceClose?e:t},n.handleRest=function(){var e=n.props.onComplete;n.state.open||n.setState({close:!0}),e&&e(n.state.open)};var r=n.props,s=r.text1,c=r.text2,o=r.open;return n.texts=[],n.state={scales:[0,0],gaps:[0,0],open:o,close:!o,texts:[s,c]},n.id=y()(),n.size=n.props.size,n.forceClose=n.props.forceClose||!1,n.center=n.size/2,n.strokeWidth=2,n.offset=7.5,n.dasharray=20,n.isFirefox="undefined"!==typeof InstallTrigger,n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.recalculate()}},{key:"componentDidUpdate",value:function(e,t){v()(this.state.texts,t.texts)||this.recalculate()}},{key:"render",value:function(){var e=this,t=this.props,a=t.size,s=t.style,c=t.innerRef,o=t.x,i=t.y,l=this.state,d=l.texts,u=l.scales,b=l.gaps,h=l.close,p=u[0]&&u[1]?f.Motion:C,j=a*this.strokeWidth/100,g=a*this.offset/100,x=2*(b[1]+b[0]+g),m=2*b[0]+g,O={width:a-j,height:x-j},v=O.width+O.height,k=v*this.dasharray/100,y={d:0,y1:m+2*b[0],y2:m-2*b[1]},S={d:k,y1:b[0]+g,y2:m+b[1]};return!h&&Object(n.jsxs)("svg",{x:o,y:i,width:a,height:x,style:s,ref:c,children:[Object(n.jsxs)("defs",{children:[Object(n.jsx)("clipPath",{id:"clip1-".concat(this.id),children:Object(n.jsx)("rect",{x:"0",y:"0",width:a,height:m})}),Object(n.jsx)("clipPath",{id:"clip2-".concat(this.id),children:Object(n.jsx)("rect",{x:"0",y:m,width:a,height:2*b[1]+g})})]}),Object(n.jsx)(p,{defaultStyle:this.getDefaultStyle(y,S),style:this.getStyle(y,S),onRest:this.handleRest,children:function(t){var a=t.d,s=t.y1,c=t.y2;return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("rect",{x:j/2,y:j/2,width:O.width,height:O.height,stroke:e.props.stroke,strokeWidth:j,strokeDasharray:"".concat(Math.max(a,0)," ").concat(Math.max(v-a,0)),strokeDashoffset:k/2,fill:"transparent"}),Object(n.jsxs)("g",{clipPath:"url(#clip1-".concat(e.id,")"),children:[e.isFirefox&&Object(n.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"transparent"}),Object(n.jsx)("text",{id:"text-1",ref:function(t){return e.texts[0]=t},fill:"rgba(0, 0, 0, 0.65)",textAnchor:"middle",alignmentBaseline:"central",dominantBaseline:"central",style:{transform:"translate(".concat(e.center,"px, ").concat(s,"px) scale(").concat(u[0],")")},children:d[0]})]}),Object(n.jsxs)("g",{clipPath:"url(#clip2-".concat(e.id,")"),children:[e.isFirefox&&Object(n.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"transparent"}),Object(n.jsx)("text",{id:"text-2",ref:function(t){return e.texts[1]=t},fill:"rgba(0, 0, 0, 0.65)",alignmentBaseline:"central",dominantBaseline:"central",fontWeight:"bold",textAnchor:"middle",style:{transform:"translate(".concat(e.center,"px, ").concat(c,"px) scale(").concat(u[1],")")},children:d[1]})]})]})}})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.open,n=e.text1,r=e.text2,s=t.open,c=t.texts;return a!==s?{open:a,close:!1}:v()([n,r],c)?null:{texts:[n,r],scales:[0,0]}}}]),a}(r.Component),w=a(157),N=(a(285),a(23)),P=a(286).Checkboard,F=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(e){var r;Object(p.a)(this,a),(r=t.call(this,e)).handleChange=function(e){r.setState({background:e.rgb,backgroundHex:e.hex})},r.handleCopyClick=function(){var e=document.createElement("textarea");e.value=r.state.backgroundHex.toUpperCase(),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),N.a.success("\ud83c\udf89 Copied to Clipboard!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"success"})},r.handleRandomClick=function(){var e,t,a,n=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},s={r:n(0,255),g:n(0,255),b:n(0,255),a:r.state.background.a};r.setState({background:s,backgroundHex:(e=s.r,t=s.g,a=s.b,"#"+((1<<24)+(e<<16)+(t<<8)+a).toString(16).slice(1))})},r.handleAddToPalette=function(){var e=[].concat(Object(h.a)(r.state.palette),[r.state.backgroundHex]);r.props.setCurrPalette&&(r.props.setCurrPalette(e.join()),console.log("updated")),r.setState({palette:e})},r.handleRemoveFromPalette=function(){var e=r.state.palette;e.splice(e.indexOf(r.state.backgroundHex),1),r.props.setCurrPalette&&(r.props.setCurrPalette(e.join()),console.log("deleted")),r.setState({palette:e})},r.handlePaletteClick=function(e,t){r.setState({background:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),a:100}:null}(t),backgroundHex:t})},r.renderCircles=function(){return r.state.palette.map((function(e,t){return Object(n.jsx)("div",{style:0===t?{marginTop:10,marginLeft:5}:{marginTop:10,marginLeft:20},onClick:function(t){return r.handlePaletteClick(t,e)},children:Object(n.jsx)(m.a,{width:50,colors:[e],circleSize:50})},e)}))};var s,c,o,i=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},l={r:i(0,255),g:i(0,255),b:i(0,255),a:100};return r.state={background:l,backgroundHex:(s=l.r,c=l.g,o=l.b,"#"+((1<<24)+(s<<16)+(c<<8)+o).toString(16).slice(1)),palette:r.props.initColors},r}return Object(j.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({palette:e.initColors})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container-fluid root",style:{backgroundColor:"rgba(".concat(this.state.background.r,",").concat(this.state.background.g,",").concat(this.state.background.b,", 0.1)")},children:Object(n.jsxs)("div",{className:"container-fluid content-div",style:{backgroundColor:"rgba(".concat(this.state.background.r,",").concat(this.state.background.g,",").concat(this.state.background.b,", 0.25)"),boxShadow:"0 0 0 1px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.15)"},children:[Object(n.jsx)("br",{}),Object(n.jsx)(S,{size:200,text1:"HEX",text2:"FINDER",open:!0,stroke:this.state.backgroundHex}),Object(n.jsxs)("div",{className:"row color-picker",children:[Object(n.jsx)("div",{className:"col-xl-6",children:Object(n.jsxs)("div",{style:{display:"inline-block",marginTop:50},children:[Object(n.jsx)(m.b,{color:this.state.background,onChange:this.handleChange,width:400}),Object(n.jsxs)("div",{id:"buttons",style:{marginTop:10},children:[Object(n.jsxs)("button",{id:"copybtn",type:"button",className:"btn btn-primary",style:{float:"left",backgroundColor:"rgba(0,0,0,0.65)",border:"0"},onClick:this.handleCopyClick,children:[Object(n.jsx)("i",{className:"fas fa-clipboard"})," CopyHex"]}),this.state.palette.includes(this.state.backgroundHex)?Object(n.jsxs)("button",{type:"button",className:"btn btn-danger",style:{float:"center",border:"0"},onClick:this.handleRemoveFromPalette,children:[Object(n.jsx)("i",{className:"fas fa-palette"})," Remove from Palette"]}):Object(n.jsxs)("button",{type:"button",className:"btn btn-primary",style:{float:"center",backgroundColor:"rgba(0,0,0,0.65)",border:"0"},onClick:this.handleAddToPalette,children:[Object(n.jsx)("i",{className:"fas fa-palette"})," Add to Palette"]}),Object(n.jsxs)("button",{type:"button",className:"btn btn-primary",style:{float:"right",backgroundColor:"rgba(0,0,0,0.65)",border:"0"},onClick:this.handleRandomClick,children:[Object(n.jsx)("i",{className:"fas fa-random"})," Random"]})]})]})}),Object(n.jsxs)("div",{className:"col-xl-6",style:{display:"inline-block",marginTop:50},children:[Object(n.jsx)("div",{style:{position:"relative",backgroundColor:"white",boxShadow:"0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",width:420,height:400,margin:"0 auto",marginBottom:10},children:Object(n.jsx)(P,{white:"rgba(".concat(this.state.background.r,",").concat(this.state.background.g,",").concat(this.state.background.b,",").concat(this.state.background.a,")"),grey:0===this.state.background.a?"rgba(0,0,0,.08)":"rgba(".concat(this.state.background.r,",").concat(this.state.background.g,",").concat(this.state.background.b,",").concat(this.state.background.a,")")})}),Object(n.jsx)("div",{style:{margin:"0 auto",width:420},children:Object(n.jsx)(w.a,{thumb:Object(n.jsx)("div",{style:{width:150,height:10,backgroundColor:"rgba(0,0,0,0.65)"}}),children:this.renderCircles()})})]})]})]})})}}]),a}(s.a.Component),I=(a(322),a(53)),H=a(13),T=(a(323),function(e){var t=e.setAuth,a=Object(r.useState)(""),s=Object(b.a)(a,2),c=s[0],o=s[1],i=Object(r.useState)(""),d=Object(b.a)(i,2),h=d[0],p=d[1],j=Object(r.useState)(""),g=Object(b.a)(j,2),x=g[0],m=g[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/dashboard",{method:"GET",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(a.palette),p(a.user_name),m(a.user_email),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={palette:t},console.log(a),e.next=5,fetch("/dashboard",{method:"POST",headers:{"Content-type":"application/json",jwt_token:localStorage.token},body:JSON.stringify(a)});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f()}),[]);return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsxs)("div",{style:{position:"absolute",top:10,left:10,textAlign:"left"},className:"accountinfo",children:[Object(n.jsx)("h6",{children:h}),Object(n.jsx)("h6",{children:x})]}),Object(n.jsx)(I.b,{to:"/login",children:Object(n.jsxs)("button",{type:"button",className:"btn btn-primary",style:{position:"absolute",top:10,right:10,backgroundColor:"rgba(0,0,0,0.65)",border:"0"},onClick:function(e){return function(e){e.preventDefault(),localStorage.removeItem("token"),t(!1),N.a.success("\ud83d\udc4b Logout Successful!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"success"})}(e)},children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"})," Logout"]})}),Object(n.jsx)(F,{initColors:c.length>0?c.split(","):[],setCurrPalette:function(e){o(e),O(e)}})]})}),A=a(369),D=a(368),R=a(367),B=a(366),E=a(329),W=a(161),L=a(361),z=a(363),M=a(365),q=a(82),J=Object(W.a)({palette:{primary:q.a}}),_=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(2)},submit:{margin:e.spacing(3,0,2),backgroundColor:"rgba(0, 0, 0, 0.65)","&:hover":{backgroundColor:"red !important"}}}})),G=function(e){var t=e.setAuth,a=_(),s=Object(r.useState)(""),c=Object(b.a)(s,2),o=c[0],i=c[1],d=Object(r.useState)(""),h=Object(b.a)(d,2),p=h[0],j=h[1],g=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:o,password:p},e.next=5,fetch("/auth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(s=e.sent).token?(localStorage.setItem("token",s.token),t(!0),N.a.success("\ud83d\ude80 Login Successful!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"success"})):(t(!1),N.a.error("\ud83d\ude1e "+s,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"error"})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(z.a,{component:"main",maxWidth:"xs",children:Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(S,{size:200,text1:"HEX",text2:"FINDER",open:!0,stroke:"red"}),Object(n.jsx)("br",{}),Object(n.jsx)(E.a,{component:"h1",variant:"h5",children:"Login"}),Object(n.jsxs)("form",{noValidate:!0,onSubmit:g,children:[Object(n.jsx)(M.a,{theme:J,children:Object(n.jsx)(D.a,{className:a.form,variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",type:"text",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)(M.a,{theme:J,children:Object(n.jsx)(D.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return j(e.target.value)}})}),Object(n.jsx)(A.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",className:a.submit,children:"Login"}),Object(n.jsx)(B.a,{container:!0,children:Object(n.jsx)(B.a,{item:!0,children:Object(n.jsx)(R.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})})},U=Object(W.a)({palette:{primary:q.a}}),X=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(2)},submit:{margin:e.spacing(3,0,2),backgroundColor:"rgba(0, 0, 0, 0.65)","&:hover":{backgroundColor:"red !important"}}}})),V=function(e){var t=e.setAuth,a=X(),s=Object(r.useState)(""),c=Object(b.a)(s,2),o=c[0],i=c[1],d=Object(r.useState)(""),h=Object(b.a)(d,2),p=h[0],j=h[1],g=Object(r.useState)(""),x=Object(b.a)(g,2),m=x[0],f=x[1],O=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:p,password:m,name:o},e.next=5,fetch("auth/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(s=e.sent).token?(localStorage.setItem("token",s.token),t(!0),N.a.success("\ud83d\ude80 Register Successful!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"success"})):(t(!1),N.a.error("\ud83d\ude1e "+s,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"error"})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(z.a,{component:"main",maxWidth:"xs",children:Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(S,{size:200,text1:"HEX",text2:"FINDER",open:!0,stroke:"red"}),Object(n.jsx)("br",{}),Object(n.jsx)(E.a,{component:"h1",variant:"h5",children:"Register"}),Object(n.jsxs)("form",{noValidate:!0,onSubmit:O,children:[Object(n.jsx)(M.a,{theme:U,children:Object(n.jsx)(D.a,{className:a.form,variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Full Name",name:"name",autoComplete:"name",autoFocus:!0,onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)(M.a,{theme:U,children:Object(n.jsx)(D.a,{className:a.form,variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return j(e.target.value)}})}),Object(n.jsx)(M.a,{theme:U,children:Object(n.jsx)(D.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return f(e.target.value)}})}),Object(n.jsx)(A.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Register"}),Object(n.jsx)(B.a,{container:!0,children:Object(n.jsx)(B.a,{item:!0,children:Object(n.jsx)(R.a,{href:"/login",variant:"body2",children:"Already have an account? Sign In"})})})]})]})})})};N.a.configure();var $=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),a=t[0],s=t[1],c=function(e){s(e)};function o(){return(o=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("auth/verify",{method:"GET",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(n.jsx)(r.Fragment,{children:Object(n.jsx)(I.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(H.d,{children:[Object(n.jsx)(H.b,{exact:!0,path:"/",render:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(I.b,{to:"/login",children:Object(n.jsxs)("button",{type:"button",className:"btn btn-primary",style:{position:"absolute",top:10,right:10,backgroundColor:"rgba(0,0,0,0.65)",border:"0"},children:[Object(n.jsx)("i",{className:"fas fa-sign-in-alt"})," Login"]})}),Object(n.jsx)(F,{initColors:[]})]})}}),Object(n.jsx)(H.b,{exact:!0,path:"/login",render:function(e){return a?Object(n.jsx)(H.a,{to:"/dashboard"}):Object(n.jsx)(G,Object(d.a)(Object(d.a)({},e),{},{setAuth:c}))}}),Object(n.jsx)(H.b,{exact:!0,path:"/register",render:function(e){return a?Object(n.jsx)(H.a,{to:"/dashboard"}):Object(n.jsx)(V,Object(d.a)(Object(d.a)({},e),{},{setAuth:c}))}}),Object(n.jsx)(H.b,{exact:!0,path:"/dashboard",render:function(e){return a?Object(n.jsx)(T,Object(d.a)(Object(d.a)({},e),{},{setAuth:c})):Object(n.jsx)(H.a,{to:"/login"})}})]})})})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,370)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),K()}},[[327,1,2]]]);
//# sourceMappingURL=main.deafcb5c.chunk.js.map