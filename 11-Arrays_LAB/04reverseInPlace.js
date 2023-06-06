function reverseInPlace(arr) {

    for(let i = 0; i < arr.length/2; i ++){
        let tempElement = arr[i];

        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tempElement;
        
    }  
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
console.log("----------------------------------");
reverseInPlace(['abc', 'def', 'hig','klm', 'nop']);
console.log("----------------------------------");
reverseInPlace(['33', '123', '0', 'dd']);
