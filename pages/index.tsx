import type { NextPage } from 'next';
import Head from 'next/head';
import Box from '@sweatpants/box';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WIP</title>
        <meta
          name="description"
          content="WIP Design is a creative studio based in Baltimore, MD."
        />
      </Head>
      <Box>
        <Box as="h1" fontSize={['3.5rem', '5rem', '7rem']} fontFamily="sans" mb="800">
          WIP.DESIGN
        </Box>
        <Box mb="900" display="grid" gridTemplateColumns={['1fr', '1fr 1fr']}>
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
            <p>jon@wip.design.</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
