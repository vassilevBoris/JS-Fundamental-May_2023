function sumOfOddNumbers(n) {
  let totalsum = 0;
  let j = 0;
  let i = 1;
  while (j < n) {
    if (i % 2 !== 0) {
      j++;
      console.log(i);
      totalsum = totalsum + i;
    }
    i++;
  }console.log(`Sum: ${totalsum}`);
}

sumOfOddNumbers(4);
