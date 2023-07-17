import { NextPage } from "next";
import React from "react";
import { Layout } from "../components";
const metadaData = {
  title: "Items | Pokemon",
  description:
    "Descripción detallada de los objetos existentes en el mundo de pokemon",
};
const Items: NextPage = () => {
  return (
    <Layout title={metadaData.title} description={metadaData.description}>
      <h1 style={{"textAlign": "center"}}>Pokemon | Moves</h1>
    </Layout>
  );
};

export default Items;
