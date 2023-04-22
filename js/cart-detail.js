var row = document.getElementsByClassName('row-cart-detail')
var art = JSON.parse(localStorage.getItem("articulos")) || []
var loginUser = JSON.parse(localStorage.getItem("loginUser")) || []


addCards(filterCart(Articles))

//Funcion que dibuja las card en el DOM, parametro Array de Articulos
function addCards(arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    
    const lista = document.getElementById('row-cart-detail')
    lista.innerHTML = ""

    if (arts == 0){
        const title = document.getElementById('title-h1')
        title.innerHTML = 'TU CARRITO ESTA VACIO'
    }

    let total = 0
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

        const divQty = document.createElement('div')
        divQty.className = 'row__quantity'

        const qtyInput = document.createElement('input')
        qtyInput.type = 'number'
        qtyInput.name = 'quantity'
        qtyInput.id = `quantity-${art.id}`
        qtyInput.setAttribute('onchange', `sumResCart(${art.id})`)
        qtyInput.max = 100
        qtyInput.min = 0;
        qtyInput.value   = art.quantity;

        const divPartialAmount = document.createElement('div')
        divPartialAmount.className = 'row__partial-amount'
        divPartialAmount.innerHTML = formatCurrency(art.quantity * art.price)
        
        total += (art.quantity * art.price)

        divPic.appendChild(trashIcon)
        divPic.appendChild(img)
        divRow.appendChild(divPic)
        divRow.appendChild(divDesc)
        divRow.appendChild(divQty)
        divRow.appendChild(divPartialAmount)
        divQty.appendChild(qtyInput)
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

//Envio los datos del id y la cantidad en el array cart, y obtengo el resto de los datos del array de los articulos
function filterCart(Arts) {
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    cart = loginUser.cart

    const artCart = []
    Arts.forEach((art) => {

      const find = cart.find((item) => item.id === parseInt(art.id))

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
function delArtCart(id){

    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let cart = loginUser.cart
    
    const find = cart.find((item) => item.id === parseInt(id))
    if (find){

        let index = cart.indexOf(id)

        cart.splice(index,1)
        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))
    }
    addCards(filterCart(Articles))
}

function sumResCart(id){
    let quantity = document.getElementById(`quantity-${id}`).value
    modifiCart(id, quantity)
}

function modifiCart(id, qty){
    loginUser = JSON.parse(localStorage.getItem("loginUser")) || []
    let cart = loginUser.cart
    
    const find = cart.find((item) => item.id === parseInt(id))

    if (find){

        let index = cart.indexOf(cart.find(ar => ar.id === id))

        cart[index].quantity = qty
        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))

    }
    addCards(filterCart(Articles))
}



