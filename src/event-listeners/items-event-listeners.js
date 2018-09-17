const Items = require('../components/items').default

export default class ItemsEventListeners {
  constructor() {
    let itemsDiv = document.getElementById('items')
    this.items = new Items(itemsDiv)
  }

}
