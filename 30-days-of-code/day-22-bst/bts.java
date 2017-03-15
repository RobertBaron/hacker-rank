public static int getHeight(Node root){
  //Write your code here
    if (root == null){
        return -1;
    }

    return Math.max(getHeight(root.right), getHeight(root.left)) +1;
}
