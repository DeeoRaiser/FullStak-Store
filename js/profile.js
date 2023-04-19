user = checkLogin()

const username = document.getElementById("username")
username.innerText = user.name

const email = document.getElementById("email")
email.innerText = user.mail

const bDate = document.getElementById("born-date")
bDate.innerText = user.bDate

const country = document.getElementById("country")
bDate.innerText = user.bDate