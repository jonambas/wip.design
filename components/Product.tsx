import React from 'react';
import Link from 'next/link';
import Box from '@sweatpants/box';
import styled from 'styled-components';
import css from '@styled-system/css';
import Money from './Money';

const StyledSizer = styled(Box)`
  border: 3px solid transparent;
  transition: 0.15s;

  ${css({
    // bg: 'gray',
  })}
`;

const StyledLink = styled.a`
  position: relative;
  display: block;
  text-decoration: none;

  ${css({
    color: 'black',
  })}

  &:hover, &:active, &:focus {
    ${StyledSizer} {
      outline: transparent;
      border: 3px solid #000;
    }
  }
`;

export type ProductProps = {
  handle?: string;
  title?: string;
  id?: string;
  availableForSale?: boolean;
  totalInventory?: number;
  featuredImage?: {
    url?: string;
    altText?: string;
  };
  priceRange?: { [key: string]: any };
};

function Product(props: ProductProps): JSX.Element {
  const { title, handle, featuredImage, priceRange, totalInventory } = props;

  return (
    <Link href={`/product/${handle}`} passHref>
      <StyledLink>
        <StyledSizer
          position="relative"
          pt="133%"
          overflow="hidden"
          mb="200"
          borderRadius="400"
        >
          <Box
            as="img"
            mb="0"
            src={featuredImage?.url}
            width="100%"
            height="auto"
            position="absolute"
            top="50%"
            left="50%"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          {totalInventory === 0 && (
            <Box
              position="absolute"
              width="100%"
              height="auto"
              top="50%"
              left="0"
              right="0"
              style={{ transform: 'translate(0, -50%)' }}
              fontSize="400"
              fontWeight="600"
              mb="500"
              textAlign="center"
              bg="black"
              color="white"
            >
              SOLD OUT
            </Box>
          )}
        </StyledSizer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box as="p" m="0" fontSize="400" pr="300">
            {title}
          </Box>
          <Box font-size="500">
            <Money priceRange={priceRange} />
          </Box>
        </Box>
      </StyledLink>
    </Link>
  );
}

export default Product;
