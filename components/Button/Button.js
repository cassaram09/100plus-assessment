Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  submit: PropTypes.bool,
  size: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => null,
  text: "Click me",
  type: "info",
};

export default function Button({ text, onClick, type, submit, size }) {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`button is-${type} ${size ? "is-" + size : ""}`}
      aria-label={text}
    >
      <span>{text}</span>
    </button>
  );
}
