function mathPower(num, power) {
    let res = 1
     for (let i = 0; i < power; i++) {
            res *= num;   
     }
     console.log(res);


    // console.log(Math.pow(num, power));
}
mathPower(2, 8); 