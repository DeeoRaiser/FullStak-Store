const cards = document.getElementsByClassName('cards-container')
const art = JSON.parse(localStorage.getItem("articulos")) || []
var Articles =
    [   {
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
var user = JSON.parse(localStorage.getItem("user"))|| []
addCards(Articles)

function addCart(id){
    console.log("dfdsfsdf")
     showAlert("Articulo Agregado al carrito", "suc")
          
 }

function addCards(arts){

    arts.forEach(art => {
        const articleCard = document.createElement("article")
        articleCard.classList.add("card")
      
        const headerDiv = document.createElement("div")
        headerDiv.classList.add("card__header")
      
        const heartDiv = document.createElement("div")
        
        heartDiv.classList.add("card__heart")
      
        const heartIcon = document.createElement("i")
        heartIcon.classList.add("fa-solid", "fa-heart")
      
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



function detailArt(id){

}




