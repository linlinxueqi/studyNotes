import { Compare, defaultCompare, swap } from "../index";

function bubbleSort(array, compareFn = defaultCompare){
    const { length } = array; // 1
    for(let i = 0; i < length; i++){ //2
        for(let j = 0; j < length - 1 - i; j++){ //3
            if(compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN){ //4
                swap(array, j, j + 1); //5
            }
        }
    }
    return array;
}
console.log(bubbleSort[5,4,3,2,1]);