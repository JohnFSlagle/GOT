import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        {new Date().getFullYear()} Game of Thrones. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
