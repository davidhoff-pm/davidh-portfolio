import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    fade: { y: 0, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.45, 0.27, 0.90]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
