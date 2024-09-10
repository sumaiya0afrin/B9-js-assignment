function monthlySavings(arr , livingCost) {
        if(!Array.isArray(arr) && typeof livingCost !== 'number'){
            return 'Invalid Input';
        }
        let tax = 0;
        let sum = 0;
        for(let item of arr){
            if(item >= 3000){
                tax = tax + ((item *20)/100);
            }
            sum += item;
        }
        const savings = sum - tax - livingCost;
        if(savings >= 0){
            return savings;
        }else{
            return 'earn more';
        }
    }

    console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
    console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
    console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
    console.log(monthlySavings(100, [ 900 , 2700 , 3400]));