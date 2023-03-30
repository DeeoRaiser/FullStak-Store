const registerForm = document.getElementById("register-form")
//obtengo si existieren los usuarios guardados en el localstorage
const users = JSON.parse(localStorage.getItem("users")) || []

registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const elements = event.target.elements
    if (checkPass()){
        const userExist = users.find((user)=>{
            if (user.mail === registerForm.mail.value){
                return true
            }
        })

        if (userExist){
            document.getElementById("email").classList.add("err")
            showAlert("Mail Error","El mail ingresado ya existe", "err")
        }else{
            userSave(elements)
            showAlert("Gracias por elegirnos!","Ya podes comprar en nuestra web.</br>te redireccionaremos al portal de ingreso", "suc")
            setTimeout(redirIndex,4000)
        }   
    }
})

function redirIndex(){
    window.location.href = "http://127.0.0.1:5500/index.html"
}

function checkPass(){
    if(password1.value !== password2.value && password1.value !== "" && password2.value !== "" ){
        password1.classList.add("err")
        password2.classList.add("err")
        showAlert('Error contraseña','Las contraseñas ingresadas no coinciden', 'err')
        return false
    }else{
        return true
    }
}

function showAlert(titulo, message, tipo){
    _alert = document.getElementById('alert')
    _alert.classList.remove('alert__error')
    _alert.classList.remove('alert__sussecs')

    tipo == 'err' ? 
    _alert.classList.add('alert__error'):
    _alert.classList.add('alert__sussecs')
    
    document.getElementById('alert__title').innerHTML = titulo
    document.getElementById('alert__description').innerHTML = message
    document.getElementById('alertContainer').classList.remove('alert__hide')

    setTimeout(hideAlert,3500)
}

function hideAlert(){
    document.getElementById('alertContainer').classList.add('alert__hide')
}

function userSave(elem){
    const user = {
        name: elem.name.value,
        mail: elem.mail.value,
        password: elem.password1.value,
        age: elem.age.value,
        bornDate: elem.borndate.value,
        country:elem.country.value,
        sex: "" + elem.gender.value,
        therms:elem.therms.checked
    }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
}

function quitMailErr(){
    email.classList.remove("err")
}

function quitPassErr(){
    password1.classList.remove("err")
    password2.classList.remove("err")
}

var url = window.location.pathname
console.log(url.substring(url.lastIndexOf('/') + 1))