import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Terms and Conditions</title>
          <meta name="description" content="WIP Design Terms and Conditions" />
        </Head>
        <PageHeader>Terms & Conditions</PageHeader>

        <Box>
          <Box color="black" fontFamily="mono" maxWidth="35rem">
            <Box mb="700">
              <Box as="h2" mb="200" fontSize="500">
                Need Help?
              </Box>
              <p>Email jon@wip.design for assistance.</p>
            </Box>

            <Box mb="700">
              <Box as="h2" mb="200" fontSize="500">
                Customer Satisfaction
              </Box>
              <p>
                Our products are sold online in limited availability and quantity. We have done our
                best to display our items as accurately as possible. We produce handmade artwork.
                Please be aware that variations in style, color, size, shape, and look may occur. If
                you are not satisfied with your order, please contact us for assistance.
              </p>
            </Box>

            <Box mb="700">
              <Box as="h2" mb="200" fontSize="500">
                Shipping
              </Box>
              <p>
                Please allow 2-3 weeks for shipping and delivery. We ship only to the United States.
                We are not responsible for orders that may get lost or stolen during transit or upon
                delivery. Please contact your mail carrier to locate your package.
              </p>
            </Box>

            <Box mb="700">
              <Box as="h2" mb="200" fontSize="500">
                Returns
              </Box>
              <p>
                All sales are final. We do not accept returns and are unable to edit your under once
                placed.
              </p>
            </Box>

            <Box mb="700">
              <Box as="h2" mb="200" fontSize="500">
                Damaged Products
              </Box>
              <p>
                We are not responsible for damages caused during shipment. It is the responsibility
                of the recipient of the product to file a claim with the shipping company at the
                time the package is received.
              </p>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default About;
