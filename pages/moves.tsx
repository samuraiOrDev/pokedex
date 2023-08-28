import { NextPage } from "next";
import React from "react";
import { Layout } from "../components";
const metadaData = {
  title: "Moves | Pokemon",
  description:
    "Descripción detallada de los movimientos existentes en el mundo de pokemon",
};
const Moves: NextPage = () => {
  return (
    <Layout title={metadaData.title} description={metadaData.description}>
      <h1 style={{ textAlign: "center" }}>Pokemon | Moves</h1>
    </Layout>
  );
};

export default Moves;
