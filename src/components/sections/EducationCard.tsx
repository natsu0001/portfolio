import { GraduationCap } from "lucide-react";

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
}: EducationCardProps) => {
  return (
    <article
    className="
    group
    relative
    border
    border-border
    min-w-[280px]
    sm:min-w-[320px]

    lg:min-w-0

   card-pattern-gold
    p-8
    transition-all
    duration-300
    hover:bg-bg-3
  "
    >
      {/* Icon */}
      <div
        className="
          w-10
          h-10
          border
          border-border
          flex
          items-center
          justify-center
          mb-5
        "
      >
        <GraduationCap
          size={20}
          className="text-accent"
        />
      </div>

      {/* Degree */}
      <h3
        className="
          text-lg
          font-semibold
          text-text
          mb-2
        "
      >
        {degree}
      </h3>

      {/* Year */}
      <p
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-accent
          mb-3
        "
      >
        {duration}
      </p>

      {/* Institution */}
      <p
        className="
          text-sm
          text-text-2
          mb-6
        "
      >
        {institution}
      </p>

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          border
          border-border
          px-3
          py-1
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-text-3
        "
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Degree
      </div>
    </article>
  );
};

export default EducationCard;