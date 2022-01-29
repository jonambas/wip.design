import React from 'react';
import Box from '@sweatpants/box';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import A from '@components/A';

const Scroll = keyframes`
  from {
    transform: translateX(-10%);
  }
  to {
    transform: translateX(-210%);
  }
`;

const Animator = styled(Box)`
  animation: 60s infinite ${Scroll} linear;
  white-space: nowrap;
  text-transform: uppercase;
`;

function Footer(): JSX.Element {
  return (
    <Box m="0" pt="1000" overflow="hidden">
      <Box px={['500', '600', '800']} mb="1000">
        <Box mb="500">
          <Link href="/about" passHref>
            <A>About</A>
          </Link>
        </Box>
        <Box mb="500">Instagram</Box>
        <Box>
          <Link href="/terms-conditions" passHref>
            <A>Terms & Conditions</A>
          </Link>
        </Box>
      </Box>
      <Animator mb="100">
        <Box fontFamily="sans" fontSize="500" aria-hidden="true">
          Support your local art Dealer. Support your local art Dealer. Support your local art
          Dealer. Support your local art Dealer. Support your local art Dealer. Support your local
          art Dealer. Support your local art Dealer. Support your local art Dealer. Support your
          local art Dealer. Support your local art Dealer. Support your local art Dealer. Support
          your local art Dealer. Support your local art Dealer. Support your local art Dealer.
          Support your local art Dealer. Support your local art Dealer.
        </Box>
      </Animator>
    </Box>
  );
}

export default Footer;
