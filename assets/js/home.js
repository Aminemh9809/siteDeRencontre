let cgu = document.getElementById("CGU");
let adult = document.getElementById("adult");

let button = document.getElementById("button");


function checkedd(){ 
    console.log("ok");
    if(cgu.checked && adult.checked){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
}
cgu.addEventListener("input", checkedd); // Listen for changes in the CGU checkbox
adult.addEventListener("input", checkedd); // Listen for changes in the 18 or older checkbox