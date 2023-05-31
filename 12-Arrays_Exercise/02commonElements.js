function commonElements(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        let currentElement = arr1[index];
        if (arr2.includes(currentElement)) {
            console.log(currentElement);
        }
    }


} 
// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
 commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);