function processOddNumbers(arr) {
    //     let oddArr = arr.filter((el, i) => i%2 !== 0);
    //    let dubbleArr = oddArr.map( x => x*2);
    //    console.log(dubbleArr.reverse().join(' '));

    return arr.filter((el, index) => index % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(' ');
}
  console.log(processOddNumbers([10, 15, 20, 25]));
