var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime;
var updateClock = function() {
var message = document.getElementById("timeEvent");
var messageText;
var lolcat = document.getElementById('lolcat');
var image = "http://www.lolcats.com/images/u/08/21/lolcatsdotcomoshkibgd6knkz0s5.jpg";
lolcat.src = image;
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";

} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "IZ BURRITO NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} else {
	image = "http://www.lolcats.com/images/u/11/40/lolcatsdotcom4emlg8h6l1mk0t1h.jpg";
    messageText = "IZ CHEEZEBURGER TIME";
}
message.innerText = messageText;
lolcat.src = image;
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime(); };
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Time";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.backgroundColor = "#000000";

  }
};
partyTimeButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change",wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change",lunchTimeEvent);

var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function() {
	napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napTimeEvent);
