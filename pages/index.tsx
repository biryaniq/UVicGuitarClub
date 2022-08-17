import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Guitar from "../components/Guitar/Guitar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UVic Guitar Club</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the UVIC Guitar Club!</h1>
        <Guitar />
      </main>

      <footer className={styles.footer}>
        <div className="h-56 grid grid-cols-3 gap-4 content-evenly ...">
          <a
            href="https://www.long-mcquade.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsored by{" "}
            <span className={styles.logo}>
              <Image
                src="/l&mlogo.jpg"
                alt="Long & McQuade Logo"
                width={150}
                height={30}
              />
            </span>
          </a>

          <a href="https://uvss.ca/" target="_blank" rel="noopener noreferrer">
            <span className={styles.logo}>
              <Image
                src="/UVSS-logo.jpg"
                alt="UVSS Logo"
                width={85}
                height={50}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
