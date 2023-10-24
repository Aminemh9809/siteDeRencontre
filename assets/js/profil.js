

let meninfos = document.getElementById("meninfos");
let paremUrl = new  URLSearchParams(window.location.search)
console.log(paremUrl)

// SearchParams(window.location.search)
// console.log(paremUrl)



let urlParams = paremUrl.get(meninfos)

meninfos.innerHTML += men



