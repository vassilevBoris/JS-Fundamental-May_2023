function sumFirstAndLastElement(data) {
    let first = data[0];
    let last = data[data.length - 1]
    console.log(first + last);
}
sumFirstAndLastElement([20, 30, 40]);
console.log("------------------");
sumFirstAndLastElement([10, 17, 22, 33]);
console.log("------------------");
sumFirstAndLastElement([11, 58, 69]);