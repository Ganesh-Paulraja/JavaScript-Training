// const ip = [1, 1, 1, 3, 4, 2, 5,[[[6]]], 8, 7]
// // op = [1, 2, 3, 4, 5, 6, 7, 8]

// const flatArr = ip.flat(Infinity)
// const uniqueArr = new Set(flatArr)
// const accend = [...uniqueArr].sort((a,b) => (a - b))
// console.log(accend);

// // Flatten a nested array ([1, [2, [3, 4]]] → [1,2,3,4]).

// const arr2 = [1, [2, [3, 4]]]
// const flatArr2 = arr2.flat(Infinity)
// console.log(flatArr2);

const arr = [1, 3, 2, 1, 4, 1, 1, 3, 2, 3, 3, 5];

// for( i=0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

for (values of arr) {
    console.log(values);
    
}

const obj = {
    name: "Ganesh",
    age: 25,
    weight: 72,
}

//only keys
for (values in obj) {
    console.log(values);
    
}
 Object.values(obj).forEach(val => {
    console.log(val);
    
}) 
// console.log(newarr);
