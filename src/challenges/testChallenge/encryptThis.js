var encryptThis = function (text) {
    text = text.split(" ").map((element) => {
        if (element.length === 1) return element.charCodeAt(0);
        if (element.length === 2) return `${element.charCodeAt(0)}${element[1]}`
        return `${element.charCodeAt(0)}${element[element.length - 1]}${element.slice(2, element.length - 1)}${element[1]}`;
    }).join(" ");
    return text;
}


/**
 * 
 * encryptThis("Hello") === "72olle"
   encryptThis("good") === "103doo"
   encryptThis("hello world") === "104olle 119drlo"
 * 
 */
console.log(encryptThis("Hello"));
console.log(encryptThis("A"));
console.log(encryptThis("hello world"));