const customDialogContainer = document.querySelector(".custom-dialog-container");

function createCustomDialog(title, body, dialogImageLink, bgColor) {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add('dialogBox');

    const titleDiv = document.createElement("div");
    titleDiv.classList.add('tittleDiv');
    // E70000
    const dialogImage = document.createElement("img");
    dialogImage.src = dialogImageLink;
    dialogImage.width = "30";

    const dialogTitle = document.createElement("h4");
    dialogTitle.classList.add('dialogTitle');
    dialogTitle.innerHTML = title;

    titleDiv.append(dialogImage, dialogTitle);

    const dialogBody = document.createElement("p");
    dialogBody.classList.add('dialogBody');
    dialogBody.innerHTML = body;
    
    const dialogCloseButton = document.createElement("button");
    dialogCloseButton.classList.add('dialogCloseButton');
    dialogCloseButton.innerHTML = 'Close';
    dialogCloseButton.style.backgroundColor = bgColor;

    dialogBox.append(titleDiv, dialogBody, dialogCloseButton);
    customDialogContainer.append(dialogBox);

    dialogCloseButton.addEventListener("click", function(e){
        e.target.parentElement.remove();
    })
}