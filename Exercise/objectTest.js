function test(key, value) {
    let myObj = {
        name: 'Bore',
    }
    myObj[key] = value;
    myObj.age = 45;
    // console.log(myObj[key]);
    // console.log(myObj.name);
    console.table(myObj)
}
test('hair', 'red')