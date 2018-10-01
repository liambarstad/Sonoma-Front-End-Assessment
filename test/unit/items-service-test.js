const itemUrl = 'http://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
const ItemsService = require('../../src/services/items-service')
const assert = require('assert')

describe('ItemService', () => {
  it('initializes with correct url', () => {
    let itemsService = new ItemsService()
    assert.equal(itemsService.itemUrl, itemUrl)
  })

  it('can get items', () => {
    let itemsService = new ItemsService()
    itemsService.getItems()
      .then((data) => {
        data.should.not.equal({})
      })
  })
})
