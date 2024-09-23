function drawPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  let result = "";

  if (randomNumber === 0) {
    result = "rock";
  } else if (randomNumber === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

let computer = drawPlay();
console.log(computer);
