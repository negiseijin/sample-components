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
  const { labelPosition, id, value, checked, className } = props;
  return (
    <li className={styles["check-list"]}>
      <input type="checkbox" {...props} />
      <label htmlFor={id} className={styles[`${labelPosition}`]}>
        {checked ? (
          <Image src="/check.svg" alt="check" width={48} height={48} />
        ) : (
          <Image width={48} height={48} src="" alt="" />
        )}
        <span className={className}>{value}</span>
      </label>
    </li>
  );
};

export default List;
