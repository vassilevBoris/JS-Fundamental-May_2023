function addAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(c, d) {
        return c - d;
    }
    let sumResult = sum(num1, num2); 
    let  subtrResult = subtract(sumResult, num3)
        console.log(subtrResult);
}

addAndSubtract(5, 3, 2);
addAndSubtract(11, 22, 33);