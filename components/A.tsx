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

function A(props: AProps): JSX.Element {
  return <StyledA {...props} />;
}

export default A;
