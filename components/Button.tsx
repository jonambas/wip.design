import React from 'react';
import styled from 'styled-components';
import Box from '@sweatpants/box';
import css from '@styled-system/css';

const StyledButton = styled.div<{
  $variant?: 'clear' | 'default';
  $size?: 'small' | 'default';
}>`
  background: ${({ $variant }) => ($variant === 'clear' ? '#fff' : '#000')};
  color: ${({ $variant }) => ($variant === 'clear' ? '#000' : '#fff')};

  border: none;
  margin: 0;
  border-radius: 0;
  padding: 0.8rem 1rem;
  text-decoration: none;

  ${({ $size }) =>
    css({
      fontSize: $size === 'small' ? '300' : '400',
      px: $size === 'small' ? '400' : '600',
      py: $size === 'small' ? '300' : '400',
    })}

  &:hover {
    cursor: pointer;
    background: #0000ff;
    color: #fff;
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

type CommonProps = {
  loading?: boolean;
  variant?: 'clear' | 'default';
  size?: 'small' | 'default';
};
type ButtonAProps = CommonProps &
  React.ComponentPropsWithoutRef<'a'> & {
    as?: 'a';
  };
type ButtonButtonProps = CommonProps &
  React.ComponentPropsWithoutRef<'button'> & {
    as?: 'button';
  };

type ButtonProps = ButtonAProps | ButtonButtonProps;

function Button(props: ButtonProps): JSX.Element {
  const {
    as = 'button',
    loading,
    variant = 'default',
    size = 'default',
    ...rest
  } = props;
  return (
    <Box display="inline-block" position="relative">
      <StyledButton as={as} $variant={variant} $size={size} {...rest} />
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
          color={variant === 'clear' ? '#000' : '#fff'}
          bg={variant === 'clear' ? '#fff' : '#000'}
        >
          ...
        </Box>
      )}
    </Box>
  );
}

export default Button;
