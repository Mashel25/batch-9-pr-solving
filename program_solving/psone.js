// [  4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,] find the minumum valu of array

function findmini(array){
 let minValue = array[0];
 for(let i=1; i<array.length; i++){
    if(minValue<=array[i]){
        minValue = minValue;
        }else{
            minValue = array[i]
        }

    }
    return minValue;
 }
 



 console.log("minumum value: " + findmini([4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,]))