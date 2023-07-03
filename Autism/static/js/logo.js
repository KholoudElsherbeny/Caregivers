// const logo = document.querySelectorAll("#logo path");
// var loader = document.querySelector(".loader");
// const container = document.getElementById('container');
// //console.log(logo);
// for(let i = 0; i < logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// };
// let list = document.querySelectorAll(".list");
// function activelink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
// list.forEach((item) => item.addEventListener("click", activelink));

// var AccForm = document.getElementById("AccForm");
// var AccForm2 = document.getElementById("AccForm2");
// var callBtn = document.getElementById("callLogin");
// var callBtn2 = document.getElementById("callLogin2");


// document.getElementById("callLogin").addEventListener("click", function(){
//     Object.assign(this.style,{transform:"scale(0)",visibility:"hidden",opacity:"0"});
//     window.setTimeout(function(){
//         Object.assign(AccForm.style,{transform:"scale(1)",visibility:"visible",opacity:"1"}); 
//     },500)

//     window.setTimeout(function(){
//         document.getElementById("userName").focus();
//         document.getElementById("emailId").focus();
//     },1200)
// });

// document.getElementById("close").addEventListener("click", function(){
//     Object.assign(AccForm.style,{transform:"scale(0)",visibility:"hidden",opacity:"0"});
//     window.setTimeout(function(){
//         Object.assign(callBtn.style,{transform:"scale(1)",visibility:"visible",opacity:"1"});
//     },500)
// });

// document.getElementById("callLogin2").addEventListener("click", function(){
//     Object.assign(this.style,{transform:"scale(0)",visibility:"hidden",opacity:"0"});
//     window.setTimeout(function(){
//         Object.assign(AccForm2.style,{transform:"scale(1)",visibility:"visible",opacity:"1"}); 
//     },500)

//     window.setTimeout(function(){
//         document.getElementById("userName").focus();
//         document.getElementById("emailId").focus();
//     },1200)
// });

// document.getElementById("close2").addEventListener("click", function(){
//     Object.assign(AccForm2.style,{transform:"scale(0)",visibility:"hidden",opacity:"0"});
//     window.setTimeout(function(){
//         Object.assign(callBtn2.style,{transform:"scale(1)",visibility:"visible",opacity:"1"});
//     },500)
// });

// function formChange() {

//     var newAcc = document.getElementById("newUser");
//     var gBtn = document.getElementById("accGoogle");
//     var fBtn = document.getElementById("accFacebook");
//     var lsBtn = document.getElementById("logSignBtn");
//     var uIcon = document.getElementById("accIcon");

//     newAcc.classList.toggle("active");
    
//     window.setTimeout(function(){
//         document.getElementById("emailId").focus();
//         document.getElementById("userName").focus();
//     },700)
    
//     if(gBtn.innerHTML === "LogIn with Google") {
//         gBtn.innerHTML = "SignUp with Google";
//     }
//     else {
//         gBtn.innerHTML = "LogIn with Google"
//     }

//     if(fBtn.innerHTML === "LogIn with Facebook") {
//         fBtn.innerHTML = "SignUp with Facebook";
//     }
//     else {
//         fBtn.innerHTML = "LogIn with Facebook"
//     }

//     if(lsBtn.innerHTML === "SignUp") {
//         lsBtn.innerHTML = "LogIn";
//         document.getElementById("accIcon").setAttribute("class", "fas fa-sign-in-alt");
//     }
//     else {
//         lsBtn.innerHTML = "SignUp"
//         document.getElementById("accIcon").setAttribute("class", "fas fa-user-plus");
//     }
// }

// function formChange2() {

//     var newAcc2 = document.getElementById("newUser2");
//     var gBtn2 = document.getElementById("accGoogle2");
//     var fBtn2 = document.getElementById("accFacebook2");
//     var lsBtn2 = document.getElementById("logSignBtn2");
//     var uIcon2 = document.getElementById("accIcon2");

//     newAcc2.classList.toggle("active");
    
//     window.setTimeout(function(){
//         document.getElementById("emailId2").focus();
//         document.getElementById("userName2").focus();
//     },700)
    
//     if(gBtn2.innerHTML === "LogIn2 with Google") {
//         gBtn2.innerHTML = "SignUp2 with Google";
//     }
//     else {
//         gBtn2.innerHTML = "LogIn2 with Google"
//     }

//     if(fBtn2.innerHTML === "LogIn2 with Facebook") {
//         fBtn2.innerHTML = "SignUp2 with Facebook";
//     }
//     else {
//         fBtn2.innerHTML = "LogIn2 with Facebook"
//     }

//     if(lsBtn2.innerHTML === "SignUp") {
//         lsBtn2.innerHTML = "LogIn";
//         document.getElementById("accIcon2").setAttribute("class", "fas fa-sign-in-alt");
//     }
//     else {
//         lsBtn2.innerHTML = "SignUp"
//         document.getElementById("accIcon2").setAttribute("class", "fas fa-user-plus");
//     }
// }


// let login = document.querySelector('.login');
// let create = document.querySelector('.create');
// let container = document.querySelector('.container');

// login.onclick = function(){
//     container.classList.add('signinForm');
// }

// create.onclick = function(){
//     container.classList.remove('signinForm');
// }


// stop Animatio 
/*window.addEventListener("load", fill);
function fill (){
    loader.className += "hidden";
}; */