import './style.css';
import { Drink } from "./Drink/index.js"

document.querySelector("#nav-btn").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-closed")
})

const navItem = document.querySelectorAll("nav a")

navItem.forEach((item) =>{
  item.addEventListener("click", () => {
document.querySelector("nav").classList.toggle("nav-closed")
  })
})

fetch("https://apps.kodim.cz/daweb/cafelora/api/drinks")
.then(response => response.json())
.then(data => {
  const drinks = data.results
  for (let i = 0; i < drinks.length; i += 1) {
    const addCoffee  = document.querySelector(".drinks-list")
    addCoffee.appendChild(Drink(drinks[i]))
    }
})







