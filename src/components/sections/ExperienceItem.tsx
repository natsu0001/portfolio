import { motion } from "framer-motion";

type ExperienceItemProps = {
  year: string;
  title: string;
  description: string;
  index: number;
};

const ExperienceItem = ({
  index,
  year,
  title,
  description,
}: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <motion.div
  initial={{ height: 0 }}
  whileInView={{ height: "100%" }}
  viewport={{ once: true }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="
    absolute
    left-[5px]
    top-0

    w-[3px]

    bg-gradient-to-b
    from-[#8B6914]
    via-[#B8860B]
    to-[#D4AF37]

    opacity-50
  "
/>

      {/* Timeline Dot */}
    <motion.div
 initial={{
    scale: 0,
    opacity: 0,
    boxShadow: "0 0 0 rgba(184,134,11,0)",
  }}
  whileInView={{
    scale: 1,
    opacity: 1,
    boxShadow: "0 0 20px rgba(184,134,11,0.6)",
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.4,
    delay: 0.3 + index * 0.3,
  }}
  className="
    absolute
    left-0
    top-1

    h-4
    w-4

    rounded-full

    border-2
    border-[#B8860B]

    bg-black

    shadow-[0_0_12px_rgba(184,134,11,0.35)]
  "
/>

      <div className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-8">
        {/* Year */}
        <div>
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#B8860B]
            "
          >
            {year}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-zinc-400
            "
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;