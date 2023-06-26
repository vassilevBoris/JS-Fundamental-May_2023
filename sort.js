function sorting(arr) {
    // arr.sort((a, b) => b.localeCompare(a)); // a.localeCompare(b)
    // console.log(arr);
    arrNum = arr.map(Number);
    arrNum.sort((a, b) =>a-b);
                                            // a-b => нарастващ
                                            // b-а => намаляващ    
    console.log(arrNum);
}
// sorting(['l','a', 'x', 'b', 'k', 'a', 'c']);
sorting(['10','2', '20', '15', '7', '3', '8']);
