import React from 'react';
import Box from '@sweatpants/box';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

function Layout(props: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Navigation />
      <Box m={['500', '600', '800']} maxWidth="1600px">
        {props.children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
