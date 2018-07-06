let i = 0;
chrome.runtime.onInstalled.addListener(function() {

  chrome.tabs.create({url: "install.html"});
});

function time(){

  notify("It's been 20 minutes!", "Take a break, rest your eyes.");

  setTimeout(function(){
    notify("That was 20 seconds.","You can go back to work now!");
    chrome.alarms.clearAll();
    chrome.alarms.create("timer", {delayInMinutes: 2});
  }, 20000);

}

function playSound(){
    var yourSound = new Audio('sound.mp3');
    yourSound.play();
}

function notify(title, content){
  new Notification(title, {
    icon: 'img/img.png',
    body: content,
    requireInteraction: true
  });
  playSound();
}

chrome.alarms.onAlarm.addListener(function(data){
  time();
});
