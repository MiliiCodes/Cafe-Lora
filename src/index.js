import './style.css';

document.querySelector("#nav-btn").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-closed")
})

const navItem = document.querySelectorAll("nav a")

navItem.forEach((item) =>{
  item.addEventListener("click", () => {
document.querySelector("nav").classList.toggle("nav-closed")
  })
})

const orderButton = document.querySelector(".order-btn")
const cup = document.querySelector(".drink__cup")

let ordered = false

orderButton.addEventListener("click", () => {
  if (ordered === true) {
    orderButton.textContent = "Objednat"
    cup.classList.remove("drink__cup--selected")
    ordered = false
  }

  else {
    orderButton.textContent = "Zrušit"
    cup.classList.add("drink__cup--selected")
    ordered = true
  }
  })
