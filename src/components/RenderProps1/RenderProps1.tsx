// Child
type ChildComponentProps = {
  render: (name: string) => JSX.Element;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = 'DevRoZccn';
  return <div>{render(name)}</div>;
};

// Parent
export const ParentComponent: React.FC = () => (
  <ChildComponent render={(name) => <p>Hello, {name}</p>} />
);