
//funcion que verifica si el usuario esta o no logeado
function checkLogin() {
    var user = JSON.parse(localStorage.getItem("loginUser")) || []

    if (user.length !== 0) {
        let userData = {
            id: user.id,
            name: user.name,
            mail: user.mail,
            password: user.password,
            avatar: user.avatar,
            bornDate: user.bornDate,
            country: user.country,
            gender: user.gender,
            therms: user.therms,
            cart: user.cart,
            wish: user.wish,
            role: user.role,
        }
        return userData
    } else {
        return false
    }
}


//Funcion para dar formato currency a el precio de los articulos
function formatCurrency(num) {
    const options = { style: "currency", currency: "usd", minimumFractionDigits: 2 };
    const numFormat = num.toLocaleString("en-US", options);
    return numFormat
}

//Funcion que recibe el codigo de pais y retorna el Nombre del mismo
function countryName(value) {

    const countries = [
        { value: "AF", name: "Afghanistan" },
        { value: "AX", name: "Åland Islands" },
        { value: "AL", name: "Albania" },
        { value: "DZ", name: "Algeria" },
        { value: "AS", name: "American Samoa" },
        { value: "AD", name: "Andorra" },
        { value: "AO", name: "Angola" },
        { value: "AI", name: "Anguilla" },
        { value: "AQ", name: "Antarctica" },
        { value: "AG", name: "Antigua and Barbuda" },
        { value: "AR", name: "Argentina" },
        { value: "AM", name: "Armenia" },
        { value: "AW", name: "Aruba" },
        { value: "AU", name: "Australia" },
        { value: "AT", name: "Austria" },
        { value: "AZ", name: "Azerbaijan" },
        { value: "BS", name: "Bahamas" },
        { value: "BH", name: "Bahrain" },
        { value: "BD", name: "Bangladesh" },
        { value: "BB", name: "Barbados" },
        { value: "BY", name: "Belarus" },
        { value: "BE", name: "Belgium" },
        { value: "BZ", name: "Belize" },
        { value: "BJ", name: "Benin" },
        { value: "BM", name: "Bermuda" },
        { value: "BT", name: "Bhutan" },
        { value: "BO", name: "Bolivia, Plurinational State of" },
        { value: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
        { value: "BA", name: "Bosnia and Herzegovina" },
        { value: "BW", name: "Botswana" },
        { value: "BV", name: "Bouvet Island" },
        { value: "BR", name: "Brazil" },
        { value: "IO", name: "British Indian Ocean Territory" },
        { value: "BN", name: "Brunei Darussalam" },
        { value: "BG", name: "Bulgaria" },
        { value: "BF", name: "Burkina Faso" },
        { value: "BI", name: "Burundi" },
        { value: "KH", name: "Cambodia" },
        { value: "CM", name: "Cameroon" },
        { value: "CA", name: "Canada" },
        { value: "CV", name: "Cape Verde" },
        { value: "KY", name: "Cayman Islands" },
        { value: "CF", name: "Central African Republic" },
        { value: "TD", name: "Chad" },
        { value: "CL", name: "Chile" },
        { value: "CN", name: "China" },
        { value: "CX", name: "Christmas Island" },
        { value: "CC", name: "Cocos (Keeling) Islands" },
        { value: "CO", name: "Colombia" },
        { value: "KM", name: "Comoros" },
        { value: "CG", name: "Congo" },
        { value: "CD", name: "Congo, the Democratic Republic of the" },
        { value: "CK", name: "Cook Islands" },
        { value: "CR", name: "Costa Rica" },
        { value: "CI", name: "Côte d'Ivoire" },
        { value: "HR", name: "Croatia" },
        { value: "CU", name: "Cuba" },
        { value: "CW", name: "Curaçao" },
        { value: "CY", name: "Cyprus" },
        { value: "CZ", name: "Czech Republic" },
        { value: "DK", name: "Denmark" },
        { value: "DJ", name: "Djibouti" },
        { value: "DM", name: "Dominica" },
        { value: "DO", name: "Dominican Republic" },
        { value: "EC", name: "Ecuador" },
        { value: "EG", name: "Egypt" },
        { value: "SV", name: "El Salvador" },
        { value: "GQ", name: "Equatorial Guinea" },
        { value: "ER", name: "Eritrea" },
        { value: "EE", name: "Estonia" },
        { value: "ET", name: "Ethiopia" },
        { value: "FK", name: "Falkland Islands (Malvinas)" },
        { value: "FO", name: "Faroe Islands" },
        { value: "FJ", name: "Fiji" },
        { value: "FI", name: "Finland" },
        { value: "FR", name: "France" },
        { value: "GF", name: "French Guiana" },
        { value: "PF", name: "French Polynesia" },
        { value: "TF", name: "French Southern Territories" },
        { value: "GA", name: "Gabon" },
        { value: "GM", name: "Gambia" },
        { value: "GE", name: "Georgia" },
        { value: "DE", name: "Germany" },
        { value: "GH", name: "Ghana" },
        { value: "GI", name: "Gibraltar" },
        { value: "GR", name: "Greece" },
        { value: "GL", name: "Greenland" },
        { value: "GD", name: "Grenada" },
        { value: "GP", name: "Guadeloupe" },
        { value: "GU", name: "Guam" },
        { value: "GT", name: "Guatemala" },
        { value: "GG", name: "Guernsey" },
        { value: "GN", name: "Guinea" },
        { value: "GW", name: "Guinea-Bissau" },
        { value: "GY", name: "Guyana" },
        { value: "HT", name: "Haiti" },
        { value: "HM", name: "Heard Island and McDonald Islands" },
        { value: "VA", name: "Holy See (Vatican City State)" },
        { value: "HN", name: "Honduras" },
        { value: "HK", name: "Hong Kong" },
        { value: "HU", name: "Hungary" },
        { value: "IS", name: "Iceland" },
        { value: "IN", name: "India" },
        { value: "ID", name: "Indonesia" },
        { value: "IR", name: "Iran, Islamic Republic of" },
        { value: "IQ", name: "Iraq" },
        { value: "IE", name: "Ireland" },
        { value: "IM", name: "Isle of Man" },
        { value: "IL", name: "Israel" },
        { value: "IT", name: "Italy" },
        { value: "JM", name: "Jamaica" },
        { value: "JP", name: "Japan" },
        { value: "JE", name: "Jersey" },
        { value: "JO", name: "Jordan" },
        { value: "KZ", name: "Kazakhstan" },
        { value: "KE", name: "Kenya" },
        { value: "KI", name: "Kiribati" },
        { value: "KP", name: "Korea, Democratic People's Republic of" },
        { value: "KR", name: "Korea, Republic of" },
        { value: "KW", name: "Kuwait" },
        { value: "KG", name: "Kyrgyzstan" },
        { value: "LA", name: "Lao People's Democratic Republic" },
        { value: "LV", name: "Latvia" },
        { value: "LB", name: "Lebanon" },
        { value: "LS", name: "Lesotho" },
        { value: "LR", name: "Liberia" },
        { value: "LY", name: "Libya" },
        { value: "LI", name: "Liechtenstein" },
        { value: "LT", name: "Lithuania" },
        { value: "LU", name: "Luxembourg" },
        { value: "MO", name: "Macao" },
        { value: "MK", name: "Macedonia, the former Yugoslav Republic of" },
        { value: "MG", name: "Madagascar" },
        { value: "MW", name: "Malawi" },
        { value: "MY", name: "Malaysia" },
        { value: "MV", name: "Maldives" },
        { value: "ML", name: "Mali" },
        { value: "MT", name: "Malta" },
        { value: "MH", name: "Marshall Islands" },
        { value: "MQ", name: "Martinique" },
        { value: "MR", name: "Mauritania" },
        { value: "MU", name: "Mauritius" },
        { value: "YT", name: "Mayotte" },
        { value: "MX", name: "Mexico" },
        { value: "FM", name: "Micronesia, Federated States of" },
        { value: "MD", name: "Moldova, Republic of" },
        { value: "MC", name: "Monaco" },
        { value: "MN", name: "Mongolia" },
        { value: "ME", name: "Montenegro" },
        { value: "MS", name: "Montserrat" },
        { value: "MA", name: "Morocco" },
        { value: "MZ", name: "Mozambique" },
        { value: "MM", name: "Myanmar" },
        { value: "NA", name: "Namibia" },
        { value: "NR", name: "Nauru" },
        { value: "NP", name: "Nepal" },
        { value: "NL", name: "Netherlands" },
        { value: "NC", name: "New Caledonia" },
        { value: "NZ", name: "New Zealand" },
        { value: "NI", name: "Nicaragua" },
        { value: "NE", name: "Niger" },
        { value: "NG", name: "Nigeria" },
        { value: "NU", name: "Niue" },
        { value: "NF", name: "Norfolk Island" },
        { value: "MP", name: "Northern Mariana Islands" },
        { value: "NO", name: "Norway" },
        { value: "OM", name: "Oman" },
        { value: "PK", name: "Pakistan" },
        { value: "PW", name: "Palau" },
        { value: "PS", name: "Palestinian Territory, Occupied" },
        { value: "PA", name: "Panama" },
        { value: "PG", name: "Papua New Guinea" },
        { value: "PY", name: "Paraguay" },
        { value: "PE", name: "Peru" },
        { value: "PH", name: "Philippines" },
        { value: "PN", name: "Pitcairn" },
        { value: "PL", name: "Poland" },
        { value: "PT", name: "Portugal" },
        { value: "PR", name: "Puerto Rico" },
        { value: "QA", name: "Qatar" },
        { value: "RE", name: "Réunion" },
        { value: 'RO', name: 'Romania' },
        { value: 'RU', name: 'Russian Federation' },
        { value: 'RW', name: 'Rwanda' },
        { value: 'BL', name: 'Saint Barthélemy' },
        { value: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
        { value: 'KN', name: 'Saint Kitts and Nevis' },
        { value: 'LC', name: 'Saint Lucia' },
        { value: 'MF', name: 'Saint Martin (French part)' },
        { value: 'PM', name: 'Saint Pierre and Miquelon' },
        { value: 'VC', name: 'Saint Vincent and the Grenadines' },
        { value: 'WS', name: 'Samoa' },
        { value: 'SM', name: 'San Marino' },
        { value: 'ST', name: 'Sao Tome and Principe' },
        { value: 'SA', name: 'Saudi Arabia' },
        { value: 'SN', name: 'Senegal' },
        { value: 'RS', name: 'Serbia' },
        { value: 'SC', name: 'Seychelles' },
        { value: 'SL', name: 'Sierra Leone' },
        { value: 'SG', name: 'Singapore' },
        { value: 'SX', name: 'Sint Maarten (Dutch part)' },
        { value: 'SK', name: 'Slovakia' },
        { value: 'SI', name: 'Slovenia' },
        { value: 'SB', name: 'Solomon Islands' },
        { value: 'SO', name: 'Somalia' },
        { value: 'ZA', name: 'South Africa' },
        { value: 'GS', name: 'South Georgia and the South Sandwich Islands' },
        { value: 'SS', name: 'South Sudan' },
        { value: 'ES', name: 'Spain' },
        { value: 'LK', name: 'Sri Lanka' },
        { value: 'SD', name: 'Sudan' },
        { value: 'SR', name: 'Suriname' },
        { value: 'SJ', name: 'Svalbard and Jan Mayen' },
        { value: 'SZ', name: 'Swaziland' },
        { value: 'SE', name: 'Sweden' },
        { value: 'CH', name: 'Switzerland' },
        { value: 'SY', name: 'Syrian Arab Republic' },
        { value: 'TW', name: 'Taiwan, Province of China' },
        { value: 'TJ', name: 'Tajikistan' },
        { value: 'TZ', name: 'Tanzania, United Republic of' },
        { value: 'TH', name: 'Thailand' },
        { value: 'TL', name: 'Timor-Leste' },
        { value: 'TG', name: 'Togo' },
        { value: 'TK', name: 'Tokelau' },
        { value: 'TO', name: 'Tonga' },
        { value: 'TT', name: 'Trinidad and Tobago' },
        { value: 'TN', name: 'Tunisia' },
        { value: 'TR', name: 'Turkey' },
        { value: 'TM', name: 'Turkmenistan' },
        { value: 'TC', name: 'Turks and Caicos Islands' },
        { value: 'TV', name: 'Tuvalu' },
        { value: 'UG', name: 'Uganda' },
        { value: 'UA', name: 'Ukraine' },
        { value: 'AE', name: 'United Arab Emirates' },
        { value: 'GB', name: 'United Kingdom' },
        { value: 'US', name: 'United States' },
        { value: 'UM', name: 'United States Minor Outlying Islands' },
        { value: 'UY', name: 'Uruguay' },
        { value: 'UZ', name: 'Uzbekistan' },
        { value: 'VU', name: 'Vanuatu' },
        { value: 'VE', name: 'Venezuela, Bolivarian Republic of' },
        { value: 'VN', name: 'Viet Nam' },
        { value: 'VG', name: 'Virgin Islands, British' },
        { value: 'VI', name: 'Virgin Islands, U.S.' },
        { value: 'WF', name: 'Wallis and Futuna' },
        { value: 'EH', name: 'Western Sahara' },
        { value: 'YE', name: 'Yemen' },
        { value: 'ZM', name: 'Zambia' },
        { value: 'ZW', name: 'Zimbabwe' }
    ]

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].value === value) {
            return countries[i].name;
        }
    }
}

//funcion que carga la informacion del articulo en el modal
function artDetail(article) {
    const title = document.getElementById("art-Title")
    title.innerHTML = article.title

    const photo = document.getElementById("article-photo")
    photo.src = article.img

    const desc = document.getElementById("article-description")
    desc.innerHTML = article.description

    const price = document.getElementById("article-price")
    price.innerHTML = formatCurrency(parseFloat(article.price))

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
    } else {
        showAlert("Crea una cuenta e inicia sesion", "para poder armar tu carrito", "err")
    }
}

//Funcion que muestra el modal, carga los datos el articulo y escucha los eventos
function detailArt(id) {

    let arts = JSON.parse(localStorage.getItem("articulos")) || []
    let Art = ""
    for (let i = 0; i < arts.length; i++) {
        if (arts[i].id == id) {
            Art = arts[i]
            artDetail(arts[i])
            break
        }
    }
    var modal = document.getElementById("modal")
    modal.style.display = "flex"
    modal.style.animation = "drop-modal 0.3s ease-out forwards"

    /* -------------------------------------------------------EVENTOS MODAL------------------------------------------------------- */
    /* EVENTO BOTON + EN MODAL */
    var add = document.getElementById("add")
    add.addEventListener('click', (event) => {
        let campo = document.getElementById("quantity")

        if (parseInt(campo.value) < 99) {
            campo.value = parseInt(campo.value) + 1
            let price = document.getElementById("article-price")
            price.innerHTML = formatCurrency(parseFloat(Art.price) * (parseInt(campo.value)))
        }
    })

    /* EVENTO BOTON - EN MODAL */
    var del = document.getElementById("del")
    del.addEventListener('click', (event) => {
        let campo = document.getElementById("quantity")
        if (parseInt(campo.value) > 1) {
            campo.value = parseInt(campo.value) - 1
            let price = document.getElementById("article-price")
            price.innerHTML = formatCurrency(parseFloat(Art.price) * (parseInt(campo.value)))
        }
    })

    /* EVENTO BOTON X EN MODAL */
    var close = document.getElementById("close")
    close.addEventListener('click', (event) => {
        var modal = document.getElementById("modal")
        setTimeout(function () {
            modal.style.display = "none"
        }, 300)
        modal.style.animation = "hide-modal 0.3s ease-out forwards"
    })

    //Agregar funcion al boton de agregar al carrito
    var addC = document.getElementById("modalAddCart")
    addC.addEventListener('click', (event) => {
        let quantity = parseInt(document.getElementById("quantity").value)
        addCart(Art.id, quantity)
    })

    //agregar funcion al boton de wishlist
    var addW = document.getElementById("modalWishAdd")
    addW.addEventListener('click', (event) => {
        addDelWish(id)
    })


}

//Funcion para ordenar un array antes de dibujarlo
function orderBy(array, ordBy) {
    hideIcons()
    if (ordBy === "Descripción A-Z") {
        iconAZ.style.display = "inline"
        array.sort((a, b) => {
            if (a.title < b.title) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Descripción Z-A") {
        iconZA.style.display = "inline"
        array.sort((a, b) => {
            if (a.title > b.title) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Precio mayor primero") {
        icon91.style.display = "inline"
        array.sort((a, b) => {
            if (a.price > b.price) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Precio menor primero") {
        icon19.style.display = "inline"
        array.sort((a, b) => {
            if (a.price < b.price) {
                return -1
            } else {
                return 1
            }
        })
    }
    return array
}

//Funcion para ordenar un array antes de dibujarlo
function orderByUsers(array, ordBy) {

    hideIcons()
    if (ordBy === "Nombre A-Z") {
        iconAZUsr.style.display = "inline"
        array.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Nombre Z-A") {
        iconZAUsr.style.display = "inline"
        array.sort((a, b) => {
            if (a.name > b.name) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Mail A-Z") {
        icon91Usr.style.display = "inline"
        array.sort((a, b) => {
            if (a.mail > b.mail) {
                return -1
            } else {
                return 1
            }
        })

    } else if (ordBy === "Mail Z-A") {
        icon19Usr.style.display = "inline"
        array.sort((a, b) => {
            if (a.mail < b.mail) {
                return -1
            } else {
                return 1
            }
        })
    }

    return array
}

//CONFIGURACION INICIAL DE SITIO =======================================

//CARGA AUTOMATICA DE ARTICULOS Y GENERACION DE USUARIO ADMIN
//
//USUARIO admin@admin.com / PASS: Admin-123
//
//OBJETO DONDE ESTAN LOS ARTICULOS
if (localStorage.getItem('articulos') === null) {
    var Articles =
        [{
            id: 1,
            title: 'SONOMA V-NECK T-SHIRT POLAR MELANGE',
            description: 'With its deep V neck and close-fitting design, the short-sleeved Sonoma T-shirt hugs your figure. The comfortable thick cotton makes this an essential casual piece.',
            date: '10/12/2022',
            price: '689',
            img: "/assets/img/store/1.jpg"
        },
        {
            id: 2,
            title: 'FIZVALLEY T-SHIRT VINTAGE PEANUT',
            description: 'The model measures 172 cm and wears a size S. Short-sleeve crew neck T-shirt, straight cut 100% COTTON',
            date: '10/12/2022',
            price: '395',
            img: "/assets/img/store/2.jpg"
        },
        {
            id: 3,
            title: 'LOW MAN VEAU BRODERIE MILITAIRE',
            description: "Calf leather upper with suede details. Embroidery on the shield, the brand's emblem. Rubber sole band. Sole height 2.5 cm. Leather and terry cotton lining. True to size.",
            date: '10/12/2022',
            price: '669',
            img: "/assets/img/store/3.jpg"
        },
        {
            id: 4,
            title: 'PRSX LOW MAN FOXY LAMINE BLANC ARGENT',
            description: 'The idea of "lived-in" as a synonym for craftsmanship can be seen clearly in the PRSX, thanks to unique, patented foxing tape that creates a purposefully imperfect sole. The shield on the side of the shoe features the coat of arms of the City of Paris, where Philippe Model launched its brand.',
            date: '10/12/2022',
            price: '669',
            img: "/assets/img/store/4.jpg"
        },
        {
            id: 5,
            title: 'BOOTS 45MM SUEDE AMBRE',
            description: "A master of the urban-folk look, Vanessa Bruno is once again offering a pair of boots this season that are sure to add a Bohemian touch to any wardrobe. Featuring a suede upper, these shoes have a 4.5-cm heel that is both comfortable and practical.",
            date: '10/12/2022',
            price: '919',
            img: "/assets/img/store/5.jpg"
        },
        {
            id: 6,
            title: 'LE SKINNY DE JEANNE DUBLIN',
            description: "A modern wardrobe essential, this classic mid-rise skinny jean features a clean and slim silhouette. In a medium-blue wash. Mid Rise Fit Super Stretch Denim 44% Cotton/42% Lyocell/13% Polyester/1% Elastane Machine Wash 9'' Front Rise/29'' Inseam/10'' Leg Opening",
            date: '10/12/2022',
            price: '419',
            img: "/assets/img/store/6.jpg"
        },
        {
            id: 7,
            title: 'HIS | HER EAU DE PARFUM',
            description: 'A unisex scent for the every guy and girl, this is the debut fragrance by who is elijah, revealing His | Her wild side. Heady enough to take you dancing through to dawn, His|Her doesn’t take itself too seriously.',
            date: '10/12/2022',
            price: '419',
            img: "/assets/img/store/7.jpg"
        },
        {
            id: 8,
            title: 'NOR O-N SHORT 7355 SPRUCESTONE',
            description: 'A boxy fit knitwear staple in fluffy alpaca and merino wool yarn, offering an effortless everyday jumper, with style and comfort combined. A wide round neck creates a flattering neckline to this cosy, medium gauge wool knit sweater.',
            date: '10/12/2022',
            price: '249',
            img: "/assets/img/store/8.jpg"
        },
        {
            id: 9,
            title: 'GARSON VEST GRAPHITE',
            description: "A simplified version of the Freestyle Vest. Take on unpredictable weather conditions with a classic, quilt-through vest that offers enduring warmth where it's needed most. Crafted with a protective, hi-low hem and a leather-trimmed standing collar, it shields against high winds. Wear it on its own or layered under a soft shell for premium comfort A specialised and fully weather proofed duck down vest from the Canadian label. Classic, versatile, light-weight and well-insulated, with 625 fill power white duck down, and a proven textile designed to stay dry in extreme conditions. Heavy duty zips, storm flaps, fleece-lined handwarmer pockets, lifetime guarantee. Made in Canada.",
            date: '10/12/2022',
            price: '799',
            img: "/assets/img/store/9.jpg"
        },
        {
            id: 10,
            title: 'WAVERLEIGH BLAZER BLACK',
            description: "Made from a premium wool fabrication the Waverleigh Blazer holds its shape and drapes fluidly. This tailored single breasted blazer has a streamlined silhouette that's punctuated with an exaggerated shoulder, a wide notched collar, and side welt pockets.",
            date: '10/12/2022',
            price: '849',
            img: "/assets/img/store/10.jpg"
        },
        {
            id: 11,
            title: 'SUNGLASSES GG1195SK001 GOLD',
            description: 'Refined classic concept for an everyday look combining comfort and style. Square shape in full metal with acetate end tips that enriches the overall look. Gucci interlocking Logo on both temples.',
            date: '10/12/2022',
            price: '659',
            img: "/assets/img/store/11.jpg"
        },
        {
            id: 12,
            title: 'SUNGLASSES GG1183S006 GOLD',
            description: 'This concept is cool & easy to wear directly developed from a vintage archive piece. Crafted in lightweight metal this pilot shape present the Gucci lettering logo on temples and comfortable flat end tips.',
            date: '10/12/2022',
            price: '579',
            img: "/assets/img/store/12.jpg"
        }]

    showQuestion("No se verifican articulos cargados ni usuario Admin desea crearlos?", "Usuario: admin@admin.com</br>Pass: Admin-123", () => { //funcion si clickea en SI
        localStorage.setItem("articulos", JSON.stringify(Articles))

        var adm = {
            id: 0,
            name: "Admin",
            mail: "admin@admin.com",
            password: "Admin-123",
            avatar: 'https://www.yourbrainonporn.com/wp-content/uploads/2017/09/god-mode-on-t-shirts-men-s-t-shirt-by-american-apparel.jpg',
            age: 99,
            bornDate: "1/1/1111",
            country: "AR",
            gender: 3,
            therms: true,
            cart: [],
            wish: [],
            role: 'admin'
        }
        let us = JSON.parse(localStorage.getItem('users')) || [];
        let admin = false
    
        for (let i = 0; i < us.length; i++) {
            if (us[i].id == 0) {
                admin = true
                break
            };
        }
    
        if (!admin) {
            us.push(adm)
            localStorage.setItem('users', JSON.stringify(us))
        }

        location.reload() //recargo la web

    }, () => { //funcion si clickea en no

    })   
}


//FIN CONFIGURACION INICIAL DE SITIO =======================================

