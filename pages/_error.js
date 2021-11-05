import styles from "../assets/styles/pages/404.module.scss";
import { _classes } from "../utils/helpers";

const cl = _classes(styles);

function Error({ statusCode }) {
  return (
    <main className={cl("_")}>
      <div className={cl("container")}>
        <div className={cl("title")}>
          <h1>500</h1>
          <p>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </p>
        </div>
      </div>
    </main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
