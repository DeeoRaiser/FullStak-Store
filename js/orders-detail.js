var row = document.getElementsByClassName('row-cart-detail')

var art = JSON.parse(localStorage.getItem("articulos")) || []
var orders = JSON.parse(localStorage.getItem("orders")) || []
var total = 0
let user = checkLogin()


//Obtengo todas las ordenes que haya del usuario por ID
function ordersUser(userID) {
    const orders = JSON.parse(localStorage.getItem("orders")) || []
    return orders.filter(order => order.user === userID)
}




//cargo las ordenes al array segun usuario logeado
let userOrders = ordersUser(user.id)



const divCartDetail = document.getElementById('row-cart-detail')


userOrders.forEach(element => {

    console.log(element.arts)
    const lista = document.getElementById('row-cart-detail')
    lista.innerHTML += `Orden n ${element.id}`

    const divSeparator = document.createElement('div')
    divSeparator.className = 'row separator'
    divCartDetail.appendChild(divSeparator)

    addCards(getOrder(element.arts),element.id)

});





//Funcion que dibuja las card en el DOM, parametro Array de todos los Articulos 
function addCards(arts) {


    if (arts == 0) {

        const title = document.getElementById('title-h1')
        title.innerHTML = 'NO TIENES ORDENES GENERADAS'
    }

    total = 0
    



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

        total += (art.quantity * art.price)

        divPic.appendChild(img)
        divRow.appendChild(divPic)
        divRow.appendChild(divDesc)
        divRow.appendChild(quantityContainer)
        divRow.appendChild(divPartialAmount)
        divCartDetail.appendChild(divRow)


    })



}

function getOrder(Arts) {

    

    const orders = JSON.parse(localStorage.getItem("orders")) || []

    
    art = JSON.parse(localStorage.getItem("articulos")) || []
    const artOrder = [];

    art.forEach((art) => {
        const findOrder = orders.find((order) => {
            return order.arts.find((item) => item.id === parseInt(art.id))
        });

        if (findOrder) {
            const findArt = findOrder.arts.find((item) => item.id === parseInt(art.id))

            artOrder.push({
                id: findArt.id,
                title: art.title,
                description: art.description,
                date: art.date,
                price: findArt.price,
                currency: art.currency,
                img: art.img,
                quantity: findArt.quantity,
            });
        }
    });

    return artOrder;
}

