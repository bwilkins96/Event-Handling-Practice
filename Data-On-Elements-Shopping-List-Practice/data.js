window.addEventListener("DOMContentLoaded", event => {
    console.log("DOM Content Loaded!");

    let addButton = document.getElementById("add");
    let ul = document.getElementById("shopping-list");

    let handleAdd = event => {
        event.preventDefault();
        let item = document.getElementById("name").value;
        let type = document.getElementById("type").value;
        if (item.length < 1) {return}
        let newLi = document.createElement("li");
        newLi.innerText = item;
        newLi.setAttribute("data-type", type);
        ul.appendChild(newLi);
    }

    addButton.addEventListener("click", handleAdd);




})
