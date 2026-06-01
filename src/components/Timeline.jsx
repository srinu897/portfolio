const Timeline = () => {
  const timeline = [
    {
      year: "2021",
      title: "Started B.Tech",
      description:
        "Joined Computer Engineering (Software Engineering)."
    },

    {
      year: "2024",
      title: "Professional Certifications",
      description:
        "Completed IBM, Cisco, HackerRank and Infosys certifications."
    },

    {
      year: "2025",
      title: "Graduated",
      description:
        "Completed B.Tech with CGPA 7.56."
    },

    {
      year: "2026",
      title: "Full Stack Development",
      description:
        "Built and deployed multiple full-stack applications."
    }
  ];

  return (
    <section id="timeline">

      <div className="container-custom">

        <h2 className="section-title">
          Career Journey
        </h2>

        <p className="section-subtitle">
          My learning and development journey.
        </p>

        <div className="space-y-8">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="glass-card p-8 border-l-4 border-cyan-400"
            >

              <h3 className="text-cyan-400 text-xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-2xl font-semibold mt-2">
                {item.title}
              </h4>

              <p className="text-slate-400 mt-3">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Timeline;