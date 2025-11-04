import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3333/api/login", {
        usuario,
        senha,
      });
      setMensagem(res.data.mensagem);
    } catch (err) {
      setMensagem("Usuário ou senha inválidos!");
    }
  };

  return (
    <section className="container-max py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            required
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
          >
            Entrar
          </button>
        </form>

        {mensagem && (
          <p className="mt-4 text-center font-semibold text-gray-700">
            {mensagem}
          </p>
        )}
      </div>
    </section>
  );
}
