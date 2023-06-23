function test(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        let indexPosition = arr.length - 1 - i;
        arr[i] = arr[indexPosition];
        arr[indexPosition] = temp;

        
    }
    console.log(arr);

}
test (['abc', 'def', 'hig','klm', 'nop']);