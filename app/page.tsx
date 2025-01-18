import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/libs/microcms";
import { TOP_NEWS_LIMIT } from "./constants";
import NewsList from "@/app/components/NewsList";
import ButtonLink from "@/app/components/Buttonlinks";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジの力で世界を変える</h1>
          <p className="description">
            私たちは市場をリードしているゴローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="(max-width: 640px) 100vw,50vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
