import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { useCartContext } from '@context/cart';
import Button from '@components/Button';
import Money from '@components/Money';

const Cart = () => {
  const { cartID, cart, loading } = useCartContext();
  const totalItems = cart?.lines?.edges.length;

  return (
    <>
      <Layout>
        <Head>
          <title>Cart</title>
          <meta
            name="description"
            content="WIP Design is a creative studio based in Baltimore, MD."
          />
        </Head>
        <PageHeader>Cart</PageHeader>
        {loading && (
          <Box py="800" fontSize="600">
            Loading Cart...
          </Box>
        )}
        {!cartID && !loading && (
          <>
            <Box py="800" fontSize="600">
              Your cart is empty.
            </Box>
          </>
        )}
        {cartID && cart?.checkoutUrl && (
          <>
            <Box mb="500">
              {totalItems} item{totalItems === 1 ? '' : 's'} in your cart.
            </Box>
            <Box
              pt="500"
              pb="200"
              fontWeight="600"
              fontSize="300"
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
            >
              <Box>Quantity</Box>
              <Box>Title</Box>
              <Box textAlign="right">Amount</Box>
            </Box>
            <Box borderTop="1px solid #000">
              {cart.lines.edges.map(({ node }: any, i) => {
                return (
                  <Box
                    key={i}
                    py="500"
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    borderBottom="1px solid #000"
                  >
                    <Box>{node.quantity}</Box>
                    <Box>{node.merchandise.product.title}</Box>
                    <Box textAlign="right">
                      <Money {...node.merchandise.priceV2} />
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box py="500" display="flex" justifyContent="flex-end">
              <Box fontWeight="600" pr="500">
                Estimated Total
              </Box>
              <Box fontWeight="600">
                <Money {...cart.estimatedCost.totalAmount} />
              </Box>
            </Box>
            <Box textAlign="right">
              <Button as="a" href={cart.checkoutUrl}>
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Layout>
    </>
  );
};

export default Cart;
