import React from 'react';

const Imoveis = () => {
  // Aqui você receberia os dados do banco
  // Por exemplo, via props ou useEffect/fetch
  // const [dados, setDados] = useState({})

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem principal do imóvel */}
        <div>
          <div className="bg-gray-200 h-64 w-full rounded-lg shadow-md flex items-center justify-center">
            {/* Aqui vai a imagem do imóvel */}
            <span className="text-gray-500">Imagem do Imóvel</span>
          </div>
          {/* Galeria opcional */}
          {/* <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-gray-200 h-20 rounded"></div>
            <div className="bg-gray-200 h-20 rounded"></div>
            <div className="bg-gray-200 h-20 rounded"></div>
          </div> */}
        </div>

        {/* Informações principais */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Título do Imóvel</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">R$ Preço</p>

          <p className="text-gray-700 mb-4">
            Breve descrição do imóvel, localização e outras informações introdutórias.
          </p>

          <ul className="text-gray-800 mb-4 space-y-1">
            <li><strong>Quartos:</strong> X</li>
            <li><strong>Banheiros:</strong> X</li>
            <li><strong>Vagas de garagem:</strong> X</li>
            <li><strong>Área:</strong> X m²</li>
            <li><strong>Endereço:</strong> Rua Exemplo, nº 123</li>
          </ul>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imoveis;
