import "./Button.css";

const Button = ({title, style}) => {
  return (
    <button className={`${style} button-81`}>{title}</button>
  );
};

export default Button;
