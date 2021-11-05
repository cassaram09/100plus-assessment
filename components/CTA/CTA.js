import styles from "./cta.module.scss";
import { Reveal, Link } from "@/widgets";
import { _classes } from "@/utils/helpers";

const cl = _classes(styles);

CTA.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

CTA.defaultProps = {
  link: "",
  text: "",
  className: "",
};

export default function CTA({ link, text, onClick, className, type }) {
  if (!link && onClick) {
    return null;
  }

  return (
    <Reveal className={cl(["_", type, className])} preset="fade" delay={250}>
      <Link
        className={cl(["link", type])}
        path={link}
        ariaLabel={text}
        onClick={onClick}
        title={text}
      />
    </Reveal>
  );
}
