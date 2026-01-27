import { motion } from "framer-motion";
import { fadeUp } from "../styles/animations";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-slate-600 leading-relaxed">
          I’m a MERN Stack Developer and IT student at AKGEC with a CGPA of 8.70.
          I enjoy building scalable, secure web apps and have solved 400+
          competitive programming problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
