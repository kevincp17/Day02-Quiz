function maxWordLength(params) {
    let maxArr=params.split(" ");
    let numArr=[];
    
    for(let i=0;i<maxArr.length;i++){
        numArr.push(maxArr[i].length);
    }

    const max = Math.max(...numArr);
    const indexMax=numArr.indexOf(max);
    return maxArr[indexMax];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp

