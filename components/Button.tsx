const Button = (props: { [other: string]: any }) => {
  const { children, ...other } = props;
  return (
    <input
      type='button'
      id={other.id}
      name={props.name}
      value={props.value}
      className={props.className}
    />
  );
};

export default Button;
