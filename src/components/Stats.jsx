const Stats = () => {
  const stats = [
    {
      title: "Projects",
      value: "3+"
    },
    {
      title: "Certifications",
      value: "6+"
    },
    {
      title: "Technologies",
      value: "15+"
    },
    {
      title: "Graduate",
      value: "2025"
    }
  ];

  return (
    <section>

      <div className="container-custom">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;