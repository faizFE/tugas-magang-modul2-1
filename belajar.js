// console.log("hello world")
// localStorage.setItem("lastname", "Smith");
// let lastname = localStorage.getItem("lastname");
// console.log(lastname)
let btnMasuk = document.querySelector("#btn_masuk")



function pindahHalaman() {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        window.location.href = "dashboard.html"
    }
}

pindahHalaman()

btnMasuk.addEventListener("click", (e) => {
    console.log("button ke klik")
    e.preventDefault()
    let email = document.querySelector("#email_login").value
    let password = document.querySelector("#password_login").value
    console.log(email, password)

    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    pindahHalaman()

})

//km bisa kasih aku soal lahh? mau latihan. DOM sama event munculin? di page yang sama? beda page