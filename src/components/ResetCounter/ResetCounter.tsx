import { Button } from "@mui/material";
import classes from "./ResetCounter.module.scss";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { useState } from "react";

export function ResetCounter() {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = () => {
    localStorage.setItem("counter", "1");
    setIsLoading(true);
  };

  return isLoading ? (
    <div className={classes.loading}>
      <RotateRightIcon className={classes.loadingIcon} />
      Loading ...
    </div>
  ) : (
    <div className={classes.errorWrapper}>
      <div className={classes.errorText}>
        <span>Something went wrong.</span>
      </div>
      <Button
        className={classes.errorButton}
        variant="contained"
        onClick={onClick}
      >
        Try again
      </Button>
    </div>
  );
}
