const ItemsEventListeners = require('./event-listeners/items-event-listeners').default
const Items = require('./components/items').default

document.addEventListener("DOMContentLoaded", () => {
  let itemsDiv = document.getElementById('items')
  new Items(itemsDiv)
})
