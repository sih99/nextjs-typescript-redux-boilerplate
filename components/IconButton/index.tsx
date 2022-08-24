import React, { ReactNode, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  onClick?: (event: any) => void;
}

const IconButton = ({ children, onClick }: Props) => {
  return (
    <div className={cx("c-icon-button")} onClick={onClick}>
      {children}
    </div>
  );
};

export default IconButton;
