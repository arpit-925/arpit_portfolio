import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I’m <span className="text-blue-600">Arpit Mishra</span>
      </motion.h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        MERN Stack Developer & IT Student at AKGEC.  
        I build scalable, secure, and modern web applications.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-gray-300 rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
