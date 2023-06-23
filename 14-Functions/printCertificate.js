function printCertificate(grade, arr) {
    if (!pass(grade)) {
        return print(`Student does not qualify`);
    }
    printHeader();
    printName(arr);
    formatGrade(grade);
}
// printCertificate(5.25, ['Peter', 'Carter'])
function printHeader() {
    print('~~~- {@} -~~~');
    print('~- Certificate -~');
    print('~~~- ~---~ -~~~');
}
// --------------------------------------------
function printName(nameArr) {
    print(nameArr[0] + ' ' + nameArr[1]);
}
// ---------------------------------------------
function formatGrade(index) {
    let grade = Number(index); 
    if (grade < 3.00) {
        print(`Fail (${Math.floor(grade)})`);

    } else if (grade < 3.5) {
        print(`Poor (${grade.toFixed(2)})`);

    } else if (grade < 4.5) {
        print(`Good (${grade.toFixed(2)})`);

    } else if (grade <= 5.5) {
        print(`Very good (${grade.toFixed(2)})`);

    } else if (grade > 5.5) {
        print(`Excellent (${grade.toFixed(2)})`);
    }
}
// ---------------------------------------------------
function print(value) {
    console.log(value);
}
// -----------------------------------------------------
function pass(grade) {
    return grade >= 3;
}


function test(arr) {
    let test = arr => arr.length;
    let result = test([1, 2, 3, 4 , 5])
    return result
}
console.log(test([1, 2, 3, 4 , 5])); 
