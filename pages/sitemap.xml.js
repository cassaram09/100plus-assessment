import { DateTime } from "luxon";

Sitemap.propTypes = {};

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  const sitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://100plus-assessment.vercel.app/</loc><lastmod>${DateTime.now().toFormat(
    "yyyy-MM-dd"
  )}</lastmod></url>
  </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
