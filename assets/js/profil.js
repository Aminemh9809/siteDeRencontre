
SearchParams(window.location.search)
console.log(paremUrl)

let meninfos = document.getElementById("meninfos");


window.location.search
// let test = (window.location.search).split("&")
// console.log(test[0])


let paremUrl = new  URLSearchParams(window.location.search)
console.log(paremUrl)

let urlParams = paremUrl.get("meninfos")

meninfos.innerHTML += men



