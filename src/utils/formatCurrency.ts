export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pr-br", {
    currency: "brl",
    style: "currency",
  }).format(value);
}
