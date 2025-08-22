import React from 'react';
import './App.css'; 

const Imoveis = () => {
  
  const imoveisDisponiveis = [
    {
      id: 1,
      titulo: "Casa Moderna Luxuosa",
      preco: "R$ 1.200.000",
      quartos: 4,
      banheiros: 3,
      vagas: 2,
      area: "350 m²",
      endereco: "Rua das Palmeiras, 123",
      imagem: '/img/casa1.png.jpg'
    },
    {
      id: 2,
      titulo: "Residência Contemporânea",
      preco: "R$ 2.500.000",
      quartos: 5,
      banheiros: 4,
      vagas: 3,
      area: "450 m²",
      endereco: "Av. Central, 456",
      imagem: '/img/casa2.jpg'
    },
    {
      id: 3,
      titulo: "Casa Minimalista",
      preco: "R$ 950.000",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: "280 m²",
      endereco: "Rua do Sol, 789",
      imagem: '/img/casa3.jpg'
    },
    {
      id: 4,
      titulo: "Condomínio Fechado",
      preco: "R$ 800.000",
      quartos: 3,
      banheiros: 2,
      vagas: 2,
      area: "220 m²",
      endereco: "Rua Verde, 321",
      imagem: '/img/casa4.jpg'
    },
    {
      id: 5,
      titulo: "Casa de Campo",
      preco: "R$ 1.800.000",
      quartos: 4,
      banheiros: 3,
      vagas: 4,
      area: "500 m²",
      endereco: "Estrada Rural, 654",
      imagem: '/img/casa5.jpg'
    },
    {
      id: 6,
      titulo: "Apartamento Luxo",
      preco: "R$ 1.500.000",
      quartos: 3,
      banheiros: 3,
      vagas: 2,
      area: "180 m²",
      endereco: "Av. Beira Mar, 987",
      imagem: '/img/casa6.jpg'
    }
  ];

  // Imagens de interiores
  const imagensInteriores = [
    '/imagem/interior1.png', '/imagem/interior2.png', '/imagem/interior3.png', '/imagem/interior4.png', '/imagem/interior5.png',
    '/imagem/interior6.png', '/imagem/interior7.png', '/imagem/interior8.png'
  ];

  
  const imagensExteriores = ['/img/casa7.jpg', '/img/casa8.jpg', '/img/casa9.jpg'];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Imóveis Premium
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Encontre a casa dos seus sonhos
          </p>
        </div>
      </header>

      {/* Seção Imóveis Disponíveis */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            IMÓVEIS DISPONÍVEIS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imoveisDisponiveis.map((imovel) => (
              <div key={imovel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={imovel.imagem} 
                    alt={imovel.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {imovel.preco}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {imovel.titulo}
                  </h3>
                  
                  <div className="space-y-1 text-gray-600 mb-4">
                    <p><strong>Quartos:</strong> {imovel.quartos}</p>
                    <p><strong>Banheiros:</strong> {imovel.banheiros}</p>
                    <p><strong>Vagas:</strong> {imovel.vagas}</p>
                    <p><strong>Área:</strong> {imovel.area}</p>
                    <p><strong>Endereço:</strong> {imovel.endereco}</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    DETALHES
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Interiores */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            INTERIORES
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagensInteriores.slice(0, 8).map((imagem, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={imagem} 
                  alt={`Interior ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Exteriores */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            EXTERIORES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {imagensExteriores.map((imagem, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={imagem} 
                  alt={`Exterior ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 hover:bg-gray-100 py-2 px-4 rounded">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
          <p className="mb-4">Encontre o imóvel perfeito para você</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Fale Conosco
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Imoveis;
