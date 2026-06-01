const Button = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary"
}) => {
  const styles = {
    primary:
      "bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition",

    outline:
      "border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
  };

  if (href) {
    return (
      <a
        href={href}
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles[variant]}
    >
      {children}
    </button>
  );
};

export default Button;