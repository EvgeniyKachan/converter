import { ReactElement } from "react";
import { PageHeader } from "./PageHeader/PageHeader";
import { PageFooter } from "./PageFooter/PageFooter";
import classes from "./PageLayout.module.scss";

type PageLayoutProps = {
  children: ReactElement;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={classes.pageWrapper}>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  );
}
