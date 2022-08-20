
document.getElementById("submitButton").onclick = function()
{
let temp;
if (document.getElementById("cBtn").checked) {
temp = document.getElementById("textBox").value;
 temp = Number(temp);
 temp = toCelsius(temp);
 document.getElementById("answerBox").innerHTML = temp  + "\u00B0C" ;
 document.getElementById("answerBox").style.color = "blue";
   }

else if(document.getElementById("fBtn").checked){
temp = document.getElementById("textBox").value;
 temp = Number(temp);
 temp = toFahrenheit(temp);
 document.getElementById("answerBox").innerHTML = temp
 + "\u00B0F";
 document.getElementById("answerBox").style.color = "white";
   }

   else{
    document.getElementById("answerBox").innerHTML = " please select a unit!" ;
  document.getElementById("answerBox").style.color ="red";
   }
}
function toCelsius(temp){
    return Math.round((temp - 32)* (5/9));
}

function toFahrenheit(temp){
    return  Math.round( temp * 9/5 + 32);
}