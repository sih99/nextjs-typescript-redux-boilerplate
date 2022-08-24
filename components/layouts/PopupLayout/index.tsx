import React, { ReactNode, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  open: boolean;
}

const PopupLayout = ({ children, open }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className={cx("c-popup-layout", { "is-open": open })}>
      {children}
      <div className={cx("dimd")} />
    </div>
  );
};

export default PopupLayout;
