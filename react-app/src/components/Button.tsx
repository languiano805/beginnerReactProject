import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        Press Me
      </button>
    </div>
  );
};

export default Button;
