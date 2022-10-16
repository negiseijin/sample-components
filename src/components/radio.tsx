import React from "react";
import Image from "next/image";

import styles from "@/styles/components/Radio.module.scss";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;
export const Radio = (props: RadioProps) => {
  const { id, value, checked, className } = props;
  return (
    <div className={styles.radio}>
      <input type="radio" {...props} />
      <label htmlFor={id}>
        {checked ? (
          <Image
            src="/radio-button-on.svg"
            alt="radio-button-on"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/radio-button-off.svg"
            alt="radio-button-off"
            width={24}
            height={24}
          />
        )}
        <span className={className}>{value}</span>
      </label>
    </div>
  );
};

type RadioGroupProps = {
  items: string[];
  name: string;
  checkedValue: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const RadioGroup = (props: RadioGroupProps) => {
  const { items, name, checkedValue, className, onChange } = props;

  return (
    <>
      {items.map((value, index) => (
        <Radio
          key={index}
          name={name}
          id={`${name}${index}`}
          value={value}
          checked={value === checkedValue}
          className={className}
          onChange={onChange}
        />
      ))}
    </>
  );
};
