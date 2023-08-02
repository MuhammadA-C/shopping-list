
class InputField {

  get addItemTextField() {
    return document.querySelector("#text-field");
  }

  get addItemTextFieldValue() {
    return this.addItemTextField.value;
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