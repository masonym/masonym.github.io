var cnt = 0;

function showMessage(response) {
  if (response === "No") {
    var noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    cnt++;
    document.getElementsByClassName("image")[0].src = "./valentines/images/elgatogun.jpg";

    document.getElementById("question").textContent =
      "excuse me? try again";
    document.getElementById("name").style.display = "none";

    if (cnt > 5) {
      document.getElementById("question").textContent =
        "PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE"
      document.getElementsByClassName("image")[0].src = "./valentines/images/sadge.jpg";
    }
    noButton.style.position = "absolute";

    
    const posX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const posY = Math.max(0, Math.floor(Math.random() * maxHeight));
    
    noButton.style.transition = 'all 1s ease';
    noButton.style.left = `${posX}px`;
    noButton.style.top = `${posY}px`;

  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "mweh heh heh heh........ \n see you on the 14th 😎";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "./valentines/images/teehee.jpg";

    document.getElementById("yesButton").remove();
  }

}
