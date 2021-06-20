export const currencyFormatter = ({ locale, currency }, price) =>
  Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  })
    .format(price)
    .slice(1);
