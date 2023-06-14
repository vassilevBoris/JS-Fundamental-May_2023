function sortAnArrayBy2Criteria(arr) {
    // let sorted = arr.sort((a,b) => {
    //     if(a.length !== b.length){
    //         return a.length - b.length;
    //     }
    //     return a.localeCompare(b);
    // });

    let sortedArray = arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArray.join("\n"));
}
// sortAnArrayBy2Criteria(['alpha','beta','gamma']);
sortAnArrayBy2Criteria(['Isacc','Theodor','Jack','Harrison','George'])

