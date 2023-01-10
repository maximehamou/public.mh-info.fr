"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8418],{95972:(Q,I,t)=>{t.r(I),t.d(I,{default:()=>je});var e=t(67294),y=t(23724),M=t(97132),s=t(68547),j=t(14087),b=t(185),C=t(67838),D=t(49066),f=t(81912),l=t(89031),E=(n,r,a)=>new Promise((u,d)=>{var O=c=>{try{T(a.next(c))}catch(P){d(P)}},h=c=>{try{T(a.throw(c))}catch(P){d(P)}},T=c=>c.done?u(c.value):Promise.resolve(c.value).then(O,h);T((a=a.apply(n,r)).next())});const F=()=>E(void 0,null,function*(){const{data:n}=yield l.be.get((0,l.Gc)("email-templates"));return n}),x=n=>l.be.put((0,l.Gc)("email-templates"),n);var K=t(45697),p=t.n(K),V=t(11057),L=t(63985),S=t(47144),g=t(18374),o=t(550),i=t(63237),m=t(72735),v=t(12028),Z=t(52624),J=t(4585),ne=t(30815),re=t(85018),se=Object.defineProperty,X=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,Y=(n,r,a)=>r in n?se(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,$=(n,r)=>{for(var a in r||(r={}))oe.call(r,a)&&Y(n,a,r[a]);if(X)for(var a of X(r))ie.call(r,a)&&Y(n,a,r[a]);return n};const k=({canUpdate:n,onEditClick:r})=>{const{formatMessage:a}=(0,M.useIntl)();return e.createElement(V.i,{colCount:3,rowCount:3},e.createElement(L.h,null,e.createElement(S.Tr,null,e.createElement(g.Th,{width:"1%"},e.createElement(i.T,null,a({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(g.Th,null,e.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(g.Th,{width:"1%"},e.createElement(i.T,null,a({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(o.p,null,e.createElement(S.Tr,$({},(0,s.onRowClick)({fn:()=>r("reset_password")})),e.createElement(g.Td,null,e.createElement(Z.J,null,e.createElement(ne.Z,{"aria-label":a({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(g.Td,null,e.createElement(m.Z,null,a({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(g.Td,$({},s.stopPropagation),e.createElement(v.h,{onClick:()=>r("reset_password"),label:a({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:n&&e.createElement(J.Z,null)}))),e.createElement(S.Tr,$({},(0,s.onRowClick)({fn:()=>r("email_confirmation")})),e.createElement(g.Td,null,e.createElement(Z.J,null,e.createElement(re.Z,{"aria-label":a({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(g.Td,null,e.createElement(m.Z,null,a({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(g.Td,$({},s.stopPropagation),e.createElement(v.h,{onClick:()=>r("email_confirmation"),label:a({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:n&&e.createElement(J.Z,null)})))))};k.propTypes={canUpdate:p().bool.isRequired,onEditClick:p().func.isRequired};const me=k;var de=t(80831),ce=t(42866),pe=t(24969),ue=t(59946),Ee=t(36856),fe=t(11276),A=t(74571),q=t(29728),w=t(2407),ve=t(64256),B=t(63600);const ge=B.Ry().shape({options:B.Ry().shape({from:B.Ry().shape({name:B.Z_().required(s.translatedErrors.required),email:B.Z_().email(s.translatedErrors.email).required(s.translatedErrors.required)}).required(),response_email:B.Z_().email(s.translatedErrors.email),object:B.Z_().required(s.translatedErrors.required),message:B.Z_().required(s.translatedErrors.required)}).required(s.translatedErrors.required)}),_=({template:n,onToggle:r,onSubmit:a})=>{const{formatMessage:u}=(0,M.useIntl)();return e.createElement(ce.P,{onClose:r,labelledBy:`${u({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${u({id:(0,l.OB)(n.display),defaultMessage:n.display})}`},e.createElement(pe.x,null,e.createElement(w.O,{label:`${u({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${u({id:(0,l.OB)(n.display),defaultMessage:n.display})}`},e.createElement(w.$,null,u({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(w.$,null,u({id:(0,l.OB)(n.display),defaultMessage:n.display})))),e.createElement(de.Formik,{onSubmit:a,initialValues:n,validateOnChange:!1,validationSchema:ge,enableReinitialize:!0},({errors:d,values:O,handleChange:h,isSubmitting:T})=>{var c,P,U,N,W,H,G;return e.createElement(s.Form,null,e.createElement(ue.f,null,e.createElement(fe.r,{gap:5},e.createElement(A.P,{col:6,s:12},e.createElement(s.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:h,value:O.options.from.name,error:(P=(c=d==null?void 0:d.options)==null?void 0:c.from)==null?void 0:P.name,type:"text"})),e.createElement(A.P,{col:6,s:12},e.createElement(s.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:h,value:O.options.from.email,error:(N=(U=d==null?void 0:d.options)==null?void 0:U.from)==null?void 0:N.email,type:"text"})),e.createElement(A.P,{col:6,s:12},e.createElement(s.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:h,value:O.options.response_email,error:(W=d==null?void 0:d.options)==null?void 0:W.response_email,type:"text"})),e.createElement(A.P,{col:6,s:12},e.createElement(s.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:h,value:O.options.object,error:(H=d==null?void 0:d.options)==null?void 0:H.object,type:"text"})),e.createElement(A.P,{col:12,s:12},e.createElement(ve.g,{label:u({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:h,value:O.options.message,error:((G=d==null?void 0:d.options)==null?void 0:G.message)&&u({id:d.options.message,defaultMessage:d.options.message})})))),e.createElement(Ee.m,{startActions:e.createElement(q.z,{onClick:r,variant:"tertiary"},"Cancel"),endActions:e.createElement(q.z,{loading:T,type:"submit"},"Finish")}))}))};_.propTypes={template:p().shape({display:p().string,icon:p().string,options:p().shape({from:p().shape({name:p().string,email:p().string}),message:p().string,object:p().string,response_email:p().string})}).isRequired,onSubmit:p().func.isRequired,onToggle:p().func.isRequired};const ye=_;var Oe=Object.defineProperty,he=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,te=(n,r,a)=>r in n?Oe(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,be=(n,r)=>{for(var a in r||(r={}))Te.call(r,a)&&te(n,a,r[a]);if(ee)for(var a of ee(r))Me.call(r,a)&&te(n,a,r[a]);return n},Be=(n,r)=>he(n,Pe(r)),Ce=(n,r,a)=>new Promise((u,d)=>{var O=c=>{try{T(a.next(c))}catch(P){d(P)}},h=c=>{try{T(a.throw(c))}catch(P){d(P)}},T=c=>c.done?u(c.value):Promise.resolve(c.value).then(O,h);T((a=a.apply(n,r)).next())});const Re=()=>e.createElement(s.CheckPagePermissions,{permissions:f.Z.readEmailTemplates},e.createElement(Ie,null)),Ie=()=>{const{formatMessage:n}=(0,M.useIntl)(),{trackUsage:r}=(0,s.useTracking)(),{notifyStatus:a}=(0,j.G)(),u=(0,s.useNotification)(),{lockApp:d,unlockApp:O}=(0,s.useOverlayBlocker)(),h=(0,e.useRef)(r),T=(0,y.useQueryClient)();(0,s.useFocusWhenNavigate)();const[c,P]=(0,e.useState)(!1),[U,N]=(0,e.useState)(null),W=(0,e.useMemo)(()=>({update:f.Z.updateEmailTemplates}),[]),{isLoading:H,allowedActions:{canUpdate:G}}=(0,s.useRBAC)(W),{status:De,data:ae}=(0,y.useQuery)("email-templates",()=>F(),{onSuccess(){a(n({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Le=H||De!=="success",z=()=>{P(R=>!R)},Se=R=>{N(R),z()},le=(0,y.useMutation)(R=>x({"email-templates":R}),{onSuccess(){return Ce(this,null,function*(){yield T.invalidateQueries("email-templates"),u({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),h.current("didEditEmailTemplates"),O(),z()})},onError(){u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),O()},refetchActive:!0}),{isLoading:Ae}=le,Ue=R=>{d(),h.current("willEditEmailTemplates");const Fe=Be(be({},ae),{[U]:R});le.mutate(Fe)};return Le?e.createElement(b.o,{"aria-busy":"true"},e.createElement(s.SettingsPageTitle,{name:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(C.T,{title:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(D.D,null,e.createElement(s.LoadingIndicatorPage,null))):e.createElement(b.o,{"aria-busy":Ae},e.createElement(s.SettingsPageTitle,{name:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(C.T,{title:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(D.D,null,e.createElement(me,{onEditClick:Se,canUpdate:G}),c&&e.createElement(ye,{template:ae[U],onToggle:z,onSubmit:Ue})))},je=Re},2407:(Q,I,t)=>{t.d(I,{$:()=>L,O:()=>g});var e=t(67294),y=t(45697),M=t(71893),s=t(16405),j=t(72735),b=t(35961),C=t(46273),D=t(63237),f=Object.defineProperty,l=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,x=(o,i,m)=>i in o?f(o,i,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[i]=m,K=(o,i)=>{for(var m in i||(i={}))E.call(i,m)&&x(o,m,i[m]);if(l)for(var m of l(i))F.call(i,m)&&x(o,m,i[m]);return o},p=(o,i)=>{var m={};for(var v in o)E.call(o,v)&&i.indexOf(v)<0&&(m[v]=o[v]);if(o!=null&&l)for(var v of l(o))i.indexOf(v)<0&&F.call(o,v)&&(m[v]=o[v]);return m};const V=(0,M.default)(C.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
  :last-of-type ${b.x} {
    display: none;
  }
  :last-of-type ${j.Z} {
    color: ${({theme:o})=>o.colors.neutral800};
    font-weight: ${({theme:o})=>o.fontWeights.bold};
  }
`,L=({children:o})=>e.createElement(V,{inline:!0,as:"li"},e.createElement(j.Z,{variant:"pi",textColor:"neutral600"},o),e.createElement(b.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},e.createElement(s.default,null)));L.displayName="Crumb",L.propTypes={children:y.node.isRequired};const S=y.shape({type:y.oneOf([L])}),g=o=>{var i=o,{children:m,label:v}=i,Z=p(i,["children","label"]);return e.createElement(C.k,K({},Z),e.createElement(D.T,null,v),e.createElement("ol",{"aria-hidden":!0},m))};g.displayName="Breadcrumbs",g.propTypes={children:y.oneOfType([y.arrayOf(S),S]).isRequired,label:y.string.isRequired}},30815:(Q,I,t)=>{t.d(I,{Z:()=>D});var e=t(67294),y=Object.defineProperty,M=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,b=(f,l,E)=>l in f?y(f,l,{enumerable:!0,configurable:!0,writable:!0,value:E}):f[l]=E,C=(f,l)=>{for(var E in l||(l={}))s.call(l,E)&&b(f,E,l[E]);if(M)for(var E of M(l))j.call(l,E)&&b(f,E,l[E]);return f};function D(f){return e.createElement("svg",C({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}}]);