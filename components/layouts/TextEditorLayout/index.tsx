import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  title?: string;
}

const TextEditorLayout = ({ children }: Props) => {
  return (
    <div className={cx("c-text-editor-layout")}>
      <div className={cx("wrapper")}>
        <div className={cx("side-pannel")} />
      </div>
      <div className={cx("main")}>{children}</div>
    </div>
  );
};

export default TextEditorLayout;
