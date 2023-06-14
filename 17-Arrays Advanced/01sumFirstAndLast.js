function sumFirstAndLast(arr) {      
    if (arr.length === 1) {
        return console.log(Number(arr.toString()));
    }
    // earlier return

    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);
// sumFirstAndLast(['20']);