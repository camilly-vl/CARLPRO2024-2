const drawPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    default:
      result = "scissors";
  }
}

let computer = drawPlay();
console.log(computer);