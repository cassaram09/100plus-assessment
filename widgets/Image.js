Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
};

Image.defaultProps = {
  className: "",
  type: "",
  size: "cover",
  position: "center center",
};

export default function Image({
  src,
  alt,
  className,
  size,
  width,
  height,
  position,
}) {
  return (
    <figure
      className={`img ${className}`}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: size,
        backgroundPosition: position,
      }}
      role="img"
      aria-label={alt || src}
    >
      <img alt={alt || src} src={src} width={width} height={height} />
    </figure>
  );
}
