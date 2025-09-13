import { createServer } from 'node:http';

const server = createServer((req, res)=> {
  const nome: string = "Jeferson"
  const idade: number = 25
  res.end(`Ola, mundo, meu nome e ${nome} e eu tenho ${idade} anos`)
})

server.listen(3000, ()=>{
  console.log("Servidor funcionando em http://localhost:3000")
})