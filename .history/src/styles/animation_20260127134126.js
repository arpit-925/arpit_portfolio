export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const hoverCard = {
  whileHover: {
    y: -8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 200 },
  },
};
