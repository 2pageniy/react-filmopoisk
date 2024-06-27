import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce<T>(callback: (...args: T[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<ReturnType<typeof  setTimeout>>;
    console.log(2135);
    return useCallback((...args: T[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
