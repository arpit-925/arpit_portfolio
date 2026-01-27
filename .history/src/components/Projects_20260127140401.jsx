import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUp, stagger } from "../styles/animations";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);

  const handleMove = (e) => {
    setPos({
      x: e.clientX + 20,
      y: e.clientY + 20,
    });
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      {/* FLOATING PREVIEW */}
      {preview && (
        <motion.img
          src={preview}
          alt="preview"
          className="fixed z-50 w-72 rounded-xl shadow-2xl pointer-events-none"
          style={{ top: pos.y, left: pos.x }}
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      )}

      {/* PROJECT GRID */}
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
            onMouseEnter={() => setPreview(p.image)}
            onMouseLeave={() => setPreview(null)}
            onMouseMove={handleMove}
            onClick={() => setActiveProject(p)}
            className="bg-white rounded-2xl shadow p-6 cursor-pointer hover:-translate-y-2 transition-transform"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-slate-600 text-sm mt-2">{p.desc}</p>

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
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default Projects;
