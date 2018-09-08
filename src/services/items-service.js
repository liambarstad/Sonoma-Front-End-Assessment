const itemUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
const fetch = require('isomorphic-fetch')

class ItemsService {
  constructor() {
    this.itemUrl = itemUrl
  }

  getItems() {
    return fetch(itemUrl)
      .then((data) => { return data })
  }

}

module.exports = ItemsService
