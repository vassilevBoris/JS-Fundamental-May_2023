
function login(param) {
    let userName = param[0];
    let password = '';
    let attempts = 0;

    for (let i = 1; i < param.length; i++) {
        attempts++;
        password = param[i];
        let splitString = password.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        password = joinArray;
        if (userName === password) {
            console.log(`User ${userName} logged in.`);

        } else {
            if (attempts >= 4) {
                console.log(`User ${userName} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo','omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'notsunny']);