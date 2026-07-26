let div = document.querySelector('#div')
div.style.display = "none";

let button = document.querySelector('#tombol')
let buttonDisplay = false

button.addEventListener("click", (e) => {
    console.log("diklik")
    e.preventDefault()
    if(!buttonDisplay) {
        div.style.display = "block";
        buttonDisplay = true
    } else {
        div.style.display = "none";
        buttonDisplay = false
    }
})

let teks = document.querySelector('#teks')
teks.innerHTML = '<h1>Hallo</h1>'

let tes = document.querySelectorAll('.tess')
console.log(tes)