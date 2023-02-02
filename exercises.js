export function flattening(list){
    const newArray = list.reduce(function(lastArray, currentValue){
        return lastArray.concat(currentValue);
    },[]) 
    console.log(newArray);
}


export function loop(value, test, update, body){
    if(test(value)){
      body(value)
      value = update(value)
      loop(value, test, update, body)
    }else{
        return false;
    }
}

export function everyLoop(array, test) {
 for(var i = 0;i< array.length;i++){
    if(!test(array[i]))return false;
 }
 return true;
  }
  

 export function everySome(array, test){
    for(var i = 0;i<array.length;i++){
        if(test(array[i]))return true;
    }
    return false;
  }
