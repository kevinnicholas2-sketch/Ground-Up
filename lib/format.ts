export function money(n: number): string {
  return "$" + n.toFixed(2);
}

export function itemCount(n: number): string {
  return n + (n === 1 ? " item" : " items");
}
