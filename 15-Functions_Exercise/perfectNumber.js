function perfectNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }       
    }
    if (sum === n && n !== 1) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
// perfectNumber(6);
perfectNumber(1236498);


