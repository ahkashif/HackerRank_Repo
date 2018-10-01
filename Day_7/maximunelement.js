process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}

class Stack {
    constructor() {
        this.items = [];
    }
   
    // isEmpty function 
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    }
    // printStack function 
    printStack() 
    { 
        var max = 0; 
        for (var i = 0; i < this.items.length; i++) 
            if(this.items[i]>max){
                max = this.items[i];
            }
        return max;
    } 
    
    // peek function 
    peek() 
    { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1]; 
    } 
    // pop function 
    pop() 
    { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    }
    // push function 
    push(element) 
    { 
        // push element into the items 
        this.items.push(element); 
    } 
    
}




function processData(input) {
    //Enter your code here
    const testcases = parseInt(readLine(), 10);
    
    let stack = new Stack();
    
    for(let i =0 ; i<testcases; i++) {
        const query = readLine().replace(/\s+$/g, '').split(' ');
        const val = parseInt(query[0], 10);
        if(val == 1){
            var item =  parseInt(query[1], 10);
            stack.push(item);
        } else if(val == 2) {
            stack.pop();
        } else {
            var max=stack.printStack();
            console.log(max);
        }
    }
} 

