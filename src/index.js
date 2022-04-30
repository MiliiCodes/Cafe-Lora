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

const orderButton = document.querySelector(".order-btn")
const cup = document.querySelector(".drink__cup")

let ordered = false

// orderButton.addEventListener("click", () => {
//   if (ordered === false) {
//     orderButton.textContent = "Zrušit"
//     cup.classList.add("drink__cup--selected")
//     ordered = true
//   }

//   else {
//     orderButton.textContent = "Objednat"
//     cup.classList.remove("drink__cup--selected")
//     ordered = false
//   }
//   })

  const coffeeRomano = {
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
  };

const addCoffee  = document.querySelector(".drinks-list")
addCoffee.appendChild(Drink(coffeeRomano))

  // const coffees = [
  //   {
  //     color: '#feeeca',
  //     label: 'mléčná pěna',
  //   },
  //   {
  //     color: '#fed7b0',
  //     label: 'teplé mléko',
  //   },
  //   {
  //     color: '#613916',
  //     label: 'espresso',
  //   },
  // ]

  // const coffeeList = document.querySelector('.drink__info');
  // for (let i = 0; i < coffees.length; i += 1) {
  //   coffeeList.innerHTML += Layer(coffees[i]);
  // }


