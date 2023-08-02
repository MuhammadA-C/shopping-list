
class Button {

  get addItemBtn() {
    return document.querySelector(".button-container :first-child");
  }

  get clearAllBtn() {
    return document.querySelector(".button-container :last-child");
  }

  createRemoveBtn() {
    let removeBtn = document.createElement("button");

    this.addTypeToBtn(removeBtn, "button");
    this.addClassToBtn(removeBtn, "remove-item-btn");

    removeBtn.appendChild(document.createTextNode("X"));

    return removeBtn;
  }

  addClassToBtn(btn, className) {
    btn.classList.add(className);
  }
  
  addTypeToBtn(btn, typeName) {
    btn.type = typeName;
  }

}

export default Button;