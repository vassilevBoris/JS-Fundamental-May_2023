function rightPlace(stringA, char, stringB) {
    let newStr = stringA.replace("_", char);
    if (newStr === stringB) {
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');
console.log("--------------------");
rightPlace('Str_ng', 'i', 'String');
 