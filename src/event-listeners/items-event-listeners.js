const Items = require('../components/items').default
const circleImg = require('../static/circle.svg')
const selectedCircleImg = require('../static/selected-circle.svg')

export default class ItemsEventListeners {
  constructor() {
    let itemsDiv = document.getElementById('items')
    this.items = new Items(itemsDiv)
  }

  onItemImageClick() {
    document.addEventListener('click', (event) => {
      let parentEl = event.target.parentElement
      if (parentEl.classList.contains('item')) {
        let popout = this.items.displayPopout(parentEl, { x: event.clientX, y: event.clientY })
      }
    })
  }

  onPopoutClose() {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('popout-close')) {
        event.target.parentElement.remove()
      }
    })
  }

  onArrowClick() {
    document.addEventListener('click', (event) => {
      let classes = event.target.classList
      let parentClasses = event.target.parentElement.classList
      if (classes.contains('arrow-container-left') || parentClasses.contains('arrow-container-left')) {
        this._leftArrowClick(event)
      } else if (classes.contains('arrow-container-right') || parentClasses.contains('arrow-container-right')) {
        this._rightArrowClick(event)
      }
    })
  }

  _leftArrowClick(event) {
    let bottomBar = document.getElementsByClassName('popout-bottom-bar')[0]
    if (!bottomBar.firstChild.classList.contains('selected-circle')) {
      let imgs = document.getElementsByClassName('popout-images')[0]
      this._shiftCircles(bottomBar, -1)
      this._shiftImgs(imgs, -1)
    }
  }

  _rightArrowClick(event) {
    let bottomBar = document.getElementsByClassName('popout-bottom-bar')[0]
    if (!bottomBar.lastChild.classList.contains('selected-circle')) {
      let imgs = document.getElementsByClassName('popout-images')[0]
      this._shiftCircles(bottomBar, 1)
      this._shiftImgs(imgs, 1)
    }
  }

  _shiftCircles(bottomBar, amount) {
    let selected = bottomBar.getElementsByClassName('selected-circle')[0]
    selected.src = circleImg
    selected.classList.remove('selected-circle')
    if (amount > 0) {
      selected.nextSibling.src = selectedCircleImg
      selected.nextSibling.classList.add('selected-circle')
    } else {
      selected.previousSibling.src = selectedCircleImg
      selected.previousSibling.classList.add('selected-circle')
    }
  }

  _shiftImgs(imgs, amount) {
    let coords = imgs.getBoundingClientRect()
    imgs.setAttribute('style', `top:${coords.y + (363 * amount)}px`)
  }


}
