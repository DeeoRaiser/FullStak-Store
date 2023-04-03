

const users = JSON.parse(localStorage.getItem("users")) || []

const loginForm = document.getElementById("login-form")
const { email, password } = loginForm.elements

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()

checkUserPass()
})

function checkUserPass() {
  const user = users.find((user) => {
    if (user.mail == email.value) {
      return true
    }
  })

  if (!user || user.password !== password.value) {
    showAlert("Error", "Los datos ingresados son incorrectos", "err")
    return
  }

  if (user.password == password.value) {
    localStorage.setItem("loginUser", JSON.stringify(user))
    showAlert(`Bienvenido ${user.name}`, "Te redireccionaremos al inicio", "suc")
    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500"
    },3000);
  }
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
