import React from 'react';
import { saveCartID, getCartID } from '@utils/localCart';
import { addItemToCart, createCart, getCart, updateCartLines } from '@lib/queries';
import { useToastContext } from '@context/toast';

type CartContextTypes = {
  cartID?: string;
  cart?: { [key: string]: any };
  addToCart: (id: string) => Promise<void> | void;
  success: boolean;
  loading: boolean;
  updateCartLine: (id: string, quantity: number) => Promise<void> | void;
};

const CartContext = React.createContext<CartContextTypes | undefined>(undefined);

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
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

  const { toast } = useToastContext();

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

  async function addToCart(merchandiseID: string) {
    setLoading(true);
    setSuccess(false);

    if (!cartID) {
      // Create new Cart because it doesn't exist
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
    toast('Item Added to Cart');
  }

  async function updateCartLine(merchandiseID: string, quantity: number) {
    setLoading(true);
    setSuccess(false);

    // Prepare Lines
    const currentLines = cart.lines.edges.map(({ node }: any) => ({
      id: node.id,
      merchandiseId: node.merchandise.id,
      quantity: node.quantity,
    }));

    const indexToUpdate = currentLines.findIndex(
      ({ merchandiseId }: any) => merchandiseID === merchandiseId,
    );

    const updatedLine = {
      ...currentLines[indexToUpdate],
      quantity: quantity,
    };

    await updateCartLines(
      cartID,
      `[{ id: "${updatedLine.id}", quantity: ${updatedLine.quantity}, }]`,
    );

    setCartUpdated(true);
    setSuccess(true);
    toast('Cart Updated');
  }

  return (
    <CartContext.Provider
      value={{ success, cart, cartID, addToCart, loading, updateCartLine }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
