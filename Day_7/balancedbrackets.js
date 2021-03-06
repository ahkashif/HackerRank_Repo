'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
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

// Complete the isBalanced function below.
function isBalanced(s) {
    var status ="NO";
    var flag = 0,x;
    var stack = new Stack();
        for(var i = 0; i < s.length; i++ ) {
            
            if((s.charAt(i) == '(')  || (s.charAt(i) == '[') || (s.charAt(i) == '{')){
                stack.push(s.charAt(i));
            }
            else if(stack.isEmpty()) {
                status = "NO";
                flag = 1;
                break;
            } else {
                switch(s.charAt(i)){
                    case  ')' :
                    x = stack.pop();
                    if(x == '{' || x == '['){
                        flag = 1;
                        status = "NO";
                    }
                    break;
                    case  ']' :
                        x = stack.pop();
                        if(x == '{' || x == '('){
                            flag = 1;
                            status = "NO";
                        }
                        break;
                    
                    case  '}' :
                        x = stack.pop();
                        if(x == '(' || x == '['){
                            flag = 1;
                            status = "NO";
                        }
                        break;    
                }
            }
            
        }
        if(flag == 0 && stack.isEmpty()){
           status ="YES";
        }
        return status;
    
    
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
