function personInfo(firstName, lastName, age) {
    let person = {
        firstName,             //когато ключа е еднакъв сес стойността му!
        lastName,
        age,
        // testFunc(){console.log('let Duma')}
    };
    for (const key of Object.keys(person)) {
        console.log(person[key]);
    }
    // return person.testFunc()
  
    
}

console.log(personInfo("Peter", "Pan", "20")); 