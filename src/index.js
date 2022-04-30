import './style.css';
import { Layer } from "./Layer/index.js"

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
  if (ordered === false) {
    orderButton.textContent = "Zrušit"
    cup.classList.add("drink__cup--selected")
    ordered = true
  }

  else {
    orderButton.textContent = "Objednat"
    cup.classList.remove("drink__cup--selected")
    ordered = false
  }
  })

  const coffees = [
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    },
    {
      color: '#fed7b0',
      label: 'teplé mléko',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ]

  const coffeeList = document.querySelector('.drink__info');
  for (let i = 0; i < coffees.length; i += 1) {
    coffeeList.innerHTML += Layer(coffees[i]);
  }


