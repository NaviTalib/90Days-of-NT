function findMax(arr){
    let max = arr[0];
    for( x in arr){
        if(arr[x]>max){
            max = arr[x];
        }
    }
    return max;
}

console.log(findMax([30,22,10,4,33,5]))