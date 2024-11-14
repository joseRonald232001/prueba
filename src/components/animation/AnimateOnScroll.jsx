import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./animateOnScroll.css"; // Estilos de la animación

function AnimateOnScroll({ children, animationName, duration = "1s", delay = "0s", triggerOnce = true }) {
  const [hasAnimated, setHasAnimated] = useState(false); // Estado para asegurar que la animación solo ocurra una vez
  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // El observador está observando el viewport
      rootMargin: "0px",
      threshold: 0.5, // El 50% del elemento debe estar visible para activar la animación
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true); // Activar la animación
        if (triggerOnce) {
          observer.disconnect(); // Dejar de observar después de que la animación se haya activado
        }
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observar el elemento
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Limpiar el observador cuando el componente se desmonte
      }
    };
  }, [triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${hasAnimated ? animationName : ""}`}
      style={{ animationDuration: duration, animationDelay: delay }}
    >
      {children}
    </div>
  );
}

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  animationName: PropTypes.string.isRequired,
  duration: PropTypes.string,
  delay: PropTypes.string,
  triggerOnce: PropTypes.bool,
};

export default AnimateOnScroll;
