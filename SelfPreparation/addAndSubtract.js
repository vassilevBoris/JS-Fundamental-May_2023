function addAndSubtract(arr) {
    let sumOldArr = 0;
    let sumNewArr = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
       let currentNum = Number(arr[i]);
       sumOldArr += currentNum;

       if(currentNum %2 === 0){
        currentNum += i;
       } else {
        currentNum -= i;
       }
       sumNewArr += currentNum;
        
    }
}
addAndSubtract([5, 15, 23, 56, 35]);