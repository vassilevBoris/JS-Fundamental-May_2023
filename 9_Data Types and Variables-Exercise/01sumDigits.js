function sumDigits(number) {
    let inputAssString = number.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < inputAssString.length; index++) {
        let currentDigit = Number(inputAssString[index]);
        sumOfDigits += currentDigit;
    }
    console.log(sumOfDigits);
}
sumDigits(245678);