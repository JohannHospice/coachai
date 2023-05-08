import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import type { AnimationControls } from "framer-motion";

const TIME_TO_SCROLL_ANIMATION = 40;

export default function Carousel({ children }: { children: any[] }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const scrollSection = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    console.log("stop");
    setIsHovered(true);
    isHoveredRef.current = true;
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    isHoveredRef.current = false;

    console.log("resume");
    const { to, clientX, base } = getDimensions(scrollSection);
    animateScroll({
      controls,
      to,
      from: clientX,
      duration: getDuration(to, base, clientX),
    }).then(() => {
      if (isHoveredRef.current) return;

      console.log("restart");
      const { to, base } = getDimensions(scrollSection);
      animateScroll({
        controls,
        to,
        from: base,
        duration: getDuration(to, base, base),
        isRepeat: true,
      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("start");
      const { to, base } = getDimensions(scrollSection);
      animateScroll({
        controls,
        to,
        from: base,
        duration: getDuration(to, base, base),
        isRepeat: true,
      });
    });
  }, [scrollSection, controls]);

  return (
    <div
      className="relative"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={scrollSection}
        className="flex space-x-8 cursor-grab"
        animate={controls}
        drag={isHovered ? "x" : false}
        whileTap={{ cursor: "grabbing" }}
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
      >
        {[...children, ...children, ...children].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 select-none flex"
            onPointerDownCapture={(e) => e.stopPropagation()}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function getDuration(to: number, from: number, position: number) {
  const d1 = Math.abs(to) - Math.abs(from);
  const d2 = Math.abs(to) - Math.abs(position);

  return (d2 / d1) * TIME_TO_SCROLL_ANIMATION;
}

function getDimensions(div: React.MutableRefObject<HTMLDivElement | null>) {
  if (!div.current) {
    throw new Error("no element");
  }

  const scrollWidth = div.current.scrollWidth / 3;
  const data = {
    to: -scrollWidth * 2,
    clientX: div.current?.getBoundingClientRect().x,
    base: -scrollWidth,
  };
  console.log(data);
  return data;
}

function animateScroll({
  controls,
  to,
  from,
  duration,
  isRepeat,
}: {
  controls: AnimationControls;
  to: number;
  from: number;
  duration: number;
  isRepeat?: boolean;
}) {
  console.log({
    controls,
    to,
    from,
    duration,
    isRepeat,
  });

  return controls.start({
    x: to,
    transition: {
      from: from,
      duration: duration,
      ...(isRepeat
        ? {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }
        : {
            repeat: 0,
            ease: "linear",
          }),
    },
  });
}
