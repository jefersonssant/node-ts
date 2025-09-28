import express, { type RequestHandler } from 'express';
import produtosRouter from './produtos.ts';
import voosRouter from './voos.ts';
import { interferir } from '../middlewares/intervir.ts';


const router = express.Router();

//router.use(interferir)

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)



router.get('/ping', interferir, (req, res) => {
  console.log("EXECUTOU O PING");
  
  res.json({pong: true}) // Vai responder com um json contendo {pong: true} quando receber uma requisição GET no endpoint /ping. O res.json() é um método do Express que envia uma resposta JSON para o cliente.
})


router.post('/produtos', (req, res) => {
  res.json({produtos: []})
})


router.get('/', (req, res) => {
  console.log("PARAMS", req.params);
  console.log("QUERY", req.query);
  console.log("BODY", req.body);
  

  const nome = "Jeferson";
  const idade = 25;

  res.json({ nome, idade})
})


export default router