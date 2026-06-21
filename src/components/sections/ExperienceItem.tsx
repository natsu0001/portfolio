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
    <div className="relative pl-8 pb-10">
      {/* Dot */}
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

      <div className="md:grid grid-cols-[100px_1fr] gap-6">
        {/* Year */}
        <div>
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
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-text-2
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;