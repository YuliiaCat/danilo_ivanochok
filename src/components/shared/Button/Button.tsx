import React from "react";
import { Link, Path } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  to?: string | Partial<Path>;
  buttonType?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  children,
  className = '',
  to = '',
  onClick = () => {},
  buttonType = 'button',
}) => {

  return to ? (
    <Link
      to={to}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      type={buttonType}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;