import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaFolderOpen,
  FaLaptopCode
} from "react-icons/fa";

import personalInfo from "../constants/personalInfo";

const GithubStats = () => {
  return (
    <section id="github">

      <div className="container-custom">

        <h2 className="section-title">
          GitHub Activity
        </h2>

        <p className="section-subtitle">
          Showcasing repositories, projects,
          technologies, and development activity.
        </p>

        {/* GitHub Profile */}

        <div className="glass-card p-8">

          <div className="flex items-center gap-4">

            <FaGithub
              size={50}
              className="text-cyan-400"
            />

            <div>

              <h3 className="text-2xl font-bold">
                GitHub Profile
              </h3>

              <p className="text-slate-400">
                @srinu897
              </p>

            </div>

          </div>

          <p className="text-slate-400 mt-6 leading-7">
            Explore my repositories, projects,
            development contributions and coding
            journey on GitHub.
          </p>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 mt-6"
          >
            <FaExternalLinkAlt />
            Visit GitHub
          </a>

        </div>

        {/* Professional Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="glass-card p-8 text-center">

            <FaFolderOpen
              size={35}
              className="text-cyan-400 mx-auto mb-4"
            />

            <h3 className="text-4xl font-bold text-cyan-400">
              20+
            </h3>

            <p className="text-slate-400 mt-2">
              Repositories
            </p>

          </div>

          <div className="glass-card p-8 text-center">

            <FaLaptopCode
              size={35}
              className="text-cyan-400 mx-auto mb-4"
            />

            <h3 className="text-4xl font-bold text-cyan-400">
              3+
            </h3>

            <p className="text-slate-400 mt-2">
              Major Projects
            </p>

          </div>

          <div className="glass-card p-8 text-center">

            <FaCode
              size={35}
              className="text-cyan-400 mx-auto mb-4"
            />

            <h3 className="text-4xl font-bold text-cyan-400">
              20+
            </h3>

            <p className="text-slate-400 mt-2">
              Technologies
            </p>

          </div>

        </div>

        {/* Contribution Graph */}

        <div className="glass-card p-4 mt-10">

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=srinu897&theme=react-dark&hide_border=true"
            alt="Contribution Graph"
            className="w-full rounded-xl"
          />

        </div>

      </div>

    </section>
  );
};

export default GithubStats;