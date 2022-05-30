function isPalindrome(word){
    let wordArr=word.split("");
    let reverseWord=wordArr.reverse().join();
    for(let i=0;i<=wordArr.length;i++){
        if(wordArr[i]==reverseWord[i]){
            return true;
        }
    }
}

console.log(isPalindrome('kasur ini rUsak'));//true
