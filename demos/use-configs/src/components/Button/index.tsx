import * as React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FunctionComponent<React.PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <button className={styles.button} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;
