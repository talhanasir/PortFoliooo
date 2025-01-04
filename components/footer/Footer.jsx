import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaGithub
} from "react-icons/fa";

const SocialShare = [
  
  { Social: <FaGithub />, link: "https://github.com/talhanasir" },
  
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-talha-176a48311/" },
 
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Muhammad Talha
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;