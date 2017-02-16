function processData(input) {
  //Enter your code here
  var inputArray =  input.split("\n");
  inputArray.shift(); // Remove first input, not needed
  for (var j = 0; j < inputArray.length; j++ ){

    var entry = inputArray[j];

    var outputEven = "";
    var outputOdd = "";

    for(var i = 0; i < entry.length; i++){
      if (i %2 === 0){
        outputEven += entry[i];
      } else {
        outputOdd += entry[i];
      }
    }

    console.log(outputEven +  " " + outputOdd);
  }

} 