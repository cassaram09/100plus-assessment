Label.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default function Label({ children, value, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={`label`}>
      {children || value}
    </label>
  );
}
