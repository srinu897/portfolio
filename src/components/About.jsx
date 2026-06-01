import personalInfo from "../constants/personalInfo";

const About = () => {
  return (
    <section id="about">

      <div className="container-custom">

        <h2 className="section-title">
          About Me
        </h2>

        <p className="section-subtitle">
          Software Engineering graduate passionate about
          developing scalable web applications and solving
          real-world business problems.
        </p>

        <div className="glass-card p-10">

          <p className="text-slate-300 leading-8">

            I'm <strong>{personalInfo.name}</strong>,
            a Software Engineering graduate with practical
            experience in Java, Spring Boot, React.js,
            Django REST Framework, REST APIs, MySQL,
            MongoDB, and cloud deployment.

            <br />
            <br />

            I enjoy building full-stack applications,
            backend services, dashboards, and scalable
            software solutions.

            <br />
            <br />

            My focus is becoming a Software Development
            Engineer while continuously improving my
            backend, cloud, and problem-solving skills.

          </p>

        </div>

      </div>

    </section>
  );
};

export default About;