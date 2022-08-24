import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  title?: string;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className={cx("c-home-layout")}>
      <div className={cx("wrapper")}>
        <div className={cx("header")} />
      </div>
      <div className={cx("main")}>{children}</div>
    </div>
  );
};

export default HomeLayout;
