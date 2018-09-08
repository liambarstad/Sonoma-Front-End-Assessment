export default class Item {
  constructor(data) {
    this.data = data
    this.name = data.name
    this.link = data.links.www
    this.low = data.priceRange.selling.low
    this.high = data.priceRange.selling.high
    this.imageHref = data.thumbnail.href
    this._initializeImages()
  }

  html() {
    return `
      <div>
        <h1>${this.name}</h1>
        <h2><a href=${this.link}>View on Site</a></h2>
        <h3>Price: ${this.low} - ${this.high}</h3>
        <img href=${this.imageHref} />
      </div>
    `
  }

  _initializeImages() {
    this.images = this.data.images.map((image) => { return image.href })
  }
}
