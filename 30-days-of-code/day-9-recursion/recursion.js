function processData(input) {
  console.log(factorial(input));
}
function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}