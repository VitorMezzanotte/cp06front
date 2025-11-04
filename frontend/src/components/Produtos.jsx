import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    marca: "",
    ano: "",
    preco: "",
    imagem: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [mensagem, setMensagem] = useState("");

  // Buscar produtos do backend
  const fetchProdutos = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3333/api/produtos");
      setProdutos(res.data);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  // Atualizar valores do formulário
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Criar ou atualizar produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://127.0.0.1:3333/api/produtos/${editingId}`, form);
        setMensagem("Produto atualizado com sucesso!");
      } else {
        await axios.post("http://127.0.0.1:3333/api/produtos", form);
        setMensagem("Produto cadastrado com sucesso!");
      }
      setForm({ nome: "", marca: "", ano: "", preco: "", imagem: "" });
      setEditingId(null);
      fetchProdutos();
      setTimeout(() => setMensagem(""), 2500);
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
      setMensagem("Erro ao salvar o produto.");
    }
  };

  // Editar produto
  const handleEdit = (p) => {
    setEditingId(p.id);
    setForm({
      nome: p.nome,
      marca: p.marca,
      ano: p.ano,
      preco: p.preco,
      imagem: p.imagem,
    });
  };

  // Excluir produto
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        await axios.delete(`http://127.0.0.1:3333/api/produtos/${id}`);
        fetchProdutos();
      } catch (err) {
        console.error("Erro ao excluir produto:", err);
      }
    }
  };

  return (
    <section className="container-max py-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Gerenciamento de Carros 🚗
      </h2>

      {/* Feedback */}
      {mensagem && (
        <div className="bg-green-100 text-green-700 p-2 rounded text-center mb-4">
          {mensagem}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            {editingId ? "Editar Carro" : "Cadastrar Novo Carro"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Nome do carro"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400"
            />
            <input
              required
              name="marca"
              value={form.marca}
              onChange={handleChange}
              placeholder="Marca"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400"
            />
            <input
              required
              name="ano"
              type="number"
              value={form.ano}
              onChange={handleChange}
              placeholder="Ano"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400"
            />
            <input
              required
              name="preco"
              type="number"
              value={form.preco}
              onChange={handleChange}
              placeholder="Preço (R$)"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400"
            />
            <input
              name="imagem"
              value={form.imagem}
              onChange={handleChange}
              placeholder="URL da imagem (opcional)"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full"
              >
                {editingId ? "Salvar Alterações" : "Cadastrar"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setForm({ nome: "", marca: "", ano: "", preco: "", imagem: "" });
                  }}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition w-full"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Lista de produtos */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">
            Lista de Carros À Venda
          </h3>

          <div className="grid gap-4">
            {produtos.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex flex-col md:flex-row items-center gap-4"
              >
                <img
                  src={
                    p.imagem ||
                    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400"
                  }
                  alt={p.nome}
                  className="w-40 h-24 md:w-48 md:h-28 object-cover rounded-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-semibold text-indigo-700">
                    {p.nome}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {p.marca} — {p.ano}
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    R$ {p.preco}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 border border-red-500 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}

            {produtos.length === 0 && (
              <p className="text-gray-500 text-center italic">
                Nenhum carro cadastrado ainda.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
