let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst");
let turnO = true;
let newGame = document.querySelector("#new");
let msg = document.querySelector(".msg");
let msgText = document.querySelector("#msgText");

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msg.classList.add("hide");
  }
};
const checkWinner = () => {
  for (let pattern of win) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(`Player ${pos1} wins!`);
        showWinner(pos1);
      }
    }
  }
};

const showWinner = (winner) => {
  msgText.innerText = `Player ${winner} wins!`;
  msg.classList.remove("hide");
  disableboxes();
};
newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);

function resetGame() {
  turnO = true;
  enableboxes();
}
