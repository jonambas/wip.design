import React from 'react';

type Price = {
  amount: string;
  currencyCode: string;
};

export type MoneyProps = {
  priceRange?: {
    maxVariantPrice?: Price;
    minVariantPrice?: Price;
  };
};

function Money(props: MoneyProps): JSX.Element | null {
  if (!props.priceRange) {
    return null;
  }

  const { maxVariantPrice, minVariantPrice } = props.priceRange;

  const isUSD = maxVariantPrice?.currencyCode === 'USD';
  const currency = isUSD ? '$' : ''; // TODO support international?

  if (maxVariantPrice?.amount === minVariantPrice?.amount) {
    return (
      <>
        {currency}
        {maxVariantPrice?.amount}
      </>
    );
  }

  return (
    <>
      {currency}
      {minVariantPrice?.amount} – {currency}
      {maxVariantPrice?.amount}
    </>
  );
}

export default Money;
