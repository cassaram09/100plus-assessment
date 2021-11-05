import NextHead from "next/head";

Head.propTypes = {
  page: PropTypes.object,
};

Head.defaultProps = {};

export default function Head({ page }) {
  return (
    <NextHead>
      <title>{page.meta_title}</title>

      <meta name="description" content={page.meta_description} />

      <meta property="og:image" content={page.meta_image} />
      <meta charSet="utf-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      <link rel="canonical" href={"https://100plus-assessment.vercel.app/"} />

      <link rel="icon" type="image/png" href={"/favicon.ico"} />
    </NextHead>
  );
}
