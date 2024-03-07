import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { label, ...rest } = props;

  return (
    <label className={styles.input}>
      {label}
      <input
        type="text"
        {...rest}
      />
    </label>
  );
}
