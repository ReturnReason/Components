interface TestProps {
  label: string;
}

export const Test = ({ label }: TestProps) => {
  return <button>{label}</button>;
};
