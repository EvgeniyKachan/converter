import logo from "../../../logo.svg";
import classes from "./PageHeader.module.scss";

export function PageHeader() {
  return (
    <div className={classes.header}>
      <div className={classes.logoWrap}>
        <img src={logo} className={classes.logoImg} alt="logo" />
        <a
          target="_blank"
          href="https://www.linkedin.com/in/yevhenii-kachan-1641b967"
        >
          <span>Yevhenii Kachan</span>
        </a>
      </div>
    </div>
  );
}
