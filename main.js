// const container = document.querySelector("body");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);
const winningHands = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  };
  
  //function for computer selecting random hand
  function computerPlay() {
    let hands = ["Rock", "Paper", "Scissors"];
    return hands[Math.floor(Math.random() * 3)];
  }
  
  //function for playing 1 round
  function roundPlay(humanSelection, computerSelection = computerPlay()) {
    // humanSelection = prompt("Pick your hand");
    if (winningHands[humanSelection] === computerSelection) {
      console.log("You win");
    } else if (humanSelection === computerSelection) {
      console.log("Tie game;");
    } else console.log("You lose!");
  }
  
  // roundPlay();
  