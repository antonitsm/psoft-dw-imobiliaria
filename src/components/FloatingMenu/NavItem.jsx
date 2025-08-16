import React from "react";

const NavItem = ({ label, href }) => (
  <a href={href} style={styles.link}>
    {label}
  </a>
);

const styles = {
  link: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default NavItem;