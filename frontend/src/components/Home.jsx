import React from 'react'

export default function Home() {
  return (
    <section className="bg-gray-50 py-10">
  <div className="container-max grid md:grid-cols-2 gap-8">
    
    {/* Card de Destaques */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src="https://i.ytimg.com/vi/g1TPMwraIQU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqO5uIGrybRxtcFjQtBqCGeIqMRA"
        alt="Carro destaque"
        className="w-full h-67 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">Carros em Destaque</h3>
        <p className="text-gray-600">
          Confira os modelos mais procurados da semana, com descontos exclusivos e garantia de procedência.
        </p>
      </div>
    </div>

    {/* Card de Financiamento */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=800"
        alt="Financiamento"
        className="w-full h-67 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">Financiamento Fácil</h3>
        <p className="text-gray-600">
          Simule o financiamento do seu carro diretamente conosco e saia de veículo novo ainda hoje!
        </p>
      </div>
    </div>
  </div>
</section>
  )
}
