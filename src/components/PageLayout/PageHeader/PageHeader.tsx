import logo from "../../../logo.svg";
import classes from "./PageHeader.module.scss";

export function PageHeader() {
  return (
    <div className={classes.header}>
      <div className={classes.logoWrap}>
        <img src={logo} className={classes.logoImg} alt="logo" />
        <span>Logo</span>
      </div>
    </div>
  );
}
