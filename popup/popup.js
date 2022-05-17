const setBlocked = info => {
  document.getElementById("blocked").textContent = "Auf dieser Seite blockierte Hufeisenfotzen: " + info.blocked;
};

window.onload = function() {

    var checkbox = document.querySelector("#statusCheckbox");

    chrome.storage.local.get('active', function(result){
        checkbox.checked = result.active;
      });

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {from:"popup"},setBlocked);
    });

  
    checkbox.onchange = function() {
        chrome.storage.local.set({active: checkbox.checked});
    };
};