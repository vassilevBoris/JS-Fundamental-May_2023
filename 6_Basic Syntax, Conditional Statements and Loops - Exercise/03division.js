function division(number) {
 
    if (number % 10 === 0) {
        result = 10;console.log(`The number is divisible by 10`);
    } else if (number % 7 === 0) {
        result = 7;console.log(`The number is divisible by 7`);
    } else if (number % 6 === 0) {
        result = 6;console.log(`The number is divisible by 6`);
    } else if (number % 3 === 0) {
        result = 3;console.log(`The number is divisible by 3`);
    } else if (number % 2 === 0) {
        result = 2;console.log(`The number is divisible by 2`);
    }else {
        console.log('Not divisible');
    }

} 
division(11);