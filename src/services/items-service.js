const itemUrl = "http://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
const fetch = require("isomorphic-fetch");

export default class ItemsService {
  constructor() {
    this.itemUrl = itemUrl;
  }

  getItems() {
    return require("../data/items.json");
  }

}
