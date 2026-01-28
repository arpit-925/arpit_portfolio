import { motion } from "framer-motion";
import { fadeUp } from "../styles/animations";
const profile = "/profile.jpg";

// or move to public & use /profile.jpeg

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-sm uppercase tracking-widest text-orange-400">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            I build scalable <br />
            <span className="text-orange-400">web applications</span>
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
            I’m a <strong>MERN Stack Developer</strong> and IT student at AKGEC
            (CGPA 8.70) who enjoys building secure, high-performance web
            applications. I’ve solved 400+ competitive programming problems and
            love turning ideas into real-world products.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-medium rounded-lg transition"
            >
              Get in touch →
            </a>

            <a
              href="https://drive.google.com/file/d/1agWFcp3-mfSNUDN30sHXfDk6Urf44bqF/view?usp=drivesdk&usp=embed_facebook"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-500 hover:border-white rounded-lg transition"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-orange-500/30 rounded-2xl blur-xl"></div>
            <img
              src={profile}
              alt="Arpit Mishra"
              className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
