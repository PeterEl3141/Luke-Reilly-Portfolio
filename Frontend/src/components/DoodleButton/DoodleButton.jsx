import "./DoodleButton.css";
import { Link } from "react-router-dom";

const DoodleButton = ({
  to,
  href,
  children,
  className = "",
  external = false,
}) => {
  const buttonClass = `doodle-button ${className}`.trim();

  const content = (
    <>
      <span className="doodle-button-label">{children}</span>

      <svg
        className="doodle-button-ring"
        viewBox="0 0 220 80"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M20 42
             C16 20, 51 8, 109 12
             C168 9, 205 22, 200 41
             C206 58, 170 70, 109 66
             C47 69, 15 56, 20 42 Z"
        />
      </svg>
    </>
  );

  if (external && href) {
    return (
      <a
        href={href}
        className={buttonClass}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClass}>
      {content}
    </button>
  );
};

export default DoodleButton;