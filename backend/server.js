import express from 'express'
import cors from 'cors'
import produtosRoutes from './routes/produtos.js'
import loginRoutes from './routes/login.js'
import contatoRoutes from './routes/contato.js'

const app = express()
app.use(cors())
app.use(express.json())

// Rotas principais
app.use('/api/produtos', produtosRoutes)
app.use('/api/login', loginRoutes)
app.use('/api/contato', contatoRoutes)

// Inicialização do servidor
const PORT = 3333
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
