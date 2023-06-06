function charactersInRange(ch1, ch2) {

    let starChar = Math.min(ch1.charCodeAt(), ch2.charCodeAt());
    let endChar = Math.max(ch1.charCodeAt(), ch2.charCodeAt());
    let charArray = [];
    for (let currentChar = starChar +1; currentChar < endChar; currentChar++) {
        charArray.push(String.fromCharCode(currentChar));
    }
    return charArray.join(" ");
}
// console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#',':'));
// console.log(charactersInRange('C','#'));
