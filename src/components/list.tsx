import React from "react";
import Image from "next/image";

import styles from "@/styles/components/List.module.scss";

type LabelPositionType = "left" | "right" | "top" | "bottom";
type ListProps<T> = {
  items: Array<T>;
  name: string;
  checkedValues: Array<T>;
  className?: string;
  labelPosition?: LabelPositionType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const List = (props: ListProps<string>) => {
  const {
    items,
    name,
    checkedValues,
    className,
    labelPosition = "right",
    onChange,
  } = props;

  return (
    <ul className={styles.list}>
      {items.map((value, index) => (
        <CheckList
          key={index}
          name={name}
          id={`${name}${index}`}
          value={value}
          checked={checkedValues.includes(value)}
          className={className}
          labelPosition={labelPosition}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};

type CheckListProps = {
  labelPosition: LabelPositionType;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const CheckList = (props: CheckListProps) => {
  const { labelPosition, id, value, className } = props;
  return (
    <li className={styles["check-list"]}>
      <label htmlFor={id} className={`${styles["check-box"]}`}>
        <input type="checkbox" {...props} />
        <span
          className={`${styles["check-img"]} ${
            styles[`check-img__${labelPosition}`]
          }`}
        >
          <span className={className}>{value}</span>
        </span>
      </label>
    </li>
  );
};

export default List;
