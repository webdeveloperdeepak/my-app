"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-[1300px] mx-auto">
      {children}
    </div>
  );
};
export default Container;