export function objectShapeValidate(
  keysName: Array<string>,
  obj: any,
): boolean {
  const keysReceived = Object.keys(obj);
  let resp = true;

  if (!keysReceived.length) {
    resp = false;
  }

  if (keysReceived.length > keysName.length) {
    resp = false;
  }

  keysReceived.forEach((key) => {
    if (!keysName.includes(key)) {
      resp = false;
    }
  });

  return resp;
}
