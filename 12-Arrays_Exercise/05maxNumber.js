function maxNumber(arr) {
    let result = "";
    let arrLength = arr.length;

    for (let index = 1; index <= arrLength; index++) {
        let isMax = true;
        let currentNumber = Number(arr[index - 1])
        for (let j = index; j < arr.length; j++) {
            let nextNumber = Number(arr[j]);
            if (nextNumber >= currentNumber) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currentNumber}`+ " "
        }

    }
    console.log(result);  



}
// maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20] );
// maxNumber([27, 19, 42, 2, 13, 45, 48]);
