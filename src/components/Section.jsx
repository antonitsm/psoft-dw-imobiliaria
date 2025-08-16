import React from "react";

const Section = ({ title, children, id }) => (
  <section id={id} style={styles.section}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

const styles = {
  section: {
    padding: "40px 20px",
    borderBottom: "1px solid #eee",
    margin: "0 15%",
    color: "black",
  },
};

export default Section;