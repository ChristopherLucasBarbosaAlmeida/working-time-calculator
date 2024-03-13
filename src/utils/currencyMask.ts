export function currencyMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2}$)/, "$1,$2")
    .replace(/(\d+)(\d{3})/, "$1.$2");
}
