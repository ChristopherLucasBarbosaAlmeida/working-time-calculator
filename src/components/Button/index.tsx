import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  children: ReactNode;
  variant: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {   
  primary: styles.button__primary,
  secondary: styles.button__secondary,
  success: styles.button__success,
  danger: styles.button__danger,
};

export function Button(props: ButtonProps) {
  const { children, variant, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      {...rest}
    >
      <>{children}</>
    </button>
  );
}
