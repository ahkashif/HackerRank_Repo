'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var plus = 0;
    var minus =0;
    var zero = 0;
    var len = arr.length;
    
    for(var i = 0; i < len; i++) {
        if(arr[i] > 0 ) {
            plus++;
        }else if(arr[i] < 0) {
            minus++;
        }else {
            zero++
        }
    }
    console.log(plus/len);
    console.log(minus/len);
    console.log(zero/len);
    
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
