function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const guardFee = 500;
    const staffLaunch = 50;

    if(ticketSale >=0){
        const total= (ticketPrice * ticketSale) - (guardFee + (8*staffLaunch));
        return total;
    }
else{
    return "Invalid number";
}
}

const total = calculateMoney(-130);
console.log("Remaining Balance is: ",total);
