import Head from "next/head";
import Image from "next/image";
import React from "react";

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
        <h1>Добро пожаловать на главную страницу приложения</h1>
        <p>
            Это топ приложение на NextJS pages. Страница главная, здесь можно
            добавить контент.
        </p>
      </main>
    </>
  );
}
