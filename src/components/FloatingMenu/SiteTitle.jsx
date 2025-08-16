import React from "react";

const SiteTitle = () => (
  <h1 style={styles.title} onClick={() => window.location.href = "/"}>
    MORARTE
  </h1>
);

const styles = {
  title: {
    margin: 0,
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#000"
  },
};

export default SiteTitle;