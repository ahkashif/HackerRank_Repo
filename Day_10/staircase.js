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

// Complete the staircase function below.
function staircase(n) {

    

}

function main() {
    const n = parseInt(readLine(), 10);
 var space = ' ', pound = '#';
    for (var i = 1; i <= n; i++) {
        console.log(space.repeat(n-i) + pound.repeat(i));
    }
}
