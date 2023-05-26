function equalArrayse(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);    
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);    
    }
    


    
}
equalArrayse(['10','20','30'], ['10','20','30']);
console.log("----------------------------------");
equalArrayse(['1','2','3','4','5'], ['1','2','4','4','5']);
console.log("----------------------------------");
equalArrayse(['1'], ['10']);