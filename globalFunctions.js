function htmlToElement(html) {
    var template = document.createElement('template')
    html = html.trim()
    template.innerHTML = html
    return template.content.firstChild
}

/*var td = htmlToElement('<td>foo</td>'),
div = htmlToElement('<div><span>nested</span> <span>stuff</span></div>');
*/

function htmlToElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}
/*var rows = htmlToElements('<tr><td>foo</td></tr><tr><td>bar</td></tr>');
console.log(rows)*/

function getElementById(elementId){
    return document.getElementById(elementId)
}

function modifyHiddenState(targetElement, value){
    getElementById(targetElement).hidden = value
}

function modifyElement(targetElement,targetProperty, newValue){
    getElementById(targetElement)[targetProperty] = newValue
}

async function validateString(string){
    if(string === "" || string === " " || string === "  " || string === "   " || string === "    " || string === "     "){
        return false
    } else {
        return true
    }
}

async function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
