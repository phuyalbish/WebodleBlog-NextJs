import React, { useEffect } from "react";
import styles from "./DarkMode.module.css";

const DarkMode: React.FC = () => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  return (
    <div className={styles.dark_mode}>
      <input
        className={styles.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label
        className={styles.dark_mode_label}
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
};

export default DarkMode;
