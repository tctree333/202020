let button = document.getElementById('button');
let state = true;
let currentMin = 20;

chrome.storage.sync.get('started', function(data){
  state = data.started;
});

button.onclick = function(){
  chrome.storage.sync.get('started', function(data){
    state = data.started;
  });

  if(state === true){
    chrome.alarms.clearAll();
    chrome.storage.sync.set({started: false}, function() {
      console.log("Stopped");
    });
    notify("20/20/20 has been stopped.", "");
    chrome.browserAction.setBadgeText( { text: "Off" } );
    chrome.browserAction.setBadgeBackgroundColor({color: "#cc2323"});


  }else{
    chrome.alarms.clearAll();
    chrome.alarms.create("timer", {delayInMinutes: 2});
    chrome.storage.sync.set({started: true}, function() {
      console.log("Started");
    });
    notify("20/20/20 has been started.", "");
    chrome.browserAction.setBadgeText( { text: "On" } );
    chrome.browserAction.setBadgeBackgroundColor({color: "#57cf59"});


  }
  window.close();

}

function notify(title, content){
  new Notification(title, {
    icon: 'img/img.png',
    body: content

  });
}
