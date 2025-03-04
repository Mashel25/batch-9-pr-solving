// [  4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,] find the maximum and minumum value of array
findvalue([4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,], "max");
findvalue([4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,], "min");


function findmin(array){
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

    function findmax(array){
        let maxValue = array[0];
        for(let i=1; i<array.length; i++){
           if(maxValue>=array[i]){
               maxValue = maxValue;
               }else{
                   maxValue = array[i]
               }
           }
           return maxValue;
        }

        function findvalue(array, type){
            let value;
            if(type=="max"){
                value = findmax(array);
                console.log(`maximum value is: ${value}`);
            } else if (type=='min') {
                value = findmin(array)
                console.log(`minumum value is: ${value}`);
            } else {
                console.log('value identifier is missing');
            }

        }
         findvalue([4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,], "max");
         findvalue([4, 18, 20, 25, 30, 80, 65, 9, 6, 7, 32,], "min");