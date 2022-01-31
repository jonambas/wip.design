import React from 'react';
import { money } from '@utils/money';

type Price = {
  amount: string;
  currencyCode: string;
};

export type MoneyProps = {
  priceRange?: {
    maxVariantPrice?: Price;
    minVariantPrice?: Price;
  };
  amount?: string;
  currencyCode?: string;
};

function Money(props: MoneyProps): JSX.Element | null {
  if (!props.priceRange) {
    const isUSD = props.currencyCode === 'USD';
    const currency = isUSD ? '$' : ''; // TODO support international?

    return (
      <>
        {currency}
        {money(props.amount)}
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
        {money(maxVariantPrice?.amount)}
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
