const Items = require('../components/items').default

export default class ItemsEventListeners {
  constructor() {
    let itemsDiv = document.getElementById('items')
    this.items = new Items(itemsDiv)
  }

  onItemImageClick() {
    document.addEventListener('click', (event) => {
      let parentEl = event.target.parentElement
      if (parentEl.classList.contains('item')) {
        this.items.displayPopout(parentEl, { x: event.clientX, y: event.clientY })
      }
    })
  }

}
