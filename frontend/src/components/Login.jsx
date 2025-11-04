import React, { useState } from 'react'

export default function Login() {
  const [user, setUser] = useState({ usuario: '', senha: '' })
  const [msg, setMsg] = useState(null)

  const submit = e => {
    e.preventDefault()
    setMsg('Login de demonstração (sem autenticação real).')
  }

  return (
    <section className="max-w-sm bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {msg && <div className="mb-3 text-sm text-gray-600">{msg}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input
          required
          value={user.usuario}
          onChange={e => setUser({ ...user, usuario: e.target.value })}
          placeholder="Usuário"
          className="w-full border p-2 rounded"
        />
        <input
          required
          type="password"
          value={user.senha}
          onChange={e => setUser({ ...user, senha: e.target.value })}
          placeholder="Senha"
          className="w-full border p-2 rounded"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </section>
  )
}
