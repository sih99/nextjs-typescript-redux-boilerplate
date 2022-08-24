import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

interface Props {
  title?: string;
}

const SentenceListItem = ({ title }: Props) => {
  return <div className={cx("c-sentence-list-item")}></div>;
};

export default SentenceListItem;
