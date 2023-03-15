var userId="praveengummudu@gmail.com"
var userPassword="311"
function logintowebpage()
{
var userGivenId=document.getElementById("usid").value
var userGivenPass=document.getElementById("pass").value
if (userId==userGivenId && userPassword==userGivenPass)
{
   var fom=document.forms
   fom[0].action="./html/home.html"
   fom[0].elements[2].type="submit"
}
else if(userId==userGivenId && userPassword!=userGivenPass)
{
   document.getElementById("result").innerHTML="Wrong Password Entered"
   document.getElementById("emailDiv").style.borderColor="royalblue"
   document.getElementById("passDiv").style.borderColor="red"
   document.body.style.backgroundImage="linear-gradient(75deg,rgb(199, 0, 99),red"
}
else if(userId!=userGivenId && userPassword==userGivenPass)
{
    document.getElementById("result").innerHTML="Wrong UserId Entered"
    document.getElementById("passDiv").style.borderColor="royalblue"
    document.getElementById("emailDiv").style.borderColor="red"
    document.body.style.backgroundImage="linear-gradient(75deg,red,rgb(107, 0, 107))"
}
else
{
   document.getElementById("result").innerHTML="Wrong UserId and Password Entered"
   document.getElementById("emailDiv").style.borderColor="red"
   document.getElementById("passDiv").style.borderColor="red"
   document.body.style.backgroundImage="none"
   document.body.style.backgroundColor="red"
}
}
function passvis()
{
   document.getElementById("pass").removeAttribute("type")
   document.getElementById("visible").setAttribute("src","./asset/images/close.png")
   document.getElementById("visible").style.transform="rotateY(360deg)"
   document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
   document.getElementById("pass").setAttribute("type","password")
   document.getElementById("visible").setAttribute("src","./asset/images/visible.png")
   document.getElementById("visible").style.transform="rotateY(-360deg)"
   document.getElementById("visible").style.transition="transform 0.3s"
}
