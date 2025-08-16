import React from "react";

const ProfileButton = () => {
  return (
    <button onClick={() => window.location.href = "/profile"} style={styles.button}>
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{ width: 32, height: 32, borderRadius: "50%" }}
      />
    </button>
  );
};

const styles = {
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
};

export default ProfileButton;