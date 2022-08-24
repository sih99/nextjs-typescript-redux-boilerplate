import React, { ReactNode, useMemo } from "react";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import Tab from "../../Tab";
import { Logo } from "../../icons";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children }: Props) => {
  const { asPath, pathname: currentPathname } = useRouter();

  const openedTabs = useMemo(() => {
    let openedPathnames = []; //TODO Cookies

    if (currentPathname !== "/" && !openedPathnames.includes(currentPathname)) {
      //TODO Cookies
      openedPathnames.push(currentPathname);
    }

    return openedPathnames.map((pathname) => <Tab title={pathname} pathname={pathname} />);
  }, []);

  const tabs = [<Tab title={"워크스페이스"} pathname="/" />, ...openedTabs];
  const isHome = currentPathname === "/";

  return (
    <div className={cx("c-layout")}>
      <div className={cx("header")}>
        <div className={cx("container")}>
          <div className={cx("logo")}>
            <Logo width="60" height="24" color="#ffffff" />
          </div>
          <>{tabs}</>
        </div>
      </div>
      <div className={cx("side-pannel", { opened: isHome })}></div>
      <div className={cx("main", { opened: isHome })}>{children}</div>
    </div>
  );
};

export default Layout;
