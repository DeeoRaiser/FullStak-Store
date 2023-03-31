

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
    alert("los datos ingresados con incorrectos")
    return
  }

  if (user.password == password.value) {
    localStorage.setItem("loginUser", JSON.stringify(user))
    alert("ingreso exitoso")
  }
}