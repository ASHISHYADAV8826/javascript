function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()


//to add a zero in front of numbers&lt;10

m=checkTime(m)
s=checkTime(s)

document.getElementById('clock').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()', 500)
}

function checkTime(i)
{
if (i&lt;10)
{ i="0" + i}
return i
}

window.onload=startTime;

&lt;/script&gt;
&lt;div id="clock" style="font-size:35px;color:#00aaff;text-shadow:2px 2px 2px blue;"
border:3px groove blue;background-color:#aaffaa; width:195px; height:40px"&gt;&lt;/div&gt;</pre>