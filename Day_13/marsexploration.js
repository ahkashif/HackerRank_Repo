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

// Complete the marsExploration function below.
function marsExploration(s) {
    
    var counter = 0;
    
    for(var i = 0; i < s.length; i = i+3 ) { 
        if(s.charAt(i) != 'S'){
            counter++;
        } 
        if(s.charAt(i + 1) != 'O'){
            counter++;
        }
        if(s.charAt(i  + 2) != 'S'){
            counter++;
        }
    }

    return counter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
