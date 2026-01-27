import { motion } from "framer-motion";
import { fadeUp } from "../styles/animations";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/arpit925",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/arpit-925",
    color: "hover:text-gray-300",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/your_instagram_username",
    color: "hover:text-pink-500",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="mt-4 text-slate-400">
          Open to internships, collaborations & exciting projects
        </p>

        {/* EMAIL */}
        <p className="mt-6 text-lg">
          📧{" "}
          <a
            href="mailto:arpitmishra0925@gmail.com"
            className="underline hover:text-blue-400"
          >
            arpitmishra0925@gmail.com
          </a>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 mt-10">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-3xl text-slate-400 ${s.color}`}
                aria-label={s.name}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

        {/* FOOTER LINE */}
        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} Arpit Mishra
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
