import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With: <br />
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"}
            >
              Mahmoud Mansy
            </Link>
          </span>
          &
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://github.com/abdomohamed96"}
            >
              Abdulrahman Mohamed
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
