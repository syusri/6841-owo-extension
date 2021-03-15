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