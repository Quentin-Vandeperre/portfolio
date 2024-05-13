let modal = null
const jsModal = document.querySelector(".jsModal")
const jsModal2 = document.querySelector(".jsModal2")
const jsModal3 = document.querySelector(".jsModal3")
const jsModal4 = document.querySelector(".jsModal4")
const jsModalClose = document.querySelector(".jsModalClose")
const jsModalClose2 = document.querySelector(".jsModalClose2")
const jsModalClose3 = document.querySelector(".jsModalClose3")
const jsModalClose4 = document.querySelector(".jsModalClose4")
const modal1 = document.querySelector('#modal1')
const modal2 = document.querySelector('#modal2')
const modal3 = document.querySelector('#modal3')
const modal4 = document.querySelector('#modal4')
let buttonReturn2 = document.querySelector(".returnModal2")
let buttonReturn3 = document.querySelector(".returnModal3")
let buttonReturn4 = document.querySelector(".returnModal4")
const buttonModalNextProject = document.querySelector(".buttonModalNextProject")
const buttonModalNextProject2 = document.querySelector(".buttonModalNextProject2")
const buttonModalNextProject3 = document.querySelector(".buttonModalNextProject3")

jsModal.addEventListener('click', function(){
    openModal()
})

jsModal2.addEventListener('click', function(){
  openModal2()
})

jsModal3.addEventListener('click', function(){
  openModal3()
})

jsModal4.addEventListener('click', function(){
  openModal4()
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
  jsModalClose2.addEventListener("click", function(){
      closeModal()
  })
  modal = modal2
  modal.querySelector('.jsModalStop').addEventListener('click', stopPropagation)
}

function openModal3() {
  modal2.style.display = "none";
  modal3.removeAttribute('aria-hidden');
  modal3.setAttribute('aria-modal', 'true');
  modal3.style.display = null;
  modal3.addEventListener('click', closeModal)
  jsModalClose3.addEventListener("click", function(){
      closeModal()
  })
  modal = modal3
  modal.querySelector('.jsModalStop').addEventListener('click', stopPropagation)
}

function openModal4() {
  modal3.style.display = "none";
  modal4.removeAttribute('aria-hidden');
  modal4.setAttribute('aria-modal', 'true');
  modal4.style.display = null;
  modal4.addEventListener('click', closeModal)
  jsModalClose4.addEventListener("click", function(){
      closeModal()
  })
  modal = modal4
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

buttonReturn2.addEventListener("click", function() {
  modal1.style.display = "flex"
  modal2.style.display = "none"
  modal = modal1                                  // modal = modal2 donc on ne pourra plus fermer la modal
})

buttonReturn3.addEventListener("click", function() {
  modal2.style.display = "flex"
  modal3.style.display = "none"
  modal = modal2                                  
})

buttonReturn4.addEventListener("click", function() {
  modal3.style.display = "flex"
  modal4.style.display = "none"
  modal = modal3                                  
})

buttonModalNextProject.addEventListener("click", function(){
  openModal2()
})

buttonModalNextProject2.addEventListener("click", function(){
  openModal3()
})

buttonModalNextProject3.addEventListener("click", function(){
  openModal4()
})