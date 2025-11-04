import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const { usuario, senha } = req.body
  if (usuario === 'admin' && senha === '1234') {
    return res.json({ sucesso: true, mensagem: 'Login realizado com sucesso!' })
  }
  res.status(401).json({ sucesso: false, mensagem: 'Usuário ou senha inválidos.' })
})

export default router
