Robots.propTypes = {};

export default function Robots() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  let robots = `User-agent: *\nAllow: /\nSitemap: https://100plus-assessment.vercel.app/sitemap.xml`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};
