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
    window.location.href = "http://127.0.0.1:5500/pages/login/login.html"
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


/* ALERT ---------------------------------- */
function showAlert(titulo, message, tipo) {

    createAlert()

    _alert = document.getElementById('alert')
    _alert.classList.remove('alert__error')
    _alert.classList.remove('alert__sussecs')

    tipo == 'err' ?
        _alert.classList.add('alert__error') :
        _alert.classList.add('alert__sussecs')

    document.getElementById('alert__title').innerHTML = titulo
    document.getElementById('alert__description').innerHTML = message
    document.getElementById('alertContainer').classList.remove('alert__hide')

    setTimeout(hideAlert, 5000)
}
function hideAlert() {
    document.getElementById('alertContainer').classList.add('alert__hide')
    setTimeout(deleteAlert, 3800)
}
function deleteAlert(){

    setTimeout(document.getElementById('alertContainer').remove, 200)
}
function createAlert() {
    const container = document.createElement("div")
    container.id = "alertContainer"
    container.classList.add("alert", "alert__hide")

    // Crear elemento de alerta
    const alertElement = document.createElement("div")
    alertElement.classList.add("alert__error")
    alertElement.id = "alert"

    // Crear título de alerta
    const titleElement = document.createElement("p")
    titleElement.classList.add("alert__title")
    titleElement.id = "alert__title"
    alertElement.appendChild(titleElement)

    // Crear descripción de alerta
    const descriptionElement = document.createElement("p")
    descriptionElement.classList.add("alert__description")
    descriptionElement.id = "alert__description"
    alertElement.appendChild(descriptionElement)

    // Crear botón de cerrar
    const closeButton = document.createElement("div")
    closeButton.classList.add("alert__button")
    closeButton.id = "alert__button"
    closeButton.addEventListener("click", hideAlert)

    const iconElement = document.createElement("i")
    iconElement.classList.add("fas", "fa-times")
    closeButton.appendChild(iconElement)

    // Agregar botón de cerrar al elemento de alerta
    alertElement.appendChild(closeButton)

    // Agregar elemento de alerta al contenedor principal
    container.appendChild(alertElement)

    // Agregar contenedor principal al cuerpo del documento
    document.body.appendChild(container)
}
/* ALERT ---------------------------------- */
