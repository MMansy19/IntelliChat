import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "centear",
        gap: "20px",
      }}
    >
      <Link to={"/"}>
        <img
          src="openai-colored.svg"
          alt="openai"
          width={"35px"}
          height={"35px"}
          // className="image-inverted"
        />
      </Link>
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          fontSize: "20px",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "25px" }}>Intelli</span>-Chat
      </Typography>
    </div>
  );
};

export default Logo;
