function multiplicationTable(num) {
    for (let times = 1; times <= 10; times++) {
      let product = num * times;
      console.log(`${num} X ${times} = ${product}`);  
    }
}
multiplicationTable(5)