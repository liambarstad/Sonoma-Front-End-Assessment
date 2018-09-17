export default class Item {
  constructor(data) {
    this.data = data
    this.name = data.name
    this.link = data.links.www
    this.low = data.priceRange.selling.low
    this.high = data.priceRange.selling.high
    this.imageHref = data.hero.href
    this._initializeImages()
  }

  html() {
    return `
      <div class="item">
        <img src=${this.imageHref} />
        <div class="item-title-container">
          <a class="item-title" href=${this.link}>
            ${this.name}
          </a>
        </div>
        <div class="item-price-container">
          <p class="item-price">$ ${this.high}</p>
        </div>
      </div>
    `
  }

  _initializeImages() {
    this.images = this.data.images.map((image) => { return image.href })
  }
}
