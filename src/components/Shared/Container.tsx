import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-6xl px-3 mx-auto relative">{children}</div>
  );
};

export default Container;
