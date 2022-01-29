import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
          <meta
            name="description"
            content="WIP Design is a creative studio based in Baltimore, MD."
          />
        </Head>
        <PageHeader>About</PageHeader>
        <Box mb="900" display="grid" gridTemplateColumns="1fr 1fr">
          <div />
          <Box color="black" fontFamily="mono" maxWidth="20rem">
            <Box mb="400">
              Welcome to WIP Design – the creative studio of Jon Ambas. Established in 2022 and
              based in Baltimore, Maryland.
            </Box>
            <Box mb="400">
              Our mission is to deliver bespoke design and engineering solutions with the highest
              level of craftmanship for our clients and create unique artwork to share with the
              world.
            </Box>
            <Box mb="400">We create graphics, design systems, and digital products.</Box>
            <p>You can contact us by emailing Jon at jon@wip.design.</p>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default About;
