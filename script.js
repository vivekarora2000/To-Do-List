
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListItem() {
	var li = document.createElement("li");
	var button= document.createElement("button");
	li.appendChild(document.createTextNode(input.value+"          "));
	button.appendChild(document.createTextNode("done"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListOnClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

function addListOnEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
}

button.addEventListener("click", addListOnClick);

input.addEventListener("keypress", addListOnEnter);