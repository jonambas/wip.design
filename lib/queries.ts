import { shopify } from '@lib/shopify';

export async function getAllProducts() {
  const result = await shopify(`
  {
    products(first: 25) {
      edges {
        node {
          availableForSale
          handle
          id
          title
          tags
          totalInventory
          updatedAt
          featuredImage {
            url
            altText
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }`);

  return result.data;
}

export const shop = `
{
	shop {
    name
  }
}
`;
