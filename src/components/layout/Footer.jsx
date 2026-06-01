import personalInfo from "../../constants/personalInfo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">

      <div className="container-custom text-center">

        <h3 className="text-lg font-semibold">
          {personalInfo.name}
        </h3>

        <p className="text-slate-400 mt-2">
          Software Engineer | Full Stack Developer
        </p>

        <p className="text-slate-500 mt-4">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;