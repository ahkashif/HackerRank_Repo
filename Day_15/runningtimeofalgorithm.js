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

// Complete the runningTime function below.
function runningTime(arr) {

     var pos=1;
    var count = 0;
    while(pos< arr.length) {
        var j=pos;
        for(var i=pos;i>=0;i--) {
            if(arr[i]>arr[j]) {
                var temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                count++;
            }
            j=i;
        }
        pos++;
       
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    ws.write(result + "\n");

    ws.end();
}
