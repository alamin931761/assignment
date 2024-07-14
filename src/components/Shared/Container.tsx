import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full max-w-6xl px-3 mx-auto relative bg-seashell">
      {children}
    </div>
  );
};

export default Container;
