import React from 'react';
import Link from 'next/link';
import Box from '@sweatpants/box';
import styled from 'styled-components';
import css from '@styled-system/css';
import Money from './Money';

const StyledSizer = styled(Box)`
  border: 2px solid transparent;
  transition: 0.15s;
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
      border: 2px solid #000;
    }
  }
`;

export type ProductProps = {
  handle?: string;
  title?: string;
  id?: string;
  availableForSale?: boolean;
  featuredImage?: {
    url?: string;
    altText?: string;
  };
  priceRange?: { [key: string]: any };
};

function Product(props: ProductProps): JSX.Element {
  const { title, handle, featuredImage, priceRange } = props;

  return (
    <Link href={`/product/${handle}`} passHref>
      <StyledLink>
        <StyledSizer position="relative" pt="133%" overflow="hidden" mb="200" borderRadius="35px">
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
