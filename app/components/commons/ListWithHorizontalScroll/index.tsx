// import { useEffect, useRef, useState } from "react";

// export default function InfiniteScrollList({ children }: { children: any }) {
//   const scrollSection = useRef<HTMLDivElement | null>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [translationX, setTranslationX] = useState(0);
//   const [startX, setStartX] = useState(0);
//   const [startTranslationX, setStartTranslationX] = useState(0);

//   const scrollSpeed = 1;

//   useEffect(() => {
//     if (scrollSection.current) {
//       setTranslationX(-scrollSection.current.scrollWidth / 2);
//     }
//     const intervalId = setInterval(() => {
//       if (isHovering || isDragging || !scrollSection.current) return;

//       const totalWidth = scrollSection.current.scrollWidth;

//       setTranslationX((prevTranslationX) => {
//         const newTranslationX = prevTranslationX - scrollSpeed;

//         if (Math.abs(newTranslationX) >= totalWidth / 2) {
//           return newTranslationX + totalWidth / 2;
//         }

//         return newTranslationX;
//       });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [isHovering, isDragging]);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   const handleMouseDown = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     setIsDragging(true);
//     setStartX(event.clientX);
//     setStartTranslationX(translationX);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseMove = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     if (isDragging && scrollSection.current) {
//       const totalWidth = scrollSection.current.scrollWidth;
//       const deltaX = event.clientX - startX;
//       const newTranslationX = startTranslationX + deltaX;

//       if (Math.abs(newTranslationX) >= totalWidth / 2) {
//         setTranslationX(
//           newTranslationX - (Math.sign(newTranslationX) * totalWidth) / 2
//         );
//       } else {
//         setTranslationX(newTranslationX);
//       }
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="w-screen overflow-visible ">
//         {/* <div className="sticky w-screen overflow-hidden relative"> */}
//         <div
//           ref={scrollSection}
//           className="flex flex-row gap-8 transition-transform"
//           style={{
//             transform: `translateX(${translationX}px)`,
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//         >
//           {children}
//           {children}
//         </div>
//       </div>
//     </div>
//   );

// }
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const time = 100;

export default function Carousel({ children }: { children: any[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [direction, setDirection] = useState("left");
  const [from, setFrom] = useState(0);
  const scrollSection = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    // setIsHovered(true);
    // controls.stop();
  };
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleMouseLeave = () => {
    // setIsHovered(false);
    const x = scrollSection.current?.getBoundingClientRect().x;
    // setFrom(x || 0);
  };

  useEffect(() => {
    if (scrollSection.current) {
      setScrollWidth(scrollSection.current.scrollWidth / 3);
      if (!isHovered) {
        controls.start({
          x: -scrollWidth * 2,
          transition: {
            duration: time,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            from: from,
          },
        });
      }
      setFrom(-scrollWidth);
    }
  }, [isHovered, controls, scrollWidth, from]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={scrollSection}
        className="flex space-x-8"
        animate={controls}
        drag={false}
        // drag={isHovered ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
      >
        {[...children, ...children, ...children].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 select-none flex"
            draggable={false}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
