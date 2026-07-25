const name = document.querySelector('#nama')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnRegister = document.querySelector('.button')

const email_login = document.querySelector('#email_login')
const password_login = document.querySelector('#password_login')
const btnLogin = document.querySelector('.btn')

function register () {
    if(localStorage.getItem('nama') && localStorage.getItem('email') && localStorage.getItem('password')){
        alert('email berhasil terdaftar')
    }
}

btnRegister.addEventListener("click", () => {
    console.log('tes')

    console.log(nama.value, email.value, password.value)

    localStorage.setItem('nama', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    
    register()
})

function login(){
    if (localStorage.getItem('email') === email_login.value && localStorage.getItem('password') === password_login.value) {
        window.location.href = 'dashboard.html'
    }
}

login()

btnLogin.addEventListener("click", () => {
    console.log('halo')

    // if(localStorage.getItem('email') !== email_login.value){
    //     alert('email anda salah')
    // } else if(localStorage.getItem('password') !== password_login.value) {
    //     alert('password salah')
    // } else if (localStorage.getItem('email') === ''){
    //     alert('masukkan email')
    // } else if (localStorage.getItem('password') === '') {
    //     alert('masukkan password')
    // } else {
    //     alert('berhasil masuk')
    //     window.location.href('dashboard.html')
    // }

    login()

})