import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: "0 auto",
      padding: "0 1.6rem",
      maxWidth: "60rem",
    },
  })
);
