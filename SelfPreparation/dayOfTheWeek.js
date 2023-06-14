function dayOfTheWeek(arr) {
    let daysLikeAString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let result = daysLikeAString[arr - 1];

    if(result){
        console.log(result);
    }else{
        console.log('Invalid Day!');
    }
}       
dayOfTheWeek(9);