export function isErrorRate(oldRate: number, newRate: number): boolean {
  const tenPercent = oldRate / 10;
  if (oldRate > newRate) {
    return oldRate - newRate > tenPercent;
  } else {
    return newRate - oldRate > tenPercent;
  }
}
