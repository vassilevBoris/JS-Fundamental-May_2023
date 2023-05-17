function bitcoinsMined(params) {
    const bitcoinPrice = 11949.16;
    const stolenPercentage = 0.3;
    let totalGold = 0;
    let bitcoinsCount = 0;
    let firstBitcoinDay = 0;

    for (let day = 0; day < params.length; day++) {
        const goldMined  = params[day];
        if ((day+1)% 3 !==0) {    // Check if it's not a day when gold is stolen
            totalGold += goldMined;
            if (totalGold >= bitcoinPrice && firstBitcoinDay === 0) {
                firstBitcoinDay = day +1;
            }
            bitcoinsCount += Math.floor(totalGold / bitcoinPrice);
            totalGold %= bitcoinPrice;
        }else{
            const stolenGold = goldMined * stolenPercentage;
            totalGold += goldMined - stolenGold;
        }   
    }

    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    if(firstBitcoinDay !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }else{
        console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
    }
}
// bitcoinsMined([100, 200, 300]);
bitcoinsMined([0, 50, 100]);
// bitcoinsMined([3124.15, 504.212, 2511.124]);