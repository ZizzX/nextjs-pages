import Head from "next/head";
import React from "react";
import { Button, Htag, P } from "@/components";

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

          <Button>Узнать подробнее</Button>
          <Button variant="ghost">Читать отзывы</Button>
          <Button variant="tag">Photoshop</Button>

          <P>
              Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
          </P>
      </main>
    </>
  );
}
