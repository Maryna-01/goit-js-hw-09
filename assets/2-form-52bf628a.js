const a=document.querySelector(".feedback-form"),s=a.elements.email,m=a.elements.message,l="feedback-form-state";let t={email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(l);e&&(t=JSON.parse(e),s.value=t.email,m.value=t.message)});a.addEventListener("input",e=>{t[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(t))});a.addEventListener("submit",e=>{if(e.preventDefault(),s.value.trim()===""||m.value.trim()===""){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(l),t={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form-52bf628a.js.map
