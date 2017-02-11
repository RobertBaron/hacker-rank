function conditional (n) {
  if (n % 2 !== 0) {
    return 'Weird';
  }

  if (n >= 2 && n <= 5) {
    return 'Not Weird';
  }

  if (n <= 20) {
    return 'Weird';
  }

  return 'Not Weird';
}

console.log(conditional(N));