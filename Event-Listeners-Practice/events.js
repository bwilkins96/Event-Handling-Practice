window.addEventListener("DOMContentLoaded", event => {
    console.log("The DOM has been loaded!");

    let redInput = document.getElementById("red-input");
    let redInputHandler = event => {
        //if (redInput.value === "red") {redInput.style.color = "red"}
        let color = redInput.value;
        redInput.style.color = color;
        //redInput.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
    }
    redInput.addEventListener("input", redInputHandler);

    let submit = document.getElementById("add-item");
    let listInput = document.getElementById("list-add");
    let ul = document.querySelector("ul");
    let submitEventHandler = event => {
        let newLi = document.createElement("li");
        newLi.innerText = listInput.value;
        ul.appendChild(newLi);
    }
    submit.addEventListener("click", submitEventHandler);

    let colorSelect = document.getElementById("color-select");
    let colorSelectHandler = event => {
        let section = document.getElementById("section-3");
        section.style.backgroundColor = colorSelect.value;
    }
    colorSelect.addEventListener("change", colorSelectHandler);

    let removeListeners = document.getElementById("remove-listeners");
    let listenersCount = 0;
    removeListeners.addEventListener("click", event => {
        listenersCount++;

        if (listenersCount % 2 !== 0) {
            redInput.removeEventListener("input", redInputHandler);
            submit.removeEventListener("click", submitEventHandler);
            colorSelect.removeEventListener("change", colorSelectHandler);
            removeListeners.innerText = "Add Listeners"
        } else {
            redInput.addEventListener("input", redInputHandler);
            submit.addEventListener("click", submitEventHandler);
            colorSelect.addEventListener("change", colorSelectHandler);
            removeListeners.innerText = "Remove Listeners";
        }
    });

});
