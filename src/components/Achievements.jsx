import { achievements } from "../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements">

      <div className="container-custom">

        <h2 className="section-title">
          Achievements
        </h2>

        <p className="section-subtitle">
          Highlights of technical growth,
          project development, and certifications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="glass-card p-8"
            >

              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {achievement.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {achievement.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;