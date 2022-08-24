import React, { ReactNode, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

import { useContentGet, useStatusGet } from "../../../hooks/useReduxGet";
import PopupLayout from "../../layouts/PopupLayout";
import IconButton from "../../IconButton";
import { Close } from "../../icons";

const cx = classNames.bind(styles);

interface Account {
  email: string;
  username: string;
  phone?: string;
}
interface Props {
  account: Account;
  open: boolean;
  onClose: (event?: any) => void;
}

const Profile = ({ open, onClose, account }: Props) => {
  console.log("DOM-----Profile");
  console.log(account);

  const { email, username, phone } = account;

  return (
    <PopupLayout open={open}>
      <div className={cx("c-profile")}>
        <div className={cx("header")}>
          <span>프로필</span>
          <IconButton onClick={onClose}>
            <Close width="24" height="24" color="#222" />
          </IconButton>
        </div>
        <div className={cx("main")}>
          <span>useranme {username}</span>
          <span>email {email}</span>
        </div>
      </div>
    </PopupLayout>
  );
};

export default Profile;
