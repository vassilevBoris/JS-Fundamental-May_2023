function maxSequenceOfEqualElements(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (index !== 0) {
            let currentNum = Number(arr[index]);
            let prevNum = Number(arr[index - 1]);

            if (currentNum === prevNum) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNum;
                }
            } else {
                sequence = 1;
            }
        }
    }
    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);


}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3] );