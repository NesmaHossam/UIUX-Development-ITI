//  `…` operator    
//     Using rest operator and spread operator return min and max value from any array.
//     💡 note: array length is not fixed return min and max value and display each of
//     them separately after function call.

function minMax(...arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log("Minimum value:", min);
    console.log("Maximum value:", max);
}

minMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);