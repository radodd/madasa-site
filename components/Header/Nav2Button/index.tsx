import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

interface Navbar2ButtonProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar2Button: React.FC<Navbar2ButtonProps> = ({
  isActive,
  setIsActive,
}) => {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
      >
        <button
          className={`${styles.el} hamburger hamburger--collapse ${
            isActive ? "is-active" : ""
          } `}
          type="button"
        >
          <span className="hamburger-box  -translate-y-4">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar2Button;
