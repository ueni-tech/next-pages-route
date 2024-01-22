import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilsStyles from "@/styles/utils.module.css";
import { getPostsData } from "@/lib/post";

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={utilsStyles.headingMd}>
          <p>私はフルスタックエンジニアです。</p>
        </section>

        <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <span className={utilsStyles.boldText}>SSGとSSRの使い分けについて</span>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>
                February 23, 2020
              </small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <span className={utilsStyles.boldText}>SSGとSSRの使い分けについて</span>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>
                February 23, 2020
              </small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <span className={utilsStyles.boldText}>SSGとSSRの使い分けについて</span>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>
                February 23, 2020
              </small>
            </article>

            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg" alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <span className={utilsStyles.boldText}>SSGとSSRの使い分けについて</span>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>
                February 23, 2020
              </small>
            </article>
          </div>
        </section>

      </Layout>
    </>
  );
}
