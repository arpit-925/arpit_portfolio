import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUp, stagger, hoverCard } from "../styles/animations";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            {...hoverCard}
            className="bg-white rounded-xl shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{p.desc}</p>
            </div>

            <div className="mt-4 flex gap-3 text-sm">
              <a href={p.live} className="text-blue-600">Live</a>
              <a href={p.github} className="text-blue-600">GitHub</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
