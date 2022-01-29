import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Box from '@sweatpants/box';
import { getAllProducts } from '@lib/queries';
import ProductList from '@components/ProductList';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

type HomeProps = {
  shopify: { [key: string]: any };
};

const Home = (props: HomeProps) => {
  const { products } = props.shopify;

  if (!products) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>WIP</title>
        <meta
          name="description"
          content="WIP Design is a creative studio based in Baltimore, MD."
        />
      </Head>
      <PageHeader>WIP Design</PageHeader>
      <Box mb="1000">
        <ProductList products={products.edges} />
      </Box>
    </Layout>
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
