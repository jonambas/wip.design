import Cookies from 'js-cookie';
const store = process.env.NEXT_PUBLIC_COOKIE_NAME;

export function saveCartID(id: string) {
  if (store) {
    Cookies.set(store, id, { expires: 14 });
  }
}

export function getCartID(): string | undefined {
  if (store) {
    return Cookies.get(store);
  }
}
