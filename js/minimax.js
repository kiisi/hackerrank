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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
    let miniMaxArr = []
    
    for(let elem of arr){
        let i = 0, sum = 0;
        let elemIndex = arr.indexOf(elem)
        while(i < 4){
            if(elemIndex > 4){
                elemIndex = 5 - elemIndex
            }
            sum += arr[elemIndex]            
            elemIndex++
            i++;
        }
        miniMaxArr.push(sum)
    }
    let min = Math.min.apply(0, miniMaxArr)
    let max = Math.max.apply(0, miniMaxArr)

    console.log(min, max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
