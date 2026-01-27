import { motion } from "framer-motion";
import { fadeUp } from "../styles/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white text-center">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="mt-4 text-slate-300">
          arpitmishra0925@gmail.com
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
