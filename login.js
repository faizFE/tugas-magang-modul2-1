const email = document.querySelector('#email')
const password = document.querySelector('#password')
const button = document.querySelector('#btn')

function pindahDashboard() {
    if (email.value == "") {
        alert("masukkan email anda")
    } else if (password.value == "") {
        alert("masukkan password anda")
    } else if (email.value != localStorage.getItem("email")) {
        alert("email anda salah")
    } else if (password.value != localStorage.getItem("password")) {
        alert("password anda salah")
    } else {
        localStorage.setItem("status", "login")
        alert("berhasil masuk")
        window.location.href = "dashboard.html"
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('tess')

    pindahDashboard()
})

if (localStorage.getItem("status") === "login") {
    window.location.href = "dashboard.html"
}