import React, { useState } from "react";

const SearchToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={styles.button}>
        🔍
      </button>
      {open && (
        <input
          type="text"
          placeholder="Search..."
          style={styles.input}
        />
      )}
    </div>
  );
};

const styles = {
  button: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  input: {
    position: "absolute",
    top: "40px",
    right: 0,
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

export default SearchToggle;