const CustomButton = ({
  onClick,
  children,
  className,
  ...buttonAttributes
}) => {
  return (
    <button
      onClick={onClick}
      className={`default-btn ${className}`}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
};

export default CustomButton;
