export function getTimingRequest(initialDatetime: Date): number {
  return new Date().getTime() - initialDatetime.getTime();
}
