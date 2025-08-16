import React from "react";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";

function Home() {
  return (
    <div>
        <FloatingMenu />
        <Header />
        <main>
          <Section title="Imóveis Disponíveis" id="imoveis">
            <CardGrid />
          </Section>

          <Section title="Interiores" id="interiores">
            <div style={styles.grid}>
              {Array.from({ length: 4 }).map((_, colIndex) => {
                const totalHeight = 600;
                const splits = generateRandomHeights(totalHeight, 3);

                return (
                  <div key={colIndex} style={styles.column}>
                    {splits.map((height, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={`/img/image${colIndex * 3 + imgIndex + 1}.png`}
                        alt=""
                        style={{
                          width: "100%",
                          height: `${height}px`,
                          objectFit: "cover",
                          marginBottom: "10px",
                          borderRadius: "10px",
                        }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </Section>

          <Section title="Exteriores" id="exteriores">
            <Carousel />
          </Section>
        </main>
    </div>
    );
}

function generateRandomHeights(total, count) {
  const min = 0.25 * total;
  const remaining = total - min * count;
  const randoms = Array.from({ length: count }, () => Math.random());
  const sum = randoms.reduce((a, b) => a + b, 0);
  return randoms.map(r => Math.floor(min + (r / sum) * remaining));
}

const styles = {
  grid: {
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
  },
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "600px",
  },
};

export default Home;