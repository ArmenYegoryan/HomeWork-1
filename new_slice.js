function new_slice(arr, start, end) {
    const result = [];
    if(end >= arr.length || end === -1) {
        end = arr.length;
    } else if (end < -1 || start > end || start < 0 || start > arr.length) {
        console.log("Barev");
        return result;
    }
    for(let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

//Example

let arr = [1, 2, 3, 4, 5, 6];
console.log(new_slice(arr, 18, 21)); // []
console.log(new_slice(arr, 2, 5)); // [3, 4, 5]