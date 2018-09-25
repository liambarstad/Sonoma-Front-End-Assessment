const ItemPopout = require('./item-popout').default

export default class Item {
  constructor(data) {
    this.data = data
    this.id = data.id
    this.name = data.name
    this.link = data.links.www
    this.low = data.priceRange.selling.low
    this.high = data.priceRange.selling.high
    this.imageHref = data.hero.href
    this.images
    this.popout
    this._initializeImages()
  }

  html() {
    return `
      <div id=${this.id} class="item">
        <img src=${this.imageHref} />
        <div class="item-title-container">
          <a class="item-title" href=${this.link}>
            ${this.name}
          </a>
        </div>
        <div class="item-price-container">
          <p class="item-price">$${this.low} - $${this.high}</p>
        </div>
      </div>
    `
  }

  displayPopout(coordinates) {
    this.popout.present(coordinates)
  }

  _initializeImages() {
    this.images = this.data.images.map((image) => { return image.href })
    this.popout = new ItemPopout(this.images)
  }

}
