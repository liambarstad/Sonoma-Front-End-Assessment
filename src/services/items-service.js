const itemUrl = 'http://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
const fetch = require('isomorphic-fetch')

export default class ItemsService {
  constructor() {
    this.itemUrl = itemUrl
  }

  getItems() {
    // need to fix cors issue
    return require('../data/items.json')
  }

}
