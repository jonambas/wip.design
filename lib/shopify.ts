const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT as string;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN as string;

export async function shopify(query: string) {
  const options = {
    endpoint: endpoint,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      'Content-Type': 'application/graphql',
    },
    body: query,
  };

  try {
    const data = await fetch(endpoint, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
