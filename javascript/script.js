import Button from "./button.js";
import InputField from "./inputField.js";

/*



*/

const button = new Button();
const inputField = new InputField();
const ul = document.querySelector("ul");

//////////////////////////////////////////////////////////////////

button.addItemBtn.addEventListener("click", () => {

  if(inputField.isItemTextFieldEmpty) {
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




function createText(text) {
  return document.createTextNode(text);
}
