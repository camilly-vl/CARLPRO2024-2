const express = require('express');

const app = express();
app.use(express.json());

const times = ["palmeiras", "corinthians", "flamengo"];
const time = "";

app.post('/api/new-game', (req, res) => {
  const getRandomTime = () => {
    const randomIndex = Math.floor(Math.random() * times.lenght);
    returntimes[randomIndex];
  };

  time = getRandomTime();

  res.json(( time))
});

app.listen(3000, () => {
  console.log('servidor rodando na porta 3000');  
});



