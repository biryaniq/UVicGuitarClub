import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Guitar from "../components/Guitar/Guitar";
import NavSidebar from "../components/NavSidebar/NavSidebar";
import styled from "styled-components";
import { Router } from "react-router-dom";

const Sidebar = styled.div`
  width: 14em;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: white;
`;

const Main = styled.main`
  padding-left: 14em;
`;

const Container = styled.div`
  height: 100%;
`;

const GuitarView = styled(Guitar)`
  height: 100%;
`;

const GuitarPosition = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>UVic Guitar Club</title>
      </Head>

      <Sidebar>
        <NavSidebar />
      </Sidebar>
      <Main>
        <GuitarPosition>
          <GuitarView />
        </GuitarPosition>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <div>
          <h1 className={styles.title}>Welcome to the UVIC Guitar Club!</h1>
        </div>
      </Main>

      <footer className={styles.footer}>
        {/* <div className="flex mb-4">
          <div className="w-1/2 bg-gray-400 h-12"></div>
          <div className="w-1/2 bg-gray-500 h-12"></div>
        </div> */}

        <div className="flex mb-4">
          <div className="w-1/2 h-12">
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
          </div>

          <div className="w-1/2 h-12">
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
          </div>

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
    </Container>
  );
};

export default Home;
