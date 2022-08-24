import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
// import { GetStaticProps, NextPage } from "next";

import { Layout, TextEditorLayout } from "../../components/layouts";
import { TextEditorPage } from "../../components/pages";

interface Props {
  id: string;
}

const TextEditor = ({ id }: Props) => {
  return (
    <Layout>
      <TextEditorLayout>
        <TextEditorPage />
      </TextEditorLayout>
    </Layout>
  );
};

TextEditor.getInitialProps = async ({ req, res, query, store }) => {
  const { id } = query;

  return { id };
};

export default withPageAuthRequired(TextEditor);
