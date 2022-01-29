import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
  &:hover {
    text-decoration: line-through;
  }

  &,
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

type AProps = React.ComponentPropsWithoutRef<'a'> & {
  children?: React.ReactNode;
};

const A = React.forwardRef<HTMLAnchorElement, AProps>(function A(props, userRef) {
  return <StyledA {...props} ref={userRef} />;
});

export default A;
