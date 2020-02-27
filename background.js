chrome.tabs.onCreated.addListener(function(tab) {
chrome.runtime.onMessage.addListener(function(message, sender, sendresponse){if (message == "IM CREATED"){chrome.tabs.sendMessage(tab.id, "HAHAHA");}})
console.log("aaaa")
  })
