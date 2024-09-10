function checkName(name){
    if(typeof name === 'string'){
        name = name.toLowerCase().trim();
        const lastchar = name.charAt(name.length-1);
        
        if(lastchar === 'a' || lastchar === 'y' || lastchar === 'i' || lastchar === 'e' || lastchar === 'o' || lastchar ==='u'|| lastchar==='w'){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }else{
        return 'Invalid';
    }


}

// checkName('salman');
let string = 'RAFEE';
const final = checkName(string);
console.log(final);