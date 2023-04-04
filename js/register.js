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
            setTimeout(redirLogin,3000)
        }   
    }
})

function redirLogin(){
    window.location.href = "/index.html"
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

function userSave(elem){
    const user = {
        name: elem.name.value,
        mail: elem.mail.value,
        password: elem.password1.value,
        age: elem.age.value,
        bornDate: elem.borndate.value,
        country:elem.country.value,
        sex: "" + elem.gender.value,
        therms:elem.therms.checked,
        cart:[],
        wish:[]
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
