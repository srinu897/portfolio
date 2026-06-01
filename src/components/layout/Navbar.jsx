import { useState } from "react";
import { Link } from "react-scroll";
import {
FaGithub,
FaLinkedin,
FaBars,
FaTimes
} from "react-icons/fa";

import personalInfo from "../../constants/personalInfo";

const Navbar = () => {
const [menuOpen, setMenuOpen] =
useState(false);

const navLinks = [
"about",
"skills",
"projects",
"contact"
];

return ( <nav
   className="
     fixed
     top-0
     left-0
     w-full
     z-50
     bg-slate-950/70
     backdrop-blur-xl
     border-b
     border-slate-800/50
     shadow-lg
   "
 > <div
     className="
       container-custom
       flex
       items-center
       justify-between
       h-20
     "
   >

    {/* Logo */}

    <h1
      className="
        text-3xl
        font-extrabold
        gradient-text
        tracking-wide
        cursor-pointer
      "
    >
      Srinivas
    </h1>

    {/* Desktop Menu */}

    <div
      className="
        hidden
        md:flex
        items-center
        gap-8
      "
    >

      {navLinks.map((item) => (
        <Link
          key={item}
          to={item}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-cyan-400"
          className="
            cursor-pointer
            text-slate-300
            hover:text-cyan-400
            transition
            duration-300
            capitalize
            font-medium
          "
        >
          {item}
        </Link>
      ))}

    </div>

    {/* Right Section */}

    <div
      className="
        hidden
        md:flex
        items-center
        gap-5
      "
    >

      <a
        href={personalInfo.github}
        target="_blank"
        rel="noreferrer"
        className="
          text-slate-300
          hover:text-cyan-400
          transition
        "
      >
        <FaGithub size={22} />
      </a>

      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noreferrer"
        className="
          text-slate-300
          hover:text-cyan-400
          transition
        "
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href={personalInfo.resume}
        className="btn-primary"
      >
        Resume
      </a>

    </div>

    {/* Mobile Menu Button */}

    <button
      onClick={() =>
        setMenuOpen(!menuOpen)
      }
      className="
        md:hidden
        text-white
      "
    >
      {menuOpen ? (
        <FaTimes size={24} />
      ) : (
        <FaBars size={24} />
      )}
    </button>

  </div>

  {/* Mobile Menu */}

  {menuOpen && (
    <div
      className="
        md:hidden
        bg-slate-950
        border-t
        border-slate-800
      "
    >

      <div
        className="
          flex
          flex-col
          p-6
          gap-6
        "
      >

        {navLinks.map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              cursor-pointer
              capitalize
              text-slate-300
              hover:text-cyan-400
            "
          >
            {item}
          </Link>
        ))}

        <a
          href={personalInfo.resume}
          className="btn-primary text-center"
        >
          Resume
        </a>

      </div>

    </div>
  )}

</nav>

);
};

export default Navbar;
