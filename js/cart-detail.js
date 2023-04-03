var row = document.getElementsByClassName('row-cart-detail')
var art = JSON.parse(localStorage.getItem("articulos")) || []
var loginUser = JSON.parse(localStorage.getItem("loginUser")) || []



//VARIABLE DONDE ESTAN LOS ARTICULOS
var Articles =
    [{
        id: '1',
        title: 'SONOMA V-NECK T-SHIRT POLAR MELANGE',
        description: 'With its deep V neck and close-fitting design, the short-sleeved Sonoma T-shirt hugs your figure. The comfortable thick cotton makes this an essential casual piece.',
        date: '10/12/2022',
        price: '689',
        currency: 'u$d',
        img: 1
    },
    {
        id: '2',
        title: 'FIZVALLEY T-SHIRT VINTAGE PEANUT',
        description: 'The model measures 172 cm and wears a size S. Short-sleeve crew neck T-shirt, straight cut 100% COTTON',
        date: '10/12/2022',
        price: '395',
        currency: '$',
        img: 2
    },
    {
        id: '3',
        title: 'LOW MAN VEAU BRODERIE MILITAIRE',
        description: "Calf leather upper with suede details. Embroidery on the shield, the brand's emblem. Rubber sole band. Sole height 2.5 cm. Leather and terry cotton lining. True to size.",
        date: '10/12/2022',
        price: '669',
        currency: '$',
        img: 3
    },
    {
        id: '4',
        title: 'PRSX LOW MAN FOXY LAMINE BLANC ARGENT',
        description: 'The idea of "lived-in" as a synonym for craftsmanship can be seen clearly in the PRSX, thanks to unique, patented foxing tape that creates a purposefully imperfect sole. The shield on the side of the shoe features the coat of arms of the City of Paris, where Philippe Model launched its brand.',
        date: '10/12/2022',
        price: '669',
        currency: '$',
        img: 4
    },
    {
        id: '5',
        title: 'BOOTS 45MM SUEDE AMBRE',
        description: "A master of the urban-folk look, Vanessa Bruno is once again offering a pair of boots this season that are sure to add a Bohemian touch to any wardrobe. Featuring a suede upper, these shoes have a 4.5-cm heel that is both comfortable and practical.",
        date: '10/12/2022',
        price: '919',
        currency: '$',
        img: 5
    },
    {
        id: '6',
        title: 'LE SKINNY DE JEANNE DUBLIN',
        description: "A modern wardrobe essential, this classic mid-rise skinny jean features a clean and slim silhouette. In a medium-blue wash. Mid Rise Fit Super Stretch Denim 44% Cotton/42% Lyocell/13% Polyester/1% Elastane Machine Wash 9'' Front Rise/29'' Inseam/10'' Leg Opening",
        date: '10/12/2022',
        price: '419',
        currency: 'u$d',
        img: 6
    },
    {
        id: '7',
        title: 'HIS | HER EAU DE PARFUM',
        description: 'A unisex scent for the every guy and girl, this is the debut fragrance by who is elijah, revealing His | Her wild side. Heady enough to take you dancing through to dawn, His|Her doesn’t take itself too seriously.',
        date: '10/12/2022',
        price: '419',
        currency: 'u$d',
        img: 7
    },
    {
        id: '8',
        title: 'NOR O-N SHORT 7355 SPRUCESTONE',
        description: 'A boxy fit knitwear staple in fluffy alpaca and merino wool yarn, offering an effortless everyday jumper, with style and comfort combined. A wide round neck creates a flattering neckline to this cosy, medium gauge wool knit sweater.',
        date: '10/12/2022',
        price: '249',
        currency: 'u$d',
        img: 8
    },
    {
        id: '9',
        title: 'GARSON VEST GRAPHITE',
        description: "A simplified version of the Freestyle Vest. Take on unpredictable weather conditions with a classic, quilt-through vest that offers enduring warmth where it's needed most. Crafted with a protective, hi-low hem and a leather-trimmed standing collar, it shields against high winds. Wear it on its own or layered under a soft shell for premium comfort A specialised and fully weather proofed duck down vest from the Canadian label. Classic, versatile, light-weight and well-insulated, with 625 fill power white duck down, and a proven textile designed to stay dry in extreme conditions. Heavy duty zips, storm flaps, fleece-lined handwarmer pockets, lifetime guarantee. Made in Canada.",
        date: '10/12/2022',
        price: '799',
        currency: '$',
        img: 9
    },
    {
        id: '10',
        title: 'WAVERLEIGH BLAZER BLACK',
        description: "Made from a premium wool fabrication the Waverleigh Blazer holds its shape and drapes fluidly. This tailored single breasted blazer has a streamlined silhouette that's punctuated with an exaggerated shoulder, a wide notched collar, and side welt pockets.",
        date: '10/12/2022',
        price: '849',
        currency: 'u$d',
        img: 10
    },
    {
        id: '11',
        title: 'SUNGLASSES GG1195SK001 GOLD',
        description: 'Refined classic concept for an everyday look combining comfort and style. Square shape in full metal with acetate end tips that enriches the overall look. Gucci interlocking Logo on both temples.',
        date: '10/12/2022',
        price: '659',
        currency: '$',
        img: 11
    },
    {
        id: '12',
        title: 'SUNGLASSES GG1183S006 GOLD',
        description: 'This concept is cool & easy to wear directly developed from a vintage archive piece. Crafted in lightweight metal this pilot shape present the Gucci lettering logo on temples and comfortable flat end tips.',
        date: '10/12/2022',
        price: '579',
        currency: '$',
        img: 12
    }]

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

    showData(loginUser)
}

//Funcion para dar formato currency a el precio de los articulos
function formatCurrency(num){
    const options = { style: "currency", currency: "usd", minimumFractionDigits: 2 };
    const numFormat = num.toLocaleString("en-US", options);
    return numFormat
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

        console.log(index)
        cart[index].quantity = qty
        loginUser.cart = cart
        localStorage.setItem("loginUser", JSON.stringify(loginUser))

    }
    addCards(filterCart(Articles))
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




