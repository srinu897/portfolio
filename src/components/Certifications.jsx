import { certifications } from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications">

      <div className="container-custom">

        <h2 className="section-title">
          Certifications
        </h2>

        <p className="section-subtitle">
          Industry-recognized certifications validating
          technical and professional skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((certificate) => (

            <div
              key={certificate.id}
              className="glass-card p-6 text-center"
            >

              {certificate.image ? (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="h-40 flex items-center justify-center bg-slate-800 rounded-lg mb-4">
                  Certificate
                </div>
              )}

              <h3 className="text-xl font-semibold">
                {certificate.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {certificate.issuer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;