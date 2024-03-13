import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label } = props;

  return (
    <label className={styles.input}>
      {label}
      <input
        type="text"
        {...props}
        ref={ref}
      />
    </label>
  );
});
