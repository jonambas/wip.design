import Box from '@sweatpants/box';
import React from 'react';

type PageHeaderProps = {
  children?: React.ReactNode;
};

function PageHeader(props: PageHeaderProps): JSX.Element {
  return (
    <Box mb="1000">
      <Box
        as="h1"
        fontSize={['3.5rem', '5rem', '7rem']}
        fontFamily="sans"
        mb="400"
        pt="900"
        style={{ textTransform: 'uppercase' }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default PageHeader;
