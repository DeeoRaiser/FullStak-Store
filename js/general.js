
checkLogin()

function checkLogin(){
    const user = JSON.parse(localStorage.getItem("loginUser"))||[]
    user == [] ? 
        hideElementsLoginOff():
        hideElementsLoginOn()  
    if (user !== []){
        showData(user)
    }
}

function showData(user){
    const nombreUsuario = document.getElementById("user-name")
    const cantidadCarrito = document.getElementById("user-cart-counter")

    nombreUsuario.innerHTML = user.name.split(" ",1)

    const cartCounter = user.cart.reduce((acum, obj)=>{
        return acum + obj.quantity
    },0)

    cantidadCarrito.innerHTML = cartCounter
}

function hideElementsLoginOn(){
//funcion que oculta/muestra elementos del DOM si el usuario esta logueado

    //OCULTO los botones del navbar de registro y login
    const navRegistro = document.getElementById("nav-registro")
    navRegistro.classList.remove("navbar__nav-item")
    navRegistro.classList.add("hiden-item")

    const navLogin = document.getElementById("nav-login")
    navLogin.classList.remove("navbar__nav-item")
    navLogin.classList.add("hiden-item")

    //MUESTRO el icono de usuario y carrito
    const userIcons = document.getElementById("user-navbar")
    userIcons.classList.add("user-navbar")
    userIcons.classList.remove("hiden-item")
}

function hideElementsLoginOff(){
//funcion que oculta/muestra elementos del DOM si el usuario esta deslogueado
    //MUESTRO los botones del navbar de registro y login
    const navRegistro = document.getElementById("nav-registro")
    navRegistro.classList.add("navbar__nav-item")
    navRegistro.classList.remove("hiden-item")

    const navLogin = document.getElementById("nav-login")
    navLogin.classList.add("navbar__nav-item")
    navLogin.classList.remove("hiden-item")

    //OCULTO el icono de usuario y carrito
    const userIcons = document.getElementById("user-navbar")
    userIcons.classList.remove("user-navbar")
    userIcons.classList.add("hiden-item")
}
