function Return(){
    location.href = "indexExtLogin.html";
}
function start(){
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
        if(player1 == player2){
          alert("Os jogadores não podem ter a mesma letra.");
          return;
        }
        if( player1.length !=1 || player2.length !=1 ){
            alert("Preencha os espaços para continuar | Número de caracteres não pode ser maior que 1");
        }else{
            document.getElementById("header").style.display = "none";
            document.getElementById("container").style.display = "block";
            document.getElementById("players-display").style.display = "block";
            document.getElementById("footer").style.display = "flex";
        }
    document.getElementById("playersDisplayPlayer1").innerText = player1;
    document.getElementById("playersDisplayPlayer2").innerText = player2;
}
const spaceElements = document.querySelectorAll(".space");
document.addEventListener("click", (event) => {
  if (event.target.matches(".space")) {
    play(event.target.id);
  }
});
let checkTime = true;
let filledSpaces = 0;
const totalSpaces = spaceElements.length;

function play(id) {
  const space = document.getElementById(id);

  if (space.textContent !== "") {
    alert("Essa célula já foi usada.");
    return;
  }
  let time = checkTime ? player1.value : player2.value;
  space.textContent = time;
  checkTime = !checkTime;
  if (checkTime) {
    space.style.background = "black";
  } else {
    space.style.background = "white";
    space.style.color = "black";
  }
  filledSpaces++;

  if (filledSpaces === totalSpaces) {
    alert("HORA DE AGRUPAR!!");
    return;
  }
}
    document.addEventListener("DOMContentLoaded", function() {
      let buttonValues = [0, 0, 0, 0];
    function handleClick(buttonIndex) {
      buttonValues[buttonIndex]++;
      for (let i = 0; i < 3; i++) {
        if (buttonValues[i] === 2) {
          buttonValues[i] = 0;
          buttonValues[i + 1]++;
        }
      }
      for (let i = 0; i < 4; i++) {
        document.getElementById(`pGrids1Btn${i + 1}`).innerText = buttonValues[i];
      }
    }
    for (let i = 0; i < 4; i++) {
      document.getElementById(`pGrids1Btn${i + 1}`).addEventListener("click", function() {
        handleClick(i);
      })
    }
  })
document.addEventListener("DOMContentLoaded", function() {
    let buttonValues = [0, 0, 0, 0];
    function handleClick(buttonIndex) {
      buttonValues[buttonIndex]++;
      for (let i = 0; i < 3; i++) {
        if (buttonValues[i] === 2) {
          buttonValues[i] = 0;
          buttonValues[i + 1]++;
        }
      }
      for (let i = 0; i < 4; i++) {
        document.getElementById(`pGrids2Btn${i + 1}`).innerText = buttonValues[i];
      }
    }
    for (let i = 0; i < 4; i++) {
      document.getElementById(`pGrids2Btn${i + 1}`).addEventListener("click", function() {
        handleClick(i);
      })
    }
  })
