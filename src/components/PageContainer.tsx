import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="px-5 md:px-10 lg:px-72">{children}</div>;
};

export default PageContainer;
