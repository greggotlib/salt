export const handleDeepComparison = <T>(a: T, b: T): boolean => {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true
  }
  return false
}
