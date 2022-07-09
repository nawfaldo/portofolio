import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPostiion] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPostiion(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
