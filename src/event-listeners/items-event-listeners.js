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
        this.items.displayPopout(parentEl)
      }
    })
  }

  onPopoutClose() {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('popout-close') || event.target.id == 'background-matte') {
        document.getElementById('background-matte').remove()
        document.getElementsByClassName('item-popout')[0].remove()
      }
    })
  }

  onArrowClick() {
    document.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      let classes = event.target.classList
      let parentClasses = event.target.parentElement.classList
      if (classes.contains('arrow-container-left') || parentClasses.contains('arrow-container-left')) {
        this._leftArrowClick(event.target.dataset.id)
      } else if (classes.contains('arrow-container-right') || parentClasses.contains('arrow-container-right')) {
        this._rightArrowClick(event.target.dataset.id)
      }
    })
  }

  _leftArrowClick(id) {
    let item = this.items.items.find((el) => { return el.id = id })
    item.popout.shiftLeft()
  }

  _rightArrowClick(id) {
    let item = this.items.items.find((el) => { return el.id = id })
    item.popout.shiftRight()
  }

}
