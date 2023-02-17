// function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }

// singSong();

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
//     // console.log('HI');
// }

// function repeqt(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// function capitalize(str) {
//     console.log(str[0].toUpperCase() + str.slice(1));
// }

function sumArray(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}