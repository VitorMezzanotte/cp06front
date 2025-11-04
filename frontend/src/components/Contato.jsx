import React, { useState } from "react";
import axios from "axios";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await axios.post("http://localhost:3333/api/contato", form);
      setStatus(res.data.mensagem);
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="container-max py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Contato</h2>

      <div className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            required
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            required
            name="mensagem"
            placeholder="Mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={4}
            className="w-full border p-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
          >
            Enviar
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
        )}
      </div>
    </section>
  );
}
