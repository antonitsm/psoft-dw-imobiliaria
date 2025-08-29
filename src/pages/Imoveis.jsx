import React from 'react';

const Imoveis = () => {
  const imoveisDisponiveis = [
    {
      id: 1,
      titulo: "LOUNGE",
      preco: "R$ 1.200.000",
      endereco: "Florianópolis - Centro",
      imagem: '/img/casa1.jpg'
    },
    {
      id: 2,
      titulo: "LOGDE09",
      preco: "R$ 2.500.000",
      endereco: "Florianópolis - Jurerê",
      imagem: '/img/casa2.jpg'
    },
    {
      id: 3,
      titulo: "LOGDE08",
      preco: "R$ 950.000",
      endereco: "Florianópolis - Itacorubi",
      imagem: '/img/casa3.jpg'
    },
    {
      id: 4,
      titulo: "LOUNGE",
      preco: "R$ 800.000",
      endereco: "São José - Kobrasol",
      imagem: '/img/casa4.jpg'
    },
    {
      id: 5,
      titulo: "LOGDE02",
      preco: "R$ 1.800.000",
      endereco: "Florianópolis - Jurerê",
      imagem: '/img/casa5.jpg'
    },
    {
      id: 6,
      titulo: "LOGDE03",
      preco: "R$ 1.500.000",
      endereco: "Palhoça - Pedra Branca",
      imagem: '/img/casa6.jpg'
    },
    {
      id: 7,
      titulo: "LOUNGE",
      preco: "R$ 2.100.000",
      endereco: "Chapecó - Água Santa",
      imagem: '/img/casa1.jpg'
    },
    {
      id: 8,
      titulo: "LOGDE09",
      preco: "R$ 3.100.000",
      endereco: "Chapecó - Água Verde",
      imagem: '/img/casa2.jpg'
    },
    {
      id: 9,
      titulo: "LOGDE08",
      preco: "R$ 1.900.000",
      endereco: "Chapecó - Eldorado",
      imagem: '/img/casa3.jpg'
    }
  ];

  const imagensInteriores = [
    '/img/interior1.jpeg', '/img/interior2.jpeg', '/img/interior3.jpeg', '/img/interior4.jpeg',
    '/img/interior5.jpeg', '/img/interior6.jpeg', '/img/interior7.jpeg', '/img/interior8.jpeg',
    '/img/interior9.jpeg', '/img/interior10.jpeg', '/img/interior11.jpeg', '/img/interior12.jpeg'
  ];

  const imagensExteriores = [
    '/img/casa7.jpg',
    '/img/casa8.jpg',
    '/img/casa9.jpg'
  ];

  return (
    <div className="min-h-screen">

      {/* Seção de Imóveis Disponíveis */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-semibold text-center mb-8 text-gray-500 tracking-widest">
            IMÓVEIS DISPONÍVEIS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imoveisDisponiveis.map((imovel) => (
              <div key={imovel.id} className="bg-white rounded-md shadow-sm overflow-hidden text-left flex flex-col">
                <img
                  id={`imovel-img-${imovel.id}`}
                  src={imovel.imagem}
                  alt={imovel.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-md font-semibold text-gray-800">{imovel.titulo}</h3>
                    <p className="text-gray-500 text-sm">{imovel.endereco}</p>
                    <p className="text-gray-800 font-bold mt-1">{imovel.preco}</p>
                  </div>
                  <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-2 px-4 rounded-sm font-bold">
                    DETALHES
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Seção de Interiores */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">INTERIORES</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {imagensInteriores.slice(0, 8).map((imagem, idx) => (
        <div key={idx} className="bg-white rounded-md shadow-sm overflow-hidden">
          <img
            id={`interior-img-${idx + 1}`}
            src={imagem}
            alt={`Interior ${idx + 1}`}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* Seção de Exteriores */}
<section className="py-12 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">EXTERIORES</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {imagensExteriores.map((imagem, idx) => (
        <div key={idx} className="bg-white rounded-md shadow-sm overflow-hidden">
          <img
            id={`exterior-img-${idx + 1}`}
            src={imagem}
            alt={`Exterior ${idx + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Imoveis;
