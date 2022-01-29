import React from 'react';
import styled from 'styled-components';
import Box from '@sweatpants/box';

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
  loading?: boolean;
};
type ButtonButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  as?: 'button';
  loading?: boolean;
};

type ButtonProps = ButtonAProps | ButtonButtonProps;

function Button(props: ButtonProps): JSX.Element {
  const { as = 'button', loading, ...rest } = props;
  return (
    <Box display="inline-block" position="relative">
      <StyledButton as={as} {...rest} />
      {loading && (
        <Box
          aria-hidden="true"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          bg="#000"
        >
          ...
        </Box>
      )}
    </Box>
  );
}

export default Button;
