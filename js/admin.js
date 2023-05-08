


/* CODIGO DE PARA MANEJAR LA TAB ARTICULOS */
//#region ARTICULOS TAB1

const modalArt = document.getElementById("modalArt")
const modalUsers = document.getElementById("modalUser")

//ORDER DE ARTICULOS
let iconAZ = document.getElementById("a-z")
let iconZA = document.getElementById("z-a")
let icon19 = document.getElementById("menor-mayor")
let icon91 = document.getElementById("mayor-menor")

//ORDER DE USUARIO
let iconAZUsr = document.getElementById("a-z-usr")
let iconZAUsr = document.getElementById("z-a-usr")
let icon19Usr = document.getElementById("menor-mayor-usr")
let icon91Usr = document.getElementById("mayor-menor-usr")

var artSearchFilter = [] //Array donde se gurdan los articulos del termino de busqueda

var usrSearchFilter = [] //Array donde se gurdan los articulos del termino de busqueda

hideIcons() //Oculto los iconos de la forma de ordenamiento


var editArticulo = false
var editUser = false


var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent")

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  

//Funcion para cargar todos los articulos del LocalStorage
let arts = JSON.parse(localStorage.getItem("articulos"))
artSearchFilter = arts



addArticles(orderBy(arts, "Descripción A-Z"))

//Funcion Cargar los articulos al DOM
function addArticles(array) {
  const t1 = document.getElementById("listArt")
  t1.innerHTML = ""

  array.forEach(art => {

    const divRow = document.createElement('div')
    divRow.className = 'fullRow'

    const divPic = document.createElement('div')
    divPic.className = 'fullRow__pic'

    const img = document.createElement('img')
    img.src = art.img

    const divTitle = document.createElement('div')
    divTitle.className = 'fullRow__title'
    divTitle.innerHTML = art.title

    const divDesc = document.createElement('div')
    divDesc.className = 'fullRow__description'
    divDesc.innerHTML = art.description

    const divPrice = document.createElement('div')
    divPrice.className = 'fullRow__price'
    divPrice.innerHTML = formatCurrency(parseFloat(art.price))

    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-containter')

    const deleteContainer = document.createElement('div')
    deleteContainer.classList.add('cart-containter__delete')

    const editButton = document.createElement('button')
    editButton.classList.add('btn', 'buttons-containter__edit')
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>Editar'
    editButton.setAttribute('onclick', `editArt(${art.id})`)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn', 'buttons-containter__delete')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>Borrar'
    deleteButton.setAttribute('onclick', `deleteArt(${art.id})`)

    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    divPic.appendChild(img)

    divRow.appendChild(divPic)
    divRow.appendChild(divTitle)
    divRow.appendChild(divDesc)
    divRow.appendChild(divPrice)
    divRow.appendChild(buttonsContainer)
    divRow.appendChild(deleteContainer)
    t1.appendChild(divRow)

  })
}

//funcion para cargar renderisar articulos segun termino de busqueda
let searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", (evt) => {
  //recargo los articulos del LocalStorage
  arts = JSON.parse(localStorage.getItem("articulos")) || []

  artSearchFilter.splice(0) //elimino todos los elementos del array
  let searchInput = document.getElementById("search-input").value.toLowerCase()

  arts.forEach((art) => {
    if (art.title.toLowerCase().includes(searchInput)) {
      artSearchFilter.push(art)
    }
  })

  addArticles(artSearchFilter)
})

//Funcion para mostrar las tabs segun el boton
function openTab(evt, tabName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent")

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  document.getElementById(tabName).style.display = "flex"
}


//Funcion para editar un articulo, llamada desde el boton editar del DOM
function editArt(id) {
  let arts = JSON.parse(localStorage.getItem("articulos"))
  for (let i = 0; i < arts.length; i++) {
    if (arts[i].id === id) {
      editArticulo = true
      cargarDatosArticulo(arts[i])
      break
    }
  }
}

//Funcion que recibe como parametro un objeto Articulo, carga los datos enviados en el DOM, para editar o visualizar
function cargarDatosArticulo(art) {

  modalArt.style.display = "flex"
  modalArt.style.animation = "drop-modal 0.3s ease-out forwards"

  let artID = document.getElementsByName("artID")[0]
  let title = document.getElementsByName("artTitle")[0]
  let routeImage = document.getElementsByName("artRouteImage")[0]
  let img = document.getElementById("artPic")
  let artDescription = document.getElementsByName("artDescription")[0]
  let price = document.getElementsByName("artPrice")[0]
  let artDate = document.getElementsByName("artDate")[0]

  artID.value = art.id
  title.value = art.title
  routeImage.value = art.img
  img.src = art.img
  artDescription.innerText = art.img
  price.value = formatCurrency(art.price)
  artDescription.value = art.description
  artDate.value = art.date
}

//#region EVENT LISTENER MODAL ARTICULO
let buttonLoadImageArt = document.getElementById("loadImageArt")
buttonLoadImageArt.addEventListener("click", (event) => {
  const av = document.getElementById("artPic")
  const ruta = document.getElementById("routeImageArt")
  av.src = ruta.value
})

//cancelar el editado de un articulo
let buttonCancel = document.getElementById("art-cancel")
buttonCancel.addEventListener("click", (event) => {
  editArticulo = false
  hideModalArt()
})

//boton para cerrar el modal articulo
let closeModal = document.getElementsByClassName("close")[0]
closeModal.addEventListener("click", (event) => {
  editArticulo = false
  hideModalArt()
})

//Cierra el modal ARTICULOS
function hideModalArt() {
  setTimeout(function () {
    modalArt.style = ""
    modalArt.style.display = "none"
  }, 300)
  modalArt.style.animation = "hide-modal 0.3s ease-out forwards"
}

//Formulario para cargar Articulo
let form = document.getElementById("article-form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const datos = event.target.elements

  let Articulo = {
    'id': parseInt(datos.artID.value),
    'title': datos.artTitle.value,
    'description': datos.artDescription.value,
    'date': datos.artDate.value,
    'price': datos.artPrice.value,
    'img': datos.artRouteImage.value
  }

  let articulos = JSON.parse(localStorage.getItem("articulos"))

  if (editArticulo) {
    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].id == Articulo.id) {
        articulos[i] = Articulo
        break;
      }
    }
  } else {
    Articulo.id = floor(Math.random() * 100000), //genero un id aleatorioMath
      articulos.push(Articulo)
  }

  localStorage.setItem("articulos", JSON.stringify(articulos))

  hideModalArt()
})

//Modal donde esta el formulario para cargar articulos
let newArticle = document.getElementById("newArt")
newArticle.addEventListener("click", (event) => {
  edit = false
  modalArt.style.display = "flex"
})


//#endregion MODAL ARTICULO


//funcion para ordenar los articulos
let selectOrder = document.getElementById("order-by")
selectOrder.addEventListener("change", (evt) => {
  addArticles(orderBy(artSearchFilter, selectOrder.value))
})



//Eliminar Articulos.
function deleteArt(id) {
  arts = JSON.parse(localStorage.getItem("articulos"))

  let arti = arts.find(art => art.id === id)
  let borrar = arts.findIndex(art => art.id === id)
  showQuestion("Quiere borrar el articulo", `${arti.title} `, () => {
    if (borrar !== -1) {
      arts.splice(borrar, 1)
      showAlert("Articulo Eliminado", `Se elimino el articulo ${arti.title}`, "sus")
      localStorage.setItem("articulos", JSON.stringify(arts))

      addArticles(arts)
    }
  }, () => {

  })

}

//#endregion ARTICULOS TAB1

/* END CODIGO MANEJAR LA TAB ARTICULOS */



/*  ===================================================================================================================================  */



/* CODIGO MANEJAR LA TAB2 USUARIOS */

//#region USUARIOS TAB2

//CARGAR LISTADO DE USUARIOS
let users = JSON.parse(localStorage.getItem("users"))
usrSearchFilter = users
addUsers(orderByUsers(users, "Nombre A-Z"))

//Cargar listado de usuarios
function addUsers(users) {
  const t2 = document.getElementById("listUsr")
  t2.innerHTML = ""

  users.forEach(usr => {

    const divRow = document.createElement('div')
    divRow.className = 'fullRow'

    const divPic = document.createElement('div')
    divPic.className = 'fullRow__user-pic'

    const img = document.createElement('img')
    img.src = usr.avatar

    const divDesc = document.createElement('div')
    divDesc.className = 'fullRow__description'
    divDesc.innerHTML = usr.name

    const divMail = document.createElement('div')
    divMail.className = 'fullRow__email'
    divMail.innerHTML = usr.mail

    const divRole = document.createElement('div')
    divRole.className = 'fullRow__role'
    divRole.innerHTML = usr.role

    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-containter')

    const editButton = document.createElement('button')
    editButton.classList.add('btn', 'buttons-containter__edit')
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i> Editar'
    editButton.setAttribute('onclick', `editUser(${usr.id})`)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn', 'buttons-containter__delete')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i> Borrar'
    deleteButton.setAttribute('onclick', `deleteUser(${usr.id})`)

    const wishButton = document.createElement('button')
    wishButton.classList.add('btn', 'buttons-containter__wishlist')
    wishButton.innerHTML = '<i class="fa-solid fa-heart"></i> Wish List'
    wishButton.setAttribute('onclick', `wishlist(${usr.id})`)

    const cartButton = document.createElement('button')
    cartButton.classList.add('btn', 'buttons-containter__cart')
    cartButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Cart'
    cartButton.setAttribute('onclick', `cart(${usr.id})`)

    const ordersButton = document.createElement('button')
    ordersButton.classList.add('btn', 'buttons-containter__order')
    ordersButton.innerHTML = '<i class="fa-solid fa-list"></i> Orders'
    ordersButton.setAttribute('onclick', `ordersUser(${usr.id})`)

    buttonsContainer.appendChild(wishButton)
    buttonsContainer.appendChild(cartButton)
    buttonsContainer.appendChild(ordersButton)
    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    divPic.appendChild(img)

    divRow.appendChild(divPic)
    divRow.appendChild(divDesc)
    divRow.appendChild(divMail)
    divRow.appendChild(divRole)
    divRow.appendChild(buttonsContainer)

    t2.appendChild(divRow)

  })
}

//Event Listener order users
let orderUsers = document.getElementById("order-by-usr")
orderUsers.addEventListener("change", (evt) => {
  addUsers(orderByUsers(usrSearchFilter, orderUsers.value))
})


//funcion para cargar renderisar usuarios segun termino de busqueda
let searchButtonUsr = document.getElementById("search-button-user")
searchButtonUsr.addEventListener("click", (evt) => {
  //recargo los usuarios del LocalStorage
  users = JSON.parse(localStorage.getItem("users")) || []

  usrSearchFilter.splice(0) //elimino todos los elementos del array

  let searchInputUsr = document.getElementById("search-input-user").value.toLowerCase()

  users.forEach((usr) => {
    if (usr.name.toLowerCase().includes(searchInputUsr)) {
      usrSearchFilter.push(usr)
    }
  })

  addUsers(usrSearchFilter)
})


//Funcion para eliminar usuarios
function deleteUser(id) {
  users = JSON.parse(localStorage.getItem("users"))

  let usri = users.find(usr => usr.id === id)
  let borrar = users.findIndex(usr => usr.id === id)

  showQuestion("Quiere borrar el usuario", `${usri.name} `, () => {
    if (borrar !== -1) {
      users.splice(borrar, 1)
      showAlert("Usuario Eliminado", `Se elimino el usuario ${usri.title}`, "sus")
      localStorage.setItem("users", JSON.stringify(users))
      addUsers(users)
    }
  }, () => {

  })

}

let registerCancel = document.getElementById("register-submit")
registerCancel.addEventListener("click",(evt)=>{
  modalUsers.style.display = "none"
})

let newusr = document.getElementById("new-usr")
newusr.addEventListener("click",(evt)=>{
  const formulario = document.getElementById('register-form-adm');
  for (let i = 0; i < formulario.elements.length - 3; i++) {
    formulario.elements[i].value = '';
  }

  let modal = document.getElementById("modalUser")
  modal.style.display = "flex"
})

const registerFormAdm = document.getElementById("register-form-adm")
registerFormAdm.addEventListener('submit',(event)=>{
  const users = JSON.parse(localStorage.getItem("users")) || []
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
          showAlert("Usuario Creado","", "suc")
      }   
  }
})

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

  users = JSON.parse(localStorage.getItem('users')) || [];

  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
  let modal = document.getElementById("modalUser")
  modal.style.display = "none"
  addUsers(users)
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


//#endregion USUARIOS TAB2

/* END CODIGO MANEJAR LA TAB2 USUARIOS */





//Funcion ocultar los iconos de la forma de ordenamiento
function hideIcons() {
  iconAZ.style.display = "none"
  iconZA.style.display = "none"
  icon19.style.display = "none"
  icon91.style.display = "none"

  iconAZUsr.style.display = "none"
  iconZAUsr.style.display = "none"
  icon19Usr.style.display = "none"
  icon91Usr.style.display = "none"
}















var art = JSON.parse(localStorage.getItem("articulos")) || []
var orders = JSON.parse(localStorage.getItem("orders")) || []
let user = checkLogin()
console.log(orders)

const divCartDetail = document.getElementById('tab3')


orders.forEach(element => {
    
    const order = document.createElement('div')
    order.className = `order` 
    order.id = `order${element.id}` 

    const orderTitle = document.createElement('div')
    orderTitle.className = 'order__title'

    const orderDetail = document.createElement('div')
    orderDetail.className = 'order__detail'

    const Col1 = document.createElement('div')
    const Col2 = document.createElement('div')
    const Col3 = document.createElement('div')
    Col1.className = 'order__column'
    Col2.className = 'order__column'
    Col3.className = 'order__column'


    Col1.innerHTML = `Orden N° ${element.id}`
    Col2.innerHTML=`Estado: ${element.status}`
    Col3.innerHTML=`${formatCurrency(element.amount)}`

    orderDetail.appendChild(Col1)
    orderDetail.appendChild(Col2)
    orderDetail.appendChild(Col3)

    const divSeparator = document.createElement('div')
    divSeparator.className = 'row separator'
    order.appendChild(orderDetail)
    divCartDetail.appendChild(order)
    
    addCards(modifyData(element.arts), element.id)
})


//Funcion que dibuja las card en el DOM, parametro Array de todos los Articulos 
function addCards(arts, idOrder) {

    if (arts == 0) {

        const title = document.getElementById('title-h1')
        title.innerHTML = 'NO TIENES ORDENES GENERADAS'
    }

    arts.forEach(art => {

        const divRow = document.createElement('div')
        divRow.className = 'row'

        const divPic = document.createElement('div')
        divPic.className = 'row__pic'

        const img = document.createElement('img')
        img.src = `/assets/img/store/${art.id}.jpg`

        const divDesc = document.createElement('div')
        divDesc.className = 'row__description'
        divDesc.innerHTML = art.title

        const quantityContainer = document.createElement('div')
        quantityContainer.classList.add('quantity-container')



        const quantityInput = document.createElement('input')
        quantityInput.classList.add('cart-containter__qnty')
        quantityInput.setAttribute('value', art.quantity)
        quantityInput.setAttribute('readonly', true)

        quantityContainer.appendChild(quantityInput)

        const divPartialAmount = document.createElement('div')
        divPartialAmount.className = 'row__partial-amount'
        divPartialAmount.innerHTML = formatCurrency(art.quantity * art.price)

        divPic.appendChild(img)
        divRow.appendChild(divPic)
        divRow.appendChild(divDesc)
        divRow.appendChild(quantityContainer)
        divRow.appendChild(divPartialAmount)

        const rowOrder = document.getElementById(`order${idOrder}`)

        rowOrder.appendChild(divRow)
    })



}


function modifyData(data) {
    const result = []
    let articles = JSON.parse(localStorage.getItem("articulos")) || []


    data.forEach((art) => {
        const article = articles.find((a) => a.id === art.id)
        const obj = {
            title: article.title,
            description: article.description,
            date: article.date,
            price: Number(article.price),
            img: article.img,
            quantity: art.quantity,
            id: article.id,
        }
        result.push(obj)
    })
    return result
}


let admin = checkLogin()

if (admin.role==="admin"){
  
}else{
  let main = document.getElementsByClassName('main')
  main[0].innerHTML = "Acceso denegado"
}