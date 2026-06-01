const WhyHireMe = () => {
  const reasons = [
    "Strong Java & Spring Boot Foundation",
    "Full Stack Development Experience",
    "REST API Development & Integration",
    "Database Design with MySQL & MongoDB",
    "Cloud Deployment using Vercel & Render",
    "Problem Solving & Software Engineering Skills",
    "Quick Learner and Team Player",
    "Passionate About Building Scalable Applications"
  ];

  return (
    <section id="why-hire-me">

      <div className="container-custom">

        <h2 className="section-title">
          Why Hire Me?
        </h2>

        <p className="section-subtitle">
          Bringing technical expertise, problem-solving ability,
          and a passion for building impactful software solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="glass-card p-6 flex items-center gap-4"
            >

              <div className="text-cyan-400 text-2xl">
                ✓
              </div>

              <h3 className="text-lg font-medium">
                {reason}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyHireMe;