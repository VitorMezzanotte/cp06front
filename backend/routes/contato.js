import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const { nome, email, mensagem } = req.body
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' })
  }
  res.json({ sucesso: true, mensagem: 'Mensagem recebida com sucesso!' })
})

export default router
