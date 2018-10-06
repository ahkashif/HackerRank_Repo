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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    var len = c.length;
    var steps = 0;
    var i =0;
    while(len != (i+1)) {
        if(c[i] == 0 && c[i+1] == 0 && c[i+2] == 0){
            steps++;
            i = i+2;
        } else if(c[i] == 0 && c[i+1] == 1) {
            steps++;
            i = i+2;
        } else {
            steps++;
            i++;
        }
    }
    return steps;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
