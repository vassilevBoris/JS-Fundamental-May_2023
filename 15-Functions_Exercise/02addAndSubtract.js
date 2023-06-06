function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    let sumResult = sum(num1, num2);
    function subtract(sum, num3) {
        return sumResult - num3;
    }
    return subtract(sum, num3)
}

console.log(addAndSubtract(5, 3, 2));
console.log(addAndSubtract(11, 22, 33));