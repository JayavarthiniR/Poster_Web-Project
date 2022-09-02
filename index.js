const hamburger=document.querySelector(".hamburger");
const linkOptions=document.querySelector(".linkOptions");
hamburger.addEventListener("click", () =>{
      hamburger.classList.toggle("active");
      linkOptions.classList.toggle("active");
    })
document.querySelectorAll(".linknumber").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    linkOptions.classList.remove("active");
}))
function submitit(){
     var email = document.getElementById("email").value;
     var validemail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(email.match(validemail))
    {
        alert(email);
    }
    else
    {
        document.getElementById("subscribeit").innerHTML = " Invalid E-mailId!";
    }
}
function verifySubmit(){
    var email1 = document.getElementById("email1").value;
    var validemail1 = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
   if(email1.match(validemail1))
   {
    alert(email1);
   }
   else
   {
       document.getElementById("verifySubscribe").innerHTML = " Invalid E-mailId!";
   }
}
