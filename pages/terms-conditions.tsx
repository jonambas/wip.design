import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Terms and Conditions</title>
          <meta
            name="description"
            content="WIP Design is a creative studio based in Baltimore, MD."
          />
        </Head>
        <Box mb="1000">
          <Box as="h1" fontSize={['3.5rem', '5rem', '7rem']} fontFamily="sans" mb="1000">
            TERMS & CONDITIONS
          </Box>

          <Box mb="900" display="grid" gridTemplateColumns="1fr 1fr"></Box>
        </Box>
      </Layout>
    </>
  );
};

export default About;
