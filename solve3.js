
function deleteInvalids(array){
    let newArray = [];
    if(Array.isArray(array)){
        for(let arr of array){
            // console.log(arr);
            if(typeof arr === 'number' && !isNaN(arr)){
                newArray.push(arr);
            }
        }
        return newArray;
    }else{
        return 'Invalid Array';
    }
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));