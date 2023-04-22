user = checkLogin()
loadData()

campo = ""

//Funcion que carga los datos del perfil del usuario.
function loadData() {
  var username = document.getElementById("user-name")
  username.innerText = user.name
  var email = document.getElementById("user-email")
  email.innerText = user.mail
  var bDate = document.getElementById("user-born-date")
  bDate.innerText = user.bornDate
  var gender = document.getElementById("user-gender")
  gender.innerText = checkGender(user.gender)
  var country = document.getElementById("user-country")
  country.innerText = countryName(user.country)
  var titleCard = document.getElementsByClassName("user-title")[0]
  titleCard.innerText = user.name
  var avatar = document.getElementById("avatar")
  avatar.src = user.avatar
  var avatar2 = document.getElementById("avatar2")
  avatar2.onerror = loadAvatarProfileError
  avatar2.src = user.avatar

  var buttonAvatar = document.getElementById("loadImage")
  buttonAvatar.onclick = loadImage
}

//Escucho el evento submit del formulario de ctualizacion
var form = document.getElementById("profile-form")
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const elements = event.target.elements
  if (campo === 'name') {
    user.name = elements.name.value
    userSave()
    showAlert("Actualización", "Se actualizó el nombre de usuario")
  } if (campo === 'mail') {
    changeMail(elements)
    showAlert("Actualización", "Se actualizó el mail de usuario")
  } if (campo === 'gender') {
    user.gender = elements.gender.value
    userSave()
    showAlert("Actualización", "Se actualizó el género de usuario")
  } if (campo === 'bornDate') {
    user.bornDate = elements.borndate.value
    userSave()
    showAlert("Actualización", "Se actualizó la fecha de nacimiento de usuario")
  } if (campo === 'country') {
    user.country = elements.country.value
    userSave()
    showAlert("Actualización", "Se actualizó el país de usuario")
  } if (campo === 'pass') {
    changePass(elements)
  }if (campo === 'avatar') {
    changeAvatar(elements)
  }
})

//funcion para cargar la imagen en el avatar del usuario en el modal de actualizacion de datos

//Muestro el modal y manejo los para cerrarlo
function showModal(cmp) {
  hideElement(cmp)
  campo = cmp

  var modal = document.getElementById("modal")
  modal.style.display = "flex"
  modal.style.animation = "drop-modal 0.3s ease-out forwards"

  //evento boton cancel
  var cancel = document.getElementById("cancel")
  cancel.onclick = function () {
    setTimeout(function () {
      modal.style.display = "none"
    }, 300)
    modal.style.animation = "hide-modal 0.3s ease-out forwards"
  }

  //evento boton close
  var close = document.getElementsByClassName("close")[0]
  close.onclick = function () {
    hideModal()
  }
}
//Cierra el modal
function hideModal() {
  setTimeout(function () {
    modal.style.display = "none"
  }, 300)
  modal.style.animation = "hide-modal 0.3s ease-out forwards"
}

//OCULTO TODOS LOS CONTROLES DEL FORM MENOS EL ENVIADO Y APLICO EL REQUIRED
function hideElement(cmp) {

  const editName = document.getElementById("name-container")
  const editMail = document.getElementById("mail-container")
  const editBorn = document.getElementById("born-container")
  const editCountry = document.getElementById("born-country-container")
  const editGender = document.getElementById("gender-container")
  const editPassword1 = document.getElementById("pass-1")
  const editPassword2 = document.getElementById("pass-2")
  const editPassword3 = document.getElementById("pass-3")
  const avatar = document.getElementById("avatar-container2")

  editName.style.display = "none"
  editMail.style.display = "none"
  editBorn.style.display = "none"
  editCountry.style.display = "none"
  editGender.style.display = "none"
  editPassword1.style.display = "none"
  editPassword2.style.display = "none"
  editPassword3.style.display = "none"
  avatar.style.display = "none"
  editName.querySelector("input").required = ""
  editMail.querySelector("input").required = false
  editGender.querySelector("input").required = false
  editBorn.querySelector("input").required = false
  editCountry.querySelector("select").required = false
  editPassword1.querySelector("input").required = false
  editPassword2.querySelector("input").required = false
  editPassword3.querySelector("input").required = false
  avatar.querySelector("input").required = false


  if (cmp === 'name') {
    editName.style.display = "block"
    editName.querySelector("input").required = true
  } if (cmp === 'mail') {
    editMail.style.display = "block"
    editMail.querySelector("input").required = true
  } if (cmp === 'gender') {
    editGender.style.display = "block"
    editGender.querySelector("input").required = true
  } if (cmp === 'bornDate') {
    editBorn.style.display = "block"
    editBorn.querySelector("input").required = true
  } if (cmp === 'country') {
    editCountry.style.display = "block"
    editCountry.querySelector("select").required = true
  } if (cmp === 'pass') {
    editPassword1.style.display = "block"
    editPassword2.style.display = "block"
    editPassword3.style.display = "block"

    editPassword1.querySelector("input").required = true
    editPassword2.querySelector("input").required = true
    editPassword3.querySelector("input").required = true
  }
  if (cmp === 'avatar') {
    avatar.style.display = "flex"
    avatar.querySelector("input").required = true
  }
}

//Retorno el genero en formato texto
function checkGender(gender) {

  if (parseInt(gender) === 1) {
    return "Masculino"
  } else if (parseInt(gender) === 0) {
    return "Femenino";
  } else if (parseInt(gender) === 2) {
    return "Otro";
  }
}

function changePass(info) {
  var pass1 = info.password.value
  var pass2 = info.password2.value
  var pass3 = info.password3.value

  var loginUser = JSON.parse(localStorage.getItem('loginUser'));

  if (pass1 === loginUser.password) {
    if (pass2 === pass3) {
      user.password = pass2
      userSave()
      showAlert("Actualización", "La contraseña se ha actualizado con exito")
    } else {
      showAlert("Error", "Las nuevas contraseñas no coinciden", "err")
    }
  } else {
    showAlert("Error", "La contraseña anterior es incorrecta", "err")
  }

}

function changeMail(info) {
  var mail = info.mail.value
  var users = JSON.parse(localStorage.getItem('users'));
  var err = false
  for (var i = 0; i < users.length; i++) {
    if (users[i].mail === mail) {
      err = true
      break;
    }
  }

  if (err) {
    showAlert("Error", "El mail ya existe en la base de datos", "err")
  } else {
    user.mail = mail
    userSave()
    showAlert("Actualización", "Mail actualizado correctamente")
  }

}

function userSave() {
  var users = JSON.parse(localStorage.getItem('users'));

  const updateUser = {
    id: user.id,
    name: user.name,
    mail: user.mail,
    password: user.password,
    age: user.age,
    avatar: user.avatar,
    bornDate: user.bornDate,
    country: user.country,
    gender: user.gender,
    therms: user.therms,
    cart: user.cart,
    wish: user.wish,
    role: user.role
  }

  for (var i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      // Actualizar los datos del usuario
      users[i] = updateUser
      break;
    }
  }
  //Actializo la BD de usuarios y el usuario logueado
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('loginUser', JSON.stringify(updateUser))
  hideModal()
  loadData()
  renderHeader()
}

//carga la imagen del usuario en el preview
function loadImage() {
  const av = document.getElementById("avatar2")
  const ruta = document.getElementById("routeImage")
  av.src = ruta.value
}

//carga la imagen por defecto e caso que no encuentre la que cargo el usuario
function loadAvatarProfileError() {
  const avatar = document.getElementById("avatar-container2")
  const avatar2 = document.getElementById("avatar")
  avatar.src = '/assets/img/avatar/avatar-default.png'
  avatar2.src = '/assets/img/avatar/avatar-default.png'
}

//actualiza la ruta la imagen del usuario
function changeAvatar(info){
  user.avatar = info.avatar.value

  showAlert("Actulizado", "Se actualizo la imagen de usuario")
  userSave()
}