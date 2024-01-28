
const dialogOpen = document.querySelector("#dialog-open");
const openButton = document.querySelector("#open-button");
const buttonClose = document.querySelector("#button-close");


openButton.addEventListener("click", onSelectButton);

buttonClose.addEventListener("click", onCloseButton);

function onSelectButton(e) {
    dialogOpen.showModal();
    
}

function onCloseButton(e) {
    dialogOpen.close();
}