import { useRef, useEffect } from 'react';

/**
 * Custom React Hook usePrevious
 * @returns ref.current {current: "ANY"}
 * @default undefined
 * @description It store the previous state when state changes.
 * @example const previousState = usePrevios(state)
 */

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
