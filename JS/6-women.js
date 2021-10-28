let new_in = document.getElementById("full_img")
new_in.addEventListener("click", newpage)

function newpage() {
    alert("new page")
}

let SHOES = document.querySelector("#SHOES")
SHOES.addEventListener("click", SHOE)

function SHOE() {
    alert("shoe page")
}

let JACKETS = document.querySelector("#JACKETS")
    .addEventListener("click", JACKET)

function JACKET() {
    alert("jacket page")
}

let TROUSERS = document.querySelector("#TROUSERS")
    .addEventListener("click", TROUSER)

function TROUSER() {
    alert("trouser page")
}

let denim_collection = document.querySelector("#full_img2")
denim_collection.addEventListener("click", denimpage)

function denimpage() {
    alert("denim page")
}