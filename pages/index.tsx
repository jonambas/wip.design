import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Box from '@sweatpants/box';
import { getAllProducts } from '@lib/queries';
import ProductList from '@components/ProductList';
import Footer from '@components/Footer';

type HomeProps = {
  shopify: { [key: string]: any };
};

const Home = (props: HomeProps) => {
  const { products } = props.shopify;

  if (!products) {
    return null;
  }

  return (
    <>
      <Box m={['500', '600', '800']}>
        <Head>
          <title>WIP</title>
          <meta
            name="description"
            content="WIP Design is a creative studio based in Baltimore, MD."
          />
        </Head>
        <Box mb="1000">
          <Box as="h1" fontSize={['3.5rem', '5rem', '7rem']} fontFamily="sans" mb="1rem">
            WIP.DESIGN
          </Box>
          <Box>
            <Box as="p" fontFamily="mono" color="black" maxWidth="18rem">
              WIP is a creative studio established in 2022 based in Baltimore, Maryland.
            </Box>
            <Box as="p" fontFamily="mono" color="black" maxWidth="18rem">
              jon@wip.design
            </Box>
          </Box>
        </Box>

        <Box mb="1000">
          <ProductList products={products.edges} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context: GetServerSideProps) {
  const result = await getAllProducts();
  return {
    props: {
      shopify: result,
    },
  };
}

export default Home;
