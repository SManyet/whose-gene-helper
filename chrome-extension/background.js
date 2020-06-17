console.log("background running");


chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked() {
    // console.log("button clicked");
    var ta = document.createElement("textarea")
    document.body.appendChild(ta);
    ta.focus();
    document.execCommand("paste");
    var text = ta.value;
    text = text.replace(/[^atgcATGC]/g, '');
    console.log(text)
    document.body.removeChild(ta);
}
