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
    <Box as="footer" m="0" pt="1000" overflow="hidden">
      <Box px={['500', '600', '800']} mb="1000">
        <Box mb="500">
          <Link href="/about" passHref>
            <A>About</A>
          </Link>
        </Box>
        <Box mb="500">
          <A href="https://www.instagram.com/wip__design/">Instagram</A>
        </Box>
        <Box mb="500">
          <Link href="/terms-conditions" passHref>
            <A>Terms & Conditions</A>
          </Link>
        </Box>
        <Box fontSize="200">
          Copyright © 2000–2022 WIP Design LLC. All Rights Reserved.
        </Box>
      </Box>
      <Animator>
        <Box fontFamily="sans" fontSize="500" aria-hidden="true">
          Support your local art Dealer. Support your local art Dealer. Support your local
          art Dealer. Support your local art Dealer. Support your local art Dealer.
          Support your local art Dealer. Support your local art Dealer. Support your local
          art Dealer. Support your local art Dealer. Support your local art Dealer.
          Support your local art Dealer. Support your local art Dealer. Support your local
          art Dealer. Support your local art Dealer. Support your local art Dealer.
          Support your local art Dealer.
        </Box>
      </Animator>
    </Box>
  );
}

export default Footer;
