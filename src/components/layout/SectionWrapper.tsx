import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
};

const SectionWrapper = ({
  children,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;