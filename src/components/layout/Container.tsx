import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 mb-15 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;