function Solution(){
  var stack = [];
  function pushCharacter(ch){
    return stack.push(ch);
  }
  function popCharacter(){
    return stack.pop();
  }

  var queue = [];
  function enqueueCharacter(ch){

    return queue.push(ch);
  }
  function dequeueCharacter(){
    return queue.shift();
  }
  //Write your code here
  return  {
    pushCharacter: pushCharacter,
    popCharacter: popCharacter,

    enqueueCharacter: enqueueCharacter,
    dequeueCharacter: dequeueCharacter
  }
}