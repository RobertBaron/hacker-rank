// Add your code here
Difference(int [] elements) {
    this.elements = elements;
}

int min(){
    int minimum = 100;
    for(int i = 0; i < this.elements.length; i++){
        if (this.elements[i] < minimum){
            minimum = this.elements[i];
        }
    }
    return minimum;
}

int max(){
    int maximum = -1;
    for(int i = 0; i < this.elements.length; i++){
        if (this.elements[i] > maximum){
            maximum = this.elements[i];
        }
    }
    return maximum;
}

void computeDifference() {

    int a = min();
    int b = max();
    this.maximumDifference = b - a;
}
