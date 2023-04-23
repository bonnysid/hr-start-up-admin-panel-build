"use strict";(self.webpackChunkhr_start_up_admin_panel=self.webpackChunkhr_start_up_admin_panel||[]).push([[246],{5457:function(n,e,t){t.d(e,{V:function(){return C},w:function(){return N}});var i,r,s,a,o,l,c,d,u=t(1413),x=(t(2791),t(3131)),p=t(3538),f=t(168),h=t(6444),g=t(2450),Z=h.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  gap: 16px;\n"]))),v=(0,h.ZP)(p.zx)(r||(r=(0,f.Z)(["\n  width: 50%;\n"]))),m=h.ZP.div(s||(s=(0,f.Z)(["\n  padding: 56px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n"]))),j=h.ZP.div(a||(a=(0,f.Z)(["\n  width: 56px;\n  height: 56px;\n  padding: 16px;\n  border-radius: 50%;\n  &.answer {\n    color: ",";\n    background-color: ",";\n  }\n  &.notification {\n    color: ",";\n    background-color: ",";\n  }\n  &.warning {\n    color: ",";\n    background-color: ",";\n  }\n  &.info {\n    color: ",";\n    background-color: ",";\n  }\n"])),g.D.yellow70,g.D.yellow30,g.D.green70,g.D.green30,g.D.red70,g.D.red30,g.D.blue70,g.D.blue30),b=h.ZP.div(o||(o=(0,f.Z)(["\n  text-align: center;\n"]))),w=h.ZP.div(l||(l=(0,f.Z)(["\n  width: 600px;\n  position: relative;\n"]))),y=h.ZP.div(c||(c=(0,f.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: ",";\n  transition: color 0.2s;\n\n  &:hover {\n    color: ",";\n  }\n"])),g.D.gray60,g.D.darkGray150),k=h.ZP.div(d||(d=(0,f.Z)(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: -0.019em;\n"]))),P=t(184),N=function(n){return n.ANSWER="answer",n.NOTIFICATION="notification",n.WARNING="warning",n.INFO="info",n}({}),D={answer:"circle-warning",notification:"circle-information",warning:"warning",info:"circle-information"},C=function(n){var e=n.loading,t=n.className,i=n.title,r=n.type,s=n.closeHandler,a=n.onConfirm,o=n.onOk,l=n.actions,c=n.children;return(0,P.jsx)(p.u_,{open:!0,onClose:s,children:(0,P.jsxs)(w,{className:t,children:[(0,P.jsx)(y,{onClick:s,children:(0,P.jsx)(x.I,{type:"close"})}),(0,P.jsxs)(m,{children:[r&&(0,P.jsx)(j,{className:r,children:(0,P.jsx)(x.I,{type:D[r]})}),i&&(0,P.jsx)(k,{children:i}),(0,P.jsx)(b,{children:c})]}),(0,P.jsx)(Z,{children:a?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,(0,u.Z)((0,u.Z)({},null===l||void 0===l?void 0:l.submit),{},{variant:r===N.WARNING?p.Wu.DANGER:p.Wu.FILLED,onClick:a,isLoading:e,disabled:e})),(0,P.jsx)(v,(0,u.Z)((0,u.Z)({},null===l||void 0===l?void 0:l.cancel),{},{id:"ConfirmDialogCancel",variant:p.Wu.OUTLINE,onClick:s,disabled:e}))]}):(0,P.jsx)(v,(0,u.Z)({onClick:o,isLoading:e},null===l||void 0===l?void 0:l.ok))})]})})}},6246:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var i,r,s,a,o,l,c,d,u,x,p,f,h,g,Z,v,m,j,b=t(4165),w=t(5861),y=t(9439),k=t(2791),P=t(168),N=t(6444),D=N.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  grid-row-gap: 24px;\n  width: 100%;\n  height: 100%;\n  padding: 24px;\n"]))),C=N.ZP.div(r||(r=(0,P.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: max-content;\n  grid-row-gap: 14px;\n  width: 100%;\n  height: 100%;\n"]))),W=N.ZP.div(s||(s=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]))),I=t(3538),E=t(6068),_=t(9514),z=t(5671),A=t(3144),G=t(46),F=function(){function n(){(0,z.Z)(this,n)}return(0,A.Z)(n,null,[{key:"fetchPosts",value:function(){return G.e.get("/admin/posts")}},{key:"banPost",value:function(n){return G.e.post("/admin/posts/ban/".concat(n))}},{key:"unbanPost",value:function(n){return G.e.post("/admin/posts/unban/".concat(n))}}]),n}(),L=t(2450),O=N.ZP.div(a||(a=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid ",";\n  background: ",";\n  cursor: pointer;\n  transition: background-color .3s;\n  border: 1px solid ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),L.D.lightGray40,L.D.white,L.D.lightGray40,L.D.lightGray20),R=N.ZP.div(o||(o=(0,P.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n"]))),S=N.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 10px;\n  align-items: center;\n"]))),T=N.ZP.div(c||(c=(0,P.Z)(["\n  font-size: 15px;\n  font-weight: 500;\n"]))),q=N.ZP.div(d||(d=(0,P.Z)(["\n  font-size: 14px;\n  color: ",";\n"])),L.D.gray90),V=N.ZP.div(u||(u=(0,P.Z)(["\n  display: flex;\n  padding: 4px 6px;\n  border-radius: 6px;\n"]))),H=t(6886),U=t(184),B=function(n){var e=n.tag;return(0,U.jsx)(V,{style:H.i[(0,I.be)(e.id.slice(-1),H.i.length)],children:e.value})},J=function(n){var e=n.post,t=n.onClick;return(0,U.jsxs)(O,{onClick:t,children:[(0,U.jsxs)(R,{children:[(0,U.jsxs)(T,{children:[e.title," (",e.id,")"]}),(0,U.jsx)(I.qb,{status:e.status})]}),(0,U.jsx)(S,{children:e.tags.map((function(n){return(0,U.jsx)(B,{tag:n},n.id)}))}),(0,U.jsxs)(S,{children:[(0,U.jsx)(I.qE,{firstName:e.user.firstName,lastName:e.user.lastName,src:e.user.avatar}),e.user.lastName," ",e.user.firstName," (",e.user.email,")"]}),(0,U.jsx)(q,{children:e.shortDescription})]})},M=t(6710),Q=N.ZP.div(x||(x=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  grid-row-gap: 18px;\n  width: 100%;\n  height: 100%;\n"]))),Y=N.ZP.div(p||(p=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: space-between;\n  width: 100%;\n"]))),K=N.ZP.div(f||(f=(0,P.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: -0.014em;\n"]))),X=(N.ZP.div(h||(h=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),N.ZP.div(g||(g=(0,P.Z)(["\n  font-size: 24px;\n"]))),N.ZP.div(Z||(Z=(0,P.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 10px;\n  align-items: center;\n"])))),$=N.ZP.div(v||(v=(0,P.Z)(["\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  grid-column-gap: 24px;\n"]))),nn=((0,N.ZP)(M.Z)(m||(m=(0,P.Z)(["\n  width: 100% !important;\n"]))),N.ZP.div(j||(j=(0,P.Z)(["\n  font-size: 14px;\n  color: ",";\n"])),L.D.gray90)),en=t(7518),tn=t(5457),rn=function(n){var e=n.onClose,t=n.post,i=n.refetch,r=(0,k.useState)(!1),s=(0,y.Z)(r,2),a=s[0],o=s[1],l=(0,E.t)(),c=t.status===en.J.ACTIVE,d=function(){var n=(0,w.Z)((0,b.Z)().mark((function n(){var r,s;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,o(!0),!c){n.next=9;break}return n.next=5,F.banPost(t.id);case 5:r=n.sent,(0,_.x)(r.data.message),n.next=13;break;case 9:return n.next=11,F.unbanPost(t.id);case 11:s=n.sent,(0,_.x)(s.data.message);case 13:i(),l.close(),e(),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),(0,_._)(n.t0);case 21:return n.prev=21,o(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[0,18,21,24]])})));return function(){return n.apply(this,arguments)}}();return(0,U.jsxs)(I.Bm,{titleText:(0,U.jsxs)(Y,{children:[(0,U.jsx)(K,{children:(0,U.jsxs)(I.g2,{tooltip:!0,children:[t.title," (",t.id,")"]})}),(0,U.jsx)(I.qb,{status:t.status})]}),onClose:e,closeOnDocumentClick:!1,children:[(0,U.jsxs)(Q,{children:[(0,U.jsx)(I.bW,{text:"ID:",info:(0,U.jsx)(U.Fragment,{children:t.id})}),(0,U.jsx)(I.bW,{text:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a:",info:(0,U.jsx)(U.Fragment,{children:t.title})}),(0,U.jsx)(I.bW,{text:"\u0410\u0432\u0442\u043e\u0440:",info:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(I.qE,{firstName:t.user.firstName,lastName:t.user.lastName,src:t.user.avatar}),t.user.lastName," ",t.user.firstName," (",t.user.email,")"]})}),(0,U.jsx)(I.bW,{text:"\u0422\u0435\u0433\u0438:",info:(0,U.jsx)(X,{children:t.tags.map((function(n){return(0,U.jsx)(B,{tag:n},n.id)}))})}),(0,U.jsx)(I.bW,{text:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",info:(0,U.jsx)(nn,{children:t.shortDescription})}),(0,U.jsx)(I.bW,{text:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",info:(0,U.jsx)(nn,{children:t.description})}),(0,U.jsx)(I.Y7,{url:t.videoUrl}),(0,U.jsx)($,{children:(0,U.jsx)(I.zx,{fullWidth:!0,onClick:l.open,variant:c?I.Wu.DANGER:I.Wu.FILLED,text:c?"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),l.isOpen&&(0,U.jsxs)(tn.V,{type:c?tn.w.WARNING:tn.w.ANSWER,closeHandler:l.close,onConfirm:d,actions:{cancel:{text:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:l.close},submit:{isLoading:a,text:c?"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}},children:["\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 ",c?"\u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",' \u043f\u043e\u0441\u0442 "',t.title,'"?']})]})},sn=function(){var n=(0,E.t)(),e=(n.isOpen,n.open,n.close,(0,k.useState)(!0)),t=(0,y.Z)(e,2),i=t[0],r=t[1],s=(0,k.useState)([]),a=(0,y.Z)(s,2),o=a[0],l=a[1],c=(0,k.useState)(),d=(0,y.Z)(c,2),u=d[0],x=d[1],p=function(){var n=(0,w.Z)((0,b.Z)().mark((function n(){var e;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,F.fetchPosts();case 4:e=n.sent,l(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,_._)(n.t0);case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();(0,k.useEffect)((function(){p()}),[]);var f=(0,k.useMemo)((function(){return i?(0,U.jsx)(I.QP,{}):o.length?(0,U.jsx)(C,{children:o.map((function(n){return(0,U.jsx)(J,{post:n,onClick:function(){return x(n)}},n.id)}))}):(0,U.jsx)(W,{children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435\u0442\u0443"})}),[o,i]);return(0,U.jsxs)(D,{children:[(0,U.jsx)(I.mr,{title:"\u041f\u043e\u0441\u0442\u044b"}),f,u&&(0,U.jsx)(rn,{post:u,onClose:function(){return x(void 0)},refetch:p})]})}}}]);
//# sourceMappingURL=246.60761a78.chunk.js.map