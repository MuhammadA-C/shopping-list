

let ul = document.querySelector("ul");

let listItem = document.createElement("li");
let listItemText = document.createTextNode("Item Test");

let listItemRemoveBtn = document.createElement("button");
let addClass = "remove-item-btn";
let btnType = "button";
let btnText = document.createTextNode("X");

///////////////////////////////////////////////////////////////

//adds button type to button
listItemRemoveBtn.type = btnType;
//adds class to button
listItemRemoveBtn.classList.add(addClass);
//adds text to button
listItemRemoveBtn.appendChild(btnText);

//adds text to list item
listItem.appendChild(listItemText);
//adds button to list item
listItem.appendChild(listItemRemoveBtn);

//adds button to unordered list
ul.appendChild(listItem);


let test = document.querySelector("#text-field");
text = test.value;




