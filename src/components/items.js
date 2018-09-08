const Item = require('./item').default
const ItemsService = require('../services/items-service').default

export default class Items {
  constructor(itemsDiv) {
    this.loadItems(itemsDiv)
  }

  loadItems(itemsDiv) {
    let data = (new ItemsService()).getItems()
    this.appendItems(data.groups, itemsDiv)
  }

  appendItems(data, itemsDiv) {
    data.forEach((item) => {
      let itemObj = new Item(item)
      itemsDiv.insertAdjacentHTML('beforeend', itemObj.html())
    })
  }
}
