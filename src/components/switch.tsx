import React from "react";
import Image from "next/image";

import styles from "@/styles/components/Switch.module.scss";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Switch = (props: SwitchProps) => {
  const { id, value, checked, className } = props;
  return (
    <div className={styles.switch}>
      <input type="checkbox" {...props} />
      <label htmlFor={id}>
        {checked ? (
          <Image src="/switch-on.svg" alt="switch-on" width={48} height={48} />
        ) : (
          <Image
            src="/switch-off.svg"
            alt="switch-off"
            width={48}
            height={48}
          />
        )}
        <span className={className}>{value}</span>
      </label>
    </div>
  );
};

export default Switch;
