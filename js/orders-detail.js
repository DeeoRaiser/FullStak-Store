var row = document.getElementsByClassName('row-cart-detail')

var art = JSON.parse(localStorage.getItem("articulos")) || []
var orders = JSON.parse(localStorage.getItem("orders")) || []
var total = 0
let user = checkLogin()


//cargo las ordenes al array segun usuario logeado
let userOrders = getOrdersByUser(user.id)



const divCartDetail = document.getElementById('row-order-detail')


userOrders.forEach(element => {
    
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


//Filtra todas las ordenes correspondiente a x usuario
function getOrdersByUser(userId) {
    const orders = JSON.parse(localStorage.getItem("orders")) || []
    const userOrders = orders.filter(order => order.user === userId)
    return userOrders
}

//Funcion que dibuja las card en el DOM, parametro Array de todos los Articulos 
function addCards(arts, idOrder) {

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

        const rowOrder = document.getElementById(`order${idOrder}`)

        rowOrder.appendChild(divRow)

        

    })



}


function modifyData(data) {
    const result = []
    let articles = JSON.parse(localStorage.getItem("articulos")) || []
    console.log(data)

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


