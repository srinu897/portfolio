import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education">

      <div className="container-custom">

        <h2 className="section-title">
          Education
        </h2>

        <p className="section-subtitle">
          Academic background and qualifications.
        </p>

        <div className="space-y-8">

          {education.map((item, index) => (

            <div
              key={index}
              className="glass-card p-8"
            >

              <h3 className="text-2xl font-semibold">
                {item.degree}
              </h3>

              <p className="text-cyan-400 mt-2">
                {item.institution}
              </p>

              <div className="mt-4 flex flex-wrap gap-6 text-slate-400">

                <span>
                  Duration: {item.year}
                </span>

                <span>
                  CGPA: {item.cgpa}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;