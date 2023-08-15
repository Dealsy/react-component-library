/**
 * AllOrNothing<T> makes all properties of T optional, but if all properties are
 * undefined, then it returns undefined.
 */
export type AllOrNothing<T extends object> = T | ToUndefinedObject<T>
type ToUndefinedObject<T extends object> = Partial<Record<keyof T, undefined>>
