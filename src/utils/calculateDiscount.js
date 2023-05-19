export default function calculateDiscount(costPrice, sellingPrice) {
  const discountPercentage = Math.round(
    ((costPrice - sellingPrice) / costPrice) * 100
  );
  return discountPercentage;
}
