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

// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {

    if(m1 == m2 && y1 == y2 && d1 > d2){
        return Math.abs(d2-d1)*15;
    } else if(y1 == y2 && m1 > m2 ) {
        return 500 * Math.abs(m2-m1);
    } else if( y1 > y2 ){
        return 10000;
    }else {
        return 0;
    }
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const d1M1Y1 = readLine().split(' ');

    const d1 = parseInt(d1M1Y1[0], 10);

    const m1 = parseInt(d1M1Y1[1], 10);

    const y1 = parseInt(d1M1Y1[2], 10);

    const d2M2Y2 = readLine().split(' ');

    const d2 = parseInt(d2M2Y2[0], 10);

    const m2 = parseInt(d2M2Y2[1], 10);

    const y2 = parseInt(d2M2Y2[2], 10);

    let result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + "\n");

    ws.end();
}
