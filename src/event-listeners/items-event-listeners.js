const Items = require('../components/items').default

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
        //this._onImageMouseOver()
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
      if (event.target.classList.contains('popout-arrow-left')) {
        console.log('left') 
      } else if (event.target.classList.contains('popout-arrow-right')) {
        console.log('right')
      }
    })
  }

  /*
  _onImageMouseOver() {
    let popout = document.getElementsByClassName('item-popout')[0]
    popout.addEventListener('mouseover', (event) => {
      let leftArrow = event.target.getElementsByClassName('popout-arrow-left')[0]
      let rightArrow = event.target.getElementsByClassName('popout-arrow-right')[0]
      leftArrow.classList.toggle('visible')
      rightArrow.classList.toggle('visible')
    })
  }
  */

}
