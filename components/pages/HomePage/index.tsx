import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import GroupListItem from "../../GroupListItem";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

// columnInfo: Array<any>;

interface Props {
  groups?: Array<any>;
}

const HomePage = ({ groups }: Props) => {
  return (
    <div className={cx("p-home")}>
      {groups.map((group: any) => {
        return <GroupListItem />;
      })}
    </div>
  );
};

export default HomePage;
