'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let arrLength = arr.length;
    let pos = 0, neg = 0, zer = 0;
    
    for(let a of arr){
        if(a > 0){
            pos += 1
        }else if(a < 0){
            neg += 1
        }else{
            zer += 1
        }
    }

    console.log((pos/arrLength).toFixed(6))
    console.log((neg/arrLength).toFixed(6))
    console.log((zer/arrLength).toFixed(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
