import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { stagger, fadeUp, hoverCard } from "../styles/animations";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-4 gap-6"
        >
          {Object.entries(skills).map(([key, list]) => (
            <motion.div
              key={key}
              variants={fadeUp}
              {...hoverCard}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold mb-3 capitalize">{key}</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                {list.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
