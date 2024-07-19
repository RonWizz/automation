import styles from './button.module.css';

const BUTTON_TYPE_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted,
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonClass = `${styles.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType] || ''}`;
  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
