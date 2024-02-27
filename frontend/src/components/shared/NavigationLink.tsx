import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};
const NavigationLink = (props: Props) => {
  return (
    <Link className="nav-link" onClick={props.onClick} to={props.to}>
      <Button
        className="nav-button"
        style={{ background: props.bg, color: props.textColor }}
        variant="contained"
      >
        <span className="nav-text">{props.text}</span>
      </Button>
    </Link>
  );
};

export default NavigationLink;
