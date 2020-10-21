function countSort(array){
    if(array.length < 2){
        return array;
    }
    const maxValue = findMax(array);
    let counts = new Array(maxValue + 1);
    array.forEach(ele => {
        if(!counts[ele]){
            counts[ele] = 0
        }
        counts[ele]++;
    });
    console.log('counts',counts);
    let sortIndex = 0;
    counts.forEach((count,i) => {
        console.log(count,i);
        while(count > 0){
            array[sortIndex++] = i
            count--;
        }
    })
    return array;
}


function findMax(array){
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(countSort([5,2,4,2,1,5,3]));