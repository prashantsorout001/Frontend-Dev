function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const arr = [1, 2, 3, 4];

const doubled = applyOperation(arr, num => num * 2);
const squared = applyOperation(arr, num => num * num);

console.log("Original:", arr);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
