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

export async function getProduct(handle: string) {
  const result = await shopify(`
  {
    product(handle: "${handle}") {
      availableForSale
      description
      descriptionHtml
      handle
      id
      title
      tags
      totalInventory
      updatedAt
      variants(first: 25) {
        edges {
          node {
            id
          }
        }
      }
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
  }`);

  return result.data;
}

export async function createCart(merchandiseID: string, quantity: number) {
  const result = await shopify(`
  mutation 
    {
      cartCreate(input: {
        lines: [{ merchandiseId: "${merchandiseID}", quantity: ${quantity} }]
      }) {
        cart {
          checkoutUrl
          id
          updatedAt
        }
        userErrors {
          field
          message
        }
      }
    }      
  `);

  return result.data;
}

export const shop = `
{
	shop {
    name
  }
}
`;
