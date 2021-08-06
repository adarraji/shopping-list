var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createDeleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("delete");
    return btn
}

function createListElement() {
    var li = document.createElement("li");
    li.classList.add("task");
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(createDeleteButton());
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function listClickHandle(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");

    }
    if (event.target.className === "delete") {
        event.target.parentElement.remove();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", listClickHandle);