import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative

        min-w-[85%]
        sm:min-w-[65%]
        md:min-w-0

        snap-center

        border
        border-border

        p-6

        flex
        flex-col

       card-pattern-gold

        transition-all
        duration-300

        hover:bg-bg-2
        hover:-translate-y-1
        hover:border-accent/20
      "
    >
      {/* Arrow Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title}`}
        className="
          absolute
          top-5
          right-5

          w-8
          h-8

          border
          border-border

          flex
          items-center
          justify-center

          opacity-0
          translate-x-1
          -translate-y-1

          transition-all
          duration-200

          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:translate-y-0
        "
      >
        <ArrowUpRight
          size={14}
          className="text-accent"
        />
      </a>

      {/* Thumbnail */}
      <div
        className="
          relative
          w-full
          aspect-video

          bg-bg-2
          overflow-hidden

          mb-5
        "
      >
        <div className="absolute inset-0 bg-grid" />

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover

              transition-all
              duration-700

              group-hover:scale-110
            "
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="
                text-xs
                font-semibold
                tracking-[0.3em]
                uppercase
                text-accent/40
              "
            >
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-accent
          "
        >
          {project.year}
        </span>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-text-2
          "
        >
          {project.status}
        </span>
      </div>

      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-text-2
          mb-2
        "
      >
        {project.role}
      </p>

      {/* Accent Line */}
      <div
        className="
          h-px
          w-8

          bg-accent

          transition-all
          duration-300

          group-hover:w-full

          mb-4
        "
      />

      {/* Title */}
      <h3
        className="
          text-sm
          font-semibold
          uppercase
          tracking-wide

          mb-3
        "
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-[0.75rem]
          leading-relaxed
          text-text-2

          flex-grow
        "
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="
              px-2
              py-1

              text-[10px]

              uppercase
              tracking-widest

              border
              border-border

              transition-colors
              duration-300

              group-hover:border-accent/40
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default ProjectCard;