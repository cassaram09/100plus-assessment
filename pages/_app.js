import "@/assets/styles/main.scss";
import "focus-visible";
import { Layout, Head } from "@/components";
import { AppProvider } from "@/providers";

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  router: PropTypes.object,
};

export default function App({ router, Component, pageProps }) {
  const _props = {
    router,
    Component,
    ...pageProps,
  };

  const { error, page } = pageProps;

  if (error || !page) {
    return (
      <AppProvider {..._props}>
        <Component />
      </AppProvider>
    );
  }

  return (
    <AppProvider {..._props}>
      <Head {...pageProps} />
      <Layout {..._props} />
    </AppProvider>
  );
}
