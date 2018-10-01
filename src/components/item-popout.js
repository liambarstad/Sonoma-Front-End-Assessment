const closeIcon = require("../static/close-icon.png");
const leftArrow = require("../static/arrow-left.png");
const rightArrow = require("../static/arrow-right.png");
const circleImg = require("../static/circle.svg");
const selectedCircleImg = require("../static/selected-circle.svg");

export default class ItemPopout {
  constructor(id, images) {
    this.id = id; 
    this.images = images;
    this.htmlImages = this._parseHtmlImages();
    this.popoutDiv = this._createPopoutDiv();
  }

  present() {
    this.popoutDiv = this._addInnerHtml(this.popoutDiv);
    document.getElementById("items").appendChild(this.popoutDiv);
  }

  shiftLeft() {
    this.shiftCircles(-1);
    this.shiftImages(-1);
  }

  shiftRight() {
    this.shiftCircles(1);
    this.shiftImages(1);
  }

  shiftCircles(amount) {
    let bottomBar = document.querySelector(".popout-bottom-bar");
    let visibleCircle = bottomBar.querySelector(".selected-circle");
    let nextCircle = bottomBar.children[parseInt(visibleCircle.dataset.ind) + amount];
    if (nextCircle) {
      this._alterCircles(visibleCircle, nextCircle); 
    }
  }

  shiftImages(amount) {
    this.popoutDiv = document.querySelector(".item-popout");
    let images = this.popoutDiv.querySelector(".popout-images");
    let visibleImage = images.querySelector(".visible-image");
    let nextImage = images.children[parseInt(visibleImage.dataset.ind) + amount];
    if (nextImage) {
      this._alterImages(visibleImage, nextImage);
    }
  }

  _createPopoutDiv() {
    let popoutDiv = document.createElement("div");
    popoutDiv.classList.add("item-popout");
    popoutDiv.dataset.id = this.id;
    return popoutDiv;
  }

  _addInnerHtml(div) {
    div.appendChild(this._images());
    div.appendChild(this._closeIcon());
    div.appendChild(this._leftArrow());
    div.appendChild(this._rightArrow());
    div.appendChild(this._bottomBar());
    return div;
  }

  _images() {
    let images = document.createElement("div");
    images.classList.add("popout-images");
    images.dataset.id = this.id;
    images.innerHTML = this.htmlImages;
    return images;
  }

  _closeIcon() {
    let closeImage = new Image();
    closeImage.src = closeIcon;
    closeImage.alt = "close-button";
    closeImage.classList.add("popout-close");
    return closeImage;
  }

  _leftArrow() {
    let leftDiv = document.createElement("div");
    leftDiv.classList.add("arrow-container-left");
    leftDiv.dataset.id = this.id;
    let leftImage = new Image();
    leftImage.src = leftArrow;
    leftImage.alt = "left-arrow";
    leftImage.classList.add("popout-arrow");
    leftImage.dataset.id = this.id;
    leftDiv.appendChild(leftImage);
    return leftDiv;
  }

  _rightArrow() {
    let rightDiv = document.createElement("div");
    rightDiv.classList.add("arrow-container-right");
    rightDiv.dataset.id = this.id;
    let rightImage = new Image();
    rightImage.src = rightArrow;
    rightImage.alt = "right-arrow";
    rightImage.classList.add("popout-arrow");
    rightImage.dataset.id = this.id;
    rightDiv.appendChild(rightImage);
    return rightDiv;
  }

  _bottomBar() {
    let bottomDiv = document.createElement("div");
    bottomDiv.classList.add("popout-bottom-bar");
    bottomDiv = this._appendCircles(bottomDiv);
    return bottomDiv;
  }

  _appendCircles(bottomDiv) {
    this.images.forEach((image, ind) => {
      let circle = new Image();
      circle.classList.add("popout-bottom-circle")
      if (ind == 0) {
        circle.src = selectedCircleImg;
        circle.classList.add("selected-circle");
      } else {
        circle.src = circleImg;
      };
      circle.dataset.ind = ind;
      bottomDiv.appendChild(circle);
    });
    return bottomDiv;
  }

  _alterCircles(visibleCircle, nextCircle) {
    visibleCircle.src = circleImg;
    visibleCircle.classList.remove("selected-circle");
    nextCircle.src = selectedCircleImg;
    nextCircle.classList.add("selected-circle");
  }

  _alterImages(visibleImage, nextImage) {
    visibleImage.classList.remove("visible-image");
    visibleImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
    nextImage.classList.add("visible-image");
  }

  _parseHtmlImages() {
    let htmlStr = "";
    this.images.forEach((imageUrl, ind) => {
      let classes = "popout-image ";
      if (ind !== 0) { 
        classes += "hidden";
      } else {
        classes += "visible-image";
      };
      htmlStr += `<img src=${imageUrl} data-ind=${ind} class="${classes}" />`;
    });
    return htmlStr;
  }
}
