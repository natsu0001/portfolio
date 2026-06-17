type EducationCardProps = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

const EducationCard = ({
  degree,
  institution,
  duration,
  description,
}: EducationCardProps) => {
  return (
    <article
      className="
        border
        border-border
        bg-bg
        p-6
        transition-colors
        duration-300
        hover:bg-bg-2
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-accent
        "
      >
        {duration}
      </span>

      <h3 className="mt-3 text-xl font-semibold">
        {degree}
      </h3>

      <p className="mt-2 text-sm text-accent">
        {institution}
      </p>

      <p
        className="
          mt-4
          text-sm
          leading-relaxed
          text-text-2
        "
      >
        {description}
      </p>
    </article>
  );
};

export default EducationCard;