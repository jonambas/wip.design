import Head from 'next/head';
import Box from '@sweatpants/box';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { useCartContext } from '@context/cart';
import Button from '@components/Button';
import Money from '@components/Money';
import { countTotalItems } from '@utils/cart';
import Link from 'next/link';
import A from '@components/A';
import Minus from '@icons/Minus';
import Add from '@icons/Add';

const Cart = () => {
  const { cartID, cart, loading, updateCartLine } = useCartContext();
  const totalItems = countTotalItems(cart) || 0;

  function handleUpdate(id: string, quantity: number) {
    updateCartLine(id, quantity);
  }

  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="WIP Design is a creative studio based in Baltimore, MD."
        />
      </Head>
      <PageHeader>Cart</PageHeader>
      {!totalItems && !loading && (
        <>
          <Box py="800" fontSize="600">
            Your cart is empty.
          </Box>
        </>
      )}
      {cartID && totalItems && cart ? (
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
            {cart.lines.edges.map(({ node }: any, i: number) => {
              return (
                <Box
                  key={i}
                  py="500"
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  borderBottom="1px solid #000"
                >
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="clear"
                      onClick={() => handleUpdate(node.merchandise.id, node.quantity + 1)}
                      disabled={loading}
                    >
                      <Add />
                    </Button>
                    <Box px="200">{node.quantity}</Box>
                    <Button
                      variant="clear"
                      onClick={() => handleUpdate(node.merchandise.id, node.quantity - 1)}
                      disabled={loading}
                    >
                      <Minus />
                    </Button>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Link href={`/product/${node.merchandise.product.handle}`} passHref>
                      <A>{node.merchandise.product.title}</A>
                    </Link>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="flex-end">
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
      ) : null}
    </Layout>
  );
};

export default Cart;
