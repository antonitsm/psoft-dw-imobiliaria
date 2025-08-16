import React from "react";
import GridCard from "./GridCard";

const CardGrid = () => {
  const cards = Array.from({ length: 9 }, (_, i) => ({
    imageSrc: `/images/img${i + 1}.jpg`,
    title: `Card ${i + 1}`,
    description: "This is a description.",
  }));

  return (
    <div style={styles.grid}>
      {cards.map((card, index) => (
        <GridCard key={index} {...card} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
};

export default CardGrid;