import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostman
} from "react-icons/si";

const Skills = () => {

  const skills = [

    {
      icon: <FaJava />,
      name: "Java"
    },

    {
      icon: <SiSpringboot />,
      name: "Spring Boot"
    },

    {
      icon: <FaPython />,
      name: "Python"
    },

    {
      icon: <FaReact />,
      name: "React.js"
    },

    {
      icon: <SiJavascript />,
      name: "JavaScript"
    },

    {
      icon: <SiMysql />,
      name: "MySQL"
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },

    {
      icon: <FaDatabase />,
      name: "REST APIs"
    },

    {
      icon: <FaGitAlt />,
      name: "Git"
    },

    {
      icon: <FaGithub />,
      name: "GitHub"
    },

    {
      icon: <SiPostman />,
      name: "Postman"
    }

  ];

  return (
    <section id="skills">

      <div className="container-custom">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-subtitle">
          Technologies and tools I use to build
          modern applications.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="glass-card p-8 text-center hover:scale-105 transition"
            >

              <div className="text-4xl text-cyan-400 mb-4 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;