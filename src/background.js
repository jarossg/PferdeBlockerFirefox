let active = true;

chrome.storage.local.get('active', function(result){
  active = result.active;
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  active = changes.active.newValue;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    sendResponse({status: active});
  }
);