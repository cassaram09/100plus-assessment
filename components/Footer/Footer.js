import styles from "./footer.module.scss";
import { _classes } from "@/utils/helpers";
import { DateTime } from "luxon";

const cl = _classes(styles);

export default function Footer() {
  return (
    <footer className={cl("_")}>
      <p>©{DateTime.now().toFormat("yyyy")}100Plus. All rights reserved.</p>
    </footer>
  );
}
