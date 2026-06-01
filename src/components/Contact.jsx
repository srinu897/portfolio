import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

import personalInfo from "../constants/personalInfo";

const Contact = () => {
  return (
    <section id="contact">

      <div className="container-custom">

        <h2 className="section-title">
          Let's Connect
        </h2>

        <p className="section-subtitle">
          Open to Software Engineer, Full Stack Developer,
          Java Developer, Backend Developer and Graduate
          opportunities.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="glass-card p-8">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope
                  className="text-cyan-400"
                  size={22}
                />
                <span>{personalInfo.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone
                  className="text-cyan-400"
                  size={22}
                />
                <span>{personalInfo.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt
                  className="text-cyan-400"
                  size={22}
                />
                <span>{personalInfo.location}</span>
              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-6 mt-10">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="
                  hover:text-cyan-400
                  transition
                  duration-300
                "
              >
                <FaGithub size={32} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  hover:text-cyan-400
                  transition
                  duration-300
                "
              >
                <FaLinkedin size={32} />
              </a>

            </div>

          </div>

          {/* Quick Actions */}

          <div className="glass-card p-8">

            <h3 className="text-2xl font-bold mb-6">
              Ready to Work Together?
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              I'm actively seeking Software Engineer,
              Java Developer, Full Stack Developer,
              Backend Developer and Graduate roles.
              Feel free to connect with me.
            </p>

            <div className="flex flex-col gap-4">

              {/* Email */}

              <a
                href={`mailto:${personalInfo.email}`}
                className="
                  btn-primary
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <FaPaperPlane />
                Send Email
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/916302040571"
                target="_blank"
                rel="noreferrer"
                className="
                  btn-outline
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <FaWhatsapp />
                WhatsApp Me
              </a>

              {/* LinkedIn */}

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  btn-outline
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <FaLinkedin />
                Connect on LinkedIn
              </a>

              {/* GitHub */}

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="
                  btn-outline
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <FaGithub />
                View GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;