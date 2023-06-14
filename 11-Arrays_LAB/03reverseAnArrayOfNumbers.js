function reverseAnArrayOfNumbers(n, arr) {

    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    console.log(res.join(" "));



    // let res = [];
    // for (let i = 0; i < n; i++) {
    //     res.push(arr[i]);
    // }
    // let reverseArr = [];
    // for (let i = res.length-1; i >= 0; i--) {
    //     reverseArr.push(res[i]);

    // }

    // console.log(reverseArr.join(" "));



}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log("----------------------------------");
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log("----------------------------------");
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);