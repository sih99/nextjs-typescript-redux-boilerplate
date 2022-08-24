import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface Props {
  title?: string;
  pathname?: string;
}

const Tab = ({ title, pathname }: Props) => {
  const { pathname: currentPathname } = useRouter();

  return (
    <div className={cx("c-tab", { unselected: pathname !== currentPathname })}>
      <span className={cx("title", { unselected: pathname !== currentPathname })}>{title}</span>
    </div>
  );
};

export default Tab;
