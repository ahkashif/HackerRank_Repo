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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {

     var arr = s.split('');
    arr.sort();
    var count=0;
    for(var i=0;i<arr.length;) {
        var x=arr[i];
        var alphacount=0;
        var j=i;
        while(x==arr[j]) {
            alphacount++;
            j++;
        }
        if(alphacount%2!=0) {
            count++;
        }
        i=i+j;
        
    }
    if(count<=1)
        return "YES"
    else
        return "NO"

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
