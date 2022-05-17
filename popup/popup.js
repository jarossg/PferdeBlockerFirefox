const setBlocked = info => {
  document.getElementById("blocked").textContent = "Auf dieser Seite blockierte Hufeisenfotzen: " + info.blocked;
};

window.onload = function() {

    var checkbox = document.querySelector("#statusCheckbox");

    browser.storage.local.get('active', function(result){
        checkbox.checked = result.active;
      });

    browser.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      browser.tabs.sendMessage(tabs[0].id, {from:"popup"},setBlocked);
    });

  
    checkbox.onchange = function() {
        browser.storage.local.set({active: checkbox.checked});
    };
};