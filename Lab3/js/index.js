document.getElementsByClassName("submitButton")[0].addEventListener("click", function (){
	event.preventDefault();
	var toDoList = document.getElementsByClassName("listOfTodos")[0];
	var newTodo = document.getElementsByClassName("newTodo")[0];

	var newCheckBox = document.createElement("input");
	newCheckBox.setAttribute("type", "checkbox");
	newCheckBox.setAttribute("class", "cb");

	var newP = document.createElement("p");
	newP.innerText = `${newTodo.value}`

	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "item");
	newDiv.appendChild(newCheckBox);
	newDiv.appendChild(newP);

	toDoList.appendChild(newDiv);
	newTodo.value = " ";
});

document.getElementsByTagName("body")[0].onload = function () {
		var newTodo = document.getElementsByClassName("newTodo")[0].value = "";
	}

document.getElementsByClassName("markAllButton")[0].addEventListener("click", function (){
	var items = document.getElementsByClassName("cb");
	for (var i = 0; i < items.length; i++) {
		items[i].checked = true;
	}
});

document.getElementsByClassName("clearButton")[0].addEventListener("click", function (){
	var items = document.getElementsByClassName("cb");
	for (var i = 0; i < items.length; i++) {
		items[i].checked = false;
	}
});

document.getElementsByClassName("deleteButton")[0].addEventListener("click", function (){
	var toDoList = document.getElementsByClassName("listOfTodos")[0];
	while (toDoList.firstChild) {
    	toDoList.removeChild(toDoList.firstChild);
	}
});