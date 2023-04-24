logout()

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
      window.location.href = "/index.html"
    },3000);
  }
}

function logout(){
  localStorage.removeItem("loginUser")
  let h = document.getElementsByClassName("user-navbar")
  h[0].innerHTML = ""
  let h2 = document.getElementsByClassName("user-navbar2")
  h2[0].innerHTML = ""

}
