import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 250,
    color: "#ffff",
    fontWeight: "500",
    display: "flex",
    padding: "6px 16px",
    fontSize: "0.875rem",
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: 1.43,
    borderRadius: 6,
    letterSpacing: "0.01071em",
    boxShadow: theme.shadows[6],
    marginTop: 10,
  },
  icon: {
    display: "flex",
    opacity: 0.9,
    padding: "7px 0",
    fontSize: 22,
    marginRight: 12,
  },
  action: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: -8,
    paddingLeft: 16,
  },
  text: { padding: "8px 0" },
  info: { background: "#2196f3" },
  success: { background: "#4caf50" },
  warning: { background: "#ff9800" },
  error: { background: "#f44336" },
}));