

interface ChildComponentProps {
  data: string[];
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ data }) => (
  <>
    {data?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);
