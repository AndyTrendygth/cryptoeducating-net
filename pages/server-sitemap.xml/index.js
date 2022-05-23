import { getServerSideSitemap } from "next-sitemap";
import { getPostDetails, getPosts2 } from '../../services'

const siteUrl = "https://cryptoeducating.net/";

export const getServerSideProps = async (ctx) => {
    let posts = await getPosts2();
  const newsSitemaps = posts.map((item) => ({
    loc: `${siteUrl}post/${item.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}