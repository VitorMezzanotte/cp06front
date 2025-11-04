import express from 'express'
const router = express.Router()

let produtos = [
  { id: 1, nome: 'Fiat Uno', marca: 'Fiat', ano: 2010, preco: 18000, imagem: '' },
  { id: 2, nome: 'Volkswagen Gol', marca: 'VW', ano: 2018, preco: 35000, imagem: '' }
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
