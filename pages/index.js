import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import foodie_1 from "../images/foodie_1.png";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Card
        title="Foodie"
        paragraph_one="A blog-like application for anyone to talk/share their experiences with food."
        paragraph_two="This was the second time using Chakra UI. It's brilliant documentation and usability makes creating reactive components simple and scalable.
        This was the first proper project using the Next.js framework. I found it's routing and server side rendering features extremely useful."
        image_one={foodie_1}
      />
      <Card
        title="YouBoat"
        paragraph_one="A blog-like application for anyone to talk/share their experiences with food."
        paragraph_two="This was the second time using Chakra UI. It's brilliant documentation and usability makes creating reactive components simple and scalable.
        This was the first proper project using the Next.js framework. I found it's routing and server side rendering features extremely useful."
        image_one={foodie_1}
      />
    </Fragment>
  );
}
