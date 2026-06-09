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
      className="py-2 md:py-10 lg:py-16"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;