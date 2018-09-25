const closeIcon = require('../static/close-icon.png')
const leftArrow = require('../static/arrow-left.png')
const rightArrow = require('../static/arrow-right.png')
const circleImg = require('../static/circle.svg')
const selectedCircleImg = require('../static/selected-circle.svg')

export default class ItemPopout {
  constructor(id, images) {
    this.id = id 
    this.images = images
    this.htmlImages = this._parseHtmlImages()
    this.popoutDiv = this._createPopoutDiv()
  }

  present(coords) {
    this.popoutDiv.setAttribute('style', `left:${coords.x}px;top:${coords.y}px;`)
    this.popoutDiv = this._addInnerHtml(this.popoutDiv)
    document.getElementById('items').appendChild(this.popoutDiv)
  }

  shiftImages(amount) {
    this.popoutDiv = document.querySelector('.item-popout')
    let images = this.popoutDiv.getElementsByClassName('popout-images')[0]
    let visibleImage = images.getElementsByClassName('visible-image')[0]
    let nextImage = images.children[parseInt(visibleImage.dataset.ind) + amount]
    if (nextImage) {
      visibleImage.classList.remove('visible-image')
      visibleImage.classList.add('hidden')
      nextImage.classList.remove('hidden')
      nextImage.classList.add('visible-image')
    }
  }

  _createPopoutDiv() {
    let popoutDiv = document.createElement('div')
    popoutDiv.classList.add('item-popout')
    popoutDiv.dataset.id = this.id
    return popoutDiv
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
    images.dataset.id = this.id
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
    this.images.forEach((imageUrl, ind) => {
      let classes = 'popout-image '
      if (ind !== 0) { 
        classes += 'hidden' 
      } else {
        classes += 'visible-image'
      }
      htmlStr += `<img src=${imageUrl} data-ind=${ind} class="${classes}" />`
    })
    return htmlStr
  }
}
