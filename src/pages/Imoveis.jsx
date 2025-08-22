import React from 'react';
import { Button } from '@radix-ui/react-button'; 
import './App.css'; 


import house1 from './assets/fsysD159ZRSW.jpg';
import house2 from './assets/G39vNzmGOGwc.jpg';
import house3 from './assets/HDAva3Y4Geqd.jpg';
import house4 from './assets/h0aEc4ufm23w.jpg';
import house5 from './assets/7ZAs3QSqRuMA.jpeg';
import house6 from './assets/WLX0xHDJpdla.jpg';


import interior1 from './assets/mIsuEe1O2gqr.jpeg';
import interior2 from './assets/Wl3XnUKZxVBm.jpg';
import interior3 from './assets/5NDZmqHLsUDh.jpg';
import interior4 from './assets/IRGeGASZAx36.jpg';
import interior5 from './assets/EJwDuszlO2H3.jpg';
import interior6 from './assets/WVhBxIvIgMEv.jpg';
import interior7 from './assets/2CCQ9UuFYC1I.png';
import interior8 from './assets/YZu5GEDK8mMt.jpg';

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
      imagem: house1
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
      imagem: house2
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
      imagem: house3
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
      imagem: house4
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
      imagem: house5
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
      imagem: house6
    }
  ];


  const imagensInteriores = [
    interior1, interior2, interior3, interior4, interior5, 
    interior6, interior7, interior8
  ];

  
  const imagensExteriores = [house1, house2, house3];

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
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    DETALHES
                  </Button>
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
                    <Button className="bg-white text-gray-800 hover:bg-gray-100">
                      Ver Detalhes
                    </Button>
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
          <Button className="bg-blue-600 hover:bg-blue-700">
            Fale Conosco
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Imoveis;
