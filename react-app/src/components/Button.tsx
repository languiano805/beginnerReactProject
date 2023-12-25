import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}



const BigButton = styled.button`
  background: teal;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer

`



const Button = ({ onClick }: Props) => {
  return (
    <div>
      <BigButton onClick={onClick}>
        Press Me
      </BigButton>
    </div>
  );
};

export default Button;
