import { Compare, defaultCompare } from "../index.js";

function mergeSort(array, compareFn = defaultCompare){
    if(array.length > 1){
        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid), compareFn);
        const right = mergeSort(array.slice(mid, array.length), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}

function merge(left, right, compareFn){
    let i = 0;
    let j = 0;
    let result = [];
    while(i < left.length && j < right.length){
        result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++]: right[j++])
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
console.log('mergeSort==========start==');


console.log(mergeSort([4,5,6,3,6,2,7,3]));

console.log('mergeSort==========end==');