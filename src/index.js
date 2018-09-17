const ItemsEventListeners = require('./event-listeners/items-event-listeners').default
const Items = require('./components/items').default

let itemsListeners

document.addEventListener("DOMContentLoaded", () => {
  itemsListeners = new ItemsEventListeners()  
})
