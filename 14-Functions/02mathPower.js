function mathPower(num, power) {
    let res = 1
    function multi(a, b) {
        return a * b;
    }
    for (let i = 0; i < power; i++) {
        res = multi(res, num);
    }
    console.log(res);
}


mathPower(2, 8); 