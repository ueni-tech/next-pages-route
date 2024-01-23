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
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} alt="" className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <span className={utilsStyles.boldText}>{title}</span>
                </Link>
                <br />
                <small className={utilsStyles.lightText}>
                  {date}
                </small>
              </article>

            ))}
          </div>
        </section>

      </Layout>
    </>
  );
}
