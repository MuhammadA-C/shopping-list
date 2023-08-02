
class InputField {

  get addItemTextField() {
    return document.querySelector("#text-field");
  }

  get addItemTextFieldValue() {
    return this.addItemTextField.value;
  }

  resetTextField(textField) {
    textField.value = "";
  }
  
}

export default InputField;