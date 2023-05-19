function specialNumbers(num) {
    let res = 0;
    let res1 = 0;
    let res2 =0;
    for (let i = 1; i <= num; i++) {
        res = i % 10 + parseInt(i / 10);
        if (res === 5 || res === 7 || res === 11) {
            console.log(i + " -> True");
        } else {
            console.log(i + " -> False");
        }
    }
}
specialNumbers(16);