type ButtonProps = {
  handlerClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handlerClick(event, 1)}>click!</button>
  );
};

export default Button;
