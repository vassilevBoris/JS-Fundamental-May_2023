function addAndSubtract(input) {
    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrayLength = input.length;

    for (let index = 0; index < arrayLength; index++) {
        let currentNum = Number(input[index]);
        sumOldArray += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += index;
        } else {
            currentNum -= index;
        }
        input[index] = currentNum;
        sumNewArray += currentNum;
    }
    console.log(input);
    console.log(sumOldArray);
    console.log(sumNewArray);

}
// addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
