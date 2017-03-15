// Add your code here
// To print values separated by spaces use process.stdout.write(someValue + ' ')
if(!this.queue){
  this.queue = [];
}

process.stdout.write(root.data + ' ');
if(root.left){
  this.queue.push(root.left);
}

if(root.right){
  this.queue.push(root.right);
}

if(this.queue.length > 0){
  this.levelOrder(this.queue.shift());
}