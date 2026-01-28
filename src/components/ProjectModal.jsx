import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: {
    scale: 0.92,
    opacity: 0,
    y: 24,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
      mass: 0.8,
    },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};


const ProjectModal = ({ project, onClose }) => {
  // 🔐 ESC key close + body scroll lock
  useEffect(() => {
    if (!project) return;

    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);

    // lock scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
        <motion.div
  variants={modal}
  initial="hidden"
  animate="visible"
  exit="exit"
  onClick={(e) => e.stopPropagation()}
  className="relative max-w-2xl w-full"
>
  {/* GLOW */}
  <div
    className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70
               bg-gradient-to-r from-orange-500/30 via-orange-400/20 to-orange-500/30 blur-xl"
  />

  {/* MODAL CONTENT */}
  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">

            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-slate-600 mt-3">{project.desc}</p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-slate-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border rounded-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
