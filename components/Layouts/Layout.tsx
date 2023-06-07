import Head from "next/head";
import React, { FC } from "react";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  description: string;
}
const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export { Layout };
