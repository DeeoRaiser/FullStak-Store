
if (checkLogin()){
    hideElementsLoginOn()
}else{
    hideElementsLoginoff()
}


//funcion que verifica si el usuario esta o no logeado
function checkLogin(){
    var user = JSON.parse(localStorage.getItem("loginUser"))||[]

    if(user.length !== 0){
        showData(user)
        return true
    }else{
        return false
    }
}

//muestra la informacion del usuario en el DOM cuando esta logeado
function showData(user){
    //modifico los elementos del DOM con los datos del usuario
    let nombreUsuario = document.getElementById("user-name")
    let cantidadCarrito = document.getElementById("user-cart-counter")
    let cantidadListaDeseos = document.getElementById("user-wish-counter")
    nombreUsuario.innerHTML = user.name.split(" ",1) //coloco el primer nombre del usuario
    
    let cartCounter = user.cart.reduce((acum, obj)=>{ //muestro el acumulado de la cantidad de productos en el carrito
        return acum + parseInt(obj.quantity)
    },0)

    //actualizo el DOM la cantidad de productos en la lista de deseos
    cantidadListaDeseos.innerHTML = user.wish.length
    //actualizo el DOM la cantidad de productos en la carrito de compras
    cantidadCarrito.innerHTML = cartCounter
}

//Da a la vista los acceso de un usuario logeado
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

//Da a la vista los acceso de un usuario deslogeado
function hideElementsLoginoff(){
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
