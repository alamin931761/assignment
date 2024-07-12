import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto px-9 border-2 border-red-500 relative">
      {children}
    </div>
  );
};

export default Container;
