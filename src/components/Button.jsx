const Button = ({ text, className, id, onClick }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(); // Execute the scrollToProjects handler from Hero component
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
