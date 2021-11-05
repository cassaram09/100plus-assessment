import { Footer, Header } from "@/components";

Layout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.object,
  router: PropTypes.object,
  Component: PropTypes.any,
};

Layout.defaultProps = {};

export default function Layout({ Component, router, ...props }) {
  return (
    <div>
      <Header />
      <main>
        <Component key={router.asPath} {...props} />
      </main>
      <Footer />
    </div>
  );
}
