import React from 'react';
import { saveCartID, getCartID } from '@utils/localCart';
import { addItemToCart, createCart, getCart, updateCartLines } from '@lib/queries';

type CartContextTypes = {
  cartID?: string;
  cart?: { [key: string]: any };
  addToCart: (id: string) => Promise<void> | void;
  success: boolean;
  loading: boolean;
  updateCart: (id: string) => Promise<void> | void;
};

const CartContext = React.createContext<CartContextTypes>({
  loading: false,
  addToCart: () => {},
  success: false,
  updateCart: () => {},
});

export function useCartContext() {
  return React.useContext(CartContext);
}

type CartProviderProps = {
  children?: React.ReactNode;
};

function CartProvider(props: CartProviderProps): JSX.Element {
  const [cartID, setCartID] = React.useState<string>('');
  const [cart, setCart] = React.useState<{ [key: string]: any }>({});
  const [cartUpdated, setCartUpdated] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  React.useEffect(() => {
    const id = getCartID();
    if (id) {
      setCartID(id);
    }
  }, []);

  React.useEffect(() => {
    async function getCartContents(id: string) {
      if (cartUpdated) {
        setLoading(true);
        const response = await getCart(id);
        setCart(response.cart);
        setLoading(false);
        setCartUpdated(false);
      }
    }

    // Grab cart contents if it exists
    if (cartID) {
      getCartContents(cartID);
    }
  }, [cartID, cartUpdated]);

  // Creates a new Cart if one does not exist
  async function addToCart(merchandiseID: string) {
    setLoading(true);
    setSuccess(false);

    if (!cartID) {
      // Create new Cart
      const response = await createCart(merchandiseID, 1);
      setCartID(response.cartCreate.cart.id);
      saveCartID(response.cartCreate.cart.id);
    } else {
      // Add to existing cart

      // Prepare Lines
      const currentLines = cart.lines.edges.map(({ node }: any) => ({
        id: node.id,
        merchandiseId: node.merchandise.id,
        quantity: node.quantity,
      }));

      // Item is already in cart, so increment its quantity
      if (
        currentLines.find(({ merchandiseId }: any) => merchandiseID === merchandiseId)
      ) {
        const indexToUpdate = currentLines.findIndex(
          ({ merchandiseId }: any) => merchandiseID === merchandiseId,
        );
        const updatedLine = {
          ...currentLines[indexToUpdate],
          quantity: currentLines[indexToUpdate].quantity + 1,
        };
        await updateCartLines(
          cartID,
          `[{ id: "${updatedLine.id}", quantity: ${updatedLine.quantity}, }]`,
        );
      } else {
        // Item isnt in cart, so add it
        await addItemToCart(cartID, merchandiseID, 1);
      }
    }

    setCartUpdated(true);
    setSuccess(true);
  }

  function updateCart() {
    console.log('add');
  }

  return (
    <CartContext.Provider
      value={{ success, cart, cartID, addToCart, loading, updateCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
