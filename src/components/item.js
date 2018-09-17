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
        <p class="item-title">
          <a href=${this.link}>
            ${this.name}
          </a>
        </p>
        <p class="item-price">$${this.low} - $${this.high}</p>
        <img src=${this.imageHref} />
      </div>
    `
  }

  _initializeImages() {
    this.images = this.data.images.map((image) => { return image.href })
  }
}
