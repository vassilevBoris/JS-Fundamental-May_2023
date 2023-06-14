function searchForANumber(numbersArray, commandsArray) {
    let numbersToTake = commandsArray[0];
    let numbersToDelete = commandsArray[1];
    let surchedNumbers = commandsArray[2];

    let newArray = numbersArray.slice(0,numbersToTake);

    newArray.splice(0, numbersToDelete);

    let nuberCounter = newArray.filter(e => e === surchedNumbers).length;

    console.log(`Number ${surchedNumbers} occurs ${nuberCounter} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
