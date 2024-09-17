const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


function validateForm(event){
    event.preventDefault();
    
    //value dari form
    var name = document.getElementById('name').value
    var gender = document.getElementById('gender').value
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirmPassword').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var address = document.getElementById('address').value
    var checkbox = document.querySelector('input[name="checkbox"]:checked')

    var isValid = true

    //validasi name > 3 karakter
    if(name.length < 4){
        alert('Name must be more than 3 characters')
        isValid = false
    }

     //validasi gender harus dipilih
    if(gender == ""){
        alert('Gender must be chosen')
        isValid = false
    }

    //validasi confirm password harus sama dengan password
    if(password != confirmPassword){
        alert('Confirm password must be the same as password')
        isValid = false
    }

    //validasi email
    if(isValidEmail(email) == false){
        alert('Email is invalid')
        isValid = false
    }

    //validasi address harus diisi
    if(address == ''){
        alert('Address must be filled')
        isValid = false
    }

    //validasi checkbox harus dicentang
    if(checkbox == null){
        alert('You must agree to the terms and conditions')
        isValid = false
    }

    if(isValid == false){
        errorMessage.innerHTML = "Please submit the correct form"
    } else{
        window.location.href = './home.html'
    }
}

function isAlphanumeric(password){
    //harus ada huruf dan angka, gaboleh simbol
    var huruf = false
    var angka = false
    var simbol = false

    for (let index = 0; index < password.length; index++){
        if(password[index] >= 'a' && password[index] <= 'z'){
            huruf = true //kasi tau kalo ada huruf
        }
        else if(password[index] >= 'A' && password[index] <= 'Z'){
            huruf = true //ada huruf besar
        }
        else if(password[index] >= '0' && password[index] <= '9'){
            angka = true //kasi tau kalo ada angka
        } else{
            simbol = true
        }
    }
    if(simbol == true){
        return false
    }
    else if(angka == true && huruf == true){
        return true
    } else{
        return false
    }
}

//function validasi email
function isValidEmail(email){
    //harus ada simbol @
    if(email.indexOf('@') == '-1'){
        return false
    }
    //simbol @ gaboleh di paling depan
    if(email.indexOf('@') == '0'){
        return false
    }
    //harus ada '.'
    if(email.indexOf('.') == '-1'){
        return false
    }
    //'.' gaboleh di paling depan
    if(email.indexOf('.') == '0'){
        return false
    }
    //email kosong
    if(email == ''){
        return false
    }
    return true
}