/** AllOrNothing<T> makes all properties of T optional, but if all properties are
 * undefined, then it returns undefined. This is useful for making all props of
 * an input optional, but if all props are undefined, then the input is undefined.
 * 
 * In this case we want value, and onChange to be optional, but if you define
 * one you must define the other.
*/
export type AllOrNothing<T extends object> = T | ToUndefinedObject<T>;
type ToUndefinedObject<T extends object> = Partial<Record<keyof T, undefined>>;
