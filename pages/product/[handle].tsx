import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';
import Money from '@components/Money';
import PageHeader from '@components/PageHeader';
import Button from '@components/Button';
import { getProduct } from '@lib/queries';
import { useCartContext } from '@context/cart';
import Gallery from '@components/Gallery';

type ProductPageProps = {
  shopify: { [key: string]: any };
};

function ProductPage(props: ProductPageProps): JSX.Element {
  const { product } = props.shopify;
  const { addToCart, loading } = useCartContext();
  const firstVariant = product.variants.edges[0].node;
  const images = product?.images?.edges;

  function handleAddToCart() {
    addToCart(firstVariant.id);
  }

  console.log(product);

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <PageHeader>{product.title}</PageHeader>
      <Box>
        <Box
          display="grid"
          gridTemplateColumns={['1fr', '1fr 1fr']}
          gridGap={['400', '800']}
        >
          <Box display="flex" justifyContent="center">
            <Box maxWidth="40rem">
              <Gallery images={images} />
            </Box>
          </Box>
          <Box>
            <Box fontSize="500" mb="500">
              <Money priceRange={product.priceRange} />
            </Box>
            <Box mb="500" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            <Button onClick={handleAddToCart} disabled={loading} loading={loading}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof context.params?.handle === 'string') {
    const result = await getProduct(context.params.handle);
    return {
      props: {
        shopify: result,
      },
    };
  }
  return { props: {} };
}

export default ProductPage;
