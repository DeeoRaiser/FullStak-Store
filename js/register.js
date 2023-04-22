const registerForm = document.getElementById("register-form")
const users = JSON.parse(localStorage.getItem("users")) || []


registerForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const elements = event.target.elements
    if (checkPass()){
        
        const userExist = users.find((user)=>{
            if (user.mail === elements.mail.value){ // se utiliza elements en vez de registerForm
                return true
            }
        })

        if (userExist){
            document.getElementById("email").classList.add("err")
            showAlert("Mail Error","El mail ingresado ya existe", "err")
        }else{
            userSave(elements)
            showAlert("Gracias por elegirnos!","Ya podes comprar en nuestra web.</br>te redireccionaremos al portal de ingreso", "suc")
            setTimeout(redir, 2000)   
        }   
    }
})

function redir(){
    window.location.href = "/pages/login/login.html"
}

function userSave(elem){

    const user = {
        id: Math.floor(Math.random() * 100000), //genero un id aleatorio
        name: elem.name.value,
        mail: elem.mail.value,
        password: elem.password1.value,
        avatar:'/assets/img/avatar/avatar-default.png',
        age: elem.age.value,
        bornDate: elem.borndate.value,
        country:elem.country.value,
        gender: "" + elem.gender.value,
        therms:elem.therms.checked,
        cart:[],
        wish:[],
        role:'user'
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];

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