//Write your code here
class Calculator {
    public Calculator(){}

    public int power(int n,int p) throws Exception {
     if (n < 0 || p < 0){
         throw new Exception("n and p should be non-negative");
     }

     double pow = Math.pow(n, p);
     return (int) pow;
 }
}
