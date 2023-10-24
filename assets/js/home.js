let cgu = document.getElementById("CGU");
let adult = document.getElementById("adult");

let button = document.getElementById("button");


function checkedd(){ 
    if(cgu.checked && adult.checked){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}
cgu.addEventListener("input", checkedd); // Listen for changes in the CGU checkbox
adult.addEventListener("input", checkedd); // Listen for changes in the 18 or older checkbox

function getCookie (cgu){
    const cookie = document.cookie.split(";");
    const value = cookie .find(cookie => cookie.startsWith(cgu)) ?.split ("=")[1]
    if(value === undefined){
        return null;
        
    }
    return decodeURI(value)
}

function getCookieA (adult){
    const cookie = document.cookie.split(";");
    const value = cookie .find(cookie => cookie.startsWith(adult)) ?.split ("=")[1]
    if(value === undefined){
        return null;
        
    }
    return decodeURI(value)
}





