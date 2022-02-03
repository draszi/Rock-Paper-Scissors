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

const winnerLoser = {
  human: 'computerSelection',
  computer: 'humanSelection'
}

//function for computer selecting random hand
function computerPlay() {
  let hands = ["Rock", "Paper", "Scissors"];
  return hands[Math.floor(Math.random() * 3)];
}

let roundWinner;
let roundMessage;
// plays a game of 5 rounds
function game() {

  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    roundPlay();
    switch (roundWinner) {
      case 'human':
        humanScore++;
        console.log(message);
        break;
      case 'computer':
        computerScore++;
        console.log(message);
        break;
      case 'tie':
        console.log(message);
        break;
    }
  }
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  return humanScore > 2 ? 'Humans win, another day of freedom' :
         computerScore > 2 ? 'Computers win. All hail our new silicon based overlords' :
                              'Nobody wins, try again';
}

//function for playing 1 round
function roundPlay(humanSelection, computerSelection = computerPlay()) {
  humanSelection = camelCase(prompt("Pick your hand"));
  while (winningHands[humanSelection] === undefined) {
    humanSelection = camelCase(prompt("Try again, that was an invalid selection"));
  }

  if (winningHands[humanSelection] === computerSelection) {
    roundWinner = 'human';
    message = `You Win! ${humanSelection} beats ${computerSelection}`;
  }
  else if (humanSelection === computerSelection) {
    roundWinner = 'tie';
    message = "Tie game;";
  }
  else {
    roundWinner = 'computer';
    message = `You lose! ${computerSelection} beats ${humanSelection}`;
  }

  //I tried something here that didn't work but I liked the idea :)
  // console.log(`${camelCase(roundWinner)}s win. ${temp = String(roundWinner+'Selection')} beats ${winnerLoser[roundWinner]}`);
  // console.log(`${camelCase(roundWinner)}s win.`);
}

//function to capitalize capitalize first letter + lower case rest
function camelCase(string) {
  let newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
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

