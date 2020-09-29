// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 39, 45]

// ORIGINAL

// const binarySearch = function(arr, target) {
//     let middleIndex = 0;
//     let newArr = arr;
//     let index = 0;

//     for (let i = 0; i < arr.length; i++) {

//         middleIndex = Math.floor((newArr.length) / 2);

//         if (target > newArr[middleIndex]) {
//             newArr = newArr.slice(middleIndex);
//             index += middleIndex;
//         } else if (target < newArr[middleIndex]) {
//             newArr = newArr.slice(0, middleIndex);
//         } else {
//             index += middleIndex;
//             return index;
//         } 
//     }
// };

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// RECURSION

const binarySearch = function (arr, target) {
    if (arr.length === 1)
        return 0;

    let midIndex = Math.floor(arr.length / 2);

    if (arr[midIndex] === target)
        return midIndex;

    if (arr[midIndex] < target)
        return binarySearch(arr.slice(midIndex + 1), target) + midIndex + 1;

    if (arr[midIndex] > target) 
        return binarySearch(arr.slice(0 , midIndex), target);
}


console.log(binarySearch(testArray, 19)); //12
console.log(binarySearch(testArray, 12)); //9
console.log(binarySearch(testArray, 26)); //14

console.log(binarySearch(testArray, 1)); //0
console.log(binarySearch(testArray, 7)); //6
console.log(binarySearch(testArray, 45)); //16