import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #000;
  border: none;
  color: #fff;
  margin: 0;
  border-radius: 0;
  padding: 0.8rem 1rem;

  &:hover {
    cursor: pointer;
    background: #0000ff;
  }
`;

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children?: React.ReactNode;
};

function Button(props: ButtonProps): JSX.Element {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
