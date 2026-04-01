import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SquiggleButton.css";

const DEFAULT_DELAY = 450;

export default function SquiggleButton({
  to,
  children,
  className = "",
  delay = DEFAULT_DELAY,
}) {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (isAnimating) return;

    setIsAnimating(true);

    timeoutRef.current = setTimeout(() => {
      navigate(to);
    }, delay);
  };

  return (
    <div className={`squiggle-button-wrapper ${className}`}>
      <div className={`squiggle-button ${isAnimating ? "is-animating" : ""}`}>
        
        <div className="squiggle-button__art" aria-hidden="true">
          
          <div className="squiggle-button__art-layer squiggle-button__art-layer--base">
            <img src="/images/squiggle.png" alt="" />
          </div>

          <div className="squiggle-button__art-layer squiggle-button__art-layer--accent">
            <img src="/images/squiggle.png" alt="" />
          </div>

        </div>

        <button
          type="button"
          className="squiggle-button__button"
          onClick={handleClick}
        >
          <span className="squiggle-button__label">{children}</span>
        </button>

      </div>
    </div>
  );
}