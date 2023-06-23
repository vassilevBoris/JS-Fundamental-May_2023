function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case "multiply":print(num1 * num2); break;
        case "divide": print(num1 / num2);break;
        case "add":print(num1 + num2); break;
        case "subtract":print(num1 - num2); break;
    }
}
simpleCalculator(5, 5, 'multiply')

function print(value) {
    console.log(value);
}