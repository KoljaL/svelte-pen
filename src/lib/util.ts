/**
 * Reduce calls to the passed function.
 *
 * @param fn The function to be debounced.
 * @param delay The time to wait before calling the function.
 * @returns A debounced function.
 * @example const debounced = debounce(() => console.log('Hello, World!'), 300);
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
	this: ThisParameterType<T>,
	fn: T,
	delay = 300
) {
	let timer: ReturnType<typeof setTimeout> | undefined;
	return (...args: Parameters<T>) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), delay);
	};
}
