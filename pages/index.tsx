import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { GetStaticProps, GetServerSideProps, NextPage } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { END } from "redux-saga";
import { useDispatch } from "react-redux";
import { useContentGet, useStatusGet } from "../hooks/useReduxGet";
import { setStatus, getAccount } from "../core/redux/actions/status";
import { wrapper } from "../core/redux/store";
import { Layout, HomeLayout } from "../components/layouts";
import { HomePage } from "../components/pages";
import Profile from "../components/popups/ProfilePopup";

// import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import { useUser, getAccessToken, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { setAccessToken } from "../api/auth";

interface OpenPopup {
  profile: boolean;
}

interface Props {
  account: any | null;
}

const Home = ({ account }: Props) => {
  console.log("DOM------Home");
  console.log(account);
  // const { t } = useTranslation("home");

  // const { user, error, isLoading } = useUser();

  const [openPopup, setOpenPopup] = useState<OpenPopup>({ profile: true });
  // const users = useContentGet("users");
  // const contentActions = useContentActions();

  // useEffect(() => {
  //   contentActions.onGetContent();
  // }, []);

  const groups = [
    { name: "xxxxx" },
    { name: "xxxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
    { name: "xxxx" },
  ];

  const onCloseProfile = () => {
    setOpenPopup((prev) => ({ ...prev, profile: false }));
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <HomeLayout>
          <HomePage groups={groups} />
        </HomeLayout>
      </Layout>
      <Profile open={openPopup.profile} onClose={onCloseProfile} account={account} />
    </>
  );
};

//export default Home;
export default Home;
// export default withPageAuthRequired(Home);

// export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
//   returnTo: "/foo",
//   async getServerSideProps(ctx) {},
// });

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: wrapper.getServerSideProps(async ({ store, res, req }) => {
    // if (!data) {
    //   return {
    //     notFound: true,
    //   }
    // }

    // const state = store.getState();

    const { accessToken } = await getAccessToken(req, res);
    setAccessToken(accessToken);

    // store.subscribe(() => {
    //   console.log("subscribe:", store.getState());
    // });

    store.dispatch(getAccount());
    store.dispatch(END);

    await store.sagaTask?.toPromise();

    const { status, content } = store.getState();
    const { account } = status;

    return {
      props: {
        account,
      }, // will be passed to the page component as props
    };
  }),
});

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ store, locale }) => {
//   console.log(store);
//   console.log(locale);
//   return {
//     // props: {
//     //   // ...(await serverSideTranslations(locale, ["home", "header", "userlist"])),
//     // },
//   };
// });

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ store, locale }: { store: Store; locale: string }) => {
//   if (!store.getState().sampledata.users) {
//     store.dispatch(loadData())
//     store.dispatch(END)
//   }
//   await store.sagaTask?.toPromise()
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['counter', 'header', 'userlist'])),
//     },
//   }
// })

// export const getStaticProps: GetStaticProps = async () => {
//   const rand = Math.floor(Math.random() * 10)
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//       rand,
//     },
//   }
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const rand = Math.floor(Math.random() * 10)
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//       rand,
//     },
//   }
// }
