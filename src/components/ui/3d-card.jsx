import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const MouseEnterContext = createContext(undefined);

const CardContainer = ({
  children,
  className,
  containerClassName,
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    currentRef.addEventListener("mouseenter", handleMouseEnter);
    currentRef.addEventListener("mousemove", handleMouseMove);
    currentRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mouseenter", handleMouseEnter);
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-8 md:py-20 flex items-center justify-center w-full overflow-hidden",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear w-full",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-96 aspect-[4/3] md:h-96 md:w-96 [transform-style:preserve-3d] [perspective:1000px] flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d] [perspective:1000px]">
        <div className="absolute inset-0 [transform-style:preserve-3d] [perspective:1000px]">
          {children}
        </div>
      </div>
    </div>
  );
};

const CardItem = ({
  as: Component = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const [isMouseEntered] = useContext(MouseEnterContext);

  return (
    <Component
      className={cn("", className)}
      style={{
        transform: isMouseEntered
          ? `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : `translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { CardContainer, CardBody, CardItem }; 