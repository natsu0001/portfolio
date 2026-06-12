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
      className="py-4 sm:py-4 md:py-5 lg:py-5 xl:py-6"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;