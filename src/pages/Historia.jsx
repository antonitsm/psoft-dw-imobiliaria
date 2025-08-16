import React from 'react';

const Historia = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Nossa História</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">De onde viemos</h2>
        <p className="text-gray-700">
          Fundada em [ano de fundação], a [Nome da Imobiliária] nasceu com o propósito de transformar a experiência de compra e aluguel de imóveis.
          Começamos como uma pequena imobiliária local e, ao longo dos anos, expandimos nossos serviços para atender a toda a região, oferecendo soluções completas e personalizadas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Evoluímos com você</h2>
        <p className="text-gray-700">
          Percebendo a necessidade de ir além da intermediação imobiliária, incorporamos ao nosso portfólio serviços de **design de interiores e projetos para áreas externas**, trazendo mais praticidade e conforto para nossos clientes.
          Assim, cuidamos de cada detalhe: do imóvel ideal ao ambiente dos sonhos.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Nossa missão</h2>
        <p className="text-gray-700">
          Proporcionar uma experiência completa e humanizada, unindo tradição, inovação e bom gosto na realização de sonhos — seja na compra, no aluguel ou na personalização de espaços.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Valores</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Transparência e ética em cada negociação</li>
          <li>Atendimento próximo e personalizado</li>
          <li>Compromisso com a qualidade e inovação</li>
          <li>Valorização da arquitetura e do bem-estar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">O futuro</h2>
        <p className="text-gray-700">
          Seguimos em constante evolução, atentos às tendências do mercado e às necessidades dos nossos clientes. Nosso objetivo é ser referência em soluções imobiliárias e design de ambientes, sempre com excelência.
        </p>
      </section>
    </div>
  );
};

export default Historia;
