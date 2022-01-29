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
  amount?: number;
  currencyCode?: string;
};

function Money(props: MoneyProps): JSX.Element | null {
  if (!props.priceRange) {
    const isUSD = props.currencyCode === 'USD';
    const currency = isUSD ? '$' : ''; // TODO support international?
    return (
      <>
        {currency}
        {props.amount}
      </>
    );
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
