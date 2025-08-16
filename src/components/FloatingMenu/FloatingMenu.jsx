import React from "react";
import ProfileButton from "./ProfileButton";
import SiteTitle from "./SiteTitle";
import NavItem from "./NavItem";
import SearchToggle from "./SearchToggle";

const FloatingMenu = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <ProfileButton />
        <SiteTitle />
      </div>

      <div style={styles.center}>
        <NavItem label="Imóveis" href="#imoveis" />
        <NavItem label="Interiores" href="#interiores" />
        <NavItem label="Exteriores" href="#exteriores" />
      </div>

      <div style={styles.right}>
        <SearchToggle />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  left: { display: "flex", alignItems: "center", gap: "10px" },
  center: { display: "flex", gap: "20px" },
  right: { display: "flex", alignItems: "center" },
};

export default FloatingMenu;