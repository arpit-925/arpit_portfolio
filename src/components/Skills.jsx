import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { stagger, fadeUp, hoverCard } from "../styles/animations";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <h2 className="text-3xl font-bold mb-10 text-white">
          Skills
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {Object.entries(skills).map(([key, list]) => (
           <motion.div
  key={key}
  variants={fadeUp}
  {...hoverCard}
  className="relative group bg-slate-900/70 border border-slate-800 p-6 rounded-xl transition"
>
  {/* GLOW */}
  <div
    className="pointer-events-none absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300
               bg-gradient-to-r from-orange-500/25 via-orange-400/20 to-orange-500/25 blur-lg"
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <h3 className="font-semibold mb-3 capitalize text-white">
      {key}
    </h3>

    <ul className="text-sm text-slate-400 space-y-1">
      {list.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </div>
</motion.div>

          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
