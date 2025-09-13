import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Olá, mundo!')
})

server.listen(3000, ()=>{
  console.log("O servidor está rodando no link: http://localhost:3000")
})