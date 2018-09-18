const closeIcon = require('../static/close-icon.png')
const leftArrow = require('../static/arrow-left.png')
const rightArrow = require('../static/arrow-right.png')
const circleImg = require('../static/circle.svg')
const selectedCircleImg = require('../static/selected-circle.svg')

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
    div.appendChild(this._images())
    div.appendChild(this._closeIcon())
    div.appendChild(this._leftArrow())
    div.appendChild(this._rightArrow())
    div.appendChild(this._bottomBar())
    return div
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

  _leftArrow() {
    let leftDiv = document.createElement('div')
    leftDiv.classList.add('arrow-container-left')
    let leftImage = new Image()
    leftImage.src = leftArrow
    leftImage.alt = 'left-arrow'
    leftImage.classList.add('popout-arrow')
    leftDiv.appendChild(leftImage)
    return leftDiv
  }

  _rightArrow() {
    let rightDiv = document.createElement('div')
    rightDiv.classList.add('arrow-container-right')
    let rightImage = new Image()
    rightImage.src = rightArrow
    rightImage.alt = 'right-arrow'
    rightImage.classList.add('popout-arrow')
    rightDiv.appendChild(rightImage)
    return rightDiv
  }

  _bottomBar() {
    let bottomDiv = document.createElement('div')
    bottomDiv.classList.add('popout-bottom-bar')
    let selectedCircle = new Image()
    selectedCircle.src = selectedCircleImg
    selectedCircle.classList.add('popout-bottom-circle', 'selected-circle')
    bottomDiv.appendChild(selectedCircle)
    for (let i = 0; i < this.images.length - 1; i++) {
      let selector = new Image()
      selector.src = circleImg
      selector.classList.add('popout-bottom-circle')
      bottomDiv.appendChild(selector)
    }
    return bottomDiv
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
