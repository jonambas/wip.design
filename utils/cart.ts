export function countTotalItems(cart?: { [key: string]: any }) {
  if (!cart) {
    return 0;
  }

  const lines = cart?.lines?.edges || [];
  const count = lines.reduce((acc: number, { node }: any) => {
    return acc + node.quantity;
  }, 0);
  return count;
}
