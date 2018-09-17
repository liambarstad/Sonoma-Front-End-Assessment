const Item = require('./item').default
const ItemsService = require('../services/items-service').default

export default class Items {
  constructor(itemsDiv) {
    this.items = []
    this.loadItems(itemsDiv)
  }

  loadItems(itemsDiv) {
    let data = (new ItemsService()).getItems()
    this._appendItems(data.groups, itemsDiv)
  }

  _appendItems(data, itemsDiv) {
    data.forEach((item, ind) => {
      let itemObj = new Item(item)
      this.items.push(itemObj)
      itemsDiv.insertAdjacentHTML('beforeend', itemObj.html())
    })
  }

}
