var row = document.getElementsByClassName('row-cart-detail')
var art = JSON.parse(localStorage.getItem("articulos")) || []
var loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
var total = 0

var artCart = filterCart(art)

addCards(artCart)

//Funcion que dibuja las card en el DOM, parametro Array de todos los Articulos 
function addCards(arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []

    const lista = document.getElementById('row-cart-detail')
    lista.innerHTML = ""

    if (arts == 0) {
        
        const title = document.getElementById('title-h1')
        title.innerHTML = 'TU CARRITO ESTA VACIO'

        const orderButton = document.getElementById("order-buy")
        orderButton.style.display = "none"
    }else{
        const orderButton = document.getElementById("order-buy")
        orderButton.style.display = "flex"
    }

    total = 0
    const divCartDetail = document.getElementById('row-cart-detail')


    arts.forEach(art => {

        const divRow = document.createElement('div')
        divRow.className = 'row'

        const divPic = document.createElement('div')
        divPic.className = 'row__pic'

        const trashIcon = document.createElement('i')
        trashIcon.className = 'fa-solid fa-trash'
        trashIcon.id = 'deleteart'
        trashIcon.setAttribute('onclick', `delArtCart(${art.id})`)

        const img = document.createElement('img')
        img.src = `/assets/img/store/${art.id}.jpg`

        const divDesc = document.createElement('div')
        divDesc.className = 'row__description'
        divDesc.innerHTML = art.title

        const quantityContainer = document.createElement('div')
        quantityContainer.classList.add('quantity-container')

        const delContainer = document.createElement('div')
        delContainer.classList.add('cart-containter__del')
        delContainer.setAttribute('onclick', `resCart(${art.id})`)

        const delIcon = document.createElement('i')
        delIcon.classList.add('fa-solid', 'fa-minus')
        delContainer.appendChild(delIcon)

        quantityContainer.appendChild(delContainer)

        const quantityInput = document.createElement('input')
        quantityInput.classList.add('cart-containter__qnty')
        quantityInput.setAttribute('id', `id-${art.id}`)
        quantityInput.setAttribute('value', art.quantity)
        quantityInput.setAttribute('readonly', true)
        quantityInput.setAttribute('min', '1')
        quantityInput.setAttribute('max', '100')
        quantityInput.setAttribute('type', 'number')
        quantityInput.setAttribute('name', 'quantity')

        quantityContainer.appendChild(quantityInput)

        const addContainer = document.createElement('div')
        addContainer.classList.add('cart-containter__add')
        addContainer.setAttribute('onclick', `sumCart(${art.id})`)

        const addIcon = document.createElement('i')
        addIcon.classList.add('fa-solid', 'fa-plus')
        addContainer.appendChild(addIcon)

        quantityContainer.appendChild(addContainer)

        const divPartialAmount = document.createElement('div')
        divPartialAmount.className = 'row__partial-amount'
        divPartialAmount.innerHTML = formatCurrency(art.quantity * art.price)

        total += (art.quantity * art.price)

        divPic.appendChild(trashIcon)
        divPic.appendChild(img)
        divRow.appendChild(divPic)
        divRow.appendChild(divDesc)
        divRow.appendChild(quantityContainer)
        divRow.appendChild(divPartialAmount)
        divCartDetail.appendChild(divRow)


    })

    //ROW TOTAL
    const divRowTot = document.createElement('div')
    divRowTot.className = 'total-row'

    const divTitle = document.createElement('div')
    divTitle.className = 'total-row__title'
    divTitle.innerHTML = `TOTAL: ${formatCurrency(total)}`

    divRowTot.appendChild(divTitle)
    divCartDetail.appendChild(divRowTot)
}

//Envio los datos del id y la cantidad en el array Arts, y obtengo el resto de los datos del array de los articulos
function filterCart(Arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let cart = loginUser.cart

    const artCart = []
    Arts.forEach((art) => {
        const find = cart.find((item) => item.id == parseInt(art.id))

        if (find) {
            artCart.push({
                id: find.id,
                title: art.title,
                description: art.description,
                date: art.date,
                price: art.price,
                currency: art.currency,
                img: art.img,
                quantity: find.quantity,
            });

        }
    });

    return artCart;
}

//Funcion para eliminar un articulo del carrito
function delArtCart(id) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let cart = loginUser.cart

    const find = cart.find((item) => item.id === parseInt(id))
    if (find) {

        let index = cart.indexOf(id)

        cart.splice(index, 1)
        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))
    }
    artCart = filterCart(art)
    addCards(artCart)
    renderUserMenu(checkLogin())
}

//funcion que suma cantaidad de articulos
function sumCart(id) {
    let quantity = document.getElementById(`id-${id}`).value
    if (parseInt(quantity) < 99) {
        quantity = parseInt(quantity) + 1
    }
    modifiCart(id, quantity)
    renderUserMenu(checkLogin())
}

//funcion que resta cantaidad de articulos
function resCart(id) {
    let quantity = document.getElementById(`id-${id}`).value
    if (parseInt(quantity) > 1) {
        quantity = parseInt(quantity) - 1
    }

    modifiCart(id, quantity)
    renderUserMenu(checkLogin())
}

//Funcion que guarda el carrito en el usuario
function modifiCart(id, qty) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let cart = loginUser.cart

    const find = cart.find((item) => item.id === parseInt(id))

    if (find) {
        let index = cart.indexOf(cart.find(ar => ar.id === id))

        cart[index].quantity = qty
        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))
    }
    addCards(filterCart(art))
}

const genOrder = document.getElementById("generate-order")
genOrder.addEventListener("click",(evt)=>{
    artCart = filterCart(art)
    orderDetail = generateOrderDetail(artCart)
    generateOrder(orderDetail)
})

//Genero el listado de los articulos ID, CANTIDAD, PRECIO
function generateOrderDetail(array){
    let arr = []
    array.forEach(element => {
        let det = {
            id: element.id,
            price: element.price,
            quantity:element.quantity
        }
        arr.push(det)
    });

    return arr
}

//funcion que genera la orden, y limpia el carrito del usuario
function generateOrder(orderDetail){
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let Users = JSON.parse(localStorage.getItem("loginUser")) || []
    let orders = JSON.parse(localStorage.getItem("orders")) || []
    let c = loginUser.cart

    let order = {
        id:Math.floor(Math.random() * 100000), //genero un id aleatorio,
        arts:orderDetail,
        amount: total,
        user:loginUser.id,
        status:"Pagada"
    }

    

    
    loginUser.cart = []
    localStorage.setItem("loginUser", JSON.stringify(loginUser))

    artCart = filterCart(art)
    addCards(artCart)

    orders.push(order)
    localStorage.setItem("orders", JSON.stringify(orders))

    showAlert("Orden Creada", "Puedes segirla desde tu panel de usuario.", "sus")
}


