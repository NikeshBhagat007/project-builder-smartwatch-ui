
//Set values on watch dynamically

var weekday =["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];


var date = new Date();
document.getElementById("shortTime").innerHTML = date.getHours()+":"+date.getMinutes();

document.getElementById("currentTime").innerHTML= date.getHours()+":"+date.getMinutes();

document.getElementById("currentDay").innerHTML = weekday[date.getDay()];