import express from 'express'
const router = express.Router()

let produtos = [
  { id: 1, nome: 'Fiat Uno', marca: 'Fiat', ano: 2010, preco: 18000, imagem: 'https://cdn.autopapo.com.br/box/uploads/2020/01/14174308/fiat-uno-grazie_mille-2.jpg' },
  { id: 2, nome: 'Volkswagen Gol', marca: 'VW', ano: 2018, preco: 35000, imagem: 'https://cdn.motor1.com/images/mgl/YAAopq/s3/volkswagen-gol-1.0-2023.jpg' }
]

// READ - listar todos
router.get('/', (req, res) => res.json(produtos))

// CREATE
router.post('/', (req, res) => {
  const novo = { id: Date.now(), ...req.body }
  produtos.push(novo)
  res.status(201).json(novo)
})

// UPDATE
router.put('/:id', (req, res) => {
  const { id } = req.params
  const index = produtos.findIndex(p => p.id == id)
  if (index < 0) return res.status(404).json({ erro: 'Produto não encontrado' })
  produtos[index] = { ...produtos[index], ...req.body }
  res.json(produtos[index])
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  produtos = produtos.filter(p => p.id != id)
  res.json({ mensagem: 'Produto removido com sucesso' })
})

export default router
