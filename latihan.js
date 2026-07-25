let div = document.querySelector('#div')
div.style.display = "none";

let button = document.querySelector('#tombol')

button.addEventListener("click", (e) => {
    console.log("diklik")
    e.preventDefault()
    div.style.display = "block";
})