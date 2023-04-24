function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(tabName).style.display = "block"
    evt.currentTarget.className += " active"
  }

  let arts = JSON.parse(localStorage.getItem("articulos"))
  
  arts.forEach(art => {

const t1 = document.getElementById("tab1")

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

const delContainer = document.createElement('div')
delContainer.classList.add('cart-containter__del')
delContainer.setAttribute('onclick', `resCart(${art.id})`)

const editContainer = document.createElement('div')
editContainer.classList.add('cart-containter__edit')

const deleteContainer = document.createElement('div')
deleteContainer.classList.add('cart-containter__delete')

const editButton = document.createElement('button')
editButton.classList.add('btn', 'btn__edit')
editButton.innerHTML = 'Editar'
editButton.setAttribute('onclick', `editArt(${art.id})`)

const deleteButton = document.createElement('button')
deleteButton.classList.add('btn', 'btn__edit')
deleteButton.innerHTML = 'Borrar'
deleteButton.setAttribute('onclick', `deleteArt(${art.id})`)

editContainer.appendChild(editButton)
deleteContainer.appendChild(deleteButton)

divPic.appendChild(img)

divRow.appendChild(divPic)
divRow.appendChild(divDesc)
divRow.appendChild(editContainer)
divRow.appendChild(deleteContainer)
t1.appendChild(divRow)

})