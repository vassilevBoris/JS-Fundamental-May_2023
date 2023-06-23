function arrayModifier(arr) {
    let arrOfNumbers = arr.shift().split(' ').map(Number);
    let arrLength = arr.length

    for (let index = 0; index < arrLength; index++) {
        // let currentCommand = arr[index].split(' ');   // едно и също нещо се постига и с долния запис.
        // let command = currentCommand.shift();        //  замества напълно тези 4-ри реда
        // let indexOne = currentCommand.shift();
        // let indexTwo = currentCommand.shift();
        let [command, indexOne, indexTwo] = arr[index].split(' ');

        switch (command) {
            case 'swap':
                let temp = arrOfNumbers[indexOne];
                arrOfNumbers[indexOne] = arrOfNumbers[indexTwo];
                arrOfNumbers[indexTwo] = temp;
                break;

            case 'multiply':
                let result = arrOfNumbers[indexOne] * arrOfNumbers[indexTwo];
                arrOfNumbers[indexOne] = result;
                break;

            case 'decrease':
                arrOfNumbers = arrOfNumbers.map(n => n - 1);
                break;
                
            case 'end': break;
        }
    }
    console.log(arrOfNumbers.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);