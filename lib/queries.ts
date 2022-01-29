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
            priceV2 {
              amount
              currencyCode
            }
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

export async function getCart(id: string) {
  const result = await shopify(`
  {
    cart(id: "${id}") {
      checkoutUrl
      id
      updatedAt
      estimatedCost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalDutyAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 250) {
        edges {
          node {
            quantity
            id
            merchandise {
              ... on ProductVariant {
                id
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  ... on Product {
                    handle
                    title
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
                
              }
            }
          }
        }
      }
    }
  }
  `);
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

export async function updateCartLines(cartID: string, lines: string) {
  const result = await shopify(`
    mutation
      {
        cartLinesUpdate(
          cartId: "${cartID}",
          lines: ${lines}
        ) {
          cart {
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

export async function addItemToCart(
  cartID: string,
  merchandiseID: string,
  quantity: number,
) {
  const result = await shopify(`
    mutation
      {
        cartLinesAdd(
          cartId: "${cartID}",
          lines: [{ merchandiseId: "${merchandiseID}", quantity: ${quantity} }]
        ) {
          cart {
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
