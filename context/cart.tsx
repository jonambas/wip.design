import React from 'react';
import { saveCartID, getCartID } from '@utils/localCart';
import { createCart, getCart } from '@lib/queries';

type CartContextTypes = {
  cartID?: string;
  cart?: { [key: string]: any };
  addToCart?: (id: string) => Promise<void>;
  loading: boolean;
  // updateCart: (id: string) => Promise<void>;
};

const CartContext = React.createContext<CartContextTypes>({
  loading: false,
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
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const id = getCartID();
    if (id) {
      setCartID(id);
    }
  }, []);

  React.useEffect(() => {
    async function getCartContents(id: string) {
      setLoading(true);
      const response = await getCart(id);
      setCart(response.cart);
      setLoading(false);
    }

    // Grab cart contents if it exists
    if (cartID) {
      getCartContents(cartID);
    }
  }, [cartID]);

  // Creates a new Cart if one does not exist
  async function addToCart(merchandiseID: string) {
    if (!cartID) {
      // Create new Cart
      const response = await createCart(merchandiseID, 1);
      setCartID(response.cartCreate.cart.id);
      saveCartID(response.cartCreate.cart.id);
    } else {
      // Add to existing cart
    }
  }

  function updateCart() {
    console.log('add');
  }

  return (
    <CartContext.Provider value={{ cart, cartID, addToCart, loading }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
