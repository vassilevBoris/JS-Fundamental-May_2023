function repeatString(input, n) {
      let result = "";
      while (n > 0) {
            result += input;
            n--;
      }
      console.log(result);
// console.log(input.repeat(n));
}
repeatString("String", 2)

