let money = 0
let moneyPerClick = 1
let autoClicker = 0


function clickerClicked(){
    money += moneyPerClick;
    document.getElementById("moneyLabel").textContent = "Money: " + money
}

document.getElementById("clicker").onclick = clickerClicked;

