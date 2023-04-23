"use strict";(self.webpackChunkhr_start_up_admin_panel=self.webpackChunkhr_start_up_admin_panel||[]).push([[239],{5457:function(n,e,t){t.d(e,{V:function(){return I},w:function(){return D}});var i,r,a,c,o,l,s,u,d=t(1413),p=(t(2791),t(3131)),x=t(3538),h=t(168),f=t(6444),g=t(2450),v=f.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  gap: 16px;\n"]))),Z=(0,f.ZP)(x.zx)(r||(r=(0,h.Z)(["\n  width: 50%;\n"]))),m=f.ZP.div(a||(a=(0,h.Z)(["\n  padding: 56px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),j=f.ZP.div(c||(c=(0,h.Z)(["\n  width: 56px;\n  height: 56px;\n  padding: 16px;\n  border-radius: 50%;\n  &.answer {\n    color: ",";\n    background-color: ",";\n  }\n  &.notification {\n    color: ",";\n    background-color: ",";\n  }\n  &.warning {\n    color: ",";\n    background-color: ",";\n  }\n  &.info {\n    color: ",";\n    background-color: ",";\n  }\n"])),g.D.yellow70,g.D.yellow30,g.D.green70,g.D.green30,g.D.red70,g.D.red30,g.D.blue70,g.D.blue30),k=f.ZP.div(o||(o=(0,h.Z)(["\n  text-align: center;\n"]))),w=f.ZP.div(l||(l=(0,h.Z)(["\n  width: 600px;\n  position: relative;\n"]))),y=f.ZP.div(s||(s=(0,h.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: ",";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",";\n  }\n"])),g.D.gray60,g.D.darkGray150),b=f.ZP.div(u||(u=(0,h.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.019em;\n"]))),C=t(184),D=function(n){return n.ANSWER="answer",n.NOTIFICATION="notification",n.WARNING="warning",n.INFO="info",n}({}),P={answer:"circle-warning",notification:"circle-information",warning:"warning",info:"circle-information"},I=function(n){var e=n.loading,t=n.className,i=n.title,r=n.type,a=n.closeHandler,c=n.onConfirm,o=n.onOk,l=n.actions,s=n.children;return(0,C.jsx)(x.u_,{open:!0,onClose:a,children:(0,C.jsxs)(w,{className:t,children:[(0,C.jsx)(y,{onClick:a,children:(0,C.jsx)(p.I,{type:"close"})}),(0,C.jsxs)(m,{children:[r&&(0,C.jsx)(j,{className:r,children:(0,C.jsx)(p.I,{type:P[r]})}),i&&(0,C.jsx)(b,{children:i}),(0,C.jsx)(k,{children:s})]}),(0,C.jsx)(v,{children:c?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z,(0,d.Z)((0,d.Z)({},null===l||void 0===l?void 0:l.submit),{},{variant:r===D.WARNING?x.Wu.DANGER:x.Wu.FILLED,onClick:c,isLoading:e,disabled:e})),(0,C.jsx)(Z,(0,d.Z)((0,d.Z)({},null===l||void 0===l?void 0:l.cancel),{},{id:"ConfirmDialogCancel",variant:x.Wu.OUTLINE,onClick:a,disabled:e}))]}):(0,C.jsx)(Z,(0,d.Z)({onClick:o,isLoading:e},null===l||void 0===l?void 0:l.ok))})]})})}},239:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i,r,a,c,o,l,s,u,d,p,x,h,f=t(4165),g=t(5861),v=t(9439),Z=t(2791),m=t(168),j=t(6444),k=j.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  grid-row-gap: 24px;\n  width: 100%;\n  height: 100%;\n  padding: 24px;\n"]))),w=j.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  grid-row-gap: 14px;\n  width: 100%;\n  height: 100%;\n"]))),y=j.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]))),b=t(3538),C=t(6068),D=t(5671),P=t(3144),I=t(46),T=function(){function n(){(0,D.Z)(this,n)}return(0,P.Z)(n,null,[{key:"fetchTags",value:function(){return I.e.get("/tags")}},{key:"fetchCreateTag",value:function(n){return I.e.post("/admin/tags/create",{value:n})}},{key:"fetchDeleteTag",value:function(n){return I.e.delete("/admin/tags/".concat(n))}},{key:"fetchUpdateTag",value:function(n,e){return I.e.put("/admin/tags/".concat(n),{value:e})}},{key:"fetchTag",value:function(n){return I.e.get("/admin/tags/".concat(n))}}]),n}(),N=t(9514),W=j.ZP.form(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  grid-row-gap: 24px;\n"]))),_=j.ZP.div(o||(o=(0,m.Z)(["\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  grid-column-gap: 24px;\n"]))),L=t(5705),O=t(184),S=function(n){var e=n.close,t=n.refetch,i=(0,Z.useState)(!1),r=(0,v.Z)(i,2),a=r[0],c=r[1],o=(0,L.TA)({initialValues:{value:""},onSubmit:function(){var n=(0,g.Z)((0,f.Z)().mark((function n(i){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,T.fetchCreateTag(i.value);case 4:return(0,N.x)("\u0422\u0435\u0433 ".concat(i.value," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d")),c(!1),e(),n.next=9,t();case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),(0,N._)(n.t0);case 14:return n.prev=14,c(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(e){return n.apply(this,arguments)}}()});return(0,O.jsx)(b.Bm,{titleText:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430",onClose:e,closeOnDocumentClick:!1,children:(0,O.jsxs)(W,{onSubmit:o.handleSubmit,children:[(0,O.jsx)(b.II,{name:"value",onChange:o.handleChange,value:o.values.value,caption:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430"}),(0,O.jsxs)(_,{children:[(0,O.jsx)(b.zx,{text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",fullWidth:!0,isLoading:a}),(0,O.jsx)(b.zx,{variant:b.Wu.OUTLINE,text:"\u041e\u0442\u043c\u0435\u043d\u0430",fullWidth:!0,onClick:e})]})]})})},z=t(2450),E=t(3131),A=j.ZP.div(l||(l=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid ",";\n  background: ",";\n"])),z.D.lightGray40,z.D.white),G=j.ZP.div(s||(s=(0,m.Z)(["\n  font-size: 15px;\n"]))),R=j.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  grid-column-gap: 10px;\n"]))),U=(0,j.ZP)(E.I)(d||(d=(0,m.Z)(["\n  cursor: pointer;\n  color: ",";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",";\n  }\n"])),z.D.red60,z.D.red80),F=(0,j.ZP)(E.I)(p||(p=(0,m.Z)(["\n  cursor: pointer;\n  color: ",";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",";\n  }\n"])),z.D.darkGray110,z.D.darkGray140),V=t(5457),B=j.ZP.form(x||(x=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  grid-row-gap: 24px;\n"]))),H=j.ZP.div(h||(h=(0,m.Z)(["\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  grid-column-gap: 24px;\n"]))),J=function(n){var e=n.close,t=n.refetch,i=n.tag,r=(0,Z.useState)(!1),a=(0,v.Z)(r,2),c=a[0],o=a[1],l=(0,L.TA)({initialValues:{value:i.value},onSubmit:function(){var n=(0,g.Z)((0,f.Z)().mark((function n(r){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,T.fetchUpdateTag(i.id,r.value);case 4:return(0,N.x)("\u0422\u0435\u0433 ".concat(r.value," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d")),o(!1),e(),n.next=9,t();case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),(0,N._)(n.t0);case 14:return n.prev=14,o(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(e){return n.apply(this,arguments)}}()});return(0,O.jsx)(b.Bm,{titleText:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u0433\u0430",onClose:e,closeOnDocumentClick:!1,children:(0,O.jsxs)(B,{onSubmit:l.handleSubmit,children:[(0,O.jsx)(b.II,{name:"value",onChange:l.handleChange,value:l.values.value,caption:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430"}),(0,O.jsxs)(H,{children:[(0,O.jsx)(b.zx,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",fullWidth:!0,isLoading:c}),(0,O.jsx)(b.zx,{variant:b.Wu.OUTLINE,text:"\u041e\u0442\u043c\u0435\u043d\u0430",fullWidth:!0,onClick:e})]})]})})},X=function(n){var e=n.tag,t=n.refetch,i=(0,Z.useState)(!1),r=(0,v.Z)(i,2),a=r[0],c=r[1],o=(0,C.t)(),l=o.isOpen,s=o.open,u=o.close,d=(0,C.t)(),p=function(){var n=(0,g.Z)((0,f.Z)().mark((function n(){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,T.fetchDeleteTag(e.id);case 4:t(),u(),(0,N.x)("\u0422\u0435\u0433 ".concat(e.value," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),(0,N._)(n.t0);case 12:return n.prev=12,c(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return(0,O.jsxs)(A,{children:[(0,O.jsxs)(G,{children:[e.value," (",e.id,")"]}),(0,O.jsxs)(R,{children:[e.canDeleteEdit&&(0,O.jsx)(F,{type:"edit",size:E.J.XL,onClick:d.open}),e.canDeleteEdit&&(0,O.jsx)(U,{type:"delete",size:E.J.XL,onClick:s})]}),l&&(0,O.jsxs)(V.V,{type:V.w.WARNING,closeHandler:u,onConfirm:p,actions:{cancel:{text:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:u},submit:{isLoading:a,text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}},children:["\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u0433 ",e.value,"?"]}),d.isOpen&&(0,O.jsx)(J,{tag:e,close:d.close,refetch:t})]})},M=function(){var n=(0,C.t)(),e=n.isOpen,t=n.open,i=n.close,r=(0,Z.useState)(!0),a=(0,v.Z)(r,2),c=a[0],o=a[1],l=(0,Z.useState)([]),s=(0,v.Z)(l,2),u=s[0],d=s[1],p=function(){var n=(0,g.Z)((0,f.Z)().mark((function n(){var e;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,T.fetchTags();case 4:e=n.sent,d(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,N._)(n.t0);case 11:return n.prev=11,o(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();(0,Z.useEffect)((function(){p()}),[]);var x=(0,Z.useMemo)((function(){return c?(0,O.jsx)(b.QP,{}):u.length?(0,O.jsx)(w,{children:u.map((function(n){return(0,O.jsx)(X,{tag:n,refetch:p},n.id)}))}):(0,O.jsx)(y,{children:"\u0422\u0435\u0433\u043e\u0432 \u043d\u0435\u0442\u0443"})}),[u,c]);return(0,O.jsxs)(k,{children:[(0,O.jsx)(b.mr,{title:"\u0422\u0435\u0433\u0438",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0433",onButtonClick:t}),x,e&&(0,O.jsx)(S,{close:i,refetch:p})]})}}}]);
//# sourceMappingURL=239.4eae92f1.chunk.js.map