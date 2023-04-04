addCards(filterWish(Articles))

//Funcion que dibuja las card en el DOM, parametro Array de Articulos
function addCards(arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []

    const lista = document.getElementById('cards-container')
    lista.innerHTML = ""

    if (arts == 0){
        const title = document.getElementById('title-h1')
        title.innerHTML = 'TUS FAVORITOS ESTA VACIO'
    }

    arts.forEach(art => {
        const articleCard = document.createElement("article")
        articleCard.classList.add("card")

        const headerDiv = document.createElement("div")
        headerDiv.classList.add("card__header")

        const heartDiv = document.createElement("div")

        heartDiv.classList.add("card__heart")
        heartDiv.setAttribute("id", `heart_${art.id}`)


        if (loginUser.length !== 0) {
            let exist = loginUser.wish.includes(parseInt(art.id))

            if (exist) {
                heartDiv.classList.add("card__heartWishOn")
            }
        }

        const heartIcon = document.createElement("i")
        heartIcon.classList.add("fa-solid", "fa-heart")
        heartIcon.setAttribute("onclick", `addDelWish(${art.id})`)

        heartDiv.appendChild(heartIcon)
        headerDiv.appendChild(heartDiv)

        const img = document.createElement("img")
        img.src = `/assets/img/store/${art.img}.jpg`
        img.alt = "Product Image"
        img.classList.add("card__img")

        headerDiv.appendChild(img)
        articleCard.appendChild(headerDiv)

        const bodyDiv = document.createElement("div")
        bodyDiv.classList.add("card__body")

        const titleDiv = document.createElement("div")
        titleDiv.classList.add("card__title")
        titleDiv.setAttribute("id", `title${art.id}`)
        titleDiv.textContent = art.title

        const descriptionP = document.createElement("p")
        descriptionP.classList.add("card__description")
        descriptionP.textContent = art.description

        const dateDiv = document.createElement("div")
        dateDiv.classList.add("card__date")
        dateDiv.textContent = art.date

        const priceDiv = document.createElement("div")
        priceDiv.classList.add("card__price")
        priceDiv.textContent = art.currency + art.price

        bodyDiv.appendChild(titleDiv)
        bodyDiv.appendChild(descriptionP)
        bodyDiv.appendChild(dateDiv)
        bodyDiv.appendChild(priceDiv)

        articleCard.appendChild(bodyDiv)

        const footerDiv = document.createElement("div")
        footerDiv.classList.add("card__footer")

        const detailBtnContainer = document.createElement("div")
        detailBtnContainer.classList.add("card__btn-container")

        const detailBtn = document.createElement("a")
        detailBtn.classList.add("card__btn")
        detailBtn.setAttribute("onclick", `detailArt(${art.id})`)

        const detailText = document.createElement("p")
        detailText.classList.add("card__btnTextDet")
        detailText.textContent = "Detalle"

        const infoIcon = document.createElement("i");
        infoIcon.classList.add("fa-solid", "fa-circle-info")

        detailBtn.appendChild(detailText)
        detailBtn.appendChild(infoIcon)
        detailBtnContainer.appendChild(detailBtn)

        const cartBtnContainer = document.createElement("div")
        cartBtnContainer.classList.add("card__btn-container")

        const cartBtn = document.createElement("a")
        cartBtn.classList.add("card__btn-cart")
        cartBtn.setAttribute("onclick", `addCart(${art.id})`)


        const cartIcon = document.createElement("i")
        cartIcon.classList.add("fa-solid", "fa-cart-shopping")

        const cartText = document.createElement("p")
        cartText.classList.add("card__btnTextCart")

        cartText.textContent = "Agregar"

        cartBtn.appendChild(cartIcon)
        cartBtn.appendChild(cartText)
        cartBtnContainer.appendChild(cartBtn)

        footerDiv.appendChild(detailBtnContainer)
        footerDiv.appendChild(cartBtnContainer)

        articleCard.appendChild(footerDiv)

        const cardsContainer = document.getElementById("cards-container")
        cardsContainer.appendChild(articleCard)
    });

}

//Funcion que agrega o elimina el articulo de la lista de deseos
function addDelWish(idArt) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []

    if (loginUser.length !== 0) {
        let searchWish = loginUser.wish.includes(idArt) //Busco si el articulo ya esta en la lista

        if (searchWish) {                 //si esta lo elimino
            let index = loginUser.wish.indexOf(idArt)
            loginUser.wish.splice(index, 1)
        } else {
            loginUser.wish.push(idArt)    //si no esta lo agrego
        }
        //actualizo las clases del DOM para pintar los corazones
        let h = document.getElementById(`heart_${idArt}`)
        if (h.classList.contains("card__heartWishOn")) {
            h.classList.remove("card__heartWishOn")
        } else {
            h.classList.add("card__heartWishOn")
        }

        localStorage.setItem("loginUser", JSON.stringify(loginUser))
        document.getElementById("title" + idArt)
        addCards(filterWish(Articles))
        showData(loginUser)
    }

}

//Envio los datos del id y la cantidad en el array wish, y obtengo el resto de los datos del array de los articulos
function filterWish(Arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    wish = loginUser.wish

    const artWish = []
    Arts.forEach((art) => {

      const find = wish.find((item) => item === parseInt(art.id))

      if (find) {
        artWish.push({
          id: art.id,
          title: art.title,
          description: art.description,
          date: art.date,
          price: art.price,
          currency: art.currency,
          img: art.img,
        });
      }
    });
    
    return artWish;
}

//Funcion para agregar artiulos al carrito
function addCart(idArt, quan = 1) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    if (loginUser.length !== 0) {
        let cart = loginUser.cart

        const searchCart = cart.find(cart => cart.id === idArt) || [] //BUSCO EL ARTICULO EN EL CARRITO

        if (searchCart.length === 0) {   //si el array esta vacio (no esta ese articulo en el carrito) lo creo
            let addArt = {
                id: idArt,
                quantity: 1
            }
            cart.push(addArt)
        } else {                          //si este articulo ya esta en el carrito incremento la cantidad
            searchCart.quantity += quan
        }

        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))


        const nombre = document.getElementById("title" + idArt)
        showAlert(`${quan} ${nombre.innerHTML}`, "Se agrego a tu carrito")
        showData(loginUser)

    } else {
        showAlert("Crea una cuenta e inicia sesion", "para poder armar tu carrito", "err")
    }
}

/* ALERT ---------------------------------- */
function showAlert(titulo, message, tipo = "suc") {

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

    setTimeout(hideAlert, 2800)
}
function hideAlert() {
    document.getElementById('alertContainer').classList.add('alert__hide')
    setTimeout(deleteAlert, 100)
}
function deleteAlert() {

    document.getElementById('alertContainer').remove()
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

