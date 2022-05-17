const tags = ["h1", "h2", "h3", "a", "p", "title", "div", "button"];
const namessing = ["Hufeneisenhuso", "Gemeiner Gaul", "Hufratte", "Hufeisenfotze", "Mistvieh"]
const namesplu = ["Hufeneisenhusos", "Gemeine Gäule", "Hufratten", "Hufeisenfotzen", "Mistviecher"]

var replaced = 0;

function cleanpage(active) {
  let element = null;
  if (true) {
    for (const tag of tags) {
      const elements = document.evaluate('//*[contains(text(),\'Pferd\') or contains(text(),\'pferd\')]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0; i < elements.snapshotLength; i++) {
        element = elements.snapshotItem(i);
        let text = element.innerText;

        let result = text.replace(/Pferde/g, function () { replaced += 1; return namesplu[Math.floor(Math.random() * namesplu.length)] });
        result = result.replace(/Pferd/g, function () { replaced += 1; return namessing[Math.floor(Math.random() * namessing.length)] });

        result = result.replace(/pferde/g, function () { replaced += 1; return namesplu[Math.floor(Math.random() * namesplu.length)].toLowerCase() });
        result = result.replace(/pferd/g, function () { replaced += 1; return namessing[Math.floor(Math.random() * namessing.length)].toLowerCase() });

        element.innerHTML = result;
      }

    }
  }
}


browser.runtime.sendMessage({ tes: "test" }, function (response) {
  let active = response.status;
  cleanPage(active);
});

browser.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.from === "popup") {
    var info = {
      blocked: replaced
    };

    response(info);
  }
})
