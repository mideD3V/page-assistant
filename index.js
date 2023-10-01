const container = document.getElementById("container");
let item = document.getElementById("object");
let btnTarget = document.querySelectorAll(".target");

container.style.backgroundColor = "";

container.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
  var xPosition = e.clientX - item.offsetWidth / 1.5;
  var yPosition = e.clientY - item.offsetWidth / 0.85;

  var translate3dValue =
    "translate3d(" + xPosition + "px," + yPosition + "px, 0)";

  item.style.transform = translate3dValue;
}
