import React from "react";
// Parent
interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;
  }
  
export const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = React.useState<string[]>(/* array de strings */);
    return <ul>{render(data)}</ul>;
  };

