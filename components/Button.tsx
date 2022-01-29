import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  background: #000;
  border: none;
  color: #fff;
  margin: 0;
  border-radius: 0;
  padding: 0.8rem 1rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background: #0000ff;
  }
`;

type ButtonAProps = React.ComponentPropsWithoutRef<'a'> & {
  as?: 'a';
};
type ButtonButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  as?: 'button';
};
type ButtonProps = ButtonAProps | ButtonButtonProps;

function Button(props: ButtonProps): JSX.Element {
  const { as = 'button', ...rest } = props;
  return <StyledButton as={as} {...rest} />;
}

export default Button;
