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
            <p>jon@wip.design.</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
