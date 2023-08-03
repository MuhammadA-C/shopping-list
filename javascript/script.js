import Button from "./button.js";
import InputField from "./inputField.js";

/*


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

  ul.appendChild(listItem);
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

//////////////////////////////////////////////////////////////////

function createText(text) {
  return document.createTextNode(text);
}
