import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 mt-7 mb-7  md:px-6 lg:px-8 lg:py-4 ">
      {children}
    </div>
  );
};

export default Container;