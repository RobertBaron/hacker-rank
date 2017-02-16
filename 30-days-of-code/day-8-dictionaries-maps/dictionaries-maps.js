function processData(input) {
  var data =  input.split('\n');
  var entries = data[0];

  data.shift();
  var dic = {};
  for(var i =0; i< entries; i++){
    var d = data[i];
    var entry = data[i].split(' ');
    dic[entry[0]] = entry[1];
  }

  for(var i =entries; i< data.length; i++){
    if(dic[data[i]]) {
      console.log(data[i] + "=" + dic[data[i]]);
    } else {
      console.log("Not found");
    }
  }
}
