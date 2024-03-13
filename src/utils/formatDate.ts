export function formatDate(milliseconds: number) {
  return new Intl.DateTimeFormat("pr-br", { timeStyle: "medium" }).format(milliseconds);
}
