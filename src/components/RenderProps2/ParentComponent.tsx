import React from "react";
// Parent
interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;
  }
  
  export const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
    const [data] = React.useState<string[]>(["React", "TypeScript", "Render Props"]);
  
    return <ul>{render(data)}</ul>;
  };
