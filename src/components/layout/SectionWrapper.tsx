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
      className="py-2 md:py-5 lg:py-14"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;