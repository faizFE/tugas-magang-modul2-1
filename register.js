const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const button = document.querySelector('.button')

function pindahLogin(){
    if(name.value == ''){
        alert('masukkan nama anda')
    } else if(email.value == '') {
        alert('masukkan email anda')
    } else if(password.value == '') {
        alert('masukkan password')
    } else {
        alert('email berhasil terdaftar')
        window.location.href = "login-page.html"
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('tess')

    pindahLogin()
    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)
    localStorage.setItem("isregister", "register")
})

if(localStorage.getItem('isregister') == "register" ) {
    alert('anda sudah daftar')
    window.location.href = "login-page.html"
}