const [plate1, plate2] = document.querySelectorAll(".plate");
const gameArea = document.querySelector(".game-area");
const ball = document.querySelector("#ball");
const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const startBtn = document.querySelector(".start");
let start = false;
let animationFrameId;

let p1Score = 0;
let p2Score = 0;

let plate1MovingUp = false;
let plate2MovingUp = false;
let plate1MovingDown = false;
let plate2MovingDown = false;
// positions and speed
const ballSpeed = { x: 5, y: 5 };
const plateSpeed = 5; // These constants are added or subtracted from the positions

const ballPos = { x: gameArea.clientWidth / 2, y: gameArea.clientHeight / 2 };
const plate1Pos = {
  x: plate1.offsetLeft,
  y: gameArea.clientHeight / 2 - plate1.clientHeight / 2,
};
const plate2Pos = { y: gameArea.clientHeight / 2 - plate2.clientHeight / 2 };

function checkWinner() {
  if (p1Score >= 5) {
    alert("Player 1 wins!");
    start = false;
    cancelAnimationFrame(animationFrameId);
  } else if (p2Score >= 5) {
    alert("Player 2 wins!");
    start = false;
    cancelAnimationFrame(animationFrameId);
  }
}

function updateBall() {
  ball.style.top = `${ballPos.y}px`;
  ball.style.left = `${ballPos.x}px`;
}

function updateScore() {
  score1.textContent = p1Score;
  score2.textContent = p2Score;
}

function updatePlates() {
  plate1.style.top = `${plate1Pos.y}px`;
  plate2.style.top = `${plate2Pos.y}px`;
}

document.addEventListener("keydown", (event) => {
  if (start) {
    if (event.key.toUpperCase() === "W") {
      plate1MovingUp = true;
    }
    if (event.key.toUpperCase() === "S") {
      plate1MovingDown = true;
    }
    if (event.key === "ArrowUp") {
      plate2MovingUp = true;
    }
    if (event.key === "ArrowDown") {
      plate2MovingDown = true;
    }

    updatePlates();
  }
});
document.addEventListener("keyup", (event) => {
  if (start) {
    if (event.key.toUpperCase() === "W") {
      plate1MovingUp = false;
    }
    if (event.key.toUpperCase() === "S") {
      plate1MovingDown = false;
    }
    if (event.key === "ArrowUp") {
      plate2MovingUp = false;
    }
    if (event.key === "ArrowDown") {
      plate2MovingDown = false;
    }
    updatePlates();
  }
});

function movePlates() {
  if (plate1MovingUp) {
    plate1Pos.y = Math.max(0, plate1Pos.y - plateSpeed);
  }
  if (plate1MovingDown) {
    plate1Pos.y = Math.min(
      gameArea.clientHeight - plate1.clientHeight,
      plate1Pos.y + plateSpeed
    );
  }
  if (plate2MovingUp) {
    plate2Pos.y = Math.max(0, plate2Pos.y - plateSpeed);
  }
  if (plate2MovingDown) {
    plate2Pos.y = Math.min(
      gameArea.clientHeight - plate2.clientHeight,
      plate2Pos.y + plateSpeed
    );
  }
}

function resetBall() {
  ballPos.x = gameArea.clientWidth / 2;
  ballPos.y = gameArea.clientHeight / 2;
  ballSpeed.x = -ballSpeed.x;

  updateBall();
}

function resetPlates() {
  plate1Pos.y = gameArea.clientHeight / 2 - plate1.clientHeight / 2;
  plate2Pos.y = gameArea.clientHeight / 2 - plate2.clientHeight / 2;
  updatePlates();
}

// function pauseGame() {
//     start = false;
//     // cancelAnimationFrame(animationFrameId);
  
//     function resumeGame(event) {
//       if (event.key === " ") {
//         start = true;
//         // document.removeEventListener("keydown", resumeGame);
//         return start;
//         // gameLoop();
//       }
//     }
  
//     start = document.addEventListener("keydown", resumeGame);
//     if(start){
//         handleBallMovement();
//     }
//   }
function handleBallMovement() {
  ballPos.x += ballSpeed.x;
  ballPos.y += ballSpeed.y;

  // Ball collision with top and bottom walls
  if (
    ballPos.y <= 0 ||
    ballPos.y >= gameArea.clientHeight - ball.clientHeight
  ) {
    ballSpeed.y = -ballSpeed.y;
  }

  // Ball collision with plates
  if (
    ballPos.x <= plate1.clientWidth &&
    ballPos.y + ball.clientHeight >= plate1Pos.y &&
    ballPos.y <= plate1Pos.y + plate1.clientHeight
  ) {
    // Hit by plate1
    ballSpeed.x = -ballSpeed.x;
  }

  if (
    ballPos.x >= gameArea.clientWidth - plate2.clientWidth - ball.clientWidth &&
    ballPos.y + ball.clientHeight >= plate2Pos.y &&
    ballPos.y <= plate2Pos.y + plate2.clientHeight
  ) {
    // Hit by plate2
    ballSpeed.x = -ballSpeed.x;
  }

  // Score update, if ball goes out of boundary
  if (ballPos.x <= 0) {
    p2Score++;
    resetBall();
    // updateScore();
    // cancelAnimationFrame(animationFrameId);
    // document.addEventListener("keydown", function(event){

    // })
    // pauseGame();
  }
  if (ballPos.x >= gameArea.clientWidth - ball.clientWidth) {
    p1Score++;
    resetBall();
    // updateScore();
    // pauseGame();
  }

  updateBall();
  checkWinner();
}

function gameLoop() {
  if (start) {
    handleBallMovement();
    movePlates();
    updatePlates();
    updateScore();
    animationFrameId = requestAnimationFrame(gameLoop);
  }
}

const startGame = () => {
  console.log("GAME STARTED");
  start = true;
  p1Score = 0;
  p2Score = 0;
  resetBall();
  resetPlates();
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  gameLoop();
};

startBtn.addEventListener("click", startGame);




