function personInfo(firstName, lastName, age) {
    // let person = {};
    // person['firstName'] = value1;
    // person['lastName'] = value2;
    // person['age'] = value3;
    // return person

    let person = {
        firstName,             //когато ключа е еднакъв сес стойността му!
        lastName,
        age
    };
    return person;
    
}

console.table(personInfo("Peter", "Pan", "20"));
// console.table(personInfo("Boris", "Vassilev", "21400"));

