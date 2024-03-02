import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="footer-container-2">
      <div className="footer-content">
        <p className="footer-text-2">
          Built With: <br />
          <span>
            <Link
              className="footer-link"
              to={"https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahmoud Mansy
            </Link>
          </span>
          <br />
          <span>
            <Link
              className="footer-link"
              to={"https://www.linkedin.com/in/abdelrahman-mohamed-b7944123a/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdulrahman Mohamed
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
