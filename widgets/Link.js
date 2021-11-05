import NextLink from "next/link";
import useAppState from "@/providers/AppProvider";
import { useRouter } from "next/router";

Link.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  query: PropTypes.object,
  onClick: PropTypes.func,
  as: PropTypes.string,
  external: PropTypes.bool,
  style: PropTypes.any,
};

Link.defaultProps = {
  path: "",
  title: "",
  className: "",
  query: {},
  onClick: () => null,
};

export default function Link({
  path,
  title,
  onClick,
  className,
  query,
  children,
  as,
  external,
  style,
}) {
  const router = useRouter();

  const href = { pathname: path, query };

  const _onClick = (e) => {
    onClick(e);
  };

  const getDomain = (path) =>
    (path || "").replace(/https?:\/\//, "").split("/")[0];

  // const isEmail = (url) => url.search(/mailto:/) !== -1;

  // const isFile = (url) => url.search(/\.pdf/) !== -1;

  // const isPhone = (url) => url.search(/tel:/) !== -1;

  const isExternal = (path) => {
    if (typeof path === "string") {
      const { href } = typeof window !== "undefined" ? window.location : {};
      const sameDomain = getDomain(href) === getDomain(path);
      return path.search(/https?:\/\//) !== -1 && !sameDomain;
    }
  };

  if (path === "#" || path === "%23" || !path) {
    return (
      <button className={`button ${className}`} onClick={onClick} style={style}>
        {children || title || path}
      </button>
    );
  }

  if (external || isExternal(path)) {
    return (
      <a
        href={path}
        target={"_blank"}
        className={className}
        onClick={onClick}
        style={style}
        aria-label={path}
      >
        {children || title || path}
      </a>
    );
  }

  return (
    <NextLink href={href} as={as} scroll={false}>
      <a
        className={className}
        onClick={_onClick}
        style={style}
        aria-label={path}
      >
        {children || title || path}
      </a>
    </NextLink>
  );
}
