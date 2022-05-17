let active = true;

browser.storage.local.get('active', function(result){
  active = result.active;
});

browser.storage.onChanged.addListener(function(changes, namespace) {
  active = changes.active.newValue;
});

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    sendResponse({status: active});
  }
);