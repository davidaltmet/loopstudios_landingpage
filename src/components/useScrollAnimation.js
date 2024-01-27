import { useState, useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect().top;
        const isVisible = rect <= window.innerHeight;
        setShowAnimation(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const manejarScroll = () => {
  //     setShowAnimation(true);
  //   };

  //   return () => {
  //     window.addEventListener("scroll", manejarScroll);
  //   };
  // }, []);

  return { showAnimation, sectionRef };
};

export default useScrollAnimation;
