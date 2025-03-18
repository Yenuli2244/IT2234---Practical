//[4, 8, 3, 4, 3, 2, 1, 8, 4]
//find the most frequent element in the array

let array = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let mostFrequent, maxCount = 0;

for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        mostFrequent = array[i];
    }
}
console.log(mostFrequent);



