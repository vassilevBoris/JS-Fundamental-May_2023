function blackFlag(data) {
    let days = Number(data[0]);
    let dailyPlunder = Number(data[1]) ;
    let targetPlunder = Number(data[2]);
    let current = 0;

    for (let i = 1; i <= days; i++) {
        current += dailyPlunder;
        if(i % 3 === 0){
            current += dailyPlunder * 0.50;
        }
        if(i % 5 === 0  ){
            current *= 0.70;
        }
    }
    if (current >= targetPlunder) {
        console.log(`Ahoy! ${current} plunder gained.`);
    } else {
        let percentage = current / targetPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
    
}
blackFlag(["5","40","100"]);
console.log('-------------');
blackFlag(["10","20","380"]);

// "Ahoy! {totalPlunder} plunder gained."
// "Collected only {percentage}% of the plunder."
