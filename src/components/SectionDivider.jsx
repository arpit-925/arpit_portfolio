import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[2px] rounded-full
                   bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"
      />
    </div>
  );
};

export default SectionDivider;
