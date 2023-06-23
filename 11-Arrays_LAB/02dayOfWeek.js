function dayOfWeek(data) {
    let dayOfWeekAsString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = dayOfWeekAsString[data - 1];
    if (result) {
        console.log(result);
    } else {
        console.log("Invalid day!");
    }
  
}
// dayOfWeek 3;
dayOfWeek(1);
// dayOfWeek 11; 