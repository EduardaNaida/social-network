"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[638],{9638:function(e,s,t){t.r(s),t.d(s,{ProfileContainer:function(){return U},default:function(){return J}});var n=t(1413),i=t(5671),r=t(3144),o=t(136),a=t(8557),l=t(2791),u=t(885),c={description:"ProfileInfo_description__u7GZ5"},d=t(9489),h=t(184),p=function(e){var s=(0,l.useState)(!1),t=(0,u.Z)(s,2),n=t[0],i=t[1],r=(0,l.useState)(e.status),o=(0,u.Z)(r,2),a=o[0],c=o[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[!n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onClick:function(){i(!0)},children:e.status||"No status"})}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){i(!1),e.updateStatus(a)},value:a})})]})},f=t(8987),x=function(e){var s=e.contactValue,t=e.contactTitle;return(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:t}),": ",s]})},j=function(e){var s=e.profile,t=e.isOwner,n=(e.updateStatus,e.status,e.callback);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:t&&(0,h.jsx)("button",{onClick:n,children:"edit"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name:"})," ",s.fullName]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job: "})," ",s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills: "}),s.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me: "})," ",s.aboutMe]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(e){return(0,h.jsx)(x,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})},m=t(6139),v=t(704),b=t(9548),g=t(5298),k=t(1408),P=(0,v.Z)({form:"edit-profile"})((function(e){var s=e.handleSubmit,t=e.profile,n=e.error;return(0,h.jsxs)("form",{onSubmit:s,children:[(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"save"})}),n&&(0,h.jsx)("div",{className:k.Z.formControlError,children:n}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name:"}),(0,h.jsx)(m.Z,{placeholder:"Full name",name:"fullName",component:b.ox,validate:[g.l]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job: "}),(0,h.jsx)(m.Z,{component:b.ox,type:"checkbox",name:"lookingForAJob"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills: "}),(0,h.jsx)(m.Z,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:b.ox})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me: "}),(0,h.jsx)(m.Z,{placeholder:"About me",name:"aboutMe",component:b.ox})]}),(0,h.jsx)("div",{children:(0,h.jsx)("b",{children:"Contacts:"})})," ",Object.keys(t.contacts).map((function(e){return(0,h.jsxs)("div",{children:[e,": ",(0,h.jsx)(m.Z,{placeholder:e,name:"contacts."+e,component:b.ox})]},e)}))]})})),Z=function(e){var s=e.profile,t=e.status,n=e.updateStatus,i=e.saveProfile,r=e.isOwner,o=e.savePhoto,a=(0,l.useState)(!1),x=(0,u.Z)(a,2),m=x[0],v=x[1],b=l.useState(),g=(0,u.Z)(b,2);g[0],g[1];if(!s)return(0,h.jsx)(d.Z,{});return(0,h.jsxs)("div",{className:c.profile,children:[(0,h.jsxs)("div",{className:c.description,children:[(0,h.jsx)("img",{src:s.photos.large||f,alt:"profile"}),r&&(0,h.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&(console.log(e.target.files[0]),o(e.target.files[0]))}}),m?(0,h.jsx)(P,{initialValues:s,profile:s,onSubmit:function(e){i(e).then((function(){v(!1)}))}}):(0,h.jsx)(j,{profile:s,status:t,updateStatus:n,callback:function(){v(!0)},isOwner:r})]}),(0,h.jsx)(p,{status:t,updateStatus:n})]})},S=t(6407),y="MyPosts_posts__GSiZ2",A="Post_item__Yu4oG",C=function(e){return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:A,children:[e.name,(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://img.icons8.com/bubbles/50/000000/user.png",alt:"userAvatar"}),e.message,(0,h.jsxs)("div",{children:[e.likes,"likes"]})]})]})})},w=(0,g.D)(10),_=(0,v.Z)({form:"text"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(m.Z,{placeholder:"Write your new post",name:"text",component:b.Kx,validate:[g.l,w]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),F=l.memo((function(e){console.log("RENDER POST");var s=e.profilePage.postData.map((function(e,s){return(0,h.jsx)(C,{name:e.name,message:e.message,likes:e.likes},s)}));return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(_,{onSubmit:function(s){e.addPostCallback(s.text)}}),s]})})),N=t(364),O=(0,N.$j)((function(e){return{profilePage:e.profilePage,newTextValue:e.profilePage.newTextValue}}),(function(e){return{addPostCallback:function(s){e((0,S.hB)(s))}}}))(F),I=function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(Z,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile,isOwner:e.isOwner,savePhoto:e.savePhoto}),(0,h.jsx)(O,{})]})})},M=t(9271),D=t(2163),T=t(7781),U=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=String(this.props.userId))||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(I,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus,saveProfile:this.props.saveProfile,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),J=(0,T.qC)((0,N.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:S.et,getUserStatus:S.Tq,updateUserStatus:S.OL,saveProfile:S.Ii,savePhoto:S.Ju}),M.EN,D.Z)(U)},2163:function(e,s,t){var n=t(1413),i=t(5987),r=(t(2791),t(9271)),o=t(364),a=t(184),l=["isAuth"],u=function(e){return{isAuth:e.auth.isAuth}};s.Z=function(e){return(0,o.$j)(u)((function(s){var t=s.isAuth,o=(0,i.Z)(s,l);return t?(0,a.jsx)(e,(0,n.Z)({},o)):(0,a.jsx)(r.l_,{to:"login"})}))}}}]);
//# sourceMappingURL=638.4c89cd2d.chunk.js.map