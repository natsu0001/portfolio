type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

const SectionHeading = ({
  label,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className=" h-px bg-accent" />

        <p
          className="
            text-xs
            font-semibold
            tracking-[0.25em]
            uppercase
            text-accent
          "
        >
          {label}
        </p>
      </div>

      <h2
        className="
          text-3xl
          md:text-5xl
          font-bold
          tracking-tight
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-4
            max-w-2xl
            text-text-2
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;