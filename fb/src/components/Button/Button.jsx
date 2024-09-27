// src/components/Button/Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type = 'button', onClick, disabled = false }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
