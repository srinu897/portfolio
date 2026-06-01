import { useEffect, useState } from "react";

const useScrollAnimation = () => {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return visible;
};

export default useScrollAnimation;