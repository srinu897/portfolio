import { projects } from "../data/projects";
import {
FaGithub,
FaExternalLinkAlt
} from "react-icons/fa";

const Projects = () => {
return ( <section id="projects">

```
  <div className="container-custom">

    <h2 className="section-title">
      Featured Projects
    </h2>

    <p className="section-subtitle">
      Production-ready applications showcasing
      full-stack development, API integration,
      database design, deployment, and software
      engineering best practices.
    </p>

    <div className="grid lg:grid-cols-2 gap-10">

      {projects.map((project) => (

        <div
          key={project.id}
          className="
            glass-card
            overflow-hidden
            group
          "
        >

          {/* Project Image */}

          <div className="overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-64
                object-cover
                transition
                duration-500
                group-hover:scale-110
              "
            />

          </div>

          {/* Content */}

          <div className="p-8">

            <div className="flex items-center justify-between">

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                {project.title}
              </h3>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  bg-cyan-500/10
                  text-cyan-400
                "
              >
                Featured
              </span>

            </div>

            <p
              className="
                text-slate-400
                mt-4
                leading-7
              "
            >
              {project.description}
            </p>

            {/* Technologies */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                mt-6
              "
            >

              {project.technologies.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-slate-800
                      text-cyan-400
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                )
              )}

            </div>

            {/* Feature List */}

            <div
              className="
                mt-6
                text-slate-400
                space-y-2
              "
            >

              <p>
                ✓ Responsive User Interface
              </p>

              <p>
                ✓ REST API Integration
              </p>

              <p>
                ✓ Database Connectivity
              </p>

              <p>
                ✓ Production Deployment
              </p>

            </div>

            {/* Buttons */}

            <div
              className="
                flex
                gap-4
                mt-8
              "
            >

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  btn-outline
                  flex
                  items-center
                  gap-2
                "
              >
                <FaGithub />
                Source Code
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="
                  btn-primary
                  flex
                  items-center
                  gap-2
                "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

);
};

export default Projects;
