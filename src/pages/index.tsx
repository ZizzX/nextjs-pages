import Head from "next/head";
import React from "react";
import { Htag } from "@/components";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Head>
        <title>MyApp - топ приложение</title>
        <meta name="description" content="Приложение на NextJS pages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Htag tag={"h1"}>Тест H1</Htag>
        <Htag tag={"h2"} fontWeight={700}>Тест H2</Htag>
        <Htag tag={"h3"}>Тест H3</Htag>
      </main>
    </>
  );
}
