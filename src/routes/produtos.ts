import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({produtos: []})
})

router.get('/:id', (req, res) => {
  console.log(req.params) // O req.params é um objeto que contém propriedades correspondentes aos parâmetros nomeados na rota. Neste caso, :id é um parâmetro de rota, e seu valor pode ser acessado através de req.params.id.
  const { id } = req.params;
  res.json({id, name: 'Produto 1', price: 90})
})


export default router;