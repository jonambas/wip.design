export function money(n?: string): string {
  if (!n) {
    return '';
  }

  return Number(n).toFixed(2);
}
