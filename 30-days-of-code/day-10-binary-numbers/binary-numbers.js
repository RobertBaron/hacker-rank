function main() {
  var n = parseInt(readLine());
  var nb2 = toBin(n);
  var max = 0;
  nb2.split("0").map(function(value){
    if (value.length > max){
      max = value.length;
    }
  });
  console.log(max);
}

function toBin(dec){
  return (dec >>> 0).toString(2);
}