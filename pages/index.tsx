import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//Image component
const Guitar = () => (
  <Image
    src="public\guitarbody.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="GuitarStroller"
  />
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the UVIC Guitar Club!</h1>
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
