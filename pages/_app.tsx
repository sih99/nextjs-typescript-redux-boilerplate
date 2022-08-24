// import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { NextPage } from "next";
import { wrapper } from "../core/redux/store";
import "../styles/global.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <UserProvider>
        <Head>
          <title>LETR Works</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

export default wrapper.withRedux(App);
