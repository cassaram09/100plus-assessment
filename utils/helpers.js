// Parse JSON.
export const parse = (json, fallback = false) => {
  try {
    if (json === null || json === "") {
      return fallback;
    }

    return JSON.parse(json) || fallback;
  } catch (e) {
    console.error(e);
    return fallback;
  }
};

// Creates a range (array) of numbers.
export const range = (integer, start = 0) =>
  [...Array(parseInt(integer)).keys()].map((i) => i + parseInt(start));

// Capitalize a string.
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// abbreviate class name with a prefix
export const _classes = (styles) => (name) => {
  if (typeof name === "string") {
    return styles[name] || name || "";
  }

  if (Array.isArray(name)) {
    return name.map((n) => styles[n] || n || "").join(" ");
  }

  return "";
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      delay: 0.25,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
