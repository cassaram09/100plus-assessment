import styles from "@/assets/styles/pages/home.module.scss";
import { _classes } from "@/utils/helpers";
import API from "@/utils/API";

const cl = _classes(styles);

Home.propTypes = {
  page: PropTypes.object,
};

export default function Home({ page }) {
  page;

  return <div className={cl("_")}>home.</div>;
}

export const getStaticProps = async (ctx) => {
  try {
    return {
      props: {
        page: {
          title: "100Plus Assessment",
          meta_title: "100Plus Assessment",
          meta_description: "100Plus Assessment - application",
        },
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);

    return {
      error: e,
      page: {},
      revalidate: 10,
    };
  }
};
