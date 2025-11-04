import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [form, setForm] = useState({ nome: '', marca: '', ano: '', preco: '', imagem: '' })
  const [editingId, setEditingId] = useState(null)

  const fetchProdutos = async () => {
    const res = await axios.get('http://localhost:3333/api/produtos')
    setProdutos(res.data)
  }

  useEffect(() => { fetchProdutos() }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (editingId) {
      await axios.put(`http://localhost:3333/api/produtos/${editingId}`, form)
      setEditingId(null)
    } else {
      await axios.post('http://localhost:3333/api/produtos', form)
    }
    setForm({ nome: '', marca: '', ano: '', preco: '', imagem: '' })
    fetchProdutos()
  }

  const handleEdit = p => {
    setEditingId(p.id)
    setForm({ nome: p.nome, marca: p.marca, ano: p.ano, preco: p.preco, imagem: p.imagem })
  }

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3333/api/produtos/${id}`)
    fetchProdutos()
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Cadastrar / Editar</h3>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input required name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" className="w-full border p-2 rounded" />
            <input required name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" className="w-full border p-2 rounded" />
            <input required name="ano" value={form.ano} onChange={handleChange} placeholder="Ano" className="w-full border p-2 rounded" />
            <input required name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" className="w-full border p-2 rounded" />
            <input name="imagem" value={form.imagem} onChange={handleChange} placeholder="URL da imagem" className="w-full border p-2 rounded" />
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                {editingId ? 'Salvar' : 'Cadastrar'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null)
                    setForm({ nome: '', marca: '', ano: '', preco: '', imagem: '' })
                  }}
                  className="px-3 py-1 border rounded"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Lista de Produtos</h3>
          <div className="grid gap-3">
            {produtos.map(p => (
              <div key={p.id} className="bg-white p-3 rounded shadow flex gap-3 items-center">
                <img
                  src={p.imagem || 'https://via.placeholder.com/160x90?text=Sem+Imagem'}
                  alt={p.nome}
                  className="w-40 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{p.nome}</h4>
                  <p className="text-sm text-gray-600">
                    {p.marca} — {p.ano} — R$ {p.preco}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleEdit(p)} className="px-2 py-1 border rounded">
                    Editar
                  </button>
                  <button onClick={() => handleDelete(p.id)} className="px-2 py-1 border rounded">
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
