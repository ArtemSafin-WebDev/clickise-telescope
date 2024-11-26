"use client";

import styles from "./styles.module.scss";
import { useRef, useState, useCallback } from "react";
import { useOnClickOutside } from "usehooks-ts";

import OptionCheckedIcon from "@/app/icons/optionchecked";
import DownarrowIcon from "@/app/icons/downarrow";

interface SelectOption {
  title: string;
  value: string | number;
  selected?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  onOptionSelect: (value: SelectOption) => void;
}

function Select({ options, placeholder, onOptionSelect }: SelectProps) {
  const selectedOption = options.find((option) => option.selected);
  const [toggle, setToggle] = useState(false);
  const [activeOption, setActiveOption] = useState<SelectOption | undefined>(
    selectedOption
  );
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(ref, outsideClickHandler);

  return (
    <div className={styles.select} ref={ref}>
      <button
        className={`${styles.selectBtn} ${toggle ? styles.open : ""}`}
        onClick={() => setToggle((toggle) => !toggle)}
        type="button"
      >
        <span className={styles.selectBtnText}>
          {activeOption ? activeOption.title : placeholder}
        </span>
        <span className={styles.selectBtnIcon}>
          <DownarrowIcon />
        </span>
      </button>

      <div className={`${styles.dropdown} ${toggle ? styles.active : ""}`}>
        <div className={styles.dropdownInner}>
          <div className={styles.scrollContainer}>
            <div className={styles.optionsList}>
              {options.map((option) => (
                <button
                  key={option.value}
                  className={`${styles.option} ${
                    option === activeOption ? styles.selected : ""
                  }`}
                  onClick={() => {
                    setActiveOption(option);
                    onOptionSelect(option);
                    setToggle(false);
                  }}
                >
                  <span className={styles.optionText}>{option.title}</span>
                  <OptionCheckedIcon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
