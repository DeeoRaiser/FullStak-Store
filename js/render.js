
renderFooter()
flotantIcons()
renderHeader()

//Genera el render del header
function renderHeader() {
    user = checkLogin()

    if (user) {
        renderUserMenu(user)
    } else {
        renderMenuLoginRegister()
    }

}
//genera el render del Footer
function renderFooter() {
    //#region BLOQUE 1

    const divElement = document.createElement("div")
    divElement.classList.add("footer__column1")

    const ulElement = document.createElement("ul")
    ulElement.classList.add("footer__contact-container")

    const liElement1 = document.createElement("li")
    liElement1.classList.add("footer__contact-item")

    const aElement1 = document.createElement("a")
    aElement1.href = "#"
    aElement1.classList.add("footer__contact-link")

    const iElement1 = document.createElement("i")
    iElement1.classList.add("fa-brands", "fa-facebook", "footer__contact-icon", "footer__contact-icon--facebook")

    const textNode1 = document.createTextNode("Ranson and Wilder")
    aElement1.appendChild(iElement1)
    aElement1.appendChild(textNode1)
    liElement1.appendChild(aElement1)

    const liElement2 = document.createElement("li")
    liElement2.classList.add("footer__contact-item")

    const aElement2 = document.createElement("a")
    aElement2.href = "#";
    aElement2.classList.add("footer__contact-link")

    const iElement2 = document.createElement("i")
    iElement2.classList.add("fa-brands", "fa-instagram", "footer__contact-icon", "footer__contact-icon--instagram")

    const textNode2 = document.createTextNode("Ranson_Wilder")
    aElement2.appendChild(iElement2)
    aElement2.appendChild(textNode2)
    liElement2.appendChild(aElement2)

    const liElement3 = document.createElement("li")
    liElement3.classList.add("footer__contact-item")

    const aElement3 = document.createElement("a")
    aElement3.href = "#";
    aElement3.classList.add("footer__contact-link")

    const iElement3 = document.createElement("i")
    iElement3.classList.add("fa-brands", "fa-linkedin", "footer__contact-icon", "footer__contact-icon--linkedin")

    const textNode3 = document.createTextNode("Ranson_Wilder")
    aElement3.appendChild(iElement3)
    aElement3.appendChild(textNode3)
    liElement3.appendChild(aElement3)

    ulElement.appendChild(liElement1)
    ulElement.appendChild(liElement2)
    ulElement.appendChild(liElement3)
    divElement.appendChild(ulElement)

    const footerElement = document.querySelector(".footer")
    footerElement.appendChild(divElement)
    // #endregion

    //#region BLOQUE 2
    const footerColumn = document.createElement("div")
    footerColumn.classList.add("footer__column", "footer__center")

    const logoImg = document.createElement("img")
    logoImg.src = "/assets/logo.png"
    logoImg.alt = "Company Logo"
    logoImg.classList.add("footer__logo")
    footerColumn.appendChild(logoImg)

    const companyName = document.createElement("h2")
    companyName.classList.add("footer__company-name")
    companyName.textContent = "Ransom & Wilder"
    footerColumn.appendChild(companyName)

    const copyrigthText = document.createElement("p")
    copyrigthText.classList.add("footer__copyrigth")
    copyrigthText.textContent = "Todos los derechos reservados a Ransom & Wilder Company"
    footerColumn.appendChild(copyrigthText)

    const footer = document.querySelector(".footer")
    footer.appendChild(footerColumn)
    //#endregion

    //#region BLOQUE 3

    const footerColumn2 = document.createElement('div')
    footerColumn2.classList.add('footer__column')

    const contactContainer = document.createElement('ul')
    contactContainer.classList.add('footer__contact-container')

    const contactItem1 = document.createElement('li')
    contactItem1.classList.add('footer__contact-item')
    const contactLink1 = document.createElement('a')
    contactLink1.classList.add('footer__contact-link')
    contactLink1.href = 'tel://+541115514452';
    const contactIcon1 = document.createElement('i')
    contactIcon1.classList.add('fa-solid', 'fa-square-phone-flip', 'footer__contact-icon')
    contactLink1.appendChild(contactIcon1)
    const contactText1 = document.createTextNode('Telefono (+54-11-15514452)')
    contactLink1.appendChild(contactText1)
    contactItem1.appendChild(contactLink1)
    contactContainer.appendChild(contactItem1)

    const contactItem2 = document.createElement('li')
    contactItem2.classList.add('footer__contact-item')
    const contactLink2 = document.createElement('a')
    contactLink2.classList.add('footer__contact-link')
    contactLink2.href = 'https://goo.gl/maps/CCm7u2cHw5U7m2fD7'
    const contactIcon2 = document.createElement('i')
    contactIcon2.classList.add('fa-solid', 'fa-location-dot', 'footer__contact-icon')
    contactLink2.appendChild(contactIcon2)
    const contactText2 = document.createTextNode('Street 135 AV Wilder, Los Angeles')
    contactLink2.appendChild(contactText2)
    contactItem2.appendChild(contactLink2)
    contactContainer.appendChild(contactItem2)

    const contactItem3 = document.createElement('li')
    contactItem3.classList.add('footer__contact-item')
    const contactLink3 = document.createElement('a')
    contactLink3.classList.add('footer__contact-link')
    contactLink3.href = 'mail:websell@ransomwilder.com'
    const contactIcon3 = document.createElement('i')
    contactIcon3.classList.add('fa-solid', 'fa-envelope', 'footer__contact-icon')
    contactLink3.appendChild(contactIcon3)
    const contactText3 = document.createTextNode('Email: websell@ransomwilder.com')
    contactLink3.appendChild(contactText3)
    contactItem3.appendChild(contactLink3)
    contactContainer.appendChild(contactItem3)

    footerColumn2.appendChild(contactContainer)
    footer.appendChild(footerColumn2)


}

//funcion que agrega los botones flotantes de whatsapp y swipeUp
function flotantIcons() {

    const whatsappContainer = document.createElement('div')
    whatsappContainer.className = 'whatsapp-container'

    const whatsappLink = document.createElement('a')
    whatsappLink.className = 'whatsapp-container__link'
    whatsappLink.href = 'https://wa.me/543512531103?text=Hola%20Ranson%20and%20Wilder%20'

    const whatsappImg = document.createElement('img')
    whatsappImg.src = '/assets/img/icons/whatsapp.png'
    whatsappImg.alt = 'Whatsapp contact link'
    whatsappImg.className = 'whatsapp-container__img'

    whatsappLink.appendChild(whatsappImg)

    whatsappContainer.appendChild(whatsappLink)

    const swipeUpContainer = document.createElement('div')
    swipeUpContainer.className = 'swipe-up'

    const swipeUpLink = document.createElement('a')
    swipeUpLink.className = 'swipe-up-container__link'
    swipeUpLink.href = '#'

    const swipeUpImg = document.createElement('img')
    swipeUpImg.src = '/assets/img/icons/swipe-up.png'
    swipeUpImg.alt = 'Subir Arriba'
    swipeUpImg.className = 'swipe-up__img'

    swipeUpLink.appendChild(swipeUpImg)

    swipeUpContainer.appendChild(swipeUpLink)

    const body = document.getElementsByTagName('body')[0]

    body.appendChild(whatsappContainer)
    body.appendChild(swipeUpContainer)

}

function renderUserMenu(user) {

    if (user) {

        const userNavbar = document.getElementById("user-navbar")
        const userNavbar2 = document.getElementById("user-navbar2")

        userNavbar.innerHTML = ""

        const cartLink = document.createElement("a")
        cartLink.href = "/pages/cart/cart-detail.html"
        const cartIconContainer = document.createElement("div")
        cartIconContainer.classList.add("user-navbar__icon-container")
        cartIconContainer.id = "btn-cart"
        const cartIcon = document.createElement("i")
        cartIcon.classList.add("fas", "fa-shopping-cart")
        const cartCounter = document.createElement("div")
        cartCounter.classList.add("user-navbar__cart-counter")
        cartCounter.id = "user-cart-counter2"
        cartCounter.textContent = user.cartCounter
        cartIconContainer.appendChild(cartIcon)
        cartIconContainer.appendChild(cartCounter)
        cartLink.appendChild(cartIconContainer)

        const wishLink = document.createElement("a")
        wishLink.href = "/pages/wishlist/wishlist.html"
        const wishIconContainer = document.createElement("div")
        wishIconContainer.classList.add("user-navbar__icon-container")
        wishIconContainer.id = "btn-wish"
        const wishIcon = document.createElement("i")
        wishIcon.classList.add("fa-solid", "fa-heart")
        const wishCounter = document.createElement("div")
        wishCounter.classList.add("user-navbar__cart-counter")
        wishCounter.id = "user-wish-counter2"
        wishCounter.textContent = user.wish
        wishIconContainer.appendChild(wishIcon)
        wishIconContainer.appendChild(wishCounter)
        wishLink.appendChild(wishIconContainer)

        const menuDropDown = document.createElement("div")
        menuDropDown.id = "menuDropDown"
        menuDropDown.classList.add("dropdown")

        const userAvatarContainer = document.createElement("div")
        userAvatarContainer.classList.add("user-navbar__user-avatar")
        userAvatarContainer.id = "btn-avatar"
        const userAvatar = document.createElement("img")
        userAvatar.src = '/assets/img/avatar/avatar-default.png'
        userAvatar.classList.add("user-navbar__user-avatar")
        userAvatar.alt = "Imagen de usuario"
        const userName = document.createElement("div")
        userName.classList.add("user-name", "user-navbar__user-name")
        userName.textContent = user.name.split (" ")[0]
        userAvatarContainer.appendChild(userAvatar)
        userAvatarContainer.appendChild(userName)

        const dropdownContent = document.createElement("div")
        dropdownContent.classList.add("dropdown-content")
        const profileLink = document.createElement("a")
        profileLink.rel = ""
        profileLink.target = ""
        profileLink.href = "/pages/profile/profile.html"
        const profileIcon = document.createElement("i")
        profileIcon.classList.add("fa-solid", "fa-user")
        profileLink.appendChild(profileIcon);
        profileLink.appendChild(document.createTextNode("Profile"))
        const academyLink = document.createElement("a")
        academyLink.rel = "noopener"
        academyLink.target = ""
        academyLink.href = "https://academy.hubspot.com/"
        academyLink.textContent = "Academy"
        const salirLink = document.createElement("a")
        salirLink.rel = "noopener"
        salirLink.target = ""
        salirLink.href = "/pages/login/login.html"
        const salirIcon = document.createElement("i")
        salirIcon.classList.add("fa-solid", "fa-arrow-right-from-bracket")
        salirLink.appendChild(salirIcon)
        salirLink.appendChild(document.createTextNode("Salir"))
        dropdownContent.appendChild(profileLink)
        dropdownContent.appendChild(academyLink)
        dropdownContent.appendChild(salirLink)

        menuDropDown.appendChild(userAvatarContainer)
        menuDropDown.appendChild(dropdownContent)

        userNavbar.appendChild(cartLink)
        userNavbar.appendChild(wishLink)
        userNavbar.appendChild(menuDropDown)

        userNavbar2.innerHTML = userNavbar.innerHTML
    }


}

function renderMenuLoginRegister(){
    const registerNavItem = document.createElement("li")
    registerNavItem.setAttribute("id", "nav-registro")
    registerNavItem.classList.add("navbar__nav-item")

    const registerNavLink = document.createElement("a")
    registerNavLink.setAttribute("href", "/pages/register/register.html")
    registerNavLink.classList.add("navbar__nav-link")
    registerNavLink.textContent = "Registro"

    registerNavItem.appendChild(registerNavLink)

    const loginNavItem = document.createElement("li")
    loginNavItem.setAttribute("id", "nav-login")
    loginNavItem.classList.add("navbar__nav-item")

    const loginNavLink = document.createElement("a")
    loginNavLink.setAttribute("href", "/pages/login/login.html")
    loginNavLink.classList.add("navbar__nav-link")
    loginNavLink.textContent = "Login"

    loginNavItem.appendChild(loginNavLink)

    const navLinksContainer = document.querySelector(".navbar__nav-links-container")
    navLinksContainer.appendChild(registerNavItem)
    navLinksContainer.appendChild(loginNavItem)
}


