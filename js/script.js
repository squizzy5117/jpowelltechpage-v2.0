document.getElementById("openOrClosed");
var openOrClosedJS = document.getElementById("openOrClosed");
var time = new Date().getHours();
var message;
if (time < 8 || time > 18)
{
    message = "CLOSED";
}
else 
{
    message = "OPEN";
}
openOrClosedJS.innerText = message;
