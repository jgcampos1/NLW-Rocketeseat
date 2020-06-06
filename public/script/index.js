const modal = document.getElementById("close-modal")
let buttonSearch = document.querySelector("#page-home main a")
let exitModal = document.querySelector("#modal fieldset a")

buttonSearch.addEventListener('click',
() => {
  modal.classList.remove("close");


})


exitModal.addEventListener('click', 
()=> {
  modal.classList.add("close");
})
