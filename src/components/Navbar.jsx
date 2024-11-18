import logo from "../assets/ASLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-4">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-10 h-auto mx-2"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub />
    </div>
  </nav>
  
}

export default Navbar
