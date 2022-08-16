import "./Button.styles.scss";

function Button({ children, buttonType, type, handleClick }) {
  return (
    <div className="button">
      <button
        onClick={handleClick}
        type={type}
        className={`button__container ${buttonType}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
