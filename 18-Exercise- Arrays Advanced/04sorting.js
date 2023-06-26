function sorting(input) {
    let sortedArray = input.sort((a, b) => b - a);
    let result = [];
    let sortedLength = sortedArray.length;

    for (let index = 0; index < sortedLength / 2; index++) {
        let currentNum = sortedArray.shift();
        let lastNum = sortedArray.pop();
        result.push(currentNum);
        result.push(lastNum);


    }
    console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
  