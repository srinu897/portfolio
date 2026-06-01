import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaDownload
} from "react-icons/fa";

import personalInfo from "../constants/personalInfo";
import profile from "../assets/images/profile.png";

const Hero = () => {
return ( <section
   id="hero"
   className="
     relative
     min-h-screen
     flex
     items-center
     overflow-hidden
   "
 >
{/* Background Glow Effects */} <div className="absolute inset-0">

```
    <div
      className="
        absolute
        top-[-200px]
        left-[-200px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[120px]
      "
    />

    <div
      className="
        absolute
        bottom-[-200px]
        right-[-200px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-500/20
        blur-[120px]
      "
    />

  </div>

  <div className="container-custom relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1
          className="
            text-6xl
            md:text-7xl
            font-bold
            leading-tight
          "
        >
          Samala

          <span className="gradient-text">
            {" "}Srinivas
          </span>

        </h1>

        <h2
          className="
            text-3xl
            md:text-4xl
            mt-5
            font-semibold
          "
        >
          Software Engineer
        </h2>

        <p
          className="
            text-cyan-400
            mt-3
            text-lg
            font-medium
          "
        >
          Full Stack Developer | Java Developer
        </p>

        <p
          className="
            text-slate-400
            mt-8
            max-w-xl
            leading-8
          "
        >
          Building scalable web applications
          using Java, Spring Boot, React.js,
          Python, REST APIs, MySQL and MongoDB.

          Passionate about solving real-world
          business problems through software
          engineering and modern technologies.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>

          <a
            href={personalInfo.resume}
            className="
              btn-outline
              flex
              items-center
              gap-2
            "
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

        <div className="flex gap-6 mt-10">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
            "
          >
            <FaGithub size={30} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
            "
          >
            <FaLinkedin size={30} />
          </a>

        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          flex
          justify-center
        "
      >

        <img
          src={profile}
          alt="Samala Srinivas"
          className="
            w-[380px]
            h-[380px]
            object-cover
            rounded-full
            border-4
            border-cyan-400
            shadow-[0_0_60px_rgba(56,189,248,0.4)]
          "
        />

      </motion.div>

    </div>

  </div>
</section>
);
};

export default Hero;
