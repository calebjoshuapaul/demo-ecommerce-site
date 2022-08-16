import "./Button.styles.scss";

function Button({ children, buttonType, type, onClick }) {
  return (
    <div className="button">
      <button
        onClick={onClick}
        type={type}
        className={`button__container ${buttonType}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
