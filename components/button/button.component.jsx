import styles from './button.styles';

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonClass = `${"buttonContainer"} ${BUTTON_TYPE_CLASSES[buttonType] || ''}`;
  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
