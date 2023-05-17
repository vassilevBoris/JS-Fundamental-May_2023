function pyramid(base, increment) {
    let end = 0;
    let step = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    // при четен брой на основата, златните блокове са 2х2 = 4, а при нечетен е 1.
    if (base % 2 === 0) {
        end = 2;
        totalGold = 4 * increment;
    }
    else {
        end = 1;
        totalGold = 1 * increment;
    }

    for (i = base; i > end; i = i - 2) {
        step++;
        stone = Math.pow(i - 2, 2);
        totalStone += stone;

        if (step % 5 !== 0) {
            marble = (i - 2) * 4 + 4;
            totalMarble += marble;

        }
        else {
            lapis = (i - 2) * 4 + 4;
            totalLapis += lapis;
        }

    }
    totalStone = Math.ceil(totalStone * increment);
    totalMarble = Math.ceil(totalMarble * increment);
    totalLapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(totalGold);
    height = Math.floor((step + 1) * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarble}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${height}`);

}
pyramid(23, 0.5)