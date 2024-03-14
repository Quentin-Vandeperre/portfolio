let modal = null
const jsModal = document.querySelector(".jsModal")
const jsModal2 = document.querySelector(".jsModal2")
const jsModalClose = document.querySelector(".jsModalClose")
const jsModalClose1 = document.querySelector(".jsModalClose1")
const modal1 = document.querySelector('#modal1')
const modal2 = document.querySelector('#modal2')
let buttonReturn = document.querySelector(".returnModal1")

jsModal.addEventListener('click', function(event){
    openModal()
})

jsModal2.addEventListener('click', function(event){
  openModal2()
})

function openModal() {
  modal1.removeAttribute("aria-hidden")
  modal1.setAttribute("aria-modal", "true")
  modal1.style.display = null
  modal1.addEventListener('click', closeModal)
  jsModalClose.addEventListener("click", function(){
      closeModal()
  })
  modal = modal1
  modal.querySelector('.jsModalStop').addEventListener('click', stopPropagation)
}

function openModal2() {
  modal1.style.display = "none";
  modal2.removeAttribute('aria-hidden');
  modal2.setAttribute('aria-modal', 'true');
  modal2.style.display = null;
  modal2.addEventListener('click', closeModal)
  jsModalClose1.addEventListener("click", function(){
      closeModal()
  })
  modal = modal2
  modal.querySelector('.jsModalStop').addEventListener('click', stopPropagation)
}



function closeModal() {
  if(modal === null)return
  modal.style.display = "none" // afin d'annuler le display null
  modal.setAttribute('aria-hidden','true')
  modal.removeAttribute('aria-modal')
  modal = null
}

const stopPropagation = function(e){
  e.stopPropagation()
}

window.addEventListener('keydown', function (e){
  if (e.key === "Escape" || e.key === "Esc") {
  closeModal(e)
  }
})

buttonReturn.addEventListener("click", function() {
  modal1.style.display = "flex"
  modal2.style.display = "none"
  modal = modal1                                  // modal = modal2 donc on ne pourra plus fermer la modal
})




const buttonModalNextProject = document.querySelector(".buttonModalNextProject")

// lors du click sur le bouton "ajouter une photo" on appelle la fonction pour ouvrir la deuxieme modal

buttonModalNextProject.addEventListener("click", function(){
  openModal2()
})