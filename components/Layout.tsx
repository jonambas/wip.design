import React from 'react';
import Box from '@sweatpants/box';
import Footer from '@components/Footer';

function Layout(props: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Box m={['500', '600', '800']}>{props.children}</Box>
      <Footer />
    </>
  );
}

export default Layout;
