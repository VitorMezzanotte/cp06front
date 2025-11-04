import React from 'react'

export default function Home() {
  return (
    <section>
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 text-white rounded-lg p-8 mb-6">
        <h2 className="text-3xl font-bold">Bem-vindo à Loja de Carros</h2>
        <p className="mt-2">Encontre seu próximo carro com os melhores preços.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Destaques</h3>
          <p className="mt-2 text-sm text-gray-600">
            Carros selecionados com os melhores descontos.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Financiamento</h3>
          <p className="mt-2 text-sm text-gray-600">
            Simulações rápidas e atendimento personalizado.
          </p>
        </div>
      </div>
    </section>
  )
}
