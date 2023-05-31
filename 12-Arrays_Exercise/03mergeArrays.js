function mergeArrays(arr1, arr2) {
    let resultArray = [];    
    let arrayLength = arr1.length;

    for(let index = 0; index < arrayLength; index ++){
        if(index % 2 === 0){
            resultArray[index] = Number(arr1[index]) + Number(arr2[index]);  
        } else {
            resultArray[index] = arr1[index] + arr2[index];
        }
    }
    console.log(resultArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);