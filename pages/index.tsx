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
        <Box as="h1" fontSize={['3.5rem', '5rem', '7rem']} fontFamily="sans" mb="1rem">
          WIP.DESIGN
        </Box>
        <Box pl={['0', '1rem', '1.3rem']}>
          <Box as="p" fontFamily="mono" color="black" maxWidth="18rem">
            WIP is a creative studio established in 2022 based in Baltimore, Maryland.
          </Box>
          <Box as="p" fontFamily="mono" color="black" maxWidth="18rem">
            jon@jonambas.com
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
