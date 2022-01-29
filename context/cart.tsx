import React from 'react';
import { saveCartID, getCartID } from '@utils/localCart';
import { createCart } from '@lib/queries';

type CartContextTypes = {
  cartID: string;
  addToCart: (id: string) => Promise<void>;
  // updateCart: (id: string) => Promise<void>;
};

const CartContext = React.createContext<CartContextTypes>(null);

export function useCartContext() {
  return React.useContext(CartContext);
}

type CartProviderProps = {
  children?: React.ReactNode;
};

function CartProvider(props: CartProviderProps): JSX.Element {
  const [cartID, setCartID] = React.useState<string>('');

  React.useEffect(() => {
    const id = getCartID();
    if (id) {
      setCartID(id);
    }
  }, []);

  // Creates a new Cart if one does not exist
  async function addToCart(merchandiseID: string) {
    if (!cartID) {
      // Create new Cart
      const response = await createCart(merchandiseID, 1);
      console.log(response.cartCreate.cart.id);
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
    <CartContext.Provider value={{ cartID, addToCart }}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
