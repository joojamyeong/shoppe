import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ft mw">
      <div className="topCon">
        <ul className="topLink">
          <li>
            <Link to="#">CONTACT</Link>
          </li>
          <li>
            <Link to="#">TERMS OF SERVICES</Link>
          </li>
          <li>
            <Link to="#">SHIPPING AND RETURNS</Link>
          </li>
        </ul>
        <div className="emailCon">
          <p>Give an email, get the newsletter.</p>
          <i class="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
      <div className="bottomCon">
        <p className="copyRight">
          <span>
            <i class="fa-regular fa-copyright"></i>
          </span>
          <span>2021 Shelly.</span>
          <span>Terms of use</span>
          <span>and</span>
          <span>privacy policy.</span>
        </p>
        <ul className="snsLink">
          <li className="snsIn">
            <Link to="#">in</Link>
          </li>
          <li className="snsFacebook">
            <Link to="#">
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
          <li className="snsInstagram">
            <Link to="#">
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="snsTwitter">
            <Link to="#">
              <i class="fa-brands fa-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
