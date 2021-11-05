import styles from "@/assets/styles/pages/404.module.scss";
import { _classes } from "@/utils/helpers";
import { CTA } from "@/components";
import { Reveal } from "@/widgets";

const cl = _classes(styles);

_404.propTypes = {};

_404.defaultProps = {};

export default function _404() {
  return (
    <main className={cl("_")}>
      <div className={cl("container")}>
        <Reveal className={cl("title")}>
          <h1>404</h1>
          <h2>Page not found</h2>
          <CTA link="/" text="Back to Home" />
        </Reveal>
      </div>
    </main>
  );
}
