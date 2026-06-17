type TechCardProps = {
  category: string;
  technologies: string[];
};

const TechCard = ({
  category,
  technologies,
}: TechCardProps) => {
  return (
    <article
      className="
        border
        border-border
        bg-bg
        p-6
        hover:bg-bg-2
        transition-colors
        duration-300
      "
    >
      <h3
        className="
          text-lg
          font-semibold
          mb-5
        "
      >
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-2

              text-xs
              uppercase
              tracking-wider

              border
              border-border

              hover:border-accent/50

              transition-colors
              duration-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default TechCard;