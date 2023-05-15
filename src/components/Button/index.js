import "./Button.css";

const Button = ({ children }) => {
  // outra forma, mas menos usada; (props.children)
  return <button className="button">{children}</button>;
};

//wich parameters are being passed to Button? And why are they being passed this way?

export default Button;
