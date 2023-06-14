function sumDigits(num){
let numAsString = num.toString();
let sumResult = 0;

for (let index = 0; index < numAsString.length; index++) {
    let currentDigits = Number(numAsString[index]);
    sumResult += currentDigits;
    
}

console.log(sumResult);
}sumDigits([245678]);