function factorialDivision(n1, n2) {
    function factorial(number) {
        if (number === 0) {
            return 1
        } else {
            return number * factorial(number - 1);
        }
    }
    let firstFac = factorial(n1);
    let secFac = factorial(n2);
    let result = firstFac / secFac;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2);