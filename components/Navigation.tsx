import React from 'react';
import Link from 'next/link';
import Box from '@sweatpants/box';
import A from '@components/A';
import { useCartContext } from '@context/cart';
import { countTotalItems } from '@utils/cart';

function Navigation(): JSX.Element {
  const { cart, loading } = useCartContext();
  const itemsInCart = countTotalItems(cart) || 0;

  return (
    <Box as="nav" position="fixed" top="0" left="0" right="0" color="#FFF" zIndex="100">
      <Box
        display="flex"
        justifyContent="flex-end"
        py="500"
        px={['500', '600', '800']}
        fontSize="400"
        fontWeight="400"
      >
        <Box px="400">
          <Link href="/" passHref>
            <A>Shop</A>
          </Link>
        </Box>
        <Box pl="400">
          <Link href="/cart" passHref>
            <A>Cart {itemsInCart ? `[${itemsInCart}]` : ''}</A>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Navigation;
