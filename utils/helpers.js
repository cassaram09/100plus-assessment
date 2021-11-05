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

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join("").toString();

const CHARS = [
  "a",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "m",
  "n",
  "p",
  "q",
  "r",
  "t",
  "u",
  "v",
  "x",
  "y",
].join("");

const RULES = [
  NUMS.slice(1),
  CHARS,
  NUMS + CHARS,
  NUMS,
  CHARS,
  NUMS + CHARS,
  NUMS,
  CHARS,
  CHARS,
  NUMS,
  NUMS,
];

const sample = (len) => Math.floor(Math.random() * len);

/*
The MBI will contain letters and numbers. Here’s an example: 1EG4TE5MK73

https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi.pdf

No dashes.

C – Numeric 1 thru 9 N – Numeric 0 thru 9 AN – Either A or N A – Alphabetic Character (A...Z); Excluding (S, L, O, I, B, Z)
Position 1 – numeric values 1 thru 9
Position 2 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
Position 3 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
Position 4 – numeric values 0 thru 9
Position 5 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
Position 6 – alpha-numeric values 0 thru 9 and A thru Z (minus S, L, O, I, B, Z)
Position 7 – numeric values 0 thru 9
Position 8 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
Position 9 – alphabetic values A thru Z (minus S, L, O, I, B, Z)
Position 10 – numeric values 0 thru 9
Position 11 – numeric values 0 thru 9
*/

export const generateMBI = () => {
  return RULES.reduce((sum, rule) => {
    let index = sample(rule.length);
    let char = rule[index];
    return sum + char;
  }, "").toUpperCase();
};

export const verifyMBI = (mbi = "") => {
  let formatted = mbi.replace(/-/gi, "").toLowerCase();
  if (formatted.length !== 11) return false;

  return formatted.split("").every((char, index) => {
    return RULES[index].match(char);
  });
};
