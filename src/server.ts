import express from 'express';
import helmet from 'helmet' // Vai adcionar uma camada extra de proteção, ou seja, não será informado que estamos usando o express no backend.
import { fileURLToPath } from 'url';
import path from 'path';

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Essas duas constantes são usadas para obter o diretório atual do arquivo, o que é útil para trabalhar com caminhos de arquivos e diretórios.

server.use(helmet()) // a função use é uma função do express que nos permite inserir coisas dentrp nele, desde configurações até bibliotecas externas.
server.use(express.json())
server.use(express.urlencoded({extended: true})) //O código server.use(express.urlencoded({extended: true})) é um middleware do Express.js que analisa dados de formulários codificados em URL (application/x-www-form-urlencoded), como os enviados por formulários web, e torna esses dados disponíveis no objeto req.body para que possam ser manipulados pela sua aplicação. A opção extended: true permite a análise de corpos de requisição complexos, incluindo objetos aninhados.

server.use(express.static(path.join(__dirname, "../public"))) // Vai servir arquivos estáticos, como imagens, css, js, etc. O path.join é usado para garantir que o caminho seja construído corretamente, independentemente do sistema operacional.

server.get('/', (req, res) => {
  const nome = "Jeferson";
  const idade = 25;

  res.json({ nome, idade})
})

server.listen(3000, ()=>{
  console.log("O servidor está rodando no link: http://localhost:3000")
})