export const Compare = {
    LESS_THAN: -1,  //小于
    BIGGER_THAN: 1, //大于
    EQUALS: 0  //相等
};
export const DOES_NOT_EXIST = -1;


export function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function swap(array, a, b){
    [array[a], array[b]] = [array[b], array[a]];
}





// 本章创建的非分布式排序算法都会接收一个待排序的数组作为参数以及一个比较函数。


