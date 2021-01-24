import { useRef, useEffect } from 'react';
import { deepEquals } from '../../utils/deepEquals';

type UseEffectParams = Parameters<typeof useEffect>;
type EffectCallback = UseEffectParams[0];
type DependencyList = UseEffectParams[1];

export const compareMemoize = (ref:any, value: any) => {
  console.log('same', deepEquals(value, ref.current));

  if (!deepEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
};

export const useDeepCompareEffect = (
  callback: EffectCallback,
  dependencies: DependencyList
): void => {
  const ref = useRef();
  const nextDependencies = compareMemoize(ref, dependencies);
  useEffect(callback, nextDependencies)
};
