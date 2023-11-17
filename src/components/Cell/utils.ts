export function isErrorRate(oldRate: number, newRate: number): boolean {
  if (oldRate > newRate) {
    return oldRate / newRate > 1.1;
  } else {
    return newRate / oldRate > 1.1;
  }
}
