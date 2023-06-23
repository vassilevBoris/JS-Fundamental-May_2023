function palindromeIntegers(arr) {
    for(let index =0; index < arr.length; index++){ 
        let numAssString = arr[index].toString();
        let reversedNumber = numAssString.split('').reverse().join('');
        if(reversedNumber === numAssString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    
}
palindromeInt 