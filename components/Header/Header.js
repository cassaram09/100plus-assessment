import { _classes } from "@/utils/helpers";
import styles from "./header.module.scss";

const cl = _classes(styles);

Header.propTypes = {};

export default function Header() {
  return <header className={cl("_")}>header.</header>;
}
