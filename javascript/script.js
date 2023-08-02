import Button from "./button.js";
import InputField from "./inputField.js";

/*

Things left tp add:
* Filter items
* Persistant storage
* Make list items not overflow out of container, instead add a scroll when items to too far out of container



*/

const button = new Button();
const inputField = new InputField();
const ul = document.querySelector("ul");

//////////////////////////////////////////////////////////////////

button.addItemBtn.addEventListener("click", () => {

  if(inputField.isItemTextFieldEmpty()) {
    alert("Enter an item before clicking the Add Item button");
    return;
  }

  let listItem = document.createElement("li");
  let listItemText = createText(inputField.addItemTextFieldValue);
  let removeBtn = button.createRemoveBtn();

  listItem.appendChild(listItemText);
  listItem.appendChild(removeBtn);

  //Adds the item entered to the list
  ul.appendChild(listItem);
  //Resets the text field to blank
  inputField.resetTextField(inputField.addItemTextField);

});

button.clearAllBtn.addEventListener("click", () => {
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

ul.addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});






function createText(text) {
  return document.createTextNode(text);
}
