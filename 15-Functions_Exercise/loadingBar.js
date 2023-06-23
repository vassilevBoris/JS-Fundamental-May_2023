function loadingBar(num) {
    let percentCounter = num / 10;
    let pointsCounter = 10 - percentCounter;
    if (percentCounter === 10) {
        console.log('100% Complete!');
    } else {
        console.log(`${num}% [${'%'.repeat(percentCounter)}${'.'.repeat(pointsCounter)}]`);
        console.log('Still loading...');
    }
}
loadingBar(0);