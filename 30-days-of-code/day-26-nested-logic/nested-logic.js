function processData(input) {
  const inputArray = input.split('\n');
  const returned = inputArray[0].split(' ');
  const hasToReturn = inputArray[1].split(' ');

  const diffDays = returned[0] - hasToReturn[0];
  const diffMonth = returned[1] - hasToReturn[1];
  const diffYear = returned[2] - hasToReturn[2];

  const returnedDate = new Date(`${returned[2]}/${returned[1]}/${returned[0]}`);
  const hasToReturnDate = new Date(`${hasToReturn[2]}/${hasToReturn[1]}/${hasToReturn[0]}`);

  const diffDateDays = parseInt((returnedDate - hasToReturnDate) / (1000 * 60 * 60 * 24));

  // Return earlier
  if (diffDateDays <=0) {
    console.log(0);
    return;
  }

  if (diffYear > 0) {
    console.log(10000);
    return;
  }

  if (diffMonth > 0) {
    console.log(diffMonth * 500);
    return;
  }

  if (diffDays > 0) {
    console.log(diffDays * 15);
    return;
  }
}

processData('05 06 2015\n06 06 2015');
