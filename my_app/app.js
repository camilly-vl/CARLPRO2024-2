const express = require('express');

const app = express();

app.get('/hello-string', function(request, response) {
return response.send("Hello, String!")
});

app.get('/hello-json', (req, res) => {
  const data = {
    message: "Hello, JSON!",
    nome: "Camilly Lazzaro"
  }
  return res.status(201).json(data);
})

// localhost:3000/api/users
const users = [
  { id: 1, username: "clazzaro", status: "Disponivel"},
  { id: 2, username: "joao", status: "ocupado"},
]

const PORT = process.env.PORT || 3000;
const onServerStart = function() {
console.log(`Server is running on port ${PORT}`);
};

app.listen(PORT, onServerStart);