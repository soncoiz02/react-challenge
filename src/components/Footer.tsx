import React from "react";
import "../styles/scss/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="info">
          <h2 className="logo">
            MO.<span>VIES</span>
          </h2>
          <div className="nav">
            <div className="nav-item">Now Playing</div>
            <div className="nav-item">Top Rated</div>
          </div>
        </div>
        <div className="copyright">&copy; 2025 TranBaoSon All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
