
class InputField {

  get addItemTextField() {
    return document.querySelector("#text-field");
  }

  get addItemTextFieldValue() {
    return this.addItemTextField.value;
  }

  get filteredItemTextField() {
    return document.querySelector("#filter-field");
  }

  isItemTextFieldEmpty() {

    if(this.addItemTextFieldValue == "") {
      return true;
    }
    return false;
  }

  resetTextField(textField) {
    textField.value = "";
  }
  
}

export default InputField;