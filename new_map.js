function new_map(array, callback) {
    const result = [];
    array.forEach((element, index) => {
        result.push(callback(element, index))
    });
    return result;
};

//Example

let arr = [1, 2, 3];
console.log(new_map(arr, (el, i) => {
    return el + 1;
}));
