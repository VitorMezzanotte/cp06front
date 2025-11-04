import React, { useState } from 'react'
import axios from 'axios'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3333/api/contatos', form)
      setStatus('Mensagem enviada com sucesso!')
      setForm({ nome: '', email: '', mensagem: '' })
    } catch (err) {
      setStatus('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  return (
    <section className="max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Contato</h2>
      {status && <div className="mb-4 text-sm text-green-600">{status}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="w-full border p-2 rounded"
        />
        <input
          required
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <textarea
          required
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Mensagem"
          className="w-full border p-2 rounded"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </section>
  )
}
