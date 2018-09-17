const closeIcon = require('../static/close-icon.png')

export default class ItemPopout {
  constructor(images) {
    this.images = images
    this.htmlImages = this._parseHtmlImages()
  }

  present(coords) {
    let popoutDiv = document.createElement('div')
    popoutDiv.classList.add('item-popout')
    popoutDiv.setAttribute('style', `left:${coords.x}px;top:${coords.y}px;`)
    popoutDiv = this._addInnerHtml(popoutDiv)
    document.getElementById('items').appendChild(popoutDiv)
  }

  _addInnerHtml(div) {
    let images = this._images()
    let closeImage = this._closeIcon()
    div.appendChild(images)
    div.appendChild(closeImage)
    return div
    // right arrow
    // left arrow
    // bottom bar
  }

  _images() {
    let images = document.createElement('div')
    images.classList.add('popout-images')
    images.innerHTML = this.htmlImages
    return images
  }

  _closeIcon() {
    let closeImage = new Image()
    closeImage.src = closeIcon
    closeImage.alt = 'close-button'
    closeImage.classList.add('popout-close')
    return closeImage
  }

  _parseHtmlImages() {
    let htmlStr = ''
    this.images.forEach((imageUrl) => {
      htmlStr += `
        <img src=${imageUrl} class="popout-image" />
      `
    })
    return htmlStr
  }
}
