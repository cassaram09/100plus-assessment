import { Waypoint } from "react-waypoint";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

Reveal.propTypes = {
  variants: PropTypes.shape({
    hidden: PropTypes.object,
    visible: PropTypes.object,
  }),
  reveal: PropTypes.bool,
  preset: PropTypes.oneOf([
    "fade",
    "fadeUp",
    "fadeDown",
    "fadeLeft",
    "fadeRight",
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  element: PropTypes.string,
};

Reveal.defaultProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  className: "",
  delay: 0,
  duration: 750,
  element: "div",
};

const PRESETS = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: "0%" },
  },
  fadeDown: {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: "0%" },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function Reveal({
  variants,
  reveal,
  preset,
  className,
  children,
  delay,
  duration,
  element,
}) {
  const controls = useAnimation();

  const onEnter = () => controls.start("visible");

  const getPreset = (name, { delay, duration }) => {
    const preset = PRESETS[name];
    if (preset) {
      return Object.keys(preset).reduce((sum, key) => {
        sum[key] = { ...preset[key] };
        sum[key].transition = {
          delay: delay / 1000,
          duration: duration / 1000,
        };
        return sum;
      }, {});
    }
  };

  const setVariants = () => getPreset(preset, { delay, duration }) || variants;

  useEffect(() => {
    if (reveal) {
      onEnter();
    }
  }, []);

  const Component = motion[element];

  return (
    <Component
      className={`reveal ${className}`}
      initial="hidden"
      animate={controls}
      variants={setVariants()}
      transition={{ ease: "easeInOut" }}
    >
      <Waypoint onEnter={onEnter} fireOnRapidScroll={false} />
      {children}
    </Component>
  );
}
