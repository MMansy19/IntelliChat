import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          Built With: <br />
          <span>
            <Link
              className="footer-link"
              to={"https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"}
              target="_blank"
            >
              Mahmoud Mansy
            </Link>
          </span>
          &amp;
          <span>
            <Link
              className="footer-link"
              to={"https://www.linkedin.com/in/abdelrahman-mohamed-b7944123a/"}
              target="_blank"
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
