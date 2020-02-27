console.log("CONTENT SCRIPT");
chrome.runtime.sendMessage("IM CREATED")
chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
console.log(message);
document.title = message;
}

//probably starts listening later than the msg is sent so uhh - this should send a msg first that yo, im created and then they can chat
