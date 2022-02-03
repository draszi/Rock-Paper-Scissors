// const container = document.querySelector("body");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

const winningHands = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock"
}

//function for computer selecting random hand
function computerPlay() {
  let hands = ["Rock", "Paper", "Scissors"];
  return hands[Math.floor(Math.random() * 3)];
}

let roundWinner;

// plays a game of 5 rounds
function game(){
  
  let humanScore=0;
  let computerScore=3;
  for(let i=0; i<5; i++) {
    roundPlay();
    switch (roundWinner) {
      case 'human':
        humanScore++;
        break;
      case 'computer':
        computerScore++;
        break;
    }
  }
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  return humanScore>2 ? 'Humans win, another day of freedom':
                        'Computers win. All hail our electronic overlords';
}


//function for playing 1 round
function roundPlay(humanSelection, computerSelection = computerPlay()) {
  humanSelection = camelCase(prompt("Pick your hand"));
  while(winningHands[humanSelection] === undefined){
    humanSelection = camelCase(prompt("Try again, that was an invalid selection"));
  }
    
  if (winningHands[humanSelection] === computerSelection) {
    console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
    roundWinner = 'human';
  } 
  else if (humanSelection === computerSelection) {
    console.log("Tie game;");
  } 
  else {
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
      roundWinner = 'computer';
    }
}

//function to capitalize capitalize first letter + lower case rest
function camelCase(string){
  let newString = string[0].toUpperCase()+string.slice(1).toLowerCase();
  return newString;
}

const cpbtn = document.querySelector('#computerPlay');
cpbtn.addEventListener('click', () => {
  // computerPlay()
  roundPlayTest()
});

// test function to play round
function roundPlayTest(humanSelection = computerPlay(), computerSelection = computerPlay()) {
  if (winningHands[humanSelection] === computerSelection) {
    console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
  } else if (humanSelection === computerSelection) {
    console.log("Tie game;");
  } else console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
}

