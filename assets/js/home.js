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



document.cookie = "cgu=cgu"
function getCookie(name) {  
    const cookies = document.cookie.split('; ')
     const value = cookies.find(c => c.startsWith(name + "="))  ?.split('=')[1]            
      if (value === undefined) {  
        return false            
     } else {                 
        return true }    
     }  if (getCookie('cgu')) {            
         window.location.href = 'search.html';             
         exit()         }
console.log(getCookie("toto"))

document.cookie = "adult=adult"
function getCookie(name) {  
    const cookies = document.cookie.split('; ')
     const value = cookies.find(c => c.startsWith(name + "="))  ?.split('=')[1]            
      if (value === undefined) {  
        return false            
     } else {                 
        return true }    
     }  if (getCookie('adult')) {            
         window.location.href = 'search.html';             
         exit()         }
console.log(getCookie("otot"))



// document.getElementById("cgu").addEventListener("click", function() {
//     if (cgu.checked) {
//         // L'utilisateur a coché la case et accepté les conditions d'utilisation
//         var expirationDate = new Date();
//         expirationDate.setDate(expirationDate.getDate() + 365); // Expiration dans un an
//         document.cookie = "cgu=true; expires=" + expirationDate.toUTCString();
//     }});

//     document.getElementById("adult").addEventListener("click", function() {
//         if (adult.checked) {
//             // L'utilisateur a coché la case et accepté les conditions d'utilisation
//             var expirationDate = new Date();
//             expirationDate.setDate(expirationDate.getDate() + 365); // Expiration dans un an
//             document.cookie = "adult=true; expires=" + expirationDate.toUTCString();
//         }});