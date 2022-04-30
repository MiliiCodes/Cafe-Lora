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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];

const addCoffee  = document.querySelector(".drinks-list")
for (let i = 0; i < drinks.length; i += 1) {
  addCoffee.appendChild(Drink(drinks[i]))
}



