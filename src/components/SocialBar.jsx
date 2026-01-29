import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const socials = [
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/arpit925",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    link: "https://github.com/arpit-925",
    label: "GitHub",
  },
  {
    icon: SiLeetcode,
    link: "https://leetcode.com/u/arpit925/",
    label: "LeetCode",
  },
  {
    icon: SiCodechef,
    link: "https://www.codechef.com/users/arpit925",
    label: "CodeChef",
  },
];

const SocialBar = () => {
  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-4">

        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ x: 6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group p-3 rounded-full
                         bg-slate-900 border border-slate-800
                         hover:border-orange-500 transition"
            >
              {/* GLOW */}
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100
                              bg-orange-500/30 blur-lg transition" />

              <Icon className="relative z-10 text-xl text-slate-300 group-hover:text-orange-400 transition" />
            </motion.a>
          );
        })}

      </div>
    </div>
  );
};

export default SocialBar;
