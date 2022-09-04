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
        alert("Invalid E-mailId!");
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
    alert("Invalid E-mailId!");
   }
}
let aspirescontainer=[
    {
    cardimage:"Pictures/Image_placeholder.svg",
    date:"01 MAY 2020",
    heading:"Heading",
    telescope:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope",
    viewicon:"Pictures/visibilityIcon.svg",
    viewcontent:"7.4K",
    messageicon:"Pictures/messageIcon.svg",
    messagecontent:"31",
    },
    {
    cardimage:"Pictures/Image_placeholder.svg",
    date:"01 MAY 2020",
    heading:"Two line header example",
    telescope:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope",
    viewicon:"Pictures/visibilityIcon.svg",
    viewcontent:"7.4K",
    messageicon:"Pictures/messageIcon.svg",
    messagecontent:"31",
    },
    {
    cardimage:"Pictures/Image_placeholder.svg",
    date:"01 MAY 2020",
    heading:"Heading",
    telescope:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope",
    viewicon:"Pictures/visibilityIcon.svg",
    viewcontent:"7.4K",
    messageicon:"Pictures/messageIcon.svg",
    messagecontent:"31",
    },
    {
    cardimage:"Pictures/Image_placeholder.svg",
    date:"01 MAY 2020",
    heading:"Two line header example",
    telescope:"Moment in the life of any aspiring astronomer of that it is time to buy that first telescope",
    viewicon:"Pictures/visibilityIcon.svg",
    viewcontent:"7.4K",
    messageicon:"Pictures/messageIcon.svg",
    messagecontent:"31",
    }];
    var card="";
    for(var i=0;i<aspirescontainer.length;i++){
        card+='<div class="telescope">';
        card+="<div class='telescopeimg'><img src=" +aspirescontainer[i].cardimage+ '></div>';
        card+='<p id="date">'+aspirescontainer[i].date+'</p>';
        card+='<h3>'+aspirescontainer[i].heading+'</h2>';
        card+='<p class="firstTelescope">'+aspirescontainer[i].telescope+'</p>' ;
        card+='<div class="viewsmessages">';
        card+='<div class="views">';
        card+="<div><img src=" +aspirescontainer[i].viewicon+ '></div>';
        card+='<div>'+aspirescontainer[i].viewcontent+ '</div> </div>';
        card+='<div class="messages">';
        card+="<div><img src=" +aspirescontainer[i].messageicon+ '></div>';
        card+='<div>'+aspirescontainer[i].messagecontent+ '</div> </div> </div> </div>';
        
    }
    document.getElementById("aspires_content").innerHTML=card;
