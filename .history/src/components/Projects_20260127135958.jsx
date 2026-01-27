import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUp, stagger } from "../styles/animations";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="group relative bg-white rounded-2xl shadow overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* IMAGE PREVIEW */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* HOVER BUTTONS */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={p.live}
                  target="_blank"
                  className="px-4 py-2 bg-white text-black rounded-md text-sm"
                >
                  Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 border border-white text-white rounded-md text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{p.desc}</p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-slate-100 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
