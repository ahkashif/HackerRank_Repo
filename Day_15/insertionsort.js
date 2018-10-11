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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {

    var sorted= [];
    var k=arr[n-1];
    for(var i=n-2;i>=-1;i--) {
        if(arr[i]>k) {
            arr[i+1]=arr[i];
            
        }
        else {
            arr[i+1]=k;
            console.log(arr.join(" "));
            break;
        }
        console.log(arr.join(" "));
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
