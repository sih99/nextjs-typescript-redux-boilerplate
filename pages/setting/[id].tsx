import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
// import { GetStaticProps, NextPage } from "next";

import { Layout, SettingLayout } from "../../components/layouts";
import { SettingPage } from "../../components/pages";

interface Props {
  id: string;
}

const Setting = ({ id }: Props) => {
  return (
    <Layout>
      <SettingLayout>
        <SettingPage />
      </SettingLayout>
    </Layout>
  );
};

Setting.getInitialProps = async ({ req, res, query, store }) => {
  const { id } = query;

  return { id };
};

export default withPageAuthRequired(Setting);
