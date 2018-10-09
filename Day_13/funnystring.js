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

// Complete the funnyString function below.
function funnyString(s) {

    var diff = [];
    var revDiff = [];
    var i = 0;
    var j = (s.length) - 1;
    
    
    while( i != (s.length - 1) && j != 0){
        diff.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
        console.log(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
        revDiff.push(Math.abs(s.charCodeAt(j) - s.charCodeAt(j - 1)));
        console.log(Math.abs(s.charCodeAt(j) - s.charCodeAt(j - 1)));
        
        i++;
        j--;
    }
    
    for(var k = 0; k < diff.length; k++) {
        if(diff[k] != revDiff[k]) {
            return 'Not Funny';
        }
    }
    return 'Funny';
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
