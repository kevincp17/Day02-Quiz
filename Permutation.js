const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if(stringOne.split("").length!=stringTwo.split("").length){
        return false;
    }
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    else{
        if(stringOne.split("").sort().join()!=stringTwo.split("").sort().join()){
            return false;
        }
        else{
            return true;
        }
    }
  };
  
  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;

