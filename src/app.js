import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icon = defineIcon();
  let number = defineNumber();
  let card = 
  `<div class="card border border-dark text-dark shadow-lg">
        <div class="top-left" id="topIcon">${icon}</div> 
        <div class="text-center number">${number}</div> 
        <div class="bottom-right text-end" id="bottomIcon">${icon}</div> 
    </div>`;

  document.body.innerHTML = card;

  let changeColor = document.getElementsByClassName("top-left");
  if (icon === "♥" || icon === "♦"){
    document.getElementById("topIcon").style.color = "red";
    document.getElementById("bottomIcon").style.color = "red";
  }
};

function defineIcon(){
  switch (Math.floor(Math.random() * 4)){
    case 0:
      return "♠";
      break;
    case 1:
      return "♣";
      break;
    case 2:
      return "♥";
      break;
    default:
      return "♦";
      break;
  }
}

function defineNumber(){
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

  let card = numbers[Math.floor(Math.random() * 12)];

  switch (card) {
    case 1:
        return "A";
        break;
    case 10:
        return "J";
        break;
    case 11:
        return "Q";
        break;
    case 12:
        return "K";
        break;
    default:
        return card;
  }
}
