import React from 'react'

export default function Portfolio() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Portfólio</h2>
      <p className="text-gray-700 mb-4">Alguns carros que já passaram por nossa loja (galeria demonstrativa).</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded shadow overflow-hidden">
            <img src={`https://via.placeholder.com/600x300?text=Carro+${i+1}`} alt={`Carro ${i+1}`} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Carro {i + 1}</h3>
              <p className="text-sm text-gray-600">Descrição resumida do carro.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
