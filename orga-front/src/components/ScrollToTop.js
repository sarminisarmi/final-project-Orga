import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pathname update ஆகும் போதெல்லாம் window scroll position-ஐ மேலே கொண்டு செல்லும்
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Render ஏதும் செய்ய வேண்டாம்; function மட்டும்
}

export default ScrollToTop;
