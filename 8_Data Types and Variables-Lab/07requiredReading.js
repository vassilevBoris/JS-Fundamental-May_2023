function requiredReading(numOfPages, pagesPerHour, daysPerBook) {
    
    let totalTimePerBookInHour = numOfPages / pagesPerHour;
    let hoursPerDay = totalTimePerBookInHour / daysPerBook;

    console.log(hoursPerDay);
}
// requiredReading(212, 20 , 2);
requiredReading(432, 15 , 4);