function password(obj){
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return 'invalid'; // Return 'invalid' if any condition fails
    }
   let siteNameFormatted = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

   let generatedPassword = `${siteNameFormatted}#${obj.name}@${obj.birthYear}`;
    
    return generatedPassword;
}

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));