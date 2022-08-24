import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
import SentenceListItem from "../../SentenceListItem";

const cx = classNames.bind(styles);

const TextEditorPage = () => {
  const sentences: Array<any> = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <div className={cx("p-text-editor")}>
      {sentences.map((sentence: any) => {
        return <SentenceListItem />;
      })}
    </div>
  );
};

export default TextEditorPage;
