let arr = [1, 2, 3, "A", 4, [7, [8, [9]]]];

let circule_count = 1;
let result = [];
function new_flat(arr, depth = 1) {
    if(circule_count <= depth) {
        circule_count++;
        arr.forEach(element => {
            if(!Array.isArray(element)) {
                result.push(element);
            } else {
                new_flat(element, depth); 
            }
        }); 
    } else {
        arr.forEach(element => {
            result.push(element);
        });
    }
} 

//Example

new_flat(arr, 2);
console.log(result); // [1, 2, 3, 'A', 4, 7, 8, Array(1)]
