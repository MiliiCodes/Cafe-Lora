import { Layer } from "../Layer/index.js"

export const Drink = (props) => {
  const { id, name, ordered, layers, image } = props

  const element = document.createElement("div")
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
    <img src="${image}" />
  </div>
  <div class="drink__info">
    <h3>${name}</h3>
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>`

const coffeeList = element.querySelector('.drink__info');
for (let i = 0; i < layers.length; i += 1) {
coffeeList.innerHTML += Layer(layers[i]);
}

return element
}