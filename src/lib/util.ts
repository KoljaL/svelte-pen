/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias */

/**
 * Reduce calls to the passed function.
 *
 * @param func - Function to debounce.
 * @param threshold - The delay to avoid recalling the function.
 * @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
 */
// export function debounce<T extends (...args: any[]) => any>(func: T, threshold: number, execAsap = false): T {
//     let timeout: any;

//     return function debounced(this: any, ...args: any[]): any {
//         const self = this;

//         if (timeout) clearTimeout(timeout);
//         else if (execAsap) func.apply(self, args);

//         timeout = setTimeout(delayed, threshold || 100);

//         function delayed(): void {
//             if (!execAsap) func.apply(self, args);
//             timeout = null;
//         }
//     } as T;
// }

/**
 * Reduce calls to the passed function.
 *
 * @param func - Function to debounce.
 * @param timeout - The delay to avoid recalling the function.
 */
export function debounce<T extends (...args: any[]) => void>(func: T, timeout = 300): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
  
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  