function sumEvenNumbers(numbers) {
    let evenSum =0;

    for(let textNumbers of numbers){
        let arr = Number(textNumbers);
        if (arr % 2 ===0) {
            evenSum += arr
        }
    }
    console.log(evenSum);
}
sumEvenNumbers(['1','2','3','4','5','6'] );
console.log("---------------------------");
sumEvenNumbers(['3','5','7','9']);
console.log("---------------------------");
sumEvenNumbers(['2','4','6','8','10'] ); 