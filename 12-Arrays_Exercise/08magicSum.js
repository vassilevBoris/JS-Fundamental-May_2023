function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let prevNum = Number(arr[i - 1]);

            for (let j = i; j < arr.length; j++) {

                let currentNum = Number(arr[j]);
                let sum = currentNum + prevNum;
                
                if (sum === num) {
                    console.log(`${prevNum} ${currentNum}`);
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);