type ExperienceItemProps = {
  year: string;
  title: string;
  description: string;
};

const ExperienceItem = ({
  year,
  title,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline Dot */}
      <div
        className="
          absolute
          left-0
          top-2
          h-3
          w-3
          rounded-full
          bg-accent
        "
      />

      <span
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-accent
        "
      >
        {year}
      </span>

      <h3 className="mt-2 text-xl font-semibold">
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-xl
          text-sm
          leading-relaxed
          text-text-2
        "
      >
        {description}
      </p>
    </div>
  );
};

export default ExperienceItem;