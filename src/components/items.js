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

  displayPopout(parentEl) {
    this._removeAllPopouts()
    document.getElementById('items').appendChild(this._matte())
    let item = this.items.find((item) => { return item.id === parentEl.id })
    item.displayPopout()
  }

  _appendItems(data, itemsDiv) {
    data.forEach((item, ind) => {
      let itemObj = new Item(item)
      this.items.push(itemObj)
      itemsDiv.insertAdjacentHTML('beforeend', itemObj.html())
    })
  }

  _removeAllPopouts() {
    let popouts = document.getElementsByClassName('item-popout')
    while (popouts.length > 0) {
      popouts[0].parentNode.removeChild(popouts[0])
    }
  }

  _matte() {
    let matte = document.createElement('div')
    matte.id = 'background-matte'
    matte.setAttribute('style', `
      height: ${window.outerHeight}px;
      width: ${window.outerWidth}px;
    `)
    return matte
  }
}
