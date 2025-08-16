import React from "react";

const GridCard = ({ imageSrc, title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={imageSrc} alt={title} style={styles.image} />
      </div>
      <div style={styles.textbox}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  imageWrapper: {
    aspectRatio: "3 / 2",
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  textbox: {
    padding: "10px",
    backgroundColor: "#fff",
    flexGrow: 1,
    color: "#000",
  },
};

export default GridCard;