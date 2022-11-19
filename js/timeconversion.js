'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
let time = s.split("")
let day = time.splice(time.length - 2, time.length).join("")

let time_split = time.join("").split(":")

let hr = time_split[0]
let min = time_split[1]
let sec = time_split[2]

let time_convert = [
    ['01', '13'],
    ['02', '14'],
    ['03', '15'],
    ['04', '16'],
    ['05', '17'],
    ['06', '18'],
    ['07', '19'],
    ['08', '20'],
    ['09', '21'],
    ['10', '23'],
    ['11', '23'],
    ['12', null],
]

if(day == "AM"){
    time_convert[11][1] = '00'
    if(hr === '12'){
        hr = '00'
    }
}else{
    time_convert[11][1] = '12'
    for(let i of time_convert){
        if(hr === i[0]){
            hr = i[1]
        }
    }
}

let new_time = `${hr}:${min}:${sec}`
return new_time

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
