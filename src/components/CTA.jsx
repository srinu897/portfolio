import personalInfo from "../constants/personalInfo";

const CTA = () => {
  return (
    <section>

      <div className="container-custom">

        <div
          className="
            glass-card
            p-12
            text-center
          "
        >

          <h2
            className="
              text-4xl
              font-bold
              mb-4
            "
          >
            Available for Opportunities
          </h2>

          <p
            className="
              text-slate-400
              max-w-2xl
              mx-auto
              mb-8
              leading-8
            "
          >
            Seeking Software Engineer,
            Full Stack Developer,
            Java Developer and Backend Developer
            opportunities where I can contribute,
            learn, and grow while building
            impactful software products.
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            <a
              href="#contact"
              className="btn-primary"
            >
              Hire Me
            </a>

            <a
              href={personalInfo.resume}
              className="btn-outline"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;