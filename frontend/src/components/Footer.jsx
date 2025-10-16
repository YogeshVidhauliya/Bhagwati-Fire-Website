import { Link } from "react-router-dom"; // React Router links

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-section about">
          {/* Wrap the logo in Link to go home on click */}
          <Link to="/">
            <img src="/images/logo.png" alt="Bhagwati Fire Logo" className="footer-logo" />
          </Link>
          <p className="footer-logo-para">
            Bhagwati sales & fire company has been providing reliable fire protection solutions for over 25 years.
            Safety is our priority!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.webp" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.jpeg" alt="Facebook" />
            </a>
            
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>📍 Address: Opp. Rajkiya Inter College, Sector 22 Near SBI Bank, Noida</p>
          <p>📞 +91-9868081848</p>
          <p>✉ bhagwati.snf@rediffmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bhagwati Fire Safety. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
