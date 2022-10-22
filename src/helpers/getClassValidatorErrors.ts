export function getClassValidatorErrors(errors: Array<any>): Array<any> {
  return errors
    .map((item) => {
      return Object.values(item.constraints).map((constraint) => {
        return { message: constraint };
      });
    })
    .flat(1);
}
