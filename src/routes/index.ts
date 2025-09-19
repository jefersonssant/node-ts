import express from 'express';
import produtosRouter from './produtos.ts';
import voosRouter from './voos.ts';


const router = express.Router();

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)

router.get('/ping', (req, res) => {
  res.json({pong: true}) // Vai responder com um json contendo {pong: true} quando receber uma requisição GET no endpoint /ping. O res.json() é um método do Express que envia uma resposta JSON para o cliente.
})


router.post('/produtos', (req, res) => {
  res.json({produtos: []})
})


router.get('/', (req, res) => {
  const nome = "Jeferson";
  const idade = 25;

  res.json({ nome, idade})
})


export default router