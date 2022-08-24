import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const SettingPage = () => {
  return <div className={cx("p-setting")}></div>;
};

export default SettingPage;
