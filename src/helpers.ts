declare let returnedValue: unknown;

export function createScalerLibrary<T>(
  callback: (setReturnValue: (value: T) => void) => void
): void {
  callback((value: T) => {
    returnedValue = value;
  });
}
