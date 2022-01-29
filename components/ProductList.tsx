import React from 'react';
import Box from '@sweatpants/box';
import Product, { ProductProps } from '@components/Product';

type ProductListProps = {
  products: { node: ProductProps }[];
};

function ProductList(props: ProductListProps): JSX.Element {
  return (
    <Box
      display="grid"
      gridTemplateColumns={['1fr 1fr', null, '1fr 1fr 1fr']}
      gridGap={['600', '900']}
    >
      {props.products.map(({ node }) => {
        return <Product key={node.handle} {...node} />;
      })}
    </Box>
  );
}

export default ProductList;
