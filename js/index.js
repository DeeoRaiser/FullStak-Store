var cards = document.getElementsByClassName('cards-container')
var art = JSON.parse(localStorage.getItem("articulos")) || []
var loginUser = JSON.parse(localStorage.getItem("loginUser")) || []

addCards(Articles)

//Funcion que dibuja las card en el DOM, parametro Array de Articulos
function addCards(arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []

    
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
        priceDiv.textContent = formatCurrency(parseFloat(art.price))

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

//Funcion que agrega articulos al carrito de compras, parametro ID articulo y Cantidad
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

        renderUserMenu(checkLogin())

    } else {
        showAlert("Crea una cuenta e inicia sesion", "para poder armar tu carrito", "err")
    }

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
            loginUser.wish.push(idArt)       //si no esta lo agrego
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
        renderUserMenu(checkLogin())

    } else {
        showAlert("Crea una cuenta e inicia sesion", "para poder armar tu lista de deseos", "err")
    }

}


