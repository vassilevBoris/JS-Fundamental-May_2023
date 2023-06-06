function oddAndEvenSum(num) {
    
     let numAsString = num.toString();

     let oddSum = 0;
     let evenSum = 0;
     let numberAssStringLength = numAsString.length;

     for (let index = 0; index < numberAssStringLength; index++) {
       let currentNum = Number(numAsString[index]);
        if (currentNum %2 === 0) {
            evenSum += currentNum;
        }else{
            oddSum += currentNum;
        }
     }
     return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}
console.log(oddAndEvenSum(1000435));
// console.log(oddAndEvenSum(3495892137259234));