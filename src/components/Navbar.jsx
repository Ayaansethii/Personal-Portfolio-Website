import logo from "../assets/ASLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="w-10 h-auto mx-2" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ayaansethi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ayaansethii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="./assets/Ayaan_Sethi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <CiFileOn />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
