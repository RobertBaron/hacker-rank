this.insert=function(head,data){
  var self = this;
  //complete this method
  var node = new Node(data);
  if (!head) {
    head = node;
  } else if(!head.next){
    head.next = node;
  } else {
    self.insert(head.next, data)
  }
  return head;
};
