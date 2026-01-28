import { motion } from "framer-motion";
import { fadeUp } from "../styles/animations";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I’m <span className="text-blue-600">Arpit Mishra</span>
        </h1>
        <p className="mt-6 text-lg max-w-xl mx-auto text-slate-600">
          MERN Stack Developer & IT student at AKGEC building modern full-stack
          web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1agWFcp3-mfSNUDN30sHXfDk6Urf44bqF/view?usp=drivesdk&usp=embed_facebook"
            className="px-6 py-3 border rounded-lg"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
